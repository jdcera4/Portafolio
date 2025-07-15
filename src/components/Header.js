import React from 'react';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">JDC</div>
        <ul className="nav-menu">
          <li><a href="#home" className="nav-link">Inicio</a></li>
          <li><a href="#about" className="nav-link">Sobre mí</a></li>
          <li><a href="#experience" className="nav-link">Experiencia</a></li>
          <li><a href="#skills" className="nav-link">Habilidades</a></li>
          <li><a href="#projects" className="nav-link">Proyectos</a></li>
          <li><a href="#contact" className="nav-link">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;