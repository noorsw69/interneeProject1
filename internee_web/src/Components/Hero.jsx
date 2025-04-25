import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Looking for dream internship?</h1>
        <p>
          Intern.ee.pk kickstart student’s tech careers with first internships,
          providing industry exposure, practical skills, and networking opportunities.
        </p>
        <div className="hero-buttons">
          <button className="job-portal-btn">Our Job Portal</button>
          <button className="sign-in-btn">Sign In →</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;