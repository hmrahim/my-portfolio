import React from 'react';
import {useParams,useNavigate, Link} from "react-router-dom"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import { useQuery } from 'react-query';
import Spiner from '../Spiner';

const AddFlag = () => {
    const {register,handleSubmit,formState:{errors},reset} = useForm()
    const navigate = useNavigate()
    const {id} = useParams()
    const {data,refetch,isLoading,error} = useQuery(["skillFlag",id],()=> fetch(`http://localhost:5000/skillflag/${id}`).then(res=>res.json() ))
    

    const {} = useQuery





    const onsubmit = data => {

        fetch(`http://localhost:5000/skillflag/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type": "Application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> {
            toast.success("Flag updated succesfully !")
            reset()
        })
      
      
}
if(isLoading){
    return <Spiner/>
}
refetch()
    return (
        <div className="px-3">
        <div className="bg-base-100 shadow-lg p-4 mt-3 rounded-lg  w-full md:w-3/5 mx-auto">
          <h1 className="text-center text-2xl font-semibold  my-4">
            Update Skill Flag
          </h1>{" "}
          <hr />
         
          <div className="flex justify-end mb-5">
          <Link  className="btn btn-success btn-sm mt-4" to="/admin/skillflag">
            View All Flag
          </Link>
         
        </div>
           <form onSubmit={handleSubmit(onsubmit)} action="">
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
              <div>
                <button className='btn btn-primary'>Submit</button>
              </div>
           </form>
           
          
          
        
        </div>
      </div>
    );
};

export default AddFlag;