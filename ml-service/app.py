from flask import Flask, request, jsonify
from deepface import DeepFace
import os

os.environ["TF_ENABLE_ONEDNN_OPTS"] = "0"

app = Flask(__name__)


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "status": "running",
        "message": "Age Estimation ML Service is live"
    })


@app.route('/predict', methods=['POST'])
def predict_age():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    temp_path = "temp_image.jpg"

    try:
        file.save(temp_path)

        result = DeepFace.analyze(
            img_path=temp_path,
            actions=['age'],
            enforce_detection=False
        )

        estimated_age = result[0]['age']

        return jsonify({
            'estimated_age': estimated_age
        })

    except Exception as e:
        print(f"CRASH REPORT: {str(e)}")
        return jsonify({
            'error': str(e)
        }), 500

    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)