import React from 'react';
import { useQuery } from 'react-query';
import ProjectRow from './ProjectRow';
import ServiceRow from './ServiceRow';
import Spiner from './Spiner';
import TestimonialRow from './TestimonialRow';

const AllTestimonial = () => {
    const {data,refetch,isLoading} = useQuery("services",()=> fetch("http://localhost:5000/testimonial").then(res =>res.json() ))


   if(isLoading){
    return <Spiner/>
   }
    return (
        <div className=" px-3 ">
      <div className="bg-base-100 shadow-lg p-4 mt-3 h-[80vh] overflow-y-auto rounded-lg  w-full md:w-10/12 mx-auto">
        <h1 className="text-center text-2xl font-semibold my-4">
          All Testimonial
        </h1>{" "}
        <hr />
        <div class="overflow-x-auto mt-5">
          <table class="table w-full">
            {/* <!-- head --> */}
            {
              data ? 
              
              <>
            <thead>
              <tr>
                <th className="text-center">No</th>
                <th className="text-center">Name</th>
                <th className="text-center">image</th>
                <th className="text-center">Designation</th>
                <th className="text-center">Testimonial</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
               {
                data.map((testimonial,index) => <TestimonialRow key={index} testimonial={testimonial} refetch={refetch} index={index}  />)
               }
               
          
            </tbody>
                </>
                : 
                <h1 className="text-2xl font-semibold text-center">Data not available</h1>
            }
          </table>
        </div>
      </div>
    </div>
    );
};

export default AllTestimonial;