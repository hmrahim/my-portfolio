import React from "react";
import { useQuery } from "react-query";
import Typed from "react-typed";
import Spiner from "../Dashboard/Spiner";

const TitleFlagArry = () => {
  const { data, refetch, isLoading } = useQuery("titleflag", () =>
    fetch("https://polar-beach-10719.herokuapp.com/skillflag").then((res) =>
      res.json()
    )
  );

if(isLoading){
    return <Spiner/>
}
  
  return (
    <span className="text-secondary">
      <Typed
        strings={data.map((flag) => flag.name + ".")}
        typeSpeed={100}
        backSpeed={40}
        loop
      />
    </span>
  );
};

export default TitleFlagArry;
