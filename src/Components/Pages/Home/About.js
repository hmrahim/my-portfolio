import React from "react";
import myimage2 from "../../../image/my-image2.png"
const About = () => {
  return (
    <section id="about">
      <div class="hero rounded-lg  bg-base-100  shadow-xl w-11/12 md:w-4/5 lg:w-4/5 mx-auto mt-[-60px] z-20 relative">
        <div class="flex flex-col md:flex-row  gap-4 p-5">
          <div className="flex-1 flex justify-center items-center ">
            <img
              src={myimage2}
              class="md:max-w-sm  rounded-lg bg-accent"
            />
          </div>
          
          <div className="">
            <h1 class="text-5xl font-bold ">About me</h1>
            <div>
              <p class="py-6">
              I am a web developer with proficiency in front-end technologies like React, JavaScript, HTML, and CSS and familiarity with back-end technologies such as NodeJS and ExpressJS.
              </p>
            </div>
            <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-5">
              
                <div class="form-control w-full max-w-xs my-3">
                  <label class="label">
                    <span class="label-text font-bold">HTML</span>
                    <span class="label-text-alt font-bold">95%</span>
                  </label>
                  <progress
                    class="progress progress-secondary w-full"
                    value="95"
                    max="100"
                  ></progress>
                </div>
                <div class="form-control w-full max-w-xs my-3">
                  <label class="label">
                    <span class="label-text font-bold">CSS</span>
                    <span class="label-text-alt font-bold">90%</span>
                  </label>
                  <progress
                    class="progress progress-secondary w-full"
                    value="90"
                    max="100"
                  ></progress>
                </div>
                <div class="form-control w-full max-w-xs my-3">
                  <label class="label">
                    <span class="label-text font-bold">JabaScript</span>
                    <span class="label-text-alt font-bold">80%</span>
                  </label>
                  <progress
                    class="progress progress-secondary w-full"
                    value="80"
                    max="100"
                  ></progress>
                </div>
                <div class="form-control w-full max-w-xs my-3">
                  <label class="label">
                    <span class="label-text font-bold">Bootstrap</span>
                    <span class="label-text-alt font-bold">90%</span>
                  </label>
                  <progress
                    class="progress progress-secondary w-full"
                    value="90"
                    max="100"
                  ></progress>
                </div>
                <div class="form-control w-full max-w-xs my-3">
                  <label class="label">
                    <span class="label-text font-bold">Tailwind</span>
                    <span class="label-text-alt font-bold">90%</span>
                  </label>
                  <progress
                    class="progress progress-secondary w-full"
                    value="90"
                    max="100"
                  ></progress>
                </div>
                <div class="form-control w-full max-w-xs my-3">
                  <label class="label">
                    <span class="label-text font-bold">ReactJs</span>
                    <span class="label-text-alt font-bold">85%</span>
                  </label>
                  <progress
                    class="progress progress-secondary w-full"
                    value="85"
                    max="100"
                  ></progress>
                </div>
                <div class="form-control w-full max-w-xs my-3">
                  <label class="label">
                    <span class="label-text font-bold">NodeJs</span>
                    <span class="label-text-alt font-bold">70%</span>
                  </label>
                  <progress
                    class="progress progress-secondary w-full"
                    value="70"
                    max="100"
                  ></progress>
                </div>
          
           
             
            </div>
            <a href="https://drive.google.com/file/d/1YKGbssa_Ab4jL2zpHXaCVADPZ8xedEOS/view?usp=sharing" target="_blank" class="btn btn-secondary rounded-full">Dawonload Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
