import React, { useEffect } from "react";
import myimage from "../../../image/my-image.png";
import Typed from "react-typed"
import { useQuery } from "react-query";
import Spiner from "../Dashboard/Spiner";
import { useState } from "react";


const Banner = () => {
  const [titleFlag,setTitleFLag] = useState([])
  
  const {data,refetch,isLoading}= useQuery("banner",()=> fetch("http://localhost:5000/banner").then(res=>res.json()))
 
  useEffect(()=>{
  fetch("http://localhost:5000/skillflag")
  .then(res=>res.json())
  .then(data=> setTitleFLag(data))
  
 },[])
 

 

  if(isLoading){
    return <Spiner/>
  }
  return (
    <section className="bg-primary " id="home">
     
      <div class="hero min-h-screen md:w-4/5 lg:w-4/5 w-full mx-auto mt-20 md:mt-10 lg:mt-10">
        <div class="hero-content flex-col flex-row-reverse md:flex-row  lg:flex-row">
          <div className="flex-1 flex justify-center md:justify-start items-center">
            <div>
              <h1 class="text-5xl font-bold text-base-100 text-center md:text-left">
                I'm <span className="capitalize"> {data?.name}</span>
              </h1>
              <p className="text-base-100 mt-2 text-2xl text-center md:text-left">
                I'm a{" "}
                <span className="text-secondary">
                <Typed
      strings={titleFlag.map(flag=> flag.name+".")}
          typeSpeed={100}
          backSpeed={50}
          loop
        />
                </span>
              </p>
              <p class="py-6 text-base-100 text-center md:text-left">
              {data.about}
              </p>
              <div className="flex justify-center md:justify-start">
                <button class="btn btn-secondary rounded-full px-8">
                  {data.button}
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={data.image} class="z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
