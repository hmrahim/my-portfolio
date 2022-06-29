import React from 'react';
import { useForm } from "react-hook-form"
import { useQuery } from 'react-query';
import {useParams} from "react-router-dom"
import Spiner from './Spiner';
import { ToastContainer, toast } from 'react-toastify';


const AddService = () => {
 

    const {register,handleSubmit,formState:{errors},reset} = useForm()




    const onsubmit = data => {
      
        fetch(`http://localhost:5000/services`,{
            method:"post",
            headers:{
                "Content-Type": "Application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> {
            toast.success("Image url updated succesfully !")
            reset()
        })
    }
  

    return (
        <div className=" px-3 ">
        <div className="bg-base-100 shadow-lg p-4 mt-3 rounded-lg  w-full md:w-3/5 mx-auto">
          <h1 className="text-center text-2xl font-semibold my-4">
            Add Service
          </h1> <hr />
          <div className="w-full md:w-5/6 mx-auto">
            <form onSubmit={handleSubmit(onsubmit)} action="">
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Title</span>
                </label>
                <input
               
                  type="text"
                  placeholder="Title"
                  class="input input-bordered w-full "
                  {...register("title",{
                      required:{
                          value:true,
                          message:"Title field is required"
                      }
                  })}
                />
                <label class="label">
                  {errors?.title?.type === "required" && <span class="label-text-alt text-red-500">{errors.title.message}</span>}
                  
              
                </label>
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Description</span>
                </label>
                <textarea 
                class="textarea textarea-bordered"
                 placeholder="Description"
                 {...register("desc",{
                    required:{
                        value:true,
                        message:"Description field is required"
                    }
                })}
                 ></textarea>
              
                <label class="label">
                {errors?.desc?.type === "required" && <span class="label-text-alt text-red-500">{errors.desc.message}</span>}
                  
              
                </label>
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Icon</span>
                </label>
                <input
               
                  type="url"
                  placeholder="Icon Url"
                  class="input input-bordered w-full "
                  {...register("icon",{
                      required:{
                          value:true,
                          message:"Icon field is required"
                      }
                  })}
                />
                <label class="label">
                {errors?.icon?.type === "required" && <span class="label-text-alt text-red-500">{errors.icon.message}</span>}
                  
              
                </label>
              </div>
  
              <div class="form-control w-full inline">
          <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      
      </div>
    );
};

export default AddService;