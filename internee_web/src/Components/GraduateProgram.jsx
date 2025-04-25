import React from 'react';

import './GraduateProgram.css';
import GraduateHero from './GraduateHero'; 

const GraduateProgram = () => {
  return (
    <div className="graduate-program-section">
      <GraduateHero />
      <p>
        Welcome to the Internee.pk Graduate Program! This program is designed to help recent graduates kickstart their careers in the IT industry through hands-on experience, mentorship, and professional development opportunities.
      </p>
      <div className="program-details">
        <h2>Program Highlights</h2>
        <ul>
          <li>Mentorship from industry experts</li>
          <li>Real-world project experience</li>
          <li>Career development workshops</li>
          <li>Networking opportunities</li>
        </ul>
      </div>
      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default GraduateProgram;