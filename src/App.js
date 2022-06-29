import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Pages/Header/Header";
import Home from "./Components/Pages/Home/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Details from "./Components/Pages/Home/Details";
import Footer from "./Components/Pages/Home/Footer";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Login from "./Components/Pages/Login/Login";
import RequireAuth from "./Components/Pages/Login/RequireAuth";
import Signup from "./Components/Pages/Login/Signup";
import DashboradHome from "./Components/Pages/Dashboard/DashboradHome";
import Skills from "./Components/Pages/Dashboard/Skills";
import AllSkill from "./Components/Pages/Dashboard/AllSkill";
import UpdateSkill from "./Components/Pages/Dashboard/UpdateSkill";
import UpdateImages from "./Components/Pages/Dashboard/UpdateImages";
import Images from "./Components/Pages/Dashboard/Images";

import AllServices from "./Components/Pages/Dashboard/AllServices";
import AddService from "./Components/Pages/Dashboard/AddService";
import UpdateService from "./Components/Pages/Dashboard/UpdateService";
import BannerSetting from "./Components/Pages/Dashboard/Setting/BannerSetting";
import AboutSetting from "./Components/Pages/Dashboard/Setting/AboutSetting";
import FooterSetting from "./Components/Pages/Dashboard/Setting/FooterSetting";
import ContactSetting from "./Components/Pages/Dashboard/Setting/ContactSetting";
import TitleFlag from "./Components/Pages/Dashboard/Setting/TitleFlag";
import AddFlag from "./Components/Pages/Dashboard/Setting/AddFlag";
import UpdateSkillFlag from "./Components/Pages/Dashboard/Setting/UpdateSkillFlag";

function App() {
  return (
    <div className="App" data-theme="light">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<RequireAuth />}>
          <Route path="/admin" element={<Dashboard/>}>
            <Route index element={<DashboradHome />} />
            <Route path="skills" element={<Skills />} />
            <Route path="banner" element={<BannerSetting />} />
            <Route path="about" element={<AboutSetting />} />
            <Route path="footer" element={<FooterSetting />} />
            <Route path="contact" element={<ContactSetting />} />
            <Route path="skillflag" element={<TitleFlag />} />
            <Route path="addflag" element={<AddFlag />} />
            <Route path="updateskillflag/:id" element={<UpdateSkillFlag/>} />

            <Route path="allskills" element={<AllSkill />} />
            <Route path="updateskill/:id" element={<UpdateSkill />} />
            <Route path="images" element={<Images/>} />
            <Route path="updateimages" element={<UpdateImages/>} />
            <Route path="addservice" element={<AddService/>} />
            <Route path="allservice" element={<AllServices/>} />
            <Route path="updateservice/:id" element={<UpdateService/>} />

          </Route>
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
