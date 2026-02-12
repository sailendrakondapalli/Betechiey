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
              <li>Web Design</li>
              <li>Data Analytics</li>
              <li>Application Development</li>
              <li>Ethical Hacking</li>
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
              <a href="#linkedin">LinkedIn</a>
              <a href="#twitter">Twitter</a>
              <a href="#github">GitHub</a>
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
