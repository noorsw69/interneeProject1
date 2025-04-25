import React from 'react';
import './LearningJourney.css';

const LearningJourney = () => {
  return (
    <section className="learning-journey-section">
      <div className="learning-journey">
        <h3>Your Learning Journey</h3>
        <div className="phase">
          <p>Phase 1: Foundation</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="phase">
          <p>Phase 2: Practical Skills</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '60%' }}></div>
          </div>
        </div>
        <div className="phase">
          <p>Phase 3: Industry Projects</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '40%' }}></div>
          </div>
        </div>
      </div>

      <div className="career-resources">
        <h3>Career Resources</h3>
        <div className="resources-grid">
          <button className="resource-btn">
            <span className="icon">📄</span> Resume Templates
          </button>
          <button className="resource-btn">
            <span className="icon">💬</span> Mock Interviews
          </button>
          <button className="resource-btn">
            <span className="icon">📊</span> Skill Analysis
          </button>
          <button className="resource-btn">
            <span className="icon">📚</span> Learning Paths
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;