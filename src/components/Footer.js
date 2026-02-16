import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Betechiey</h3>
            <p>Your trusted partner in digital transformation</p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Web Development</li>
              <li>App Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: sailendrakondapalli@gmail.com</p>
            <p>Phone: +91 8143724405</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/sailendra-kondapalli-276418258/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/sailendrakondapalli/" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Betechiey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
