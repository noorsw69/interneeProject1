import React from 'react';
import './Community.css';

const Community = () => {
  return (
    <section className="community-section">
      <div className="community-content">
        <span className="tag">Trusted by Thousands</span>
        <h2>
          Join a Global Community of Learners Achieving Their Dreams
        </h2>
        <button className="join-btn">
          Join Our Community
        </button>
      </div>

      <div className="testimonial">
        <div className="testimonial-card">
          <div className="user-info">
            <div className="avatar-placeholder"></div>
            <div className="user-details">
              <h4>Kashan Soomro</h4>
              <p>Karachi, Pakistan</p>
            </div>
          </div>
          <p className="quote">
            "Thanks to internee.pk, I grew up my skills here and now I am working as a Flutter Developer in a US company."
          </p>
          <div className="rating">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
        </div>
        <div className="carousel-indicators">
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default Community;