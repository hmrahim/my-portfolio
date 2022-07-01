import React from 'react';

const Service = ({service,refetch}) => {
  refetch()
    return (
        <div className="card bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img
            src={service.icon}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{service.title}</h2>
          <p>{service.desc}</p>
          
        </div>
      </div>
    );
};

export default Service;