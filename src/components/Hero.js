import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Betechiey</h1>
          <p className="hero-subtitle">
            Your Trusted Partner in Digital Transformation
          </p>
          <p className="hero-description">
            We deliver cutting-edge solutions in web design, data analytics, 
            application development, and ethical hacking to help your business thrive.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
