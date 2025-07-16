import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      // Verificar si EmailJS está configurado
      if (emailjsConfig.serviceId === 'service_xxxxxxx' ||
        emailjsConfig.templateId === 'template_xxxxxxx' ||
        emailjsConfig.publicKey === 'xxxxxxxxxxxxxxx') {

        // Si no está configurado, usar método alternativo
        const subject = `Mensaje de ${formData.name} desde el portafolio`;
        const body = `
Nombre: ${formData.name}
Email: ${formData.email}

Mensaje:
${formData.message}
        `;

        const mailtoLink = `mailto:jdcera4@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');

        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        alert('¡Se abrirá tu cliente de email para enviar el mensaje! Para envío automático, configura EmailJS siguiendo las instrucciones en EMAILJS_SETUP.md');

      } else {
        // EmailJS está configurado - envío directo
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'jdcera4@gmail.com'
        };

        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          templateParams,
          emailjsConfig.publicKey
        );

        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        alert('¡Mensaje enviado exitosamente! Te contactaré pronto.');
      }

    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setStatus('error');

      // Fallback al método alternativo si EmailJS falla
      const subject = `Mensaje de ${formData.name} desde el portafolio`;
      const body = `
Nombre: ${formData.name}
Email: ${formData.email}

Mensaje:
${formData.message}
      `;

      const mailtoLink = `mailto:jdcera4@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, '_blank');

      alert('Hubo un problema con el envío automático. Se abrirá tu cliente de email como alternativa.');
    } finally {
      setIsLoading(false);
    }
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
            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p>O contáctame directamente:</p>
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href="mailto:jdcera4@gmail.com"
                style={{
                  color: '#667eea',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  border: '1px solid #667eea',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease'
                }}
              >
                📧Email
              </a>
              <a
                href="https://wa.me/573022576761?text=Hola%20Jhojan,%20me%20interesa%20hablar%20contigo%20sobre%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#25D366',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  border: '1px solid #25D366',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease'
                }}
              >
                📱 WhatsApp
              </a>
              <a
                href="https://github.com/jdcera4"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#667eea',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  border: '1px solid #667eea',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease'
                }}
              >
                🐙 GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;