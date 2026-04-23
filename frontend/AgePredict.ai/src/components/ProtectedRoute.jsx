import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // 1. Look inside the browser's memory for the "token"
  const token = localStorage.getItem("token");
  
  // 2. If the token exists, they are authenticated (true). If it is null, they are not (false).
  const isAuthenticated = !!token; 

  if (!isAuthenticated) {
    // If they don't have a token, bounce them to the login page
    return <Navigate to="/login" replace />;
  }

  // If they DO have a token, let them into the Age Estimator tool!
  return children;
}

export default ProtectedRoute;