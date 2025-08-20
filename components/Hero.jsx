// import React, { useState } from 'react';

// const Hero = () => {
//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({ 
//       behavior: 'smooth' 
//     });
//   };

//   return (
//     <section id="home" className="hero-section">
//       <div className="floating-element floating-1"></div>
//       <div className="floating-element floating-2"></div>
//       <div className="floating-element floating-3"></div>
      
//       <div className="container text-center">
//         <div className="row justify-content-center">
//           <div className="col-10">
//             <h1 className="hero-title">Empowering Businesses with Next-Gen IT Solutions</h1>
//             <p className="hero-subtitle">Custom Software, Cloud Infrastructure, Cybersecurity & AI-Powered Innovation</p>
//             <div className="d-flex gap-3 justify-content-center flex-wrap">
//               <button className="btn btn-primary btn-lg" onClick={() => scrollToSection('services')}>
//                 Explore Services
//               </button>
//               <button className="btn btn-secondary btn-lg" onClick={() => scrollToSection('contact')}>
//                 Request Consultation
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="scroll-indicator"></div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create particles
    const particleArray = [];
    for (let i = 0; i < 25; i++) {
      particleArray.push({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 8,
        animationDuration: 8 + Math.random() * 4
      });
    }
    setParticles(particleArray);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="hero-section">
      {/* Animated Background Elements */}
      <div className="pulse-bg"></div>
      <div className="floating-element floating-1"></div>
      <div className="floating-element floating-2"></div>
      <div className="floating-element floating-3"></div>
      
      {/* Glowing Orbs */}
      <div className="glowing-orb orb-1"></div>
      <div className="glowing-orb orb-2"></div>
      <div className="glowing-orb orb-3"></div>
      
      {/* Geometric Shapes */}
      <div className="geometric-shape shape-1"></div>
      <div className="geometric-shape shape-2"></div>
      <div className="geometric-shape shape-3"></div>
      
      {/* Floating Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`
          }}
        ></div>
      ))}
      
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 hero-content">
            <h1 className="hero-title">Empowering Businesses with Next-Gen IT Solutions</h1>
            <p className="hero-subtitle">Custom Software, Cloud Infrastructure, Cybersecurity & AI-Powered Innovation</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap hero-buttons">
              <button className="btn btn-primary btn-lg" onClick={() => scrollToSection('services')}>
                Explore Services
              </button>
              <button className="btn btn-secondary btn-lg" onClick={() => scrollToSection('contact')}>
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator"></div>
    </section>
  );
};

export default Hero;
