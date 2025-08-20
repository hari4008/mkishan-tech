import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechnologyStack from './components/TechnologyStack';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HelmetBase from './components/HelmetBase';

function App() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
    });

    // Parallax effect for floating elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelectorAll('.floating-element');

      parallax.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="animated-bg"></div>
      <HelmetBase
        name={"MKishan Tech"}
        title={"MKishan Tech"}
        description={"Discover MKisan Technologies – a cutting-edge IT services and solutions company. Explore our futuristic 3D website featuring custom software, cloud, cybersecurity, and AI solutions. Experience interactive 3D UI, smooth animations, and modern tech-powered design. Request a free consultation today!"}
      />
      <Header />
      <Hero />
      <About />
      <Services />
      <TechnologyStack />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;