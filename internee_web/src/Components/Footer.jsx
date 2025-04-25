import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="newsletter">
        <h3>Subscribe to Newsletter</h3>
        <p>Subscribe to our newsletter and get exclusive insights, industry trends.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <div className="logo-section">
            <h4 className="logo">Internee.pk</h4>
            <div className="tagline-container">
              <span className="tagline-logo">🎓</span>
              <p className="tagline">Virtual Internship Platform</p>
            </div>
          </div>
          <p>The ultimate platform designed to turbocharge the IT sector in Pakistan.</p>
          <div className="contact">
            <span className="phone-icon">📞</span>
            <span>+92 312 3023645</span>
          </div>
          <div className="social-icons">
            <span className="icon">📘</span>
            <span className="icon">🐦</span>
            <span className="icon">💼</span>
            <span className="icon">📷</span>
          </div>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Student Ambassador</a></li>
            <li><a href="#">Intern Profile</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Community</a></li>
            <li><a href="#">Certification</a></li>
            <li><a href="#">Scholarships</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 internee.pk</p>
        <div className="legal-links">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;