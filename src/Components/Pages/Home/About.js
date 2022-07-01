import React from "react";
import myimage2 from "../../../image/my-image2.png"
import {useQuery} from "react-query"
import Spiner from "../Dashboard/Spiner";
import Skill from "./Skill";
const About = () => {
  
  const {data,refetch,isLoading}= useQuery("about",()=> fetch("http://localhost:5000/about").then(res=>res.json()))
 
  if(isLoading){
    return <Spiner/>
  }
  return (
    <section id="about">
      <div class="hero rounded-lg  bg-base-100  shadow-xl w-11/12 md:w-4/5 lg:w-4/5 mx-auto mt-[-60px] z-20 relative">
        <div class="flex flex-col md:flex-row  gap-4 p-5">
          <div className="flex-1 flex justify-center items-center ">
            <img
              src={data.image}
              class="md:max-w-sm  rounded-lg bg-accent"
            />
          </div>
          
          <div className="">
            <h1 class="text-5xl font-bold text-center capitalize">{data.title}</h1>
            <div>
              <p class="py-6">
             {data.about}
              </p>
            </div>
            <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-5">
              
             
             
               
              
             
            <Skill/>
          
           
             
            </div>
            <a href="https://drive.google.com/file/d/1YKGbssa_Ab4jL2zpHXaCVADPZ8xedEOS/view?usp=sharing" target="_blank" class="btn btn-secondary rounded-full">Dawonload Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
