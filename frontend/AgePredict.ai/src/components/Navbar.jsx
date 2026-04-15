import React from "react";
import { Link } from "react-router-dom";
import myLogo from "../assets/logo.png"; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm text-secondary bg-light sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img src={myLogo} alt="Logo" width="25" height="25" className="d-inline-block align-top me-2 rounded" />
          AgePredict.ai
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item me-2"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item me-3"><Link className="btn btn-primary btn-sm px-3 rounded-pill" to="/signup">Sign Up</Link></li>
            <li className="nav-item border-start border-secondary ps-3"><Link className="btn btn-outline-light btn-sm px-3 rounded-pill" to="/app">Try for Free</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;