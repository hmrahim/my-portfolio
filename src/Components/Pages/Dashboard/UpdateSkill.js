import React from 'react';
import { useForm } from "react-hook-form"
import { useQuery } from 'react-query';
import {useParams} from "react-router-dom"
import Spiner from './Spiner';
import { ToastContainer, toast } from 'react-toastify';

const UpdateSkill = () => {
    const {id} = useParams()
    const {data,isLoading,refetch} = useQuery("skill",()=> fetch(`https://polar-beach-10719.herokuapp.com/skill/${id}`).then(res=> res.json()))
    const {register,handleSubmit,formState:{errors},reset} = useForm()

    const onsubmit = data => {
        fetch(`https://polar-beach-10719.herokuapp.com/skill/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type": "Application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> {
            toast.success("Skill updated succesfully !")
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
            Add New Skills
          </h1> <hr />
          <div className="w-full md:w-5/6 mx-auto">
            <form onSubmit={handleSubmit(onsubmit)} action="">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                defaultValue={data.title}
                  type="text"
                  placeholder="Type here"
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
                  <span className="label-text">Skill Label</span>
                </label>
                <input
                defaultValue={data.label}
                  type="number"
                  placeholder="%"
                  className="input input-bordered w-full "
                  {...register("label",{
                      required:{
                          value:true,
                          message:"Label field is required"
                      }
                  })}
                />
                <label className="label">
                {errors?.label?.type === "required" && <span className="label-text-alt text-red-500">{errors.label.message}</span>}
                  
              
                </label>
              </div>
  
              <div className="form-control w-full inline">
          <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      
      </div>
    );
};

export default UpdateSkill;