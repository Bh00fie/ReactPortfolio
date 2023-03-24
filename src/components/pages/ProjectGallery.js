import React from 'react';
import Project from './Project';
import projects from '../projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
      <div className="socials">
        <p>Get in touch with me at: Bh00fie@gmail.com</p>
        <a href="https://github.com/Bh00fie"> <FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/abhinandan-thour-42359b193/"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
    </div>
  );
}
  
export default ProjectGallery;
