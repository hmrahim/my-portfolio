import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
const SingleTestimonial = () => {
    return (
        <SwiperSlide>
        <div class="card bg-base-100 shadow-xl ">
          <figure class="px-10 pt-10">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://api.lorem.space/image/face?hash=3174" />
              </div>
            </div>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-2xl font-semibold">HM RAHIM</h2>
            <p className="text-secondary">Front-end Developer</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit voluptate, doloribus magni blanditiis obcaecati eos
              voluptates laborum ipsam pariatur mollitia.
            </p>
          </div>
        </div>
      </SwiperSlide>
    );
};

export default SingleTestimonial;