import React from 'react';

const Skills = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'HTML5', 'CSS3',
    'Git', 'MongoDB', 'MySQL', 'Express.js', 'REST APIs', 'Bootstrap',
    'Responsive Design', 'Agile', 'Problem Solving', 'Team Work'
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;