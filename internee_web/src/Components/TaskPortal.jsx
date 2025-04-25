import React from 'react';
import './TaskPortal.css';

const TaskPortal = () => {
  return (
    <section className="task-portal">
      <div className="task-portal-content">
        <h2>
          Master Real-World Skills with Our Task Portal at{' '}
          <span className="highlight">internee.pk</span>
        </h2>
        <p>
          Transform theoretical knowledge into practical expertise through our
          comprehensive task portal. Build, learn and grow with industry-standard
          projects from our virtual internships on{' '}
          <span className="highlight">internee.pk</span>.
        </p>
        <div className="task-btn-container">
          <button className="task-btn">
            <span className="btn-icon">●</span> Task Management Platform
          </button>
        </div>
      </div>
    </section>
  );
};

export default TaskPortal;