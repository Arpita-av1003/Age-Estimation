import React, { useState, useRef, useCallback } from "react";
import axios from "axios";
import Webcam from "react-webcam";

function AgeEstimator() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [age, setAge] = useState(null);
  const [loading, setLoading] = useState(false);
  const [useWebcam, setUseWebcam] = useState(false);
  const webcamRef = useRef(null);

  const dataURLtoFile = (dataurl, filename) => {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

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
      const file = dataURLtoFile(imageSrc, "webcam-capture.jpg");
      setSelectedFile(file);
      setAge(null);
      setUseWebcam(false);
    }
  }, [webcamRef]);

  const handleUpload = async () => {
    if (!selectedFile) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post("http://localhost:3001/api/estimate-age", formData);
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
    <div className="min-vh-100 dark-auth-bg py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow border-0 rounded-lg">
              <div className="card-body p-5">
                <h2 className="text-center mb-4 fw-bold">Analyze Your Photo</h2>
                <div className="btn-group mb-4 w-100 shadow-sm" role="group">
                  <button type="button" className={`btn ${!useWebcam ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setUseWebcam(false)}>
                    Upload File
                  </button>
                  <button type="button" className={`btn ${useWebcam ? "btn-primary" : "btn-outline-primary"}`} onClick={() => { setUseWebcam(true); setPreviewUrl(null); }}>
                    Use Webcam
                  </button>
                </div>
                <div className="text-center mb-4">
                  {useWebcam ? (
                    <div className="d-flex flex-column align-items-center">
                      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" className="img-fluid rounded shadow-sm border" style={{ width: "100%", maxWidth: "400px" }} />
                      <button className="btn btn-warning mt-3 w-50 fw-bold" onClick={capturePhoto}>Snap Photo</button>
                    </div>
                  ) : previewUrl ? (
                    <img src={previewUrl} className="img-fluid rounded shadow-sm border" alt="Your Upload" style={{ width: "100%", maxWidth: "400px" }} />
                  ) : (
                    <div className="p-5 border border-dashed rounded bg-light text-muted">
                      <p className="mb-0">Select an image to see the preview</p>
                    </div>
                  )}
                </div>
                {!useWebcam && <input type="file" className="form-control mb-4" onChange={handleFileChange} accept="image/*" />}
                <button className="btn btn-success btn-lg w-100 fw-bold shadow-sm" onClick={handleUpload} disabled={!selectedFile || loading || useWebcam}>
                  {loading ? "Analyzing Neural Network..." : "Estimate AI Age"}
                </button>
                {age && (
                  <div className="mt-4 p-4 bg-dark rounded shadow-lg text-center text-white">
                    <h5 className="text-muted mb-2">The AI Thinks You Look...</h5>
                    <h1 className="display-4 fw-bold text-primary">{age} <span className="fs-3 text-white">Years Old</span></h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgeEstimator;