import React from 'react';
import { useQuery } from 'react-query';
import ServiceRow from './ServiceRow';
import Spiner from './Spiner';

const AllServices = () => {
    const {data,refetch,isLoading} = useQuery("services",()=> fetch("http://localhost:5000/services").then(res =>res.json() ))


   if(isLoading){
    return <Spiner/>
   }
    return (
        <div className=" px-3 ">
      <div className="bg-base-100 shadow-lg p-4 mt-3 h-[80vh] overflow-y-auto rounded-lg  w-full md:w-10/12 mx-auto">
        <h1 className="text-center text-2xl font-semibold my-4">
          All Services
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
                <th className="text-center">Title</th>
                <th className="text-center">Description</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
               {
                data.map((service,index) => <ServiceRow key={index} service={service}  index={index} refetch={refetch}  />)
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

export default AllServices;