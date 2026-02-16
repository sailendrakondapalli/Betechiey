import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies for optimal performance.',
      icon: '🌐'
    },
    {
      title: 'App Development',
      description: 'Native and cross-platform mobile applications tailored to your business needs.',
      icon: '📱'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces that provide exceptional user experiences.',
      icon: '🎨'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-subtitle">
          Comprehensive digital solutions tailored to your business needs
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
