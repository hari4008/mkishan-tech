import React, { useState } from 'react';

const About = () => {
  const aboutCards = [
    {
      icon: "🚀",
      title: "Innovation",
      description: "Cutting-edge solutions using the latest technologies to drive your business forward in the digital age."
    },
    {
      icon: "🔒",
      title: "Security",
      description: "Enterprise-grade security measures to protect your data and ensure compliance with industry standards."
    },
    {
      icon: "📈",
      title: "Scalability",
      description: "Future-proof solutions that grow with your business, from startup to enterprise level."
    }
  ];

  return (
    <section className="py-5 fade-in">
      <div className="container">
        <h2 className="section-title text-center">Why Choose MKisan Technologies?</h2>
        <div className="row g-4">
          {aboutCards.map((card, index) => (
            <div key={index} className="col-4">
              <div className="glass-card text-center h-100">
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{card.icon}</div>
                <h3 className="mb-3" style={{color: '#00FFFF', fontSize: '1.5rem'}}>{card.title}</h3>
                <p className="text-light">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;