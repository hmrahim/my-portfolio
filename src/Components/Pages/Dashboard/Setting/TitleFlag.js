import React from "react";
import { Link } from "react-router-dom";
import SkillFLagRow from "./SkillFLagRow";
import { useQuery } from 'react-query';
import Spiner from "../Spiner";

const TitleFlag = () => {
  const {data,isLoading,refetch} = useQuery("skillFlag",()=> fetch("http://localhost:5000/skillflag").then(res=> res.json()))
  console.log(data);
  
  if(isLoading){
    return <Spiner/>
  }
  return (
    <div className="px-3">
      <div className="bg-base-100 shadow-lg p-4 mt-3 rounded-lg  w-full md:w-5/6 mx-auto">
        <h1 className="text-center text-2xl font-semibold  my-4">
          All Skill Flag
        </h1>{" "}
        <hr />
        <div>
        <div className="flex justify-end mb-5">
          <Link  className="btn btn-success btn-sm mt-4" to="/admin/addflag">
            Add New Flag
          </Link>
         
        </div>
        <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th >No</th>
        <th className="text-center">Flag</th>
        <th className="text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      
    
   {
    data.map((flag,index)=> <SkillFLagRow key={index} index={index} refetch={refetch} flag={flag} />)
   }
   
    </tbody>
  </table>
</div>
        </div>
      
      </div>
    </div>
  );
};

export default TitleFlag;
