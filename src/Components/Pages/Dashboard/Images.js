import React from "react";
import { useQuery } from "react-query";

const Images = () => {
    const {data,isLoading,refetch} = useQuery("images",()=> fetch("https://polar-beach-10719.herokuapp.com/images").then(res=> res.json()))

console.log(data?.slice(0)[0].logo)
    refetch()
  return (
    <div className="px-3">
      <div className="bg-base-100 shadow-lg p-4 mt-3 rounded-lg  w-full md:w-3/5 mx-auto">
        <h1 className="text-center text-2xl font-semibold  my-4">Images</h1>{" "}
        <hr />
        <div className="flex gap-5 items-center flex-col md:flex-row justify-around">
          <div>
            <h1 className="text-center text-xl font-semibold mb-4">Logo</h1>
            <img className="bg-accent rounded-xl shadow-lg" width={250} src={data?.slice(0)[0].logo} alt="" />
          </div>
          <div>
            <h1 className="text-center text-xl font-semibold mb-4">Banner Image</h1>
            <img className="bg-accent rounded-xl shadow-lg" src={data?.slice(0)[0].banner} alt="" />
          </div>
          <div>
            <h1 className="text-center text-xl font-semibold mb-4">About Image</h1>
            <img className="bg-accent rounded-xl shadow-lg" src={data?.slice(0)[0].about} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
