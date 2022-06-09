import React from 'react';

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
          <div class="card-actions justify-end">
            <button class="btn btn-secondary">Visit website</button>
          </div>
        </div>
      </div>
    );
};

export default ProjectCard;