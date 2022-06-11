import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {
    return (
        <div class="card bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={project.img}
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-base-100">{project.name}</h2>
          <p className="text-base-100">
            {project.tec}
          </p>
          <div class="card-actions justify-center">
            <a href={`${project.linkf}`} target="_blank" class="btn btn-secondary btn-xs capitalize">Client</a>
            {
              project.linkb &&  <a href={`${project.linkb}`} target="_blank" class="btn btn-secondary btn-xs capitalize">Server</a>
            }
           
            <a href={`${project.livelink}`} target="_blank" class="btn btn-secondary btn-xs capitalize">Live website</a>
          </div>
        </div>
      </div>
    );
};

export default ProjectCard;