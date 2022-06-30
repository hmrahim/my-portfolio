import React from 'react';
import { useForm } from "react-hook-form"
import { useQuery } from 'react-query';
import {useParams,useNavigate} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';



const AddTestimonial = () => {
    
   
 

    const {register,handleSubmit,formState:{errors},reset} = useForm()
    const navigate = useNavigate()




    const onsubmit = data => {
      
      fetch(`http://localhost:5000/testimonial`,{
        method:"POST",
        headers:{
            "Content-Type": "Application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=> {
        toast.success("Testimonial Added succesfully !")
        reset()
    })
}
    

    return (
        <div className=" px-3 ">
        <div className="bg-base-100 shadow-lg p-4 mt-3 rounded-lg  w-full md:w-3/5 mx-auto">
          <h1 className="text-center text-2xl font-semibold my-4">
            Add a new testimonial
          </h1> <hr />
          <div className="w-full md:w-5/6 mx-auto">
            <form onSubmit={handleSubmit(onsubmit)} action="">
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
               
                  type="text"
                  placeholder="Name"
                  class="input input-bordered w-full "
                  {...register("name",{
                      required:{
                          value:true,
                          message:"name field is required"
                      }
                  })}
                />
                <label class="label">
                  {errors?.name?.type === "required" && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                  
              
                </label>
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Image url</span>
                </label>
                <input
               
                  type="url"
                  placeholder="Image url"
                  class="input input-bordered w-full "
                  {...register("image",{
                      required:{
                          value:true,
                          message:"Image url field is required"
                      }
                  })}
                />
                <label class="label">
                  {errors?.image?.type === "required" && <span class="label-text-alt text-red-500">{errors.image.message}</span>}
                  
              
                </label>
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Designation</span>
                </label>
                <input
               
                  type="text"
                  placeholder="Designation"
                  class="input input-bordered w-full "
                  {...register("desig",{
                      required:{
                          value:true,
                          message:"Designation field is required"
                      }
                  })}
                />
                <label class="label">
                  {errors?.desig?.type === "required" && <span class="label-text-alt text-red-500">{errors.desig.message}</span>}
                  
              
                </label>
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Testimonial</span>
                </label>
                <textarea 
               
                class="textarea textarea-bordered"
                 placeholder="Testimonial"
                 {...register("testimonial",{
                    required:{
                        value:true,
                        message:"Testimonial field is required"
                    }
                })}
                 ></textarea>
              
                <label class="label">
                {errors?.testimonial?.type === "required" && <span class="label-text-alt text-red-500">{errors.testimonial.message}</span>}
                  
              
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

export default AddTestimonial;