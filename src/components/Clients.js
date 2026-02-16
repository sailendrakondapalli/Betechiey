import React from 'react';
import './Clients.css';

const Clients = () => {
  const services = [
    {
      name: 'Web Development',
      logo: '🌐'
    },
    {
      name: 'App Development',
      logo: '📱'
    },
    {
      name: 'UI/UX Design',
      logo: '🎨'
    }
  ];

  const stats = [
    { number: '5', label: 'Happy Clients' },
    { number: '6', label: 'Projects Delivered' },
    { number: '3', label: 'Services Offered' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="clients" className="clients">
      <div className="container">
        <h2>What We Can Build</h2>
        <p className="section-subtitle">
          Professional solutions tailored to your business needs
        </p>

        <div className="stats-section">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="clients-grid">
          {services.map((service, index) => (
            <div key={index} className="client-card">
              <div className="client-logo">{service.logo}</div>
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
