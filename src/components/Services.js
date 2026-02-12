import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Beautiful, responsive websites that captivate your audience and drive results.',
      icon: '🎨'
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      icon: '📊'
    },
    {
      title: 'Application Development',
      description: 'Custom applications built with cutting-edge technology for your unique needs.',
      icon: '💻'
    },
    {
      title: 'Ethical Hacking',
      description: 'Protect your business with comprehensive security testing and vulnerability assessments.',
      icon: '🔒'
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
