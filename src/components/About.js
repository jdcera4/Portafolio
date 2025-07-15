import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">Sobre mí</h2>
        <div className="card">
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'left' }}>
            Soy un desarrollador apasionado por crear soluciones tecnológicas innovadoras. 
            Con experiencia en desarrollo full stack, me especializo en crear aplicaciones 
            web modernas y eficientes utilizando las últimas tecnologías.
          </p>
          <br />
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'left' }}>
            Mi enfoque se centra en escribir código limpio, escalable y mantenible, 
            siempre buscando las mejores prácticas y manteniendo una mentalidad de 
            aprendizaje continuo en el mundo del desarrollo de software.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;