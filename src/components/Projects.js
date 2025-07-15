import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Finanzas App",
      description: "Aplicación completa de gestión financiera personal desarrollada con TypeScript. Permite el control de ingresos, gastos y análisis financiero con interfaz moderna y responsiva.",
      technologies: ["TypeScript", "React", "CSS3", "JavaScript"],
      github: "https://github.com/jdcera4/finanzas-app",
      demo: "https://order-money.vercel.app/"
    },
    {
      title: "PruebaBot",
      description: "Bot automatizado desarrollado en JavaScript para realizar tareas específicas. Implementa lógica de automatización y manejo de APIs externas.",
      technologies: ["JavaScript", "Node.js", "APIs", "Automation"],
      github: "https://github.com/jdcera4/pruebaBot",
      demo: null
    },
    {
      title: "Sectorial",
      description: "Aplicación web desarrollada con HTML puro, enfocada en la presentación de información sectorial con diseño responsivo y optimizado.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/jdcera4/sectorial",
      demo: null
    },
    {
      title: "NIST Vulnerabilities",
      description: "Herramienta desarrollada en Python para análisis y gestión de vulnerabilidades basada en el framework NIST. Incluye procesamiento de datos y reportes de seguridad.",
      technologies: ["Python", "Security", "Data Analysis", "NIST Framework"],
      github: "https://github.com/jdcera4/nist_vulnerabilities",
      demo: null
    },
    {
      title: "Prueba DoublevPartners",
      description: "Proyecto de prueba técnica desarrollado en C#, demostrando habilidades en programación orientada a objetos y mejores prácticas de desarrollo.",
      technologies: ["C#", ".NET", "OOP", "Clean Code"],
      github: "https://github.com/jdcera4/prueba_doublevpartners",
      demo: null
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <div className="grid grid-2">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>{project.title}</h3>
              <p style={{ textAlign: 'left', marginBottom: '1rem', lineHeight: '1.6' }}>
                {project.description}
              </p>
              <div style={{ marginBottom: '1rem' }}>
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    style={{
                      display: 'inline-block',
                      background: '#667eea',
                      color: 'white',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      margin: '0.2rem',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#667eea', 
                    textDecoration: 'none',
                    border: '1px solid #667eea',
                    padding: '0.5rem 1rem',
                    borderRadius: '5px',
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                >
                  GitHub
                </a>
                {project.demo && (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#ffffff', 
                      textDecoration: 'none',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      padding: '0.5rem 1rem',
                      borderRadius: '5px',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;