import React from "react";
import { useQuery } from "react-query";
import incon1 from "../../../image/icon/coding.png"
import incon2 from "../../../image/icon/mern-stack.png"
import incon3 from "../../../image/icon/responsive-design.png"
import incon4 from "../../../image/icon/rocket.png"
import incon5 from "../../../image/icon/web-development.png"
import Spiner from "../Dashboard/Spiner";
import Service from "./Service";


const Services = () => {
  const {data,isLoading,refetch} = useQuery("services",()=> fetch("http://localhost:5000/services").then(res=>res.json()))

  if(isLoading){
    return <Spiner/>
  }
  return (
    <section id="services" className="">
      <div className="md:w-4/5 lg:w-4/5 w-full mx-auto mt-20 px-6 md:px-0">
        <h1 className="text-center text-4xl font-semibold mb-5">
          Awesome Services
        </h1>
        {/* <p className="text-center w-full md:w-7/12 mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
          reiciendis inventore molestias rerum sint nesciunt reprehenderit
          beatae esse dolore qui veritatis magnam fuga possimus eos porro, sed
          perferendis officia mollitia!
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10">
          {
            data.map((service,index)=> <Service key={index} refetch={refetch}  service={service}/>)
          }
         
        </div>
      </div>
    </section>
  );
};

export default Services;
