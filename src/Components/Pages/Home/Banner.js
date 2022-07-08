import React, { useEffect } from "react";
import myimage from "../../../image/my-image.png";
import Typed from "react-typed";
import { useQuery } from "react-query";
import Spiner from "../Dashboard/Spiner";
import { useState } from "react";
import TitleFlagArry from "./TitleFlagArry";

const Banner = () => {
  const [titleFlag, setTitleFLag] = useState([]);

  const { data, refetch, isLoading } = useQuery("banner", () =>
    fetch("https://polar-beach-10719.herokuapp.com/banner").then((res) =>
      res.json()
    )
  );

  useEffect(() => {
    fetch("https://polar-beach-10719.herokuapp.com/skillflag")
      .then((res) => res.json())
      .then((data) => setTitleFLag(data));
  }, []);

  if (isLoading) {
    return <Spiner />;
  }
  return (
    <section className="bg-primary " id="home">
      <div className="hero min-h-screen md:w-4/5 lg:w-4/5 w-full mx-auto mt-20 md:mt-10 lg:mt-10">
        <div className="hero-content flex-col flex-row-reverse md:flex-row  lg:flex-row">
          <div className="flex-1 flex justify-center md:justify-start items-center">
            <div>
              <h1 className="text-5xl font-bold text-base-100 text-center md:text-left">
                I'm <span className="capitalize"> {data?.name}</span>
              </h1>
              <p className="text-base-100 mt-2 text-2xl text-center md:text-left">
                I'm a{" "}
                {/* <span className="text-secondary">
                  <Typed
                    strings={titleFlag.map((flag) => flag.name + ".")}
                    typeSpeed={100}
                    backSpeed={50}
                    loop
                  />
                </span> */}
                <TitleFlagArry/>
              </p>
              <p className="py-6 text-base-100 text-center md:text-left">
                {data.about}
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  href="#contact"
                  className="btn btn-secondary rounded-full px-8"
                >
                  {data.button}
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={data.image} className="z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
