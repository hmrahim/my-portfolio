import React from "react";

const About = () => {
  return (
    <section id="about">
      <div class="hero  bg-base-100  shadow-2xl w-11/12 md:w-4/5 lg:w-4/5 mx-auto mt-[-60px] z-50 relative">
        <div class="flex flex-col md:flex-row  gap-4 p-5">
          <div className="flex-1">
            <img
              src="https://api.lorem.space/image/movie?w=260&h=400"
              class="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="">
            <h1 class="text-5xl font-bold">About me</h1>
            <div>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="my-3 grid grid-cols-1 md:grid-cols-2">
              
                <div class="form-control w-full max-w-xs my-3">
                  <label class="label">
                    <span class="label-text font-bold">HTML</span>
                    <span class="label-text-alt font-bold">50%</span>
                  </label>
                  <progress
                    class="progress progress-secondary w-full"
                    value="50"
                    max="100"
                  ></progress>
                </div>
                <div class="form-control w-full max-w-xs my-3">
                  <label class="label">
                    <span class="label-text font-bold">HTML</span>
                    <span class="label-text-alt font-bold">50%</span>
                  </label>
                  <progress
                    class="progress progress-secondary w-full"
                    value="50"
                    max="100"
                  ></progress>
                </div>
          
           
             
            </div>
            <button class="btn btn-secondary rounded-full">Dawonload Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
