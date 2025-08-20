import React from 'react';

const TechnologyStack = () => {
  const technologies = [
    { icon: "⚛️", name: "React" },
    { icon: "🟢", name: "Node.js" },
    { icon: "🐍", name: "Python" },
    { icon: "☁️", name: "AWS" },
    { icon: "🐳", name: "Docker" },
    { icon: "☸️", name: "Kubernetes" },
    { icon: "🔥", name: "Firebase" },
    { icon: "📊", name: "MongoDB" }
  ];

  return (
    <section id="tech" className="py-5 fade-in">
      <div className="container">
        <h2 className="section-title text-center">Technology Stack</h2>
        <div className="row g-3">
          {technologies.map((tech, index) => (
            <div key={index} className="col-3">
              <div className="tech-item">
                <span className="tech-icon">{tech.icon}</span>
                <div>{tech.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;