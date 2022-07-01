import React from "react";
import img1 from "../../../image/ss/project1.png"
import img2 from "../../../image/ss/project2.png"
import img3 from "../../../image/ss/project3.png"
import ss1 from "../../../image/ss/falcon.png"
import ss2 from "../../../image/ss/warehouse.png"
import ss3 from "../../../image/ss/fitnes.png"
import ProjectCard from "./ProjectCard";
import { useQuery } from "react-query";
import Spiner from "../Dashboard/Spiner";

const Projects = () => {
   

    const {data,refetch,isLoading}= useQuery("project",()=> fetch("http://localhost:5000/project").then(res=>res.json()))

    if(isLoading){
      return <Spiner/>
    }
  return (
    <div
      className="w-full md:w-4/5 lg:w-4/5 mx-auto px-6 md:px-0 mt-10 "
      id="projects"
    >
      <h1 className="text-4xl text-center capitalize font-semibold my-5">
        My Projects
      </h1>
      {/* <p className="text-center w-full md:w-2/4 lg:w-2/4 mx-auto ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum pariatur
        dolorum officiis delectus quod perferendis obcaecati. Distinctio nihil
        numquam odit!
      </p> */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-10 gap-5">
        {
            data.map((project,index)=> <ProjectCard key={index}  project={project}  />)
        }
      </div>
    </div>
  );
};

export default Projects;
