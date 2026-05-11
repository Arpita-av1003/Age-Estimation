import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import arpitaImg from "../assets/Arpita.jpeg";
import sakshi from "../assets/Sakshiimg.jpeg";
import ruhanika from "../assets/Ruhanikaimg.jpeg";
import harshita from "../assets/Harshita.jpeg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-page theme-navy-bg ">
      {/* 1 */}
      <section className="hero-section py-3">
  <div className="container px-4 px-lg-5">
    <div className="row align-items-center gy-5 min-vh-100">

      {/* Left Side */}
      <div className="col-lg-6 pe-lg-5">
        <h1 className="hero-title mb-4">
          AgePredict.ai generally <br />
          provide estimations of <br />
          the real age
        </h1>

        <div className="mt-4">
          <button
            onClick={() => navigate("/signup")}
            className="btn btn-info px-4 py-3 rounded"
          >
            Create an account →
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="col-lg-6 ps-lg-5">
        <p className="hero-text mb-4">
         "The mission of AgePredict.ai is to democratize access to enterprise-grade biometric artificial intelligence. By combining a modern web interface with advanced deep learning, we aim to provide lightning-fast, highly accurate age estimation directly in the browser."
        </p>

        <p className="hero-text">
        Above all, we are committed to proving that powerful computer vision tools can be deployed ethically, prioritizing user privacy and data ownership over surveillance and storage."
        </p>
      </div>

    </div>
  </div>
</section>
{/* 2 */}
<section className="py-3 position-relative z-1" style={{ marginTop: "-2rem" }}>
        <div className="container">
          <div className="row g-4">
           <span className="text-primary fw-bold small text-uppercase">Our identity defined</span>
           <h1 className='fw-5 font-bold'>“Security is the priority”</h1>
            <div className="col-lg-3 col-md-6">
              <div className="feature-card-navy">
                <h5 className="fw-bold mb-3 fs-6">"Zero Data Retention" Image Processing</h5>
                <p className="text-white-50 small mb-4">Your system is strictly limited from saving user photos.When a user uploads a photo or uses the webcam, the image is converted into a Base64 text string.</p>
                
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="feature-card-navy">
                <h5 className="fw-bold mb-3 fs-6">Cryptographic Password Protection</h5>
                <p className="text-white-50 small mb-4">Using the bcrypt algorithm with a cost factor of 10, all passwords are mathematically scrambled before hitting the database.</p>
             
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="feature-card-navy">
                <h5 className="fw-bold mb-3 fs-6">Stateless Security (JWT)</h5>
                <p className="text-white-50 small mb-4">Your system uses JSON Web Tokens (JWT) that expire after 24 hours. The token is stored locally on the user's device, not on your server, meaning you are not hoarding vulnerable session data.</p>
                
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="feature-card-navy">
                <h5 className="fw-bold mb-3 fs-6">Edge-Device Compression</h5>
                <p className="text-white-50 small mb-4">Because we implemented HTML5 Canvas compression on the frontend, images are shrunk and compressed to 80% quality before they leave the user's device. This protects your server from crashing.</p>
                
              </div>
            </div>

          </div>
        </div>
      </section>
{/* 3*/}
 <section className="py-3 position-relative my-5 z-1" style={{ marginTop: "-2rem" }}>
        <div className="container">
          <div className="row g-4">
           <span className="text-primary fw-bold small text-uppercase">A culture shaped by trust</span>
           <h1 className='fw-5 font-bold'>"Our commitment to innovations"</h1>
            <div className="col-lg-3 col-md-6">
              <div className="feature-card-navy">
                <div className="icon-box-info">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3.5a.5.5 0 0 1-.5-.5v-3.5A.5.5 0 0 1 8 4z"/></svg>
                </div>
                <h5 className="fw-bold mb-3 fs-6">Instant Results</h5>
                <p className="text-white-50 small mb-4">Get highly accurate age estimations returned in under 3 seconds using our optimized models.</p>
                
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="feature-card-navy">
                <div className="icon-box-info">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm2-3a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"/><path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/></svg>
                </div>
                <h5 className="fw-bold mb-3 fs-6">High Precision</h5>
                <p className="text-white-50 small mb-4">Trained on over 2 million diverse faces to recognize subtle markers of aging.</p>
             
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="feature-card-navy">
                <div className="icon-box-info">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg>
                </div>
                <h5 className="fw-bold mb-3 fs-6">Zero Data Kept</h5>
                <p className="text-white-50 small mb-4">Your privacy is secure. Images are analyzed in-memory and instantly deleted from our servers.</p>
                
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="feature-card-navy">
                <div className="icon-box-info">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/></svg>
                </div>
                <h5 className="fw-bold mb-3 fs-6">Mobile Ready</h5>
                <p className="text-white-50 small mb-4">Snap a photo directly from your smartphone camera or upload existing files on the go.</p>
                
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* 4 */}
      <section className="py-3 position-relative my-5 z-1" style={{ marginTop: "-2rem" }}>
  <div className="container py-5">
     <span className="text-primary fw-bold small text-uppercase mb-2">Our team</span>
    <h2 className="mb-" style={{ color: 'white', fontWeight: '700' }}>"Meet the team"</h2>
    
    <div className="row justify-content-center g-4">
      
      {/* 1 */}
    
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card border-0 bg-transparent">
          <div className="rounded overflow-hidden mb-3 mx-auto shadow-sm" style={{ backgroundColor: '#e9e8aa', aspectRatio: '1/1', width: '100%' }}>
            <img 
              src={arpitaImg}
              alt="Arpita Singh" 
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
          <h3 className="h5 text-white fw-bold mb-1">Arpita Singh</h3>
          <p className="text-white small">Frontend Developer</p>
        </div>
      </div>

      {/*  2 */}
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card border-0 bg-transparent">
          <div className="rounded overflow-hidden mb-3 mx-auto shadow-sm" style={{ backgroundColor: '#e2e8f0', aspectRatio: '1/1', width: '100%' }}>
            <img 
             src={ruhanika}
              alt="Ruhanika" 
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
          <h3 className="h5 text-white fw-bold mb-1">Ruhanika Shah</h3>
          <p className="text-white small">Data Analyst</p>
        </div>
      </div>

      {/* 3 */}
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card border-0 bg-transparent">
          <div className="rounded overflow-hidden mb-3 mx-auto shadow-sm" style={{ backgroundColor: '#dcc6ab', aspectRatio: '1/1', width: '100%' }}>
            <img 
              src={harshita}
              alt="Harshita Srivastava" 
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
          <h3 className="h5 text-white fw-bold mb-1">Harshita Srivastava</h3>
          <p className="text-white small">Backend Developer</p>
        </div>
      </div>

      {/* 4 */}
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card border-0 bg-transparent">
          <div className="rounded overflow-hidden mb-3 mx-auto shadow-sm" style={{ backgroundColor: '#c2d5c4', aspectRatio: '1/1', width: '100%' }}>
            <img 
              src={sakshi} 
              alt="Sakshi Srivastava" 
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
          <h3 className="h5 text-white fw-bold mb-1">Sakshi Srivastava</h3>
          <p className="text-white small">Lead Developer</p>
        </div>
      </div>
      
    </div>
  </div>
</section>
</div>
  );
};

export default About;