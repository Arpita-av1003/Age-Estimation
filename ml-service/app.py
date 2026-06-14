from flask import Flask, request, jsonify
import os

# TensorFlow settings (must be before importing DeepFace)
os.environ["TF_ENABLE_ONEDNN_OPTS"] = "0"
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"
os.environ["CUDA_VISIBLE_DEVICES"] = "-1"

from deepface import DeepFace
import tensorflow as tf
import gc

app = Flask(__name__)


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "status": "running",
        "message": "Age Estimation ML Service is live"
    })


@app.route("/predict", methods=["POST"])
def predict_age():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    temp_path = "temp_image.jpg"

    try:
        # Save uploaded image
        file.save(temp_path)

        # Run age prediction
        result = DeepFace.analyze(
            img_path=temp_path,
            actions=["age"],
            enforce_detection=False,
            silent=True
        )

        estimated_age = result[0]["age"]

        return jsonify({
            "estimated_age": estimated_age
        })

    except Exception as e:
        print("CRASH REPORT:", str(e))
        return jsonify({
            "error": str(e)
        }), 500

    finally:
        # Always clean up temporary file and memory
        if os.path.exists(temp_path):
            os.remove(temp_path)

        gc.collect()
        tf.keras.backend.clear_session()


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)