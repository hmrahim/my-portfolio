import React from 'react';
import { useForm } from "react-hook-form"
import { useQuery } from 'react-query';
import {useParams} from "react-router-dom"
import Spiner from './Spiner';
import { ToastContainer, toast } from 'react-toastify';


const UpdateImages = () => {
    const {data,refetch,isLoading} = useQuery("images",()=> fetch("https://polar-beach-10719.herokuapp.com/images").then(res=> res.json()))
 const id = data?.slice(0)[0]._id
 

    const {register,handleSubmit,formState:{errors},reset} = useForm()




    const onsubmit = data => {
      
        fetch(`https://polar-beach-10719.herokuapp.com/images/${id}`,{
            method:"put",
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
  

   if(isLoading){
    return <Spiner/>
   }
   refetch()
    return (
        <div className=" px-3 ">
        <div className="bg-base-100 shadow-lg p-4 mt-3 rounded-lg  w-full md:w-3/5 mx-auto">
          <h1 className="text-center text-2xl font-semibold my-4">
            Update Images
          </h1> <hr />
          <div className="w-full md:w-5/6 mx-auto">
            <form onSubmit={handleSubmit(onsubmit)} action="">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Logo url</span>
                </label>
                <input
               defaultValue={data?.slice(0)[0].logo}
                  type="url"
                  placeholder="url"
                  className="input input-bordered w-full "
                  {...register("logo",{
                      required:{
                          value:true,
                          message:"Logo field is required"
                      }
                  })}
                />
                <label className="label">
                  {errors?.logo?.type === "required" && <span className="label-text-alt text-red-500">{errors.logo.message}</span>}
                  
              
                </label>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Banner image url</span>
                </label>
                <input
                defaultValue={data?.slice(0)[0].banner}
                  type="url"
                  placeholder="Url"
                  className="input input-bordered w-full "
                  {...register("banner",{
                      required:{
                          value:true,
                          message:"Banner image field is required"
                      }
                  })}
                />
                <label className="label">
                {errors?.banner?.type === "required" && <span className="label-text-alt text-red-500">{errors.banner.message}</span>}
                  
              
                </label>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">About image url</span>
                </label>
                <input
                defaultValue={data?.slice(0)[0].about}
                  type="url"
                  placeholder="Url"
                  className="input input-bordered w-full "
                  {...register("about",{
                      required:{
                          value:true,
                          message:"About image field is required"
                      }
                  })}
                />
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

export default UpdateImages;