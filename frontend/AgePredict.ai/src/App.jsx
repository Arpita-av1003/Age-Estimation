import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Your imports...
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

// 1. Create a layout wrapper for pages that SHOULD have the Nav and Footer
const MainLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        
        {/* ========================================= */}
        {/* PAGES WITHOUT NAV & FOOTER (Standalone)   */}
        {/* ========================================= */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* ========================================= */}
        {/* PAGES WITH NAV & FOOTER                   */}
        {/* ========================================= */}
        <Route path="/" element={<MainLayout><LandingPage /></MainLayout>} />
        <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
        
        <Route path="/app" element={<MainLayout><AgeEstimator /></MainLayout>} />
        <Route path="/terms" element={<MainLayout><TermsPage /></MainLayout>} />
        <Route path="/reviews" element={<MainLayout><UserReview /></MainLayout>} />

      </Routes>
    </Router>
  );
}

export default App;