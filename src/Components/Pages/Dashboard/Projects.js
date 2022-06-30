import React from 'react';
import { useQuery } from 'react-query';
import ProjectRow from './ProjectRow';
import ServiceRow from './ServiceRow';
import Spiner from './Spiner';

const Projects = () => {
    const {data,refetch,isLoading} = useQuery("services",()=> fetch("http://localhost:5000/project").then(res =>res.json() ))


   if(isLoading){
    return <Spiner/>
   }
    return (
        <div className=" px-3 ">
      <div className="bg-base-100 shadow-lg p-4 mt-3 h-[80vh] overflow-y-auto rounded-lg  w-full md:w-10/12 mx-auto">
        <h1 className="text-center text-2xl font-semibold my-4">
          All Projects
        </h1>{" "}
        <hr />
        <div class="overflow-x-auto mt-5">
          <table class="table w-full">
            {/* <!-- head --> */}
            {
              data ? 
              
              <>
            <thead>
              <tr>
                <th className="text-center">No</th>
                <th className="text-center">Screenshot</th>
                <th className="text-center">Name</th>
                <th className="text-center">Technology</th>
                <th className="text-center">Client Url</th>
                <th className="text-center">Server Url</th>
                <th className="text-center">Live Site Url</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
               {
                data.map((project,index) => <ProjectRow key={index} project={project} refetch={refetch} index={index}  />)
               }
               
          
            </tbody>
                </>
                : 
                <h1 className="text-2xl font-semibold text-center">Data not available</h1>
            }
          </table>
        </div>
      </div>
    </div>
    );
};

export default Projects;