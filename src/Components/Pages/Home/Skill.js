import React from 'react';
import { useQuery } from "react-query";
import Spiner from '../Dashboard/Spiner';

const Skill = () => {
    const {data,refetch,isLoading}= useQuery("skill",()=> fetch("https://polar-beach-10719.herokuapp.com/skill").then(res=>res.json()))
 
    if(isLoading){
      return <Spiner/>
    }
    refetch()
    return (
        <>{
            data.map((skill,index)=>    <div className="form-control w-full max-w-xs my-3">
            <label className="label">
              <span className="label-text font-bold">{skill.title}</span>
              <span className="label-text-alt font-bold">{skill.label}%</span>
            </label>
            <progress
              className="progress progress-secondary w-full"
              value={skill.label}
              max="100"
              ></progress>
          </div>)
        }
     
          </>
    );
};

export default Skill;