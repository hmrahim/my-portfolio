import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../image/logo.png"

const Header = () => {
  const menu = (
    <>
      <li>
        <a href="/#home" className="text-black md:text-base-100 lg:text-base-100">Home</a>
      </li>

      <li>
        <a href="#about" className="text-black md:text-base-100 lg:text-base-100">About</a>
      </li>
      <li>
        <a href="#services" className="text-black md:text-base-100 lg:text-base-100">Services</a>
      </li>
      <li>
        <a href="#projects" className="text-black md:text-base-100 lg:text-base-100">Projects</a>
      </li>
    
      <li>
        <a href="#testimonial" className="text-black md:text-base-100 lg:text-base-100">Testimonial</a>
      </li>
      <li>
        <a href="#contact" className="text-black md:text-base-100 lg:text-base-100">Contact</a>
      </li>
      <li>
        <a href="#blogs" className="text-black md:text-base-100 lg:text-base-100">Blogs</a>
      </li>
    </>
  );
  return (
    <div className="bg-primary text-base-100 fixed left-0 right-0 z-50 top-0">
      <div class="navbar  w-full md:w-4/5 mx-auto lg:w-4/5 mx-auto">
        <div class="navbar-start ">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <a class="">
           
            <img src={logo} alt="Logo" width={80}  />
           
            </a>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{menu}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
