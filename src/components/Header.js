import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/logo.png" alt="Betechiey Logo" className="logo-img" />
            <h1>Betechiey</h1>
          </div>
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#clients">What We Build</a>
            <a href="#feedback">Feedback</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-actions">
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button 
              className="menu-toggle" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
