import React from "react";
import { useNavigate } from "react-router-dom";
import step1 from "../assets/step1.png"
import step2 from "../assets/step2.png"
import step3 from "../assets/step3.png"
import step4 from "../assets/step4.png"
import step5 from "../assets/step5.png"
function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="theme-navy-bg min-vh-100 font-sans">
      {/* ========================================== */}
      {/* 1. HERO SECTION */}
      {/* ========================================== */}
      <section className="py-5 overflow-hidden">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Side: Text */}
            <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
              <h1 className="display-4 fw-bold mb-4 lh-sm">
                Predict your true biological age with{" "}
                <span className="text-gradient-cyan">Neural Networks</span>
              </h1>
              <p
                className="lead text-white-50 mb-5 fs-6"
                style={{ maxWidth: "450px" }}
              >
                Upload a photo and let our advanced machine learning models
                analyze microscopic facial features to estimate exact age in
                secon Upload a photo and let our model analyze microscopic
                facial features to estimate your approximate age in seconds.
                100% private and secure.
              </p>
              <div className="d-flex gap-3">
                <button
                  onClick={() => navigate("/signup")}
                  className="btn btn-info px-4 py-3 rounded"
                >
                  Try Now →
                </button>
                <button
                  onClick={() => navigate("/about")}
                  className="btn btn-outline-light-custom px-4 py-3 rounded"
                >
                  Find Out More
                </button>
              </div>
            </div>

            {/* Right Side: Circular Image with Floating Badge */}
            <div className="col-lg-6 position-relative">
              <div className="hero-circle-wrapper">
                {/* Replace this src with a photo of people looking at a screen */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKC9xlknvpiUPKZXpQGTxqo6Fc67sHY2mWg&s"
                  alt="Scanning girl"
                  className="hero-circle-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. 4-COLUMN FEATURE GRID */}
      {/* ========================================== */}
      <section
        className="py-3 position-relative z-1"
        style={{ marginTop: "-2rem" }}
      >
        <div className="container">
          <div className="row g-4">
            <span className="text-primary fw-bold small text-uppercase">
              Features
            </span>
            <div className="col-lg-3 col-md-6">
              <div className="feature-card-navy">
                <div className="icon-box-info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3.5a.5.5 0 0 1-.5-.5v-3.5A.5.5 0 0 1 8 4z" />
                  </svg>
                </div>
                <h5 className="fw-bold mb-3 fs-6">Instant Results</h5>
                <p className="text-white-50 small mb-4">
                  Get highly accurate age estimations returned in under 3
                  seconds using our optimized models.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="feature-card-navy">
                <div className="icon-box-info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm2-3a2 2 0 1 0-4 0 2 2 0 0 0 4 0z" />
                    <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
                  </svg>
                </div>
                <h5 className="fw-bold mb-3 fs-6">High Precision</h5>
                <p className="text-white-50 small mb-4">
                  Trained on over 2 million diverse faces to recognize subtle
                  markers of aging.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="feature-card-navy">
                <div className="icon-box-info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                  </svg>
                </div>
                <h5 className="fw-bold mb-3 fs-6">Zero Data Kept</h5>
                <p className="text-white-50 small mb-4">
                  Your privacy is secure. Images are analyzed in-memory and
                  instantly deleted from our servers.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="feature-card-navy">
                <div className="icon-box-info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                  </svg>
                </div>
                <h5 className="fw-bold mb-3 fs-6">Mobile Ready</h5>
                <p className="text-white-50 small mb-4">
                  Snap a photo directly from your smartphone camera or upload
                  existing files on the go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      {/* 3. ABOUT US SECTION*/}
      
      <section className="py-5 mt-4">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Side: Circular Image */}
            <div className="col-lg-5 mb-3 mb-lg-0">
              <div
                className="rounded-circle overflow-hidden mx-auto shadow-lg"
                style={{ width: "90%", aspectRatio: "1/1" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="working peoples"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>

            {/* Right Side: Text & Features */}
            <div className="col-lg-6 offset-lg-1">
              <span className="text-primary fw-bold small text-uppercase">
                About Us
              </span>
              <h2 className="fw-bold mb-4 mt-2 lh-sm">
                Creating the Most Accurate <br /> AI Community
              </h2>
              <p className="text-white-50 mb-5">
                Our mission is to democratize access to enterprise-grade
                computer vision. By leveraging advanced neural networks, we
                provide a seamless experience for developers and everyday users
                alike.
              </p>

              {/* The two dark "bullet point" boxes from the image */}
              <div className="d-flex flex-column gap-3 mb-5">
                <div className="d-flex align-items-center p-3 theme-navy-light rounded-3">
                  <div
                    className="icon-box-info mb-0 me-3 flex-shrink-0"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 fs-6">Flexible Processing</h6>
                    <p className="text-white-50 small mb-0">
                      Upload images from your hard drive or use your live camera
                      feed.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center p-3 theme-navy-light rounded-3">
                  <div
                    className="icon-box-info mb-0 me-3 flex-shrink-0"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 fs-6">
                      Enterprise API Available
                    </h6>
                    <p className="text-white-50 small mb-0">
                      Integrate our age estimation neural network directly into
                      your own apps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* 4. HOW IT WORKS */}
  
      <section className="py-5 position-relative z-1 ">
        <div className="container py-4">
          
          {/* gx-5 adds a nice gap between the text and the carousel columns */}
          <div className="row align-items-center gx-6">
            
            {/* Left Side: Text Description */}
            <div className="col-lg-5 mb-5 mb-lg-0 pe-lg-4">
              <span className="text-primary fw-bold small text-uppercase mb-2 d-block">
                How it works?
              </span>
              <h2 className="fw-bold mb-4 text-white lh-sm display-6">
                Precision, Privacy, and Security in every check
              </h2>
              <p className="text-white-50 mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.4" }}>
                Our face age estimation technology applies advanced AI models to analyze facial features and predict age ranges with high accuracy. 
              </p>
              <p className="text-white-50" style={{ lineHeight: "1.4" }}>
                It safeguards privacy, prevents spoofing, and supports compliance while keeping the user experience seamless and lightning-fast.
              </p>
            </div>

            {/* Right Side: The Carousel */}
            <div className="col-lg-7">
              <div className="shadow-lg rounded-4 overflow-hidden border border-secondary border-opacity-25 bg-dark">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                  
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  </div>
                  
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={step1} className="d-block w-100" alt="step1" style={{ objectFit: 'cover' }}/>
                      <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded-3 mb-2 p-3">
                        <h5 className="text-info fw-bold mb-2">Face Scanning</h5>
                        <p className="text-light mb-0 small">Face is detected on-device, then a privacy-safe facial map is created without identifying who the person is.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={step2} className="d-block w-100" alt="step2" style={{ objectFit: 'cover' }}/>
                      <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded-3 mb-2 p-3">
                        <h5 className="text-info fw-bold mb-2">Age Analysis</h5>
                        <p className="text-light mb-0 small">The model analyzes age-related facial features like skin texture and landmarks to estimate an age range, not a precise identity.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={step3} className="d-block w-100" alt="step3" style={{ objectFit: 'cover' }}/>
                      <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded-3 mb-2 p-3">
                        <h5 className="text-info fw-bold mb-2">Deepface Defences</h5>
                        <p className="text-light mb-0 small">Liveness and deepfake checks verify a real, present person, blocking replays, screen attacks, and AI‑generated faces.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={step4} className="d-block w-100" alt="step4" style={{ objectFit: 'cover' }}/>
                      <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded-3 mb-2 p-3">
                        <h5 className="text-info fw-bold mb-2">Instant compliant results</h5>
                        <p className="text-light mb-0 small">Results return instantly as an age estimate and pass/fail against region/industry-specific policy thresholds, optimized for low latency.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={step5} className="d-block w-100" alt="step5" style={{ objectFit: 'cover' }}/>
                      <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded-3 mb-2 p-3">
                        <h5 className="text-info fw-bold mb-2">Data minimization</h5>
                        <p className="text-light mb-0 small">Data minimization by design, no face templates are stored by default, and processing can run on-device or regionally to meet compliance needs.</p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* 5. FAQ SECTION */}
      <section className="py-5 position-relative z-1 mt-4 mb-5">
        <div className="container py-4">
          
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <span className="text-primary fw-bold small text-uppercase mb-2 d-block">
                Got Questions?
              </span>
              <h2 className="fw-bold mb-3 text-white lh-sm display-6">
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Bootstrap Accordion (Flush style removes outer borders) */}
              <div className="accordion accordion-flush custom-dark-accordion" id="faqAccordion">
                
                {/* FAQ Item 1 */}
                <div className="accordion-item bg-transparent border-bottom border-secondary border-opacity-25 mb-3">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed bg-transparent text-white fw-bold fs-5 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      How accurate is the age estimation?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-white-50">
                      Our ResNet-50 neural network is highly accurate under optimal conditions. However, lighting, camera angles, heavy makeup, or facial hair can affect the prediction. It is designed as an advanced estimation tool, not a replacement for legal identification.
                    </div>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="accordion-item bg-transparent border-bottom border-secondary border-opacity-25 mb-3">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed bg-transparent text-white fw-bold fs-5 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Are my photos saved on your servers?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-white-50">
                      <strong>Absolutely not.</strong> We utilize a "Zero Data Retention" architecture. Your photos are processed securely in volatile computer memory (RAM) and are instantly destroyed the millisecond the age calculation is finished.
                    </div>
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="accordion-item bg-transparent border-bottom border-secondary border-opacity-25 mb-3">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed bg-transparent text-white fw-bold fs-5 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Can the AI analyze multiple faces at once?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-white-50">
                      Currently, our MTCNN facial alignment algorithm is programmed to isolate and analyze the single most prominent (largest) face in the camera frame to ensure the highest possible accuracy and processing speed.
                    </div>
                  </div>
                </div>

                {/* FAQ Item 4 */}
                <div className="accordion-item bg-transparent border-bottom border-secondary border-opacity-25 mb-3">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed bg-transparent text-white fw-bold fs-5 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Is AgePredict.ai free to use?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-white-50">
                      Yes! The web dashboard is completely free for individual users. If you are a developer looking to integrate our age-estimation API into your own enterprise application, please contact us for commercial licensing.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
     
      {/* 5. USE CASES */}
      
      <section className="py-5 position-relative z-1 mt-4">
        <div className="container py-4">
          
          {/* Section Header */}
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <span className="text-primary fw-bold small text-uppercase mb-2 d-block">
                Real-World Applications
              </span>
              <h2 className="fw-bold mb-3 text-white lh-sm display-6">
                Empowering Industries with Age AI
              </h2>
              <p className="text-white-50">
                Our privacy-first age estimation technology integrates seamlessly into diverse business ecosystems, solving complex compliance and personalization challenges.
              </p>
            </div>
          </div>

          {/* 3-Column Card Grid */}
          <div className="row g-4">
            
            {/* Use Case 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 bg-dark border border-secondary border-opacity-25 rounded-4 p-4 shadow-lg transition-all">
                <div className="icon-box-info mb-4" style={{ width: "50px", height: "50px", backgroundColor: "rgba(13, 202, 240, 0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0dcaf0" viewBox="0 0 16 16">
                    <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                    <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"/>
                  </svg>
                </div>
                <h5 className="text-white fw-bold mb-3">Age-Restricted Commerce</h5>
                <p className="text-white-50 small mb-0 lh-lg">
                  Instantly verify user age for restricted goods (e.g., vaping, alcohol delivery) or mature gaming platforms. Reduce friction by estimating age without forcing users to upload sensitive ID documents.
                </p>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 bg-dark border border-secondary border-opacity-25 rounded-4 p-4 shadow-lg transition-all">
                <div className="icon-box-info mb-4" style={{ width: "50px", height: "50px", backgroundColor: "rgba(13, 202, 240, 0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0dcaf0" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M11.664 6.156a.5.5 0 0 0-.664.12l-3.5 4.5a.5.5 0 0 1-.722.062L5.16 9.385a.5.5 0 0 0-.64.764l1.618 1.353a1.5 1.5 0 0 0 1.97-.107l3.664-4.708a.5.5 0 0 0-.108-.531z"/>
                  </svg>
                </div>
                <h5 className="text-white fw-bold mb-3">Smart Retail Advertising</h5>
                <p className="text-white-50 small mb-0 lh-lg">
                  Brick-and-mortar stores and digital billboards can dynamically adapt displayed advertisements based on the estimated demographic of the person actively looking at the screen, maximizing ad relevance.
                </p>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 bg-dark border border-secondary border-opacity-25 rounded-4 p-4 shadow-lg transition-all">
                <div className="icon-box-info mb-4" style={{ width: "50px", height: "50px", backgroundColor: "rgba(13, 202, 240, 0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0dcaf0" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                  </svg>
                </div>
                <h5 className="text-white fw-bold mb-3">Accessibility & Inclusion</h5>
                <p className="text-white-50 small mb-0 lh-lg">
                  Software and kiosks can automatically adjust user interfaces—such as instantly increasing font sizes or simplifying menu navigation—when an elderly user is detected, significantly improving digital accessibility.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
