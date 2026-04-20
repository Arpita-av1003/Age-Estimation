import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import arpitaImg from "../assets/Arpita.jpeg";
import sakshi from "../assets/Sakshiimg.jpeg";
import ruhanika from "../assets/Ruhanikaimg.jpeg";

const About = () => {
  return (
    <div className="about-page">
      <section className="py-5" style={{ backgroundColor: '#0084ff', color: 'white' }}>
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="display-4 fw-bold mb-3">About AgePredict.ai</h1>
            <p className="lead text-light">
              AgePredict.ai is an age estimation tool that uses
              advanced computer vision algorithms 
              to predict the approximate age.Age 
              estimation is crucial for enhancing
              
               online safety, ensuring regulatory compliance, and automating age verification without the friction of traditional ID checks.The growning need for age estimation in the digital age is undeniable. What started as a shared vision has grown into a powerful tool for businesses, governments, and individuals.
            </p>
            </div>
          </div>
        </div>
      </section>
      <section className='py-5 m-5' style={{ backgroundColor: '#23395d', color: 'white' }}>
         <div className="container py-4 ">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h3 className="display-4  mb-3">Our Mission</h3>
              <p className='lead text-white'>
                We built AgeReveal to demonstrate the power of deep learning
                Convolutional Neural Networks (CNNs). By analyzing thousands of
                facial micro-features, our AI attempts to understand how the
                human eye perceives age.
              </p>
            </div>
          </div>
          </div>
      </section>
      <section className="py-5 bg-white text-center">
  <div className="container py-5">
    <h2 className="mb-5" style={{ color: '#1a1549', fontWeight: '700' }}>Our Team</h2>
    
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
          <h3 className="h5 fw-bold mb-1">Arpita Singh</h3>
          <p className="text-muted small">Frontend Developer</p>
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
          <h3 className="h5 fw-bold mb-1">Ruhanika Shah</h3>
          <p className="text-muted small">Data Analyst</p>
        </div>
      </div>

      {/* 3 */}
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card border-0 bg-transparent">
          <div className="rounded overflow-hidden mb-3 mx-auto shadow-sm" style={{ backgroundColor: '#dcc6ab', aspectRatio: '1/1', width: '100%' }}>
            <img 
              src=" " 
              alt="Harshita Srivastava" 
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
          <h3 className="h5 fw-bold mb-1">Harshita Srivastava</h3>
          <p className="text-muted small">Backend Developer</p>
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
          <h3 className="h5 fw-bold mb-1">Sakshi Srivastava</h3>
          <p className="text-muted small">Lead Developer</p>
        </div>
      </div>
      
    </div>
  </div>
</section>
      
    </div>
  );
};

export default About;