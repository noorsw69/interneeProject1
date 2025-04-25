import React from 'react';
import statsImage from '../assets/stats-section.webp';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stats-image">
          <img src={statsImage} alt="Stats Section" />
        </div>
        <button className="watch-video-btn">
          <span>Watch Video of Our Action</span>
          <span className="play-icon">▶</span>
        </button>
      </div>
    </section>
  );
};

export default Stats;