import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="container">
        <div className="navbar-content">
          <a className="navbar-brand" href="#home">MKisan Tech</a>
          
          <button 
            className="navbar-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
          
          <ul className={`navbar-nav ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a className="nav-link" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a className="nav-link" onClick={() => scrollToSection('services')}>Services</a></li>
            <li><a className="nav-link" onClick={() => scrollToSection('solutions')}>Solutions</a></li>
            <li><a className="nav-link" onClick={() => scrollToSection('tech')}>Technology</a></li>
            <li><a className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a></li>
            <li>
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Request Demo
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;