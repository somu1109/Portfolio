import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar container">
      <div className="nav-logo">Somu.</div>
      <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
        ☰
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
      </ul>
      <a href="#resume" className="pill-btn nav-resume">Resume</a>
    </nav>
  );
};

export default Navbar;
