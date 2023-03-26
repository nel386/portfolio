import React from 'react';
import './projects.scss';

const projectData = [
  {
    title: 'Proyecto 1',
    description: 'Descripción del proyecto 1',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del proyecto 2',
    imageUrl: 'https://via.placeholder.com/300',
  },
  // ... Agrega más proyectos aquí
];

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects-title">Proyectos</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
