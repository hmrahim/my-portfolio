import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import user1 from "../../../image/user/user1.jpg"
import user2 from "../../../image/user/user2.jpg"
import user3 from "../../../image/user/user3.jpg"
import user4 from "../../../image/user/user4.jpg"
import user5 from "../../../image/user/user5.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Testimonial = () => {
    const testimonials = [
        {
            name:"HM RAHIM",
          img:user1,
          desig:"Back-end Developer",
          desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe reiciendis inventore molestias rerum sint nesciunt reprehenderitbeatae esse dolore qui veritatis magnam fuga possimus eos porro, sedperferendis officia mollitia!"
        },
        {
            name:"SAROAR ALOM",
          img:user2,
          desig:"Front-end Developer",
          desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe reiciendis inventore molestias rerum sint nesciunt reprehenderitbeatae esse dolore qui veritatis magnam fuga possimus eos porro, sedperferendis officia mollitia!"
        },
        {
            name:"SHIBLY NOMANY",
          img:user3,
          desig:"Web Designer",
          desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe reiciendis inventore molestias rerum sint nesciunt reprehenderitbeatae esse dolore qui veritatis magnam fuga possimus eos porro, sedperferendis officia mollitia!"
        },
        {
            name:"TANVIR RAHMAN",
          img:user4,
          desig:"Mern Stack Developer",
          desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe reiciendis inventore molestias rerum sint nesciunt reprehenderitbeatae esse dolore qui veritatis magnam fuga possimus eos porro, sedperferendis officia mollitia!"
        },
        {
            name:"BIR BAHADUR",
          img:user5,
          desig:"Full-Stack Developer",
          desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe reiciendis inventore molestias rerum sint nesciunt reprehenderitbeatae esse dolore qui veritatis magnam fuga possimus eos porro, sedperferendis officia mollitia!"
        },
      
      ]
  return (
    <div className="w-full mt-10 bg-primary py-10 pt-0" id="testimonial">
      <h1 className="text-4xl font-semibold text-center text-base-100 my-5 pt-5">
        Clients Testimonials
      </h1>
      <p className="w-full md:w-1/2 lg:w-1/2 mb-10 mx-auto text-center text-base-100 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        blandit massa Nullam id varius nunc id varius nunc.
      </p>
      <div className="w-4/5 mx-auto">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
        >
{
    testimonials.map(testi=>       
    <SwiperSlide>
        <div class="card bg-base-100 shadow-xl ">
          <figure class="px-10 pt-10">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={testi.img} />
              </div>
            </div>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-2xl font-semibold">{testi.name}</h2>
            <p className="text-secondary">{testi.desig}</p>
            <p>
           {testi.desc}
            </p>
          </div>
        </div>
      </SwiperSlide>)
}
    
     
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
