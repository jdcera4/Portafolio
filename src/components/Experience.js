import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Analista de soluciones tecnológicas",
      company: "Sectorial",
      period: "dic. 2024 - actualidad · 8 meses",
      location: "Medellín, Antioquia, Colombia · Híbrido",
      description: "Desarrollador de aplicaciones web full stack especializado en Angular y bases de datos. Responsable del análisis y desarrollo de soluciones tecnológicas innovadoras.",
      skills: "Angular, Bases de datos y 8 aptitudes más"
    },
    {
      title: "Desarrollador full stack",
      company: "EcoRegistry",
      period: "may. 2023 - feb. 2024 · 10 meses",
      location: "Medellín, Antioquia, Colombia · Híbrido",
      description: "Desarrollar e implementar funcionalidades tanto backend como frontend para la plataforma de la empresa usando las tecnologías de nodejs, typescript, javascript, sql, mysql, react, tailwind, css, html",
      skills: "Desarrollo front end, JavaScript y 5 aptitudes más"
    },
    {
      title: "Desarrollador Full-stack - Vtex",
      company: "Karibik",
      period: "may. 2022 - mar. 2023 · 11 meses",
      location: "La Estrella, Antioquia, Colombia",
      description: "Desarrollar componentes y crear integraciones para Vtex, trabajando con tecnologías modernas para e-commerce.",
      skills: "Node.js, GraphQL y 5 aptitudes más"
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experiencia</h2>
        <div className="grid grid-2">
          {experiences.map((exp, index) => (
            <div key={index} className="card">
              <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>{exp.title}</h3>
              <h4 style={{ color: '#888', marginBottom: '0.5rem' }}>{exp.company}</h4>
              <p style={{ color: '#667eea', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{exp.period}</p>
              {exp.location && (
                <p style={{ color: '#aaa', marginBottom: '1rem', fontSize: '0.8rem' }}>{exp.location}</p>
              )}
              <p style={{ textAlign: 'left', lineHeight: '1.6', marginBottom: '1rem' }}>{exp.description}</p>
              {exp.skills && (
                <p style={{ color: '#667eea', fontSize: '0.8rem', fontStyle: 'italic' }}>
                  🔧 {exp.skills}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;