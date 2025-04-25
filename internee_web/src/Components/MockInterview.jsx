import React from 'react';
import './MockInterview.css';

const MockInterview = () => {
  return (
    <section className="mock-interview-section">
      <div className="mock-interview-content">
        <span className="tag">AI Mock Interviews</span>
        <h2>
          AI Mock Interview Platform for Virtual Internship in Pakistan
        </h2>
        <p>
          Prepare for technical, marketing, or business interviews with our AI-powered mock interview system. Join Internee.pk’s virtual internship program to get unlimited access, real-time feedback, and role-specific practice.
        </p>
        <button className="apply-btn">
          Apply Now for Virtual Internship <span className="arrow">➔</span>
        </button>
      </div>

      <div className="feature-cards">
        <div className="feature-card">
          <span className="icon">💬</span>
          <h4>Realistic AI Interview Simulations</h4>
          <p>
            Simulate real interview environments powered by AI. Perfect for students seeking online internship interview practice or job readiness.
          </p>
        </div>
        <div className="feature-card">
          <span className="icon">🧠</span>
          <h4>Smart Feedback with AI</h4>
          <p>
            Instantly analyze your answers, tone, and relevance. Improve every time with feedback tailored for virtual internship candidates.
          </p>
        </div>
        <div className="feature-card">
          <span className="icon">⚙️</span>
          <h4>Role-Based Mock Interviews</h4>
          <p>
            Practice interviews for software engineering, product management, business, and digital marketing roles in our internee.pk platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MockInterview;