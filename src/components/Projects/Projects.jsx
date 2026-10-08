import React from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Shopnest',
    desc: 'A React e-commerce app with product categories, protected login routes and a clean multi-page design.',
  },
  {
    id: 2,
    title: 'Notivo',
    desc: 'A productivity app with a study timer, daily goals, tasks, water reminders and a weekly progress dashboard.',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section container">
      <h2 className="section-heading">
        SELECTED PROJECTS
      </h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
