import React from "react";
import { useNavigate } from "react-router-dom";
import heroimg from '../assets/herosec.png'

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-dark text-white min-vh-100">
      
      {/* ========================================== */}
      {/* HERO SECTION */}
      {/* ========================================== */}
      <section className="bg-dark text-center px-3 py-5">
        <div className="container" style={{ maxWidth: "1000px" }}>

          <h1 className="display-3 fw-bold mb-4 tracking-tight ">
            Predict your true biological age with <span className="text-gradient-cyan">Neural Networks</span>
          </h1>
          
          <p className="lead text-white mb-5 px-md-5">
            Upload a photo and let our model analyze microscopic facial features to estimate your approximate age in seconds. 100% private and secure.
          </p>

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <button 
              onClick={() => navigate("/signup")} 
              className="btn btn-cyan btn-lg px-5 py-3 fw-bold rounded shadow d-flex align-items-center justify-content-center"
            >
              Get Started For Free
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
            </button>
          </div>

          <p className="text-muted small mt-4">No credit card required. Free forever tier available.</p>
        </div>
      </section>

      {/* Feature */}
      
      <section className="py-5 bg-dark">
        <div className="container py-5">
          <div id="featuresCarousel" className="carousel slide carousel-fade px-md-5 border-2 p-6" data-bs-ride="carousel" data-bs-interval="4000">
            
            {/* Carousel Indicators (The dots at the bottom) */}
            <div className="carousel-indicators custom-carousel-indicators mb-0" style={{ bottom: "-40px" }}>
              <button type="button" data-bs-target="#featuresCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#featuresCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#featuresCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            {/* The Slides */}
            <div className="carousel-inner pb-4">
              
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="feature-card carousel-feature-card p-5 mx-auto text-center">
                  <div className="icon-box mx-auto mb-4" style={{ width: "80px", height: "80px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#4ae5d0" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3.5a.5.5 0 0 1-.5-.5v-3.5A.5.5 0 0 1 8 4z"/></svg>
                  </div>
                  <h4 className="fw-bold mb-3 text-white">Instant Results</h4>
                  <p className="text-muted mb-0 fs-5">Our distributed GPU network processes your image and returns a highly accurate age estimation in under 3 seconds.</p>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="feature-card carousel-feature-card p-5 mx-auto text-center border-cyan">
                  <div className="icon-box mx-auto mb-4" style={{ width: "80px", height: "80px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#4ae5d0" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm2-3a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"/><path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/></svg>
                  </div>
                  <h4 className="fw-bold mb-3 text-white">High Precision</h4>
                  <p className="text-muted mb-0 fs-5">Trained on a diverse dataset of over 2 million faces, our neural network recognizes subtle markers of aging invisible to the human eye.</p>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <div className="feature-card carousel-feature-card p-5 mx-auto text-center">
                  <div className="icon-box mx-auto mb-4" style={{ width: "80px", height: "80px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#4ae5d0" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg>
                  </div>
                  <h4 className="fw-bold mb-3 text-white">Zero Data Retention</h4>
                  <p className="text-muted mb-0 fs-5">Privacy is paramount. Images are analyzed in-memory and instantly deleted. We never store, share, or train models on your personal photos.</p>
                </div>
              </div>

            </div>

            {/* Carousel Controls (Left/Right Arrows) */}
            <button className="carousel-control-prev" type="button" data-bs-target="#featuresCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#featuresCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* BOTTOM CALL TO ACTION */}
      {/* ========================================== */}
      <section className="py-5" style={{ backgroundColor: "#0f0c29" }}>
        <div className="container py-5 text-center">
          <h2 className="fw-bold mb-4">Ready to test the AI?</h2>
          <button 
            onClick={() => navigate("/signup")} 
            className="btn btn-custom-purple btn-lg px-5 py-3 fw-bold rounded shadow"
          >
            Create Your Free Account
          </button>
        </div>
      </section>

    </div>
  );
}

export default LandingPage;