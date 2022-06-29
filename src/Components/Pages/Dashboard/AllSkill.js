import React from "react";
import {useQuery} from "react-query"
import SkillRow from "./SkillRow";
import Spiner from "./Spiner";
const AllSkill = () => {
    const {data,isLoading,refetch,error} = useQuery("data",()=> fetch("http://localhost:5000/skill").then(res =>res.json()))
console.log(data)
    if(isLoading){
        return <Spiner/>
    }
  return (
    <div className=" px-3 ">
      <div className="bg-base-100 shadow-lg p-4 mt-3 h-[80vh] overflow-y-auto rounded-lg  w-full md:w-3/5 mx-auto">
        <h1 className="text-center text-2xl font-semibold my-4">
          Add New Skills
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
                <th className="text-center"></th>
                <th className="text-center">Skil</th>
                <th className="text-center">Skill Label</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
                {
                  data.map((skill,index) =>  <SkillRow key={index} skill={skill} index={index} refetch={refetch}  />)
                }
          
            </tbody>
                </>
                : 
                <h1 className="text-2xl font-semibold text-center">Skill not available</h1>
            }
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSkill;
