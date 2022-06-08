import React from "react";
import myimage from "../../../image/my-image.png";

const Banner = () => {
  return (
    <div className="bg-primary ">
      <div class="hero min-h-screen md:w-4/5 lg:w-4/5 w-full mx-auto">
        <div class="hero-content flex-col flex-row-reverse md:flex-row  lg:flex-row">
          <div className="flex-1 flex justify-center md:justify-start items-center">
            <div>
              <h1 class="text-5xl font-bold text-base-100 text-center md:text-left">
                I'm Hossain Mohammad Rahim
              </h1>
              <p className="text-base-100 mt-2 text-center md:text-left">
                I'm a{" "}
                <span className="text-secondary">full stack web developer</span>
              </p>
              <p class="py-6 text-base-100 text-center md:text-left">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div className="flex justify-center md:justify-start">
                <button class="btn btn-secondary rounded-full px-8">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={myimage} class="z-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
