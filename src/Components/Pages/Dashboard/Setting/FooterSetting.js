import React from 'react';
import { useForm } from "react-hook-form"
import { useQuery } from 'react-query';
import {useParams,useNavigate} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import Spiner from '../Spiner';


const FooterSetting = () => {
    
    const {data,refetch,isLoading,error} = useQuery("about",()=> fetch(`https://polar-beach-10719.herokuapp.com/footer`).then(res=>res.json() ))
    const id = data?._id
    
    
 

    const {register,handleSubmit,formState:{errors},reset} = useForm()
    const navigate = useNavigate()




    const onsubmit = data => {
      
      fetch(`https://polar-beach-10719.herokuapp.com/footer/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type": "Application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=> {
        toast.success("Footer settings updated succesfully !")
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
                  <span className="label-text">Copy Right Text</span>
                </label>
                <input
               defaultValue={data.copy}
                  type="text"
                  placeholder="Copy Right Text"
                  className="input input-bordered w-full "
                  {...register("copy",{
                      required:{
                          value:true,
                          message:"Copy Right Text field is required"
                      }
                  })}
                />
                <label className="label">
                  {errors?.copy?.type === "required" && <span className="label-text-alt text-red-500">{errors.copy.message}</span>}
                  
              
                </label>
              </div>
              <div>
                <h4 className='mt-5'><strong>Social links : </strong> </h4>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Facebook</span>
                </label>
                <input
              defaultValue={data.facebook}
                  type="url"
                  placeholder="Facebook"
                  className="input input-bordered w-full "
                  {...register("facebook",{
                      required:{
                          value:true,
                          message:"Facebook field is required"
                      }
                  })}
                />
                <label className="label">
                  {errors?.facebook?.type === "required" && <span className="label-text-alt text-red-500">{errors.facebook.message}</span>}
                  
              
                </label>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Instagram</span>
                </label>
                <input
               defaultValue={data.instagram}
                  type="url"
                  placeholder="Instagram"
                  className="input input-bordered w-full "
                  {...register("instagram",{
                      required:{
                          value:true,
                          message:"Instagram field is required"
                      }
                  })}
                />
                <label className="label">
                  {errors?.instagram?.type === "required" && <span className="label-text-alt text-red-500">{errors.instagram.message}</span>}
                  
              
                </label>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Linkedin</span>
                </label>
                <input
           defaultValue={data.linkedin}
                  type="url"
                  placeholder="Linkedin"
                  className="input input-bordered w-full "
                  {...register("linkedin",{
                      required:{
                          value:true,
                          message:"Linkedin field is required"
                      }
                  })}
                />
                <label className="label">
                  {errors?.likedin?.type === "required" && <span className="label-text-alt text-red-500">{errors.likedin.message}</span>}
                  
              
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

export default FooterSetting;