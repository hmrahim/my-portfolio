import React from "react";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import logo from "../../../image/logo.png";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className=" ">
      <div className="navbar bg-primary ">
        <div className="w-full md:w-11/12 mx-auto">
          <div className="flex-1  flex items-center">
            <label
              for="my-drawer-2"
              tabindex="0"
              className="btn btn-primary btn-circle  flex md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <img src={logo} width={60} height={50} alt="" />
          </div>
          <div>
          <button onClick={logout} className="btn  btn-ghost px-4 text-white">
            {" "}
            Logout
          </button>
        </div>
        </div>
      
      </div>

      <div className="drawer drawer-mobile bg-base-300">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Page content here --> */}
          <Outlet/>
        </div>
        <Sidebar/>
      </div>
    </div>
  );
};

export default Dashboard;
