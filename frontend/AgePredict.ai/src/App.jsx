import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import AgeEstimator from "./components/AgeEstimator";
import TermsPage from "./components/TermsPage";
import UserReview from "./components/UserReview";
import ProtectedRoute from "./components/ProtectedRoute";

const MainLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </div>
  );
};

const WorkspaceLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column vh-100 overflow-hidden dashboard-dark-bg">
      <Navbar />
      <main className="flex-grow-1 overflow-auto hide-scrollbar">{children}</main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>


        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />


        <Route path="/" element={<MainLayout><LandingPage /></MainLayout>} />
        <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
       <Route path="/app" element={<ProtectedRoute><WorkspaceLayout><AgeEstimator /></WorkspaceLayout></ProtectedRoute>} />
       <Route path="/app" element={<ProtectedRoute><WorkspaceLayout><AgeEstimator /></WorkspaceLayout></ProtectedRoute>} />
        <Route path="/terms" element={<MainLayout><TermsPage /></MainLayout>} />
        <Route path="/reviews" element={<MainLayout><UserReview /></MainLayout>} />

      </Routes>
    </Router>
  );
}

export default App;