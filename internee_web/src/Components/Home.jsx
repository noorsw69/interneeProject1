import React from 'react';
import './Home.css';
import Hero from './Hero';
import Stats from './Stats';
import Partners from './Partners';
import Internships from './Internships';
import TaskPortal from './TaskPortal';
import LearningJourney from './LearningJourney';
import MockInterview from './MockInterview';
import InternshipProcess from './InternshipProcess';
import Community from './Community';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-stats-container">
        <Hero />
        <Stats />
      </div>
      <Partners />
      <Internships />
      <TaskPortal />
      <LearningJourney />
      <MockInterview />
      <InternshipProcess />
      <Community />
    </div>
  );
};

export default Home;