import React from "react";
import { Link,NavLink } from "react-router-dom";
import myLogo from "../assets/logo.png"; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm text-secondary navbar-dark glass-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center text-info" to="/">
          <img src={myLogo} alt="Logo" width="25" height="25" className="d-inline-block align-top me-2 rounded" />
          AgePredict.ai
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item me-2"><NavLink className="nav-link" to="/login">Login</NavLink></li>
            <li className="nav-item me-3"><NavLink className="nav-link" to="/signup">Sign Up</NavLink></li>

            <li className="nav-item border-start border-secondary ps-3"><Link className="btn btn-info btn-sm px-3 rounded" to="/app">Try for Free</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;