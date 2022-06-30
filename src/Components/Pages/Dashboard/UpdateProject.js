import React from 'react';
import { useForm } from "react-hook-form"
import { useQuery } from 'react-query';
import {useParams,useNavigate} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import Spiner from './Spiner';




const UpdateProject = () => {
    const {id} = useParams()
    const {data,refetch,isLoading} = useQuery(["project",id],()=> fetch(`http://localhost:5000/project/${id}`).then(res =>res.json() ))
   
   
    
    
 

    const {register,handleSubmit,formState:{errors},reset} = useForm()
    const navigate = useNavigate()




    const onsubmit = data => {
      
      fetch(`http://localhost:5000/project/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type": "Application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=> {
        toast.success("Project updated succesfully !")
        reset()
    })
}

if(isLoading){
    return <Spiner/>
}
refetch()
    return (
        <div className=" px-3 ">
        <div className="bg-base-100 shadow-lg p-4 mt-3 rounded-lg  w-full md:w-3/5 mx-auto">
          <h1 className="text-center text-2xl font-semibold my-4">
            Create an project
          </h1> <hr />
          <div className="w-full md:w-5/6 mx-auto">
            <form onSubmit={handleSubmit(onsubmit)} action="">
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Screenshoot url</span>
                </label>
                <input
                defaultValue={data.ssu}
                  type="url"
                  placeholder="Screenshoot"
                  class="input input-bordered w-full "
                  {...register("ssu",{
                      required:{
                          value:true,
                          message:"Screenshoot field is required"
                      }
                  })}
                />
                <label class="label">
                  {errors?.ssu?.type === "required" && <span class="label-text-alt text-red-500">{errors.ssu.message}</span>}
                  
              
                </label>
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
              defaultValue={data.name}
                  type="text"
                  placeholder="Name"
                  class="input input-bordered w-full "
                  {...register("name",{
                      required:{
                          value:true,
                          message:"Name field is required"
                      }
                  })}
                />
                <label class="label">
                  {errors?.name?.type === "required" && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                  
              
                </label>
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Technology</span>
                </label>
                <input
            defaultValue={data.tech}
                  type="text"
                  placeholder="Technology"
                  class="input input-bordered w-full "
                  {...register("tech",{
                      required:{
                          value:true,
                          message:"Technology field is required"
                      }
                  })}
                />
                <label class="label">
                  {errors?.tech?.type === "required" && <span class="label-text-alt text-red-500">{errors.tech.message}</span>}
                  
              
                </label>
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Client Site url</span>
                </label>
                <input
              defaultValue={data.client}
                  type="url"
                  placeholder="Client Site url"
                  class="input input-bordered w-full "
                  {...register("client",{
                      required:{
                          value:true,
                          message:"Client Site url field is required"
                      }
                  })}
                />
                <label class="label">
                  {errors?.client?.type === "required" && <span class="label-text-alt text-red-500">{errors.client.message}</span>}
                  
              
                </label>
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Server Site url</span>
                </label>
                <input
               defaultValue={data.server}
                  type="url"
                  placeholder="Server Site url"
                  class="input input-bordered w-full "
                  {...register("server",{
                      required:{
                          value:true,
                          message:"Server Site url field is required"
                      }
                  })}
                />
                <label class="label">
                  {errors?.server?.type === "required" && <span class="label-text-alt text-red-500">{errors.server.message}</span>}
                  
              
                </label>
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Live WebSite url</span>
                </label>
                <input
              defaultValue={data.live}
                  type="url"
                  placeholder="Live WebSite url"
                  class="input input-bordered w-full "
                  {...register("live",{
                      required:{
                          value:true,
                          message:"Live WebSite url field is required"
                      }
                  })}
                />
                <label class="label">
                  {errors?.live?.type === "required" && <span class="label-text-alt text-red-500">{errors.live.message}</span>}
                  
              
                </label>
              </div>
              
         
  
              <div class="form-control w-full inline">
          <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      
      </div>
    );
};

export default UpdateProject;