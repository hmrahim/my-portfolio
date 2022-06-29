import React from "react";
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';

const Skills = () => {
    const {register,handleSubmit,formState:{errors},reset} = useForm()

    const onsubmit = data => {
        fetch("http://localhost:5000/skill",{
            method:"POST",
            headers:{
                "Content-Type": "Application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> {
          toast.success("Skill added succesfully !")
            reset()
        })
    }
  return (
    <div className=" px-3 ">
      <div className="bg-base-100 shadow-lg p-4 mt-3 rounded-lg  w-full md:w-3/5 mx-auto">
        <h1 className="text-center text-2xl font-semibold my-4">
          Add New Skills
        </h1> <hr />
        <div className="w-full md:w-5/6 mx-auto">
          <form onSubmit={handleSubmit(onsubmit)} action="">
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
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
                <span class="label-text">Skill Label</span>
              </label>
              <input
                type="number"
                placeholder="%"
                class="input input-bordered w-full "
                {...register("label",{
                    required:{
                        value:true,
                        message:"Label field is required"
                    }
                })}
              />
              <label class="label">
              {errors?.label?.type === "required" && <span class="label-text-alt text-red-500">{errors.label.message}</span>}
                
            
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

export default Skills;
