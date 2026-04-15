import React from "react";
import { Link } from "react-router-dom";
import myLogo from "../assets/logo.png";
import googleLogo from "../assets/google.png";

function LoginPage() {
  return (
    <div className="bg-light d-flex align-items-center justify-content-center py-5">
      <div className="card shadow-md border-0 rounded-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body p-5">
          <img className="d-block mx-auto mb-2" src={myLogo} alt="Logo" width="30" height="24" />
          <h2 className="fw-bold text-center fs-5">Welcome Back!</h2>
          <div className="text-center">
            <p className="text-muted">
              Don't have an account? <Link to="/signup" className="text-decoration-none fw-bold">Sign Up</Link>
            </p>
          </div>
          <button className="btn bg-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center fw-bold shadow-sm">
            <img src={googleLogo} alt="Google Logo" width="20" height="20" className="me-2" />
            Continue with Google
          </button>
          <div className="d-flex align-items-center my-4">
            <hr className="flex-grow-1 text-muted" />
            <span className="mx-3 text-muted small fw-bold">OR</span>
            <hr className="flex-grow-1 text-muted" />
          </div>
          <form>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <input type="password" className="form-control" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2 mb-3">Log In</button>
          </form>
          <Link className="text-center nav-link text-primary" to="#">Forget Password?</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
