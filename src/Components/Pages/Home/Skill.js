import React from 'react';
import { useQuery } from "react-query";
import Spiner from '../Dashboard/Spiner';

const Skill = () => {
    const {data,refetch,isLoading}= useQuery("skill",()=> fetch("http://localhost:5000/skill").then(res=>res.json()))
 
    if(isLoading){
      return <Spiner/>
    }
    refetch()
    return (
        <>{
            data.map((skill,index)=>    <div class="form-control w-full max-w-xs my-3">
            <label class="label">
              <span class="label-text font-bold">{skill.title}</span>
              <span class="label-text-alt font-bold">{skill.label}%</span>
            </label>
            <progress
              class="progress progress-secondary w-full"
              value={skill.label}
              max="100"
              ></progress>
          </div>)
        }
     
          </>
    );
};

export default Skill;