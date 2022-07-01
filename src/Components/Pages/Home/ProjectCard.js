import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {

    return (
        <div className="card bg-base-100  shadow-xl image-full">
        <figure className='h-48'>
          <img
            src={project.ssu}
            alt="Shoes"
           
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-base-100">{project.name}</h2>
          <p className="text-base-100">
            {project.tech}
          </p>
          <div className="card-actions justify-center">
            <a href={`${project.client}`} target="_blank" className="btn btn-secondary btn-xs capitalize">Client</a>
            {
              project.server &&  <a href={`${project.server}`} target="_blank" className="btn btn-secondary btn-xs capitalize">Server</a>
            }
           
            <a href={`${project.live}`} target="_blank" className="btn btn-secondary btn-xs capitalize">Live website</a>
          </div>
        </div>
      </div>
    );
};

export default ProjectCard;