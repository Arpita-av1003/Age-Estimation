from flask import Flask, request, jsonify
from deepface import DeepFace
import os
import tensorflow as tf


os.environ["TF_ENABLE_ONEDNN_OPTS"] = "0"

app = Flask(__name__)

print("\nLoading AI Brain (VGG-Face)...")
model_name = "VGG-Face"
DeepFace.build_model(model_name)
print("AI Brain is ready.\n")

@app.route('/predict', methods=['POST'])
def predict_age():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
        
    file = request.files['file']
    temp_path = "temp_image.jpg"
    file.save(temp_path)
    
    try:
        result = DeepFace.analyze(
            img_path=temp_path, 
            actions=['age'], 
            enforce_detection=False
        )
        estimated_age = result[0]['age']
        
        if os.path.exists(temp_path):
            os.remove(temp_path) 
        
        return jsonify({'estimated_age': estimated_age})
        
    except Exception as e:
        if os.path.exists(temp_path):
            os.remove(temp_path)
            
        print(f"CRASH REPORT: {str(e)}") 
        return jsonify({'error': f"SYSTEM ERROR: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(port=5000, host='0.0.0.0')