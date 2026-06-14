import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import myLogo from "../assets/logo.png";
import googleLogo from "../assets/google.png";

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
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
      const response = await axios.post(`${API_URL}/api/signup`, formData);
      alert(response.data.message);
      navigate("/login");

    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Something went wrong connecting to the server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="theme-navy-bg d-flex align-items-center justify-content-center py-4">
      <div className="dark-auth-card card shadow-lg border-0 rounded-lg" style={{ maxWidth: "450px", width: "100%" }}>
        <div className="card-body p-5">
          <img className="d-block mx-auto mb-2" src={myLogo} alt="Logo" width="30" height="24" />
          <h2 className="fw-bold text-white text-center fs-5 mb-2">Seconds to sign up!</h2>
          
          <div className="text-center mb-3">
            <p className="text-white">
              Already have an account? <Link to="/login" className="text-decoration-none text-info fw-bold">Sign in</Link>
            </p>
          </div>
          
          <button className="btn btn-outline-secondary text-white w-100 py-2 d-flex align-items-center justify-content-center mb-4 border-secondary rounded">
            <img src={googleLogo} alt="Google Logo" width="20" height="20" className="me-2" />
            Continue with Google
          </button>
          
          <div className="d-flex align-items-center mb-4">
            <hr className="flex-grow-1 border-secondary" />
            <span className="mx-3 text-white fs-5 small">or</span>
            <hr className="flex-grow-1 border-secondary" />
          </div>

          {error && <div className="alert alert-danger py-2 small fw-bold text-center">{error}</div>}

      
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control dark-auth-input" 
                placeholder="Full name" 
                required 
              />
            </div>
            <div className="mb-3">
           
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control dark-auth-input" 
                placeholder="Enter your email" 
                required 
              />
            </div>
            <div className="mb-4">
        
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control dark-auth-input" 
                placeholder="Create a password" 
                required 
              />
            </div>
         
            <button 
              type="submit" 
              className="btn btn-info w-100 py-2 mb-3"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>
          
          <div className="text-center">
            <a href="#" className="text-decoration-none text-info">Need help?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;