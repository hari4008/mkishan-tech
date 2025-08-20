import React from 'react';

const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Custom Software Development",
      description: "Tailored applications built with modern frameworks to meet your specific business requirements and workflows."
    },
    {
      icon: "☁️",
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions on AWS, Azure, and GCP with automated deployment and monitoring systems."
    },
    {
      icon: "🛡️",
      title: "Cybersecurity",
      description: "Comprehensive security audits, threat detection, and protection strategies for your digital assets."
    },
    {
      icon: "🔄",
      title: "DevOps & Automation",
      description: "Streamlined CI/CD pipelines, infrastructure as code, and automated testing for faster deployments."
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences."
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Intelligent automation, predictive analytics, and AI-powered solutions to optimize your operations."
    }
  ];

  return (
    <section id="services" className="py-5 fade-in">
      <div className="container">
        <h2 className="section-title text-center">Our IT Services</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-4">
              <div className="service-card h-100">
                <div className="service-icon">{service.icon}</div>
                <h3 className="mb-3" style={{fontSize: '1.25rem'}}>{service.title}</h3>
                <p className="text-light">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;