import React from 'react';
import { useForm } from "react-hook-form"
import { useQuery } from 'react-query';
import {useParams,useNavigate} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import Spiner from '../Spiner';


const ContactSetting = () => {
  
    
    const {data,refetch,isLoading,error} = useQuery("about",()=> fetch(`https://polar-beach-10719.herokuapp.com/contact`).then(res=>res.json() ))
    const id = data?._id
    
    
 

    const {register,handleSubmit,formState:{errors},reset} = useForm()
    const navigate = useNavigate()




    const onsubmit = data => {
      
      fetch(`https://polar-beach-10719.herokuapp.com/contact/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type": "Application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=> {
        toast.success("Contact settings updated succesfully !")
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
            Contact Section Settings
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
                  <span className="label-text">Phone</span>
                </label>
                <input
               defaultValue={data.phone}
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered w-full "
                  {...register("phone",{
                      required:{
                          value:true,
                          message:"Phone field is required"
                      }
                  })}
                />
                <label className="label">
                  {errors?.phone?.type === "required" && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                  
              
                </label>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
               defaultValue={data.email}
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full "
                  {...register("email",{
                      required:{
                          value:true,
                          message:"Email field is required"
                      }
                  })}
                />
                <label className="label">
                  {errors?.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                  
              
                </label>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
               defaultValue={data.address}
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full "
                  {...register("address",{
                      required:{
                          value:true,
                          message:"Address field is required"
                      }
                  })}
                />
                <label className="label">
                  {errors?.address?.type === "required" && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                  
              
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

export default ContactSetting;