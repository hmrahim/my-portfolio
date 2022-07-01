import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
const SingleTestimonial = () => {
    return (
        <SwiperSlide>
        <div className="card bg-base-100 shadow-xl ">
          <figure className="px-10 pt-10">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://api.lorem.space/image/face?hash=3174" />
              </div>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-semibold">HM RAHIM</h2>
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