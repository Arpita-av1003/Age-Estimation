import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-vh-100 bg-dark text-white d-flex flex-column align-items-center justify-content-center text-center px-3">
      <h1 className="display-2 fw-bold mb-4">
        Discover Your <span className="text-primary">AI Age</span>
      </h1>
      <p className="lead mb-5 w-50" style={{ minWidth: "300px" }}>
        Curious how old you actually look? Our secure, state-of-the-art neural
        network analyzes your facial features to estimate your apparent age in seconds.
      </p>
      <button className="btn btn-primary btn-lg px-5 py-3 fs-4 shadow rounded-pill" onClick={() => navigate("/app")}>
        Get Started For Free
      </button>
    </div>
  );
}

export default LandingPage;