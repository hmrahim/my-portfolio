import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div class="drawer-side  overflow-y-auto">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <div className="overflow-y-auto">
      <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
        {/* <!-- Sidebar content here --> */}
        <div class="collapse collapse-plus bg-primary text-white rounded-lg mt-3">
          <input type="checkbox" class="peer" />
          <div class="collapse-title  font-bold">Settings</div>
          <div class="collapse-content  bg-base-300 text-black ">
            <li className="mt-3">
              <NavLink to="/admin/banner">Banner</NavLink>
            </li>
            <li className="mt-3">
              <NavLink to="/admin/about">About</NavLink>
            </li>
            <li className="mt-3">
              <NavLink to="/admin/skillflag">Skill Flag</NavLink>
            </li>
            <li className="mt-3">
              <NavLink to="/admin/contact">Contact</NavLink>
            </li>
            <li className="mt-3">
              <NavLink to="/admin/footer">Footer</NavLink>
            </li>
          
          </div>
        </div>
        <div class="collapse collapse-plus bg-primary text-white rounded-lg mt-3">
          <input type="checkbox" class="peer" />
          <div class="collapse-title  font-bold">Skills</div>
          <div class="collapse-content  bg-base-300 text-black ">
            <li className="mt-3">
              <NavLink to="/admin/skills">Add New skill</NavLink>
            </li>
            <li className="mt-3">
              <NavLink to="/admin/allskills">All skills</NavLink>
            </li>
          </div>
        </div>
        <div class="collapse collapse-plus bg-primary text-white rounded-lg mt-3">
          <input type="checkbox" class="peer" />
          <div class="collapse-title  font-bold">Images</div>
          <div class="collapse-content  bg-base-300 text-black ">
            <li className="mt-3">
              <NavLink to="/admin/images">Images</NavLink>
            </li>
            <li className="mt-3">
              <NavLink to="/admin/updateimages">Update images</NavLink>
            </li>
          </div>
        </div>
        <div class="collapse collapse-plus bg-primary text-white rounded-lg mt-3">
          <input type="checkbox" class="peer" />
          <div class="collapse-title  font-bold">Services</div>
          <div class="collapse-content  bg-base-300 text-black ">
            <li className="mt-3">
              <NavLink to="/admin/allservice">All Services</NavLink>
            </li>
            <li className="mt-3">
              <NavLink to="/admin/addservice">Add New Service</NavLink>
            </li>
          </div>
        </div>
        <div class="collapse collapse-plus bg-primary text-white rounded-lg mt-3">
          <input type="checkbox" class="peer" />
          <div class="collapse-title  font-bold">Projects</div>
          <div class="collapse-content  bg-base-300 text-black ">
            <li className="mt-3">
              <NavLink to="/admin/projects">All Projects</NavLink>
            </li>
            <li className="mt-3">
              <NavLink to="/admin/addproject">Add New Project</NavLink>
            </li>
          </div>
        </div>
        <div class="collapse collapse-plus bg-primary text-white rounded-lg mt-3">
          <input type="checkbox" class="peer" />
          <div class="collapse-title  font-bold">Testimonial</div>
          <div class="collapse-content  bg-base-300 text-black ">
            <li className="mt-3">
              <NavLink to="/admin/testimonial">All Testimonial</NavLink>
            </li>
            <li className="mt-3">
              <NavLink to="/admin/addtestimonial">Add New Testimonial</NavLink>
            </li>
          </div>
        </div>
      </ul>

      </div>
    </div>
  );
};

export default Sidebar;
