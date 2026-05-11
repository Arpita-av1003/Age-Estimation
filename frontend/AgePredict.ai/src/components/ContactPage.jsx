import React from "react";

function ContactPage() {
  return (
    <div className="theme-navy-bg d-flex align-items-center justify-content-center py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="dark-auth-card card shadow-lg border-0 rounded-lg p-5" style={{ maxWidth: "450px", width: "100%" }}>
              <h2 className="fw-bold text-center text-white mb-3">Contact Us</h2>
              <form>
                <div className="mb-3">
                   <label className="form-label text-white">Full name</label>
              <input type="text" className="form-control dark-auth-input" placeholder="Full name" />
            </div>
                <div className="mb-3">
                  <label className="form-label text-white ">Email address</label>
                  <input type="email" className="form-control dark-auth-input" placeholder="Email address" />
                </div>
                <div className="mb-4">
                  <label className="form-label text-white">Message</label>
                  <textarea className="form-control dark-auth-input" rows="4" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn btn-info w-100 py-2">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;