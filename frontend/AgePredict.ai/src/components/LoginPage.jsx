import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import myLogo from "../assets/logo.png";
import googleLogo from "../assets/google.png";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${API_URL}/api/login`, formData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userName", response.data.name); 

      navigate("/app");

    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error); 
      } else {
        setError("Could not connect to the server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="theme-navy-bg d-flex align-items-center justify-content-center py-5">
      <div className="card dark-auth-card shadow-lg border-0 rounded-lg" style={{ maxWidth: "450px", width: "100%" }}>
        <div className="card-body p-5">
          <img className="d-block mx-auto mb-2" src={myLogo} alt="Logo" width="30" height="24" />
          <h2 className="fw-bold text-white text-center fs-5">Welcome Back!</h2>
          <div className="text-center">
            <p className="text-white">
              Don't have an account? <Link to="/signup" className="text-info text-decoration-none fw-bold">Sign Up</Link>
            </p>
          </div>
          
          <button type="button" className="btn btn-outline-secondary text-white w-100 py-2 d-flex align-items-center justify-content-center mb-4 border-secondary rounded">
            <img src={googleLogo} alt="Google Logo" width="20" height="20" className="me-2" />
            Continue with Google
          </button>
          
          <div className="d-flex align-items-center mb-4">
            <hr className="flex-grow-1 border-secondary" />
            <span className="mx-3 text-white fs-5 small">or</span>
            <hr className="flex-grow-1 border-secondary" />
          </div>

          {/* RE-WIRED: Display Error Message if login fails */}
          {error && <div className="alert alert-danger py-2 small fw-bold text-center">{error}</div>}

          {/* RE-WIRED: Added onSubmit to form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              {/* RE-WIRED: Added name, value, and onChange */}
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control dark-auth-input py-2" 
                placeholder="Email" 
                required 
              />
            </div>
            <div className="mb-2 position-relative">
              {/* RE-WIRED: Added name, value, and onChange */}
              <input 
                type={showPassword ? "text" : "password"} 
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control dark-auth-input py-2 pe-5" 
                placeholder="Password" 
                required 
              />
          
              <span 
                className="position-absolute top-50 end-0 translate-middle-y pe-3 text-muted" 
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755l.192.195z"/><path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/><path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/></svg>
                )}
              </span>
            </div>

            {/* RE-WIRED: Added loading state prevention */}
            <button 
              type="submit" 
              className="btn btn-info w-100 py-2 mb-4 rounded d-flex justify-content-center align-items-center"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Continue"} 
              {!loading && <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="ms-2" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>}
            </button>
          </form>

          <Link className="text-center nav-link text-info" to="#">Forget Password?</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;