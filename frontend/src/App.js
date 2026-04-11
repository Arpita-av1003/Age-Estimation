import React, { useState, useRef, useCallback } from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [age, setAge] = useState(null);
  const [loading, setLoading] = useState(false);
  const [useWebcam, setUseWebcam] = useState(false);

  const webcamRef = useRef(null);

  const dataURLtoFile = (dataurl, filename) => {
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){ u8arr[n] = bstr.charCodeAt(n); }
    return new File([u8arr], filename, {type:mime});
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setAge(null);
      setUseWebcam(false);
    }
  };

  const capturePhoto = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      setPreviewUrl(imageSrc);
      const file = dataURLtoFile(imageSrc, 'webcam-capture.jpg');
      setSelectedFile(file);
      setAge(null);
      setUseWebcam(false);
    }
  }, [webcamRef]);

  const handleUpload = async () => {
    if (!selectedFile) return;
    
    setLoading(true);
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('http://localhost:3001/api/estimate-age', formData);
      setAge(response.data.age);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert("Something went wrong analyzing the image.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="head-content py-5 bg-dark text-white min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-3 fw-bold mb-3">How Old Do You Actually Look?</h1>
              <p className="lead mb-4">Instantly Estimate Your Age Using Secure AI</p>
              
              <div className="btn-group mb-4 w-100" role="group">
                <button type="button" className={`btn ${!useWebcam ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setUseWebcam(false)}>
                  Upload File
                </button>
                <button type="button" className={`btn ${useWebcam ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => { setUseWebcam(true); setPreviewUrl(null); }}>
                  Use Webcam
                </button>
              </div>
              
              {!useWebcam && (
                <input type="file" className="form-control mb-4" onChange={handleFileChange} accept="image/*" />
              )}
              
              <button 
                className="btn btn-success btn-lg w-100" 
                onClick={handleUpload} 
                disabled={!selectedFile || loading || useWebcam}
              >
                {loading ? 'Analyzing...' : 'Estimate Age'}
              </button>

              {age && (
                <div className="mt-4 p-3 bg-primary rounded shadow text-center">
                  <h2>Estimated Age: {age}</h2>
                </div>
              )}
            </div>

            <div className="col-lg-6 text-center">
              {useWebcam ? (
                <div className="d-flex flex-column align-items-center">
                  <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" className="img-fluid rounded shadow-lg border border-primary" style={{ width: '100%', maxWidth: '500px' }} />
                  <button className="btn btn-warning mt-3 w-50" onClick={capturePhoto}>📸 Snap Photo</button>
                </div>
              ) : previewUrl ? (
                <img src={previewUrl} className="img-fluid rounded shadow-lg border border-secondary" alt="Your Upload" style={{ width: '100%', maxWidth: '500px' }} />
              ) : (
                <div className="p-5 border border-secondary rounded shadow-lg text-muted">
                  Image Preview Will Appear Here
                </div>
              )}
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;