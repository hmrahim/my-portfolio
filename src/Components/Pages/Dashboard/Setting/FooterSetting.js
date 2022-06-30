import React from 'react';
import { useForm } from "react-hook-form"
import { useQuery } from 'react-query';
import {useParams,useNavigate} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import Spiner from '../Spiner';


const FooterSetting = () => {
    
    const {data,refetch,isLoading,error} = useQuery("about",()=> fetch(`http://localhost:5000/footer`).then(res=>res.json() ))
    const id = data?._id
    
    
 

    const {register,handleSubmit,formState:{errors},reset} = useForm()
    const navigate = useNavigate()




    const onsubmit = data => {
      
      fetch(`http://localhost:5000/footer/${id}`,{
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
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Copy Right Text</span>
                </label>
                <input
               defaultValue={data.copy}
                  type="text"
                  placeholder="Copy Right Text"
                  class="input input-bordered w-full "
                  {...register("copy",{
                      required:{
                          value:true,
                          message:"Copy Right Text field is required"
                      }
                  })}
                />
                <label class="label">
                  {errors?.copy?.type === "required" && <span class="label-text-alt text-red-500">{errors.copy.message}</span>}
                  
              
                </label>
              </div>
              <div>
                <h4 className='mt-5'><strong>Social links : </strong> </h4>
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Facebook</span>
                </label>
                <input
              defaultValue={data.facebook}
                  type="url"
                  placeholder="Facebook"
                  class="input input-bordered w-full "
                  {...register("facebook",{
                      required:{
                          value:true,
                          message:"Facebook field is required"
                      }
                  })}
                />
                <label class="label">
                  {errors?.facebook?.type === "required" && <span class="label-text-alt text-red-500">{errors.facebook.message}</span>}
                  
              
                </label>
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Instagram</span>
                </label>
                <input
               defaultValue={data.instagram}
                  type="url"
                  placeholder="Instagram"
                  class="input input-bordered w-full "
                  {...register("instagram",{
                      required:{
                          value:true,
                          message:"Instagram field is required"
                      }
                  })}
                />
                <label class="label">
                  {errors?.instagram?.type === "required" && <span class="label-text-alt text-red-500">{errors.instagram.message}</span>}
                  
              
                </label>
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Linkedin</span>
                </label>
                <input
           defaultValue={data.linkedin}
                  type="url"
                  placeholder="Linkedin"
                  class="input input-bordered w-full "
                  {...register("linkedin",{
                      required:{
                          value:true,
                          message:"Linkedin field is required"
                      }
                  })}
                />
                <label class="label">
                  {errors?.likedin?.type === "required" && <span class="label-text-alt text-red-500">{errors.likedin.message}</span>}
                  
              
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

export default FooterSetting;