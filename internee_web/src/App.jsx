import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import GraduateProgram from './Components/GraduateProgram';
import StudentAmbassador from './Components/StudentAmbassador';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graduate-program" element={<GraduateProgram />} />
          <Route path="/student-ambassador" element={<StudentAmbassador />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;