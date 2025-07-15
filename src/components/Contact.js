import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-form">
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Enviar Mensaje
            </button>
          </form>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p>O contáctame directamente:</p>
            <div style={{ marginTop: '1rem' }}>
              <a 
                href="https://github.com/jdcera4" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#667eea', 
                  textDecoration: 'none', 
                  margin: '0 1rem',
                  fontSize: '1.1rem'
                }}
              >
                GitHub
              </a>
              <a 
                href="mailto:tu-email@ejemplo.com"
                style={{ 
                  color: '#667eea', 
                  textDecoration: 'none', 
                  margin: '0 1rem',
                  fontSize: '1.1rem'
                }}
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;