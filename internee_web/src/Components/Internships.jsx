import React from 'react';
import graphicDesign from '../assets/graphic-design.webp';
import chatbotDevelopment from '../assets/chatbot-development.webp';
import machineLearning from '../assets/machine-learning.jpg';
import frontendDevelopment from '../assets/frontend-development.webp';
import backendDevelopment from '../assets/backend-development.webp';
import mobileApp from '../assets/mobile-app.webp';
import './Internships.css';

const Internships = () => {
  const internshipCards = [
    {
      image: graphicDesign,
      title: 'Graphic Design',
      applyLink: '#', 
    },
    {
      image: chatbotDevelopment,
      title: 'Chatbot Development',
      applyLink: '#', 
    },
      {image: machineLearning,
      title: 'Other Internships',
      applyLink: '#', 
  },
      {image: frontendDevelopment,
      title: 'Frontend Development',
      applyLink: '#', 
      },
     { image: mobileApp,
      title: 'App Development',
      applyLink: '#', 
     },
      {image: backendDevelopment,
      title: 'Backend Development',
      applyLink: '#', 
    },
  ];

  return (
    <section className="internships">
      <div className="internships-nav">
        <div className="nav-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="nav-labels">
          <span className="active">Trending</span>
          <span>Explore Internship Opportunities</span>
        </div>
      </div>
      <h2>Your Dream Internship is Just One Click Away!</h2>
      <div className="internships-cards">
        {internshipCards.map((card, index) => (
          <div key={index} className="internship-card">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h3>{card.title}</h3>
              {card.subtitle && <p>{card.subtitle}</p>}
              <a href={card.applyLink} className="apply-link">
                <span className="arrow">➜</span> Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;