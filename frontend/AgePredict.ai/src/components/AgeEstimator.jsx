import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import axios from "axios"; 

function AgeEstimator() {
  const [activeTab, setActiveTab] = useState("upload");
  const [imageSrc, setImageSrc] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    setResult(null);
  }, [webcamRef]);

 const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        const MAX_WIDTH = 640;
        const MAX_HEIGHT = 640;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

  
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        
        ctx.drawImage(img, 0, 0, width, height);
        const compressedBase64 = canvas.toDataURL("image/jpeg", 0.8);

        setImageSrc(compressedBase64);
        setResult(null);
      };
    };
    
    reader.readAsDataURL(file);
  };

  const retake = () => {
    setImageSrc(null);
    setResult(null);
  };

  // REAL API INTEGRATION
  const analyzeFace = async () => {
    if (!imageSrc) {
      alert("Please capture or upload an image first.");
      return;
    }

    setIsAnalyzing(true);
    setResult(null); 

    try {
      const token = localStorage.getItem("token");
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await axios.post(
        `${API_URL}/api/analyze`,
        { imageBase64: imageSrc },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setResult({
        age: response.data.estimated_age || response.data.age,
        confidence: response.data.confidence_score || response.data.confidence,
      });
    } catch (error) {
      console.error("AI Processing Error:", error);
      alert(
        error.response?.data?.error || "Failed to connect to the Node backend.",
      );
    } finally {
      setIsAnalyzing(false); 
    }
  };

  const videoConstraints = {
    width: 640, 
    height: 480,
    facingMode: "user",
  };
  return (
    <div className="dashboard-dark-bg h-100 d-flex flex-column justify-content-center">
      <div className="container ">
        <div className="mb-3 mt-2">
          <h2 className="fw-bold text-white mb-1">Age Prediction:</h2>
          <p className="text-white small">
            Upload an image or use webcam to run the neural network.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="dark-panel overflow-hidden h-100 border border-4">
              <div className="d-flex">
                <button
                  className={`btn w-50 py-3 rounded-0 fw-bold border dark-tab ${activeTab === "upload" ? "active" : ""}`}
                  onClick={() => {
                    setActiveTab("upload");
                    retake();
                  }}
                >
                  {" "}
                  Upload Photo
                </button>
                <button
                  className={`btn w-50 py-3 rounded-0 fw-bold border dark-tab ${activeTab === "webcam" ? "active" : ""}`}
                  onClick={() => {
                    setActiveTab("webcam");
                    retake();
                  }}
                >
                  {" "}
                  Live Camera
                </button>
              </div>

              <div className="p-4 p-md-5">
                <div
                  className={`ai-scanner-box-dark rounded-4 p-2 mb-4 d-flex align-items-center justify-content-center position-relative ${isAnalyzing ? "ai-analyzing" : ""}`}
                >
                  {imageSrc ? (
                    <div className="position-relative w-100 h-100 text-center d-flex justify-content-center align-items-center">
                      <img
                        src={imageSrc}
                        alt="Captured"
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: "380px", objectFit: "contain" }}
                      />

                      {isAnalyzing && (
                        <div
                          className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center rounded"
                          style={{
                            backgroundColor: "rgba(20, 21, 23, 0.8)",
                            backdropFilter: "blur(4px)",
                          }}
                        >
                          <div
                            className="spinner-border text-cyan mb-3"
                            style={{ width: "3rem", height: "3rem" }}
                            role="status"
                          ></div>
                          <h5 className="text-cyan fw-bold tracking-wide animate__animated animate__pulse animate__infinite">
                            ANALYZING...
                          </h5>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-100 text-center py-5">
                      {activeTab === "upload" ? (
                        <div className="py-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            fill="#aaaeb7"
                            className="mb-3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                          </svg>
                          <h6 className="text-white fw-bold">
                            Drag & Drop Image
                          </h6>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="form-control form-control-sm bg-dark text-white border-secondary mx-auto"
                            style={{ maxWidth: "250px" }}
                          />
                        </div>
                      ) : (
                        <div className="d-flex flex-column align-items-center">
                          <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            screenshotQuality={
                              0.8
                            } /* Compress the image by 20% to save massive amounts of data */
                            videoConstraints={
                              videoConstraints
                            } /* Apply the smaller resolution */
                            className="rounded border border-secondary mb-3 w-100"
                            style={{ maxWidth: "450px" }}
                          />
                          <button
                            onClick={capture}
                            className="btn btn-outline-light rounded px-4 py-2 fw-bold"
                          >
                            Capture
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {imageSrc && !result && !isAnalyzing && (
                  <div className="d-flex gap-3 justify-content-center">
                    <button
                      onClick={retake}
                      className="btn btn-outline-secondary text-white px-4 py-2"
                    >
                      Discard
                    </button>
                    <button
                      onClick={analyzeFace}
                      className="btn btn-cyan px-5 py-2 fw-bold text-dark d-flex align-items-center"
                    >
                      Run
                    </button>
                  </div>
                )}

                {result && (
                  <div className="text-center mt-4 animate__animated animate__fadeInUp">
                    <h5 className="text-muted small text-uppercase letter-spacing-1 mb-2">
                      Predicted Age:
                    </h5>
                    <h1 className="display-2 fw-bold text-cyan mb-0">
                      {result.age}
                    </h1>
                    <p className="text-success small fw-bold mt-2">
                      Model Confidence: {result.confidence}
                    </p>

                    <button
                      onClick={retake}
                      className="btn btn-outline-secondary btn-sm text-white mt-3 px-4"
                    >
                      Scan New Face
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="dark-panel p-4 mb-4 border-start border-end border-2">
              <h6 className="text-white fw-bold mb-3 d-flex align-items-center">
                For Best Results
              </h6>
              <ul
                className="list-dot text-white small mb-0"
                style={{ lineHeight: "1.8" }}
              >
                <li className="mb-2">Ensure the proper lighting.</li>
                <li className="mb-2">Look directly into the camera lens.</li>
                <li>Keep a neutral expression on the face.</li>
              </ul>
            </div>

            <div className="dark-panel p-4 border-start border-end border-cyan border-2">
              <h6 className="text-white fw-bold mb-3 d-flex align-items-center">
                Privacy Guarantee
              </h6>
              <p
                className="text-white small mb-0"
                style={{ lineHeight: "1.6" }}
              >
                Your data is safe. Images are processed directly in memory by
                our AI models and are <strong>never</strong> saved, stored, or
                used to train future datasets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgeEstimator;
