import React, { useState, useRef, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import Webcam from "react-webcam";
import "bootstrap/dist/css/bootstrap.min.css";
import myLogo from "./logo.png";
import googleLogo from "./google.png";
import "./App.css"
// ==========================================
// 1. NAVBAR COMPONENT
// ==========================================
function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm text-secondary bg-light sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img
            src={myLogo}
            alt="Logo"
            width="25"
            height="25"
            className="d-inline-block align-top me-2 rounded"
          />
          AgePredict.ai
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item me-2">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link
                className="btn btn-primary btn-sm px-3 rounded-pill"
                to="/signup"
              >
                Sign Up
              </Link>
            </li>
            <li className="nav-item border-start border-secondary ps-3">
              <Link
                className="btn btn-outline-light btn-sm px-3 rounded-pill"
                to="/app"
              >
                Try for Free
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// ==========================================
// 2.ABOUT US PAGE
// ==========================================
function AboutPage() {
  return (
    <div className=" bg-light py-5">
      <div className="container ">
        <div className="row justify-content-center text-center bg-custom-blue text-white m-0">
          <div className="container-fluid">
            <div className="p-5 ">
            <h1 className="display-4 fw-bold mb-3">About AgePredict.ai</h1>
            <p className="lead text-light">
              AgePredict.ai is an age estimation tool that uses
              advanced computer vision algorithms 
              to predict the approximate age.Age 
              estimation is crucial for enhancing
              
               online safety, ensuring regulatory compliance, and automating age verification without the friction of traditional ID checks.The growning need for age estimation in the digital age is undeniable. What started as a shared vision has grown into a powerful tool for businesses, governments, and individuals.
            </p>
          </div>
          </div>

        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm p-4">
              <h3 className="fw-bold text-primary">Our Mission</h3>
              <p>
                We built AgeReveal to demonstrate the power of deep learning
                Convolutional Neural Networks (CNNs). By analyzing thousands of
                facial micro-features, our AI attempts to understand how the
                human eye perceives age.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm p-4">
              <h3 className="fw-bold text-success">Privacy First</h3>
              <p>
                We believe in absolute security. The images you upload or
                capture are processed instantly in memory and are{" "}
                <strong>never</strong> saved to our databases or used to train
                future models. Once the age is estimated, the photo is deleted
                forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. NEW: CONTACT PAGE
// ==========================================
function ContactPage() {
  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow border-0 rounded-lg p-5">
              <h2 className="fw-bold text-center mb-4">Get in Touch</h2>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark w-100 py-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. NEW: LOGIN & SIGNUP PAGES
// ==========================================
function LoginPage() {
  return (
    <div className=" bg-light d-flex align-items-center justify-content-center py-5">
      <div
        className="card shadow-md border-0 rounded-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="card-body p-5">
          <img
            className="d-block mx-auto mb-2"
            src={myLogo}
            alt="Logo"
            width="30"
            height="24"
          />
          <h2 className="fw-bold text-center fs-5">Welcome Back!</h2>
          <div className="text-center ">
            <p className="text-muted">
              Don't have an account?{" "}
              <Link to="/signup" className="text-decoration-none fw-bold">
                Sign Up
              </Link>
            </p>
          </div>
          <button className="btn bg-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center fw-bold shadow-sm">
            <img
              src={googleLogo}
              alt="Google Logo"
              width="20"
              height="20"
              className="me-2"
            />
            Continue with Google
          </button>
          <div className="d-flex align-items-center my-4">
            <hr className="flex-grow-1 text-muted" />
            <span className="mx-3 text-muted small fw-bold">OR</span>
            <hr className="flex-grow-1 text-muted" />
          </div>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2 mb-3">
              Log In
            </button>
          </form>
          <Link className="text-center  nav-link text-primary" to="#">
            Forget Password?
          </Link>
        </div>
      </div>
    </div>
  );
}

function SignupPage() {
  return (
    <div className=" bg-light d-flex align-items-center justify-content-center py-4">
      <div
        className="card shadow-md border-0 rounded-lg"
        style={{ maxWidth: "450px", width: "100%" }}
      >
        <div className="card-body p-5">
          <img
            className="d-block mx-auto mb-2"
            src={myLogo}
            alt="Logo"
            width="30"
            height="24"
          />
          <h2 className="fw-bold text-center fs-5 mb-2">Seconds to sign up!</h2>
          <div className="text-center mb-3 ">
            <p className="text-muted">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none fw-bold">
                Sign in
              </Link>
            </p>
          </div>
          <button className="btn bg-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center fw-bold shadow-sm">
            <img
              src={googleLogo}
              alt="Google Logo"
              width="20"
              height="20"
              className="me-2"
            />
            Continue with Google
          </button>
          <div className="d-flex align-items-center my-4">
            <hr className="flex-grow-1 text-muted" />
            <span className="mx-3 text-muted small fw-bold">OR</span>
            <hr className="flex-grow-1 text-muted" />
          </div>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control"
                placeholder="Create a password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2 mb-3">
              Sign Up
            </button>
          </form>
          <div className="text-center">
           <a href="#" class="text-decoration-none">Need help?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 5. ORIGINAL LANDING PAGE
// ==========================================
function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-vh-100 bg-dark text-white d-flex flex-column align-items-center justify-content-center text-center px-3">
      <h1 className="display-2 fw-bold mb-4">
        Discover Your <span className="text-primary">AI Age</span>
      </h1>
      <p className="lead mb-5 w-50" style={{ minWidth: "300px" }}>
        Curious how old you actually look? Our secure, state-of-the-art neural
        network analyzes your facial features to estimate your apparent age in
        seconds.
      </p>
      <button
        className="btn btn-primary btn-lg px-5 py-3 fs-4 shadow rounded-pill"
        onClick={() => navigate("/app")}
      >
        Get Started For Free
      </button>
    </div>
  );
}

// ==========================================
// 6. ORIGINAL AI TOOL COMPONENT
// ==========================================
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
      const response = await axios.post(
        "http://localhost:3001/api/estimate-age",
        formData,
      );
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
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow border-0 rounded-lg">
              <div className="card-body p-5">
                <h2 className="text-center mb-4 fw-bold">Analyze Your Photo</h2>
                <div className="btn-group mb-4 w-100 shadow-sm" role="group">
                  <button
                    type="button"
                    className={`btn ${!useWebcam ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => setUseWebcam(false)}
                  >
                    Upload File
                  </button>
                  <button
                    type="button"
                    className={`btn ${useWebcam ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => {
                      setUseWebcam(true);
                      setPreviewUrl(null);
                    }}
                  >
                    Use Webcam
                  </button>
                </div>
                <div className="text-center mb-4">
                  {useWebcam ? (
                    <div className="d-flex flex-column align-items-center">
                      <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        className="img-fluid rounded shadow-sm border"
                        style={{ width: "100%", maxWidth: "400px" }}
                      />
                      <button
                        className="btn btn-warning mt-3 w-50 fw-bold"
                        onClick={capturePhoto}
                      >
                        📸 Snap Photo
                      </button>
                    </div>
                  ) : previewUrl ? (
                    <img
                      src={previewUrl}
                      className="img-fluid rounded shadow-sm border"
                      alt="Your Upload"
                      style={{ width: "100%", maxWidth: "400px" }}
                    />
                  ) : (
                    <div className="p-5 border border-dashed rounded bg-light text-muted">
                      <p className="mb-0">Select an image to see the preview</p>
                    </div>
                  )}
                </div>
                {!useWebcam && (
                  <input
                    type="file"
                    className="form-control mb-4"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                )}
                <button
                  className="btn btn-success btn-lg w-100 fw-bold shadow-sm"
                  onClick={handleUpload}
                  disabled={!selectedFile || loading || useWebcam}
                >
                  {loading ? "Analyzing Neural Network..." : "Estimate AI Age"}
                </button>
                {age && (
                  <div className="mt-4 p-4 bg-dark rounded shadow-lg text-center text-white">
                    <h5 className="text-muted mb-2">
                      The AI Thinks You Look...
                    </h5>
                    <h1 className="display-4 fw-bold text-primary">
                      {age} <span className="fs-3 text-white">Years Old</span>
                    </h1>
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

// ==========================================
// 7. MAIN ROUTER CONFIGURATION
// ==========================================
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* These Routes decide which component to show based on the URL */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/app" element={<AgeEstimator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
