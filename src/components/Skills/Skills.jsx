import React, { useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.skills-fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const skillsList = [
    "HTML", "CSS", "JavaScript", "React JS", "React Router", "Git & GitHub"
  ];

  return (
    <section id="skills" className="skills-section container">
      <h2 className="section-heading skills-fade-in">
        SKILLS & LEARNING
      </h2>
      
      <div className="skills-grid">
        
        {/* Left Column: Skills */}
        <div className="skills-column skills-fade-in" style={{ transitionDelay: '0.1s' }}>
          <h3 className="column-heading">Skills</h3>
          <div className="skills-tags">
            {skillsList.map((skill, index) => (
              <span className="skill-pill" key={index}>{skill}</span>
            ))}
          </div>
        </div>

        {/* Right Column: Currently Learning */}
        <div className="learning-column skills-fade-in" style={{ transitionDelay: '0.2s' }}>
          <h3 className="column-heading">Currently Learning</h3>
          <ul className="learning-list">
            <li className="learning-item">
              <div className="learning-text">
                <span className="orange-dot"></span>
                Backend with Node.js, Express and MongoDB
              </div>
              <span className="status-label">In progress</span>
            </li>
            <li className="learning-item">
              <div className="learning-text">Databases</div>
              <span className="status-label">In progress</span>
            </li>
            <li className="learning-item">
              <div className="learning-text">React (advanced)</div>
              <span className="status-label">Done through custom hooks</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
