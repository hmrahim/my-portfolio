import React from "react";
import img1 from "../../../image/ss/project1.png"
import img2 from "../../../image/ss/project2.png"
import img3 from "../../../image/ss/project3.png"
import ProjectCard from "./ProjectCard";
const Projects = () => {
    const projects = [
        {
            img:img3,
            name:"Falcon-Electronics",
            tec:"Mern stact Project"
        },
        {
            img:img2,
            name:"B.baria Fruit-House",
            tec:"Mern stact Project"
        },
        {
            img:img1,
            name:"Hitup Fitness Center",
            tec:"React Application"
        },
    ]
  return (
    <div
      className="w-full md:w-4/5 lg:w-4/5 mx-auto px-6 md:px-0 mt-10 "
      id="projects"
    >
      <h1 className="text-4xl text-center capitalize font-semibold my-5">
        My Projects
      </h1>
      <p className="text-center w-full md:w-2/4 lg:w-2/4 mx-auto ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum pariatur
        dolorum officiis delectus quod perferendis obcaecati. Distinctio nihil
        numquam odit!
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-10 gap-5">
        {
            projects.map((project,index)=> <ProjectCard key={index} project={project}  />)
        }
      </div>
    </div>
  );
};

export default Projects;
