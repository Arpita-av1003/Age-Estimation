import React from 'react'

const AboutPage = () => {
  return (
    <>
    <div className=" bg-light py-5">
      <div className="container ">
        <div className="row justify-content-center text-center bg-custom-blue text-white m-0">
          <div className="container-fluid">
            <div className="p-5 ">
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
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm p-4">
              <h3 className="fw-bold text-primary">Our Mission</h3>
              <p>
                We built AgeReveal to demonstrate the power of deep learning
                Convolutional Neural Networks (CNNs). By analyzing thousands of
                facial micro-features, our AI attempts to understand how the
                human eye perceives age.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm p-4">
              <h3 className="fw-bold text-success">Privacy First</h3>
              <p>
                We believe in absolute security. The images you upload or
                capture are processed instantly in memory and are{" "}
                <strong>never</strong> saved to our databases or used to train
                future models. Once the age is estimated, the photo is deleted
                forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutPage
