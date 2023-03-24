import React from 'react';
import Project from './Project';
import projects from '../projects.json';

function ProjectGallery() {
  return (
    <div>
      <h1 className="project-title text-center p-5">Projects</h1>
      <div className="project-container container">
        <div className="row row-cols-sm-1 row-cols-lg-2 g-4">
          {projects.map(project => (
            <Project 
              key={project.key}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
  
export default ProjectGallery;
