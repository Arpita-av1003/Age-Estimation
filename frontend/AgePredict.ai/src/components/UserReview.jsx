import React, { useState } from "react";

function UserReview() {
  // Hardcoded sample reviews for the UI
  const [reviews] = useState([
    {
      id: 1,
      name: "Smriti Rajput",
      role: "Frontend Developer",
      rating: 5,
      text: "The integration process was seamless. The neural network's accuracy is impressive, and the fact that it processes everything in memory makes compliance a breeze.",
      avatar: "AS"
    },
    {
      id: 2,
      name: "Harshita Srivastava",
      role: "Bankend Developer",
      rating: 5,
      text: "AgePredict.ai strikes the perfect balance between high-end computer vision and strict privacy standards. Highly recommend for any platform needing age gating.",
      avatar: "HS"
    },
    {
      id: 3,
      name: "Ruhanika Shah",
      role: "Product Manager",
      rating: 4,
      text: "Very fast API response times. It occasionally adds a few years if the lighting is harsh, but overall it is an incredibly robust tool.",
      avatar: "RS"
    },

  ]);


  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "text-warning" : "text-secondary"}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-info min-vh-100 py-5">
      <div className="container py-4">
        
        <div className="text-center mb-5 pb-3">
          <h1 className="display-4 fw-bold mb-3">Trusted by Developers</h1>
          <p className="lead text-dark mx-auto" style={{ maxWidth: "600px" }}>
            See how teams are using AgePredict.ai to secure their platforms and automate age verification without compromising user privacy.
          </p>
        </div>


        <div className="row g-3 mb-5 pb-4 border-bottom">
          {reviews.map((review) => (
            <div className="col-lg-4 col-md-6" key={review.id}>
              <div className="card h-90 border-0 shadow-sm rounded-4 p-4">
                <div className="mb-3 fs-5">
                  {renderStars(review.rating)}
                </div>
                <p className="card-text text-secondary mb-4" style={{ lineHeight: "1.7" }}>
                  "{review.text}"
                </p>
                <div className="mt-auto d-flex align-items-center">
                  <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center me-3 fw-bold" style={{ width: "45px", height: "45px" }}>
                    {review.avatar}
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">{review.name}</h6>
                    <small className="text-muted">{review.role}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 p-5">
              <div className="text-center mb-4">
                <h3 className="fw-bold">Tell us about your experience</h3>
                <p className="text-muted">Your feedback helps us improve our AI models.</p>
              </div>
              
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold small">Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter your name" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold small">Company / Role </label>
                    <input type="text" className="form-control" placeholder="e.g. Developer" />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label className="form-label fw-bold small">Rating (1-5)</label>
                  <select className="form-select">
                    <option value="5">⭐⭐⭐⭐⭐ (5/5) - Excellent</option>
                    <option value="4">⭐⭐⭐⭐ (4/5) - Great</option>
                    <option value="3">⭐⭐⭐ (3/5) - Good</option>
                    <option value="2">⭐⭐ (2/5) - Fair</option>
                    <option value="1">⭐ (1/5) - Poor</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold small">Your Review</label>
                  <textarea className="form-control" rows="4" placeholder="What did you like? What can we improve?"></textarea>
                </div>

                <button type="submit" className="btn btn-custom-purple w-100 py-3 fw-bold">
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UserReview;