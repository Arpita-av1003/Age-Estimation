import React from "react";
import { Link } from "react-router-dom";
import myLogo from "../assets/logo.png";
import googleLogo from "../assets/google.png";

function SignupPage() {
  return (
    <div className="dark-auth-bg d-flex align-items-center justify-content-center py-4">
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
          <form>
            <div className="mb-3">
              <input type="text" className="form-control dark-auth-input" placeholder="Full name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control dark-auth-input" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <input type="password" className="form-control dark-auth-input" placeholder="Create a password" />
            </div>
            <button type="submit" className="btn btn-info w-100 py-2 mb-3">Sign Up</button>
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