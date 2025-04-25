import React from 'react';
import './InternshipProcess.css';

const InternshipProcess = () => {
  return (
    <section className="internship-process-section">
      <div className="internship-process-content">
        <a href="#" className="how-it-works">
          How It Works
        </a>
        <h2>
          A Simple and Seamless Process to Start Your Internship Journey
        </h2>
        <button className="get-started-btn">
          Get Started Now
        </button>
      </div>

      <div className="steps">
        <div className="step">
          <span className="step-number">Step 1</span>
          <h4>Sign Up & Choose a Domain</h4>
          <p>
            Explore a wide range of internships across various industries, tailored to match your skills.
          </p>
        </div>
        <div className="step">
          <span className="step-number">Step 2</span>
          <h4>Fill out the Desired Form</h4>
          <p>
            Fill out a quick application form to secure your internship opportunity.
          </p>
        </div>
        <div className="step">
          <span className="step-number">Step 3</span>
          <h4>Earn Your Certificate</h4>
          <p>
            Complete your internship, gain valuable hands-on experience, and receive a certificate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InternshipProcess;