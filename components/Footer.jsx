import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-3">
            <h3 className="footer-title">MKisan Technologies</h3>
            <p className="text-light">Empowering businesses with next-generation IT solutions and innovative technology services.</p>
          </div>
          <div className="col-3">
            <h3 className="footer-title">Quick Links</h3>
            <div className="d-flex flex-column">
              <a className="footer-link" onClick={() => scrollToSection('home')}>Home</a>
              <a className="footer-link" onClick={() => scrollToSection('services')}>Services</a>
              <a className="footer-link" onClick={() => scrollToSection('tech')}>Technology</a>
              <a className="footer-link" onClick={() => scrollToSection('contact')}>Contact</a>
            </div>
          </div>
          <div className="col-3">
            <h3 className="footer-title">Services</h3>
            <div className="d-flex flex-column">
              <a className="footer-link">Custom Software</a>
              <a className="footer-link">Cloud Solutions</a>
              <a className="footer-link">Cybersecurity</a>
              <a className="footer-link">AI & ML</a>
            </div>
          </div>
          <div className="col-3">
            <h3 className="footer-title">Connect</h3>
            <div className="d-flex flex-column">
              <a href="#" className="footer-link">LinkedIn</a>
              <a href="#" className="footer-link">Twitter</a>
              <a href="#" className="footer-link">GitHub</a>
              <a href="#" className="footer-link">Email</a>
            </div>
          </div>
        </div>
        <hr style={{borderColor: 'rgba(255, 255, 255, 0.1)', margin: '2rem 0'}} />
        <div className="text-center text-light">
          <p>&copy; 2024 MKisan Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;