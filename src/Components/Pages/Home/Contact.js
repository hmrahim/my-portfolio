import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import location from "../../../image/icon/location.png";
import mobile from "../../../image/icon/smartphone.png";
import email from "../../../image/icon/message.png";
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q0bigfb",
        "template_28pt70h",
        form.current,
        "J8q5HaF_fx_mJWgAB"
      )
      .then(
        (result) => {
          toast.success("Message sent succesfully!")
          e.target.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="w-full md:w-4/5 lg:w-4/5 mx-auto mt-10 px-6 md:px-0 py-5"
      id="contact"
    >
      {/* <h1 className='text-4xl font-semibold text-center mb-8'>Contact</h1> */}
      <div className="flex flex-col md:flex-row lg:flex-row gap-5">
        <div className="flex-1">
          <h1 className=" font-semibold text-4xl ">Get In Touch</h1>
          <div className="flex gap-4 mt-5">
            <img
              src={location}
              alt=""
              className="bg-secondary rounded-full h-12 w-12 p-3"
            />
            <div>
              <h3 className="text-xl font-semibold">Address</h3>
              <p className="text-base-400">Brahmanbaria,Bangladesh</p>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <img
              src={mobile}
              alt=""
              className="bg-secondary rounded-full h-12 w-12 p-3"
            />
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-base-400">+88 01886 463 596</p>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <img
              src={email}
              alt=""
              className="bg-secondary rounded-full h-12 w-12 p-3"
            />
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-base-400">h.m.rahimnet@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <form
            ref={form}
            onSubmit={sendEmail}
            action=""
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                
              <input
              required
                name="name"
                type="text"
                placeholder="Enter Name"
                class="input input-bordered w-full rounded-full"
              />
              <input
              required
                name="email"
                type="text"
                placeholder="Enter Email"
                class="input input-bordered w-full rounded-full"
              />
              <input
              required
                name="phone"
                type="text"
                placeholder="Enter Phone No"
                class="input input-bordered w-full rounded-full"
              />
              <input
              required
                name="subject"
                type="text"
                placeholder="Enter Subject"
                class="input input-bordered w-full rounded-full"
              />
            </div>


            <textarea
            required
              name="message"
              class="textarea textarea-bordered w-full rounded-xl"
              placeholder="Message"
            ></textarea>
            <div>
              <button className="btn btn-secondary rounded-full">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
