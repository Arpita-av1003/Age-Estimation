import React from "react";

function ContactPage() {
  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow border-0 rounded-lg p-5">
              <h2 className="fw-bold text-center mb-4">Get in Touch</h2>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="John Doe" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" placeholder="name@example.com" />
                </div>
                <div className="mb-4">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn btn-dark w-100 py-2">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;