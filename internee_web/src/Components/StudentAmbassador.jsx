import React from 'react';
import './StudentAmbassador.css';

const StudentAmbassador = () => {
  return (
    <div className="student-ambassador-page">
      <section className="student-ambassador-hero">
        <h1>Internee.pk Student Ambassadors</h1>
      </section>

      <section className="benefits-section">
        <h2>Benefits of Being a Student Ambassador</h2>
        <ul>
          <li>Expand your professional network by connecting with industry leaders.</li>
          <li>Gain leadership and communication skills through hands-on experience.</li>
          <li>Enhance your resume with a prestigious role at Internee.pk.</li>
          <li>Receive exclusive access to Internee.pk events and workshops.</li>
          <li>Earn certificates and rewards for your contributions.</li>
        </ul>
      </section>

      <section className="responsibilities-section">
        <h2>Your Responsibilities as a Student Ambassador</h2>
        <ul>
          <li>Promote Internee.pk’s mission and opportunities on your campus.</li>
          <li>Organize and participate in events, workshops, and webinars.</li>
          <li>Mentor and guide peers in their internship journey.</li>
          <li>Create engaging content to increase awareness of Internee.pk.</li>
          <li>Provide feedback to help improve our programs.</li>
        </ul>
      </section>

      <section className="apply-section">
        <h2>Ready to Join Us?</h2>
        <p>
          Become a Student Ambassador and make a difference while gaining valuable experience. Apply now to start your journey with Internee.pk!
        </p>
        <button className="apply-btn">Apply Now</button>
      </section>
    </div>
  );
};

export default StudentAmbassador;