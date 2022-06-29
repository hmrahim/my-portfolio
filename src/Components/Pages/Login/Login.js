import React from "react";
import {useForm} from "react-hook-form"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user){
        navigate(from,{replace:true})

      }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
       signInWithEmailAndPassword(data.email,data.password)
    };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full mx-6 md:mx-0 md:w-4/12 mx-auto bg-base-300 p-6 rounded-lg shadow-xl">
        <h1 className="text-2xl text-center  font-semibold mb-2">Login</h1> <hr />
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
              {...register("email",{
                required:{
                    value:true,
                    message:"Email is rquired"
                },
                pattern:{
                    value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message:"Please provide a valid email address"
                }
              })}
              
            />
            {errors?.email?.type === "required" &&  <span class="label-text-alt mt-1 text-red-500">{errors.email.message}</span>}
            {errors?.email?.type === "pattern" &&  <span class="label-text-alt mt-1 text-red-500">{errors.email.message}</span>}
           
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              class="input input-bordered"
              {...register("password",{
                required:{
                    value:true,
                    message:"Password is rquired"
                },
              minLength:{
                value:6,
                message:"You cannot provide less then 6 carracter"
              }
              })}
            />
              {errors?.password?.type === "required" &&  <span class="label-text-alt mt-1 text-red-500">{errors.password.message}</span>}
           
              {errors?.password?.type === "minLength" &&  <span class="label-text-alt mt-1 text-red-500">{errors.password.message}</span>}
           
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div class="form-control mt-6">
            {
                loading ?  <button class="btn btn-primary loading">Login</button> : <button class="btn btn-primary">Login</button>
            }
            
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
