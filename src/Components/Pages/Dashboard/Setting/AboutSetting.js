import React from 'react';
import { useForm } from "react-hook-form"
import { useQuery } from 'react-query';
import {useParams,useNavigate} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import Spiner from '../Spiner';


const AboutSetting = () => {
    
    const {data,refetch,isLoading,error} = useQuery("about",()=> fetch(`http://localhost:5000/about`).then(res=>res.json() ))
    const id = data?._id
    
    
 

    const {register,handleSubmit,formState:{errors},reset} = useForm()
    const navigate = useNavigate()




    const onsubmit = data => {
      
      fetch(`http://localhost:5000/about/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type": "Application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=> {
        toast.success("About settings updated succesfully !")
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
            About Section Settings
          </h1> <hr />
          <div className="w-full md:w-5/6 mx-auto">
            <form onSubmit={handleSubmit(onsubmit)} action="">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
               defaultValue={data.title}
                  type="text"
                  placeholder="Title"
                  className="input input-bordered w-full "
                  {...register("title",{
                      required:{
                          value:true,
                          message:"Title field is required"
                      }
                  })}
                />
                <label className="label">
                  {errors?.title?.type === "required" && <span className="label-text-alt text-red-500">{errors.title.message}</span>}
                  
              
                </label>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
               defaultValue={data.image}
                  type="text"
                  placeholder="Image"
                  className="input input-bordered w-full "
                  {...register("image",{
                      required:{
                          value:true,
                          message:"Image field is required"
                      }
                  })}
                />
                <label className="label">
                  {errors?.image?.type === "required" && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                  
              
                </label>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">About</span>
                </label>
                <textarea 
               defaultValue={data.about}
                className="textarea textarea-bordered"
                 placeholder="Description"
                 {...register("about",{
                    required:{
                        value:true,
                        message:"About field is required"
                    }
                })}
                 ></textarea>
              
                <label className="label">
                {errors?.about?.type === "required" && <span className="label-text-alt text-red-500">{errors.about.message}</span>}
                  
              
                </label>
              </div>
         
  
              <div className="form-control w-full inline">
          <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      
      </div>
    );
};

export default AboutSetting;