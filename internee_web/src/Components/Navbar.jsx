import React from 'react';
import { useEffect, useState } from 'react';
import logo from '../assets/logo.png'; 
import './Navbar.css';
const Navbar = () => {
  const [theme, setTheme] = useState('dark');

  
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Internee.pk Logo" />
        {/* <span>INTERNEE.pk</span>
        <span className="subtitle">VIRTUAL INTERN PLATFORM</span> */}
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/internship">Internship</a></li>
        <li><a href="/graduate-program">Graduate Program</a></li>
        <li><a href="/student-ambassador">Student Ambassador</a></li>
      </ul>
      <div className="nav-buttons">
        <button className="job-portal-btn">Job Portal</button>
        <button className="sign-in-btn">Sign In</button>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;