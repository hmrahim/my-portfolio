import React from "react";
import myimage from "../../../image/my-image.png";
import Typed from "react-typed"


const Banner = () => {
  return (
    <section className="bg-primary " id="home">
     
      <div class="hero min-h-screen md:w-4/5 lg:w-4/5 w-full mx-auto mt-20 md:mt-10 lg:mt-10">
        <div class="hero-content flex-col flex-row-reverse md:flex-row  lg:flex-row">
          <div className="flex-1 flex justify-center md:justify-start items-center">
            <div>
              <h1 class="text-5xl font-bold text-base-100 text-center md:text-left">
                I'm Hossain Mohammad Rahim
              </h1>
              <p className="text-base-100 mt-2 text-2xl text-center md:text-left">
                I'm a{" "}
                <span className="text-secondary">
                <Typed
      strings={[
            "Full Stack Developer.",
            "Front-end Developer.",
            "Backend Developer.",
            "Mern stack Developer.",
           
          ]}
          typeSpeed={100}
          backSpeed={50}
          loop
        />
                </span>
              </p>
              <p class="py-6 text-base-100 text-center md:text-left">
              Full-Stack Web Developer with knowledge of HTML5,CSS3,JavaScript ReactJs NextJs, Redux, Typescript, ExpressJs, NodeJs, MongoDB. Also has experience with developing backend APIs using JavaScript web frameworks.
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
    </section>
  );
};

export default Banner;
