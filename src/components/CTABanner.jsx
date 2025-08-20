import React from 'react';

const CTABanner = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="fade-in">
      <div className="container">
        <div className="cta-banner text-center">
          <h2 className="mb-3" style={{fontSize: '2.5rem'}}>Ready to Elevate Your IT Strategy?</h2>
          <p className="mb-4 text-light" style={{fontSize: '1.25rem'}}>Let's discuss how we can transform your business with cutting-edge technology solutions.</p>
          <button className="btn btn-primary btn-lg" onClick={() => scrollToSection('contact')}>
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;