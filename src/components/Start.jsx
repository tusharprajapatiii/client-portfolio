import React from "react";
import logo from "../assets/logo_main.png";
import main from "../assets/Asset-1.png";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaGooglePlusG,
} from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
function Start() {
  return (
    <section className="bg-[#FF9D01] scroll-area">
      <div className="h-[60vh] flex flex-col">
        <div className="flex justify-between pt-8 px-14">
          <div>
            <img className="md:h-20 h-8 w-16 md:w-24 " src={logo} alt="logo" />{" "}
          </div>
          <div className="space-x-3 hidden md:flex">
            <FaFacebookF size={28} color="white" />
            <FaYoutube size={28} color="white" />
            <BsTwitter size={28} color="white" />
            <FaWhatsapp size={28} color="white" />
            <FaGooglePlusG size={32} color="white" />
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <img className="md:h-72 h-32 w-32 md:w-80" src={main} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Start;
