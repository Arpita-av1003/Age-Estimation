from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import os

app = Flask(__name__)
CORS(app)

# Age classes
AGE_BUCKETS = [
    "(0-2)", "(4-6)", "(8-12)", "(15-20)",
    "(25-32)", "(38-43)", "(48-53)", "(60-100)"
]

# Approximate age values
AGE_MAP = {
    "(0-2)": 1,
    "(4-6)": 5,
    "(8-12)": 10,
    "(15-20)": 18,
    "(25-32)": 28,
    "(38-43)": 40,
    "(48-53)": 50,
    "(60-100)": 70
}

MODEL_MEAN_VALUES = (78.4263377603, 87.7689143744, 114.895847746)

# Load face detector
faceProto = cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
faceCascade = cv2.CascadeClassifier(faceProto)

# Load age model
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

ageProto = os.path.join(BASE_DIR, "age_deploy.prototxt")
ageModel = os.path.join(BASE_DIR, "age_net.caffemodel")

print("Looking for:", ageProto)
print("Looking for:", ageModel)

ageNet = cv2.dnn.readNet(ageModel, ageProto)


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "status": "running",
        "message": "Lightweight Age Estimation ML Service is live"
    })


@app.route("/predict", methods=["POST"])
def predict_age():

    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]

    file_bytes = np.frombuffer(file.read(), np.uint8)
    image = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)

    if image is None:
        return jsonify({"error": "Invalid image"}), 400

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    faces = faceCascade.detectMultiScale(
        gray,
        scaleFactor=1.1,
        minNeighbors=5,
        minSize=(50, 50)
    )

    if len(faces) == 0:
        return jsonify({"error": "No face detected"}), 400

    # Use first detected face
    (x, y, w, h) = faces[0]
    face = image[y:y+h, x:x+w]

    blob = cv2.dnn.blobFromImage(
        face,
        1.0,
        (227, 227),
        MODEL_MEAN_VALUES,
        swapRB=False
    )

    ageNet.setInput(blob)
    preds = ageNet.forward()

    age_bucket = AGE_BUCKETS[preds[0].argmax()]
    estimated_age = AGE_MAP[age_bucket]

    return jsonify({
        "estimated_age": estimated_age,
        "age_range": age_bucket
    })


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)