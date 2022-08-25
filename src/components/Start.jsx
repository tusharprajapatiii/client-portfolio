import React from "react";
import logo from "../assets/logo_main.png";
import main from "../assets/Asset-1.png";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaGooglePlusG,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
function Start() {
  return (
    <section className="bg-[#FF9D01] scroll-area">
      <div className=" h-[60vh] md:h-auto lg:h-full flex flex-col">
        <div className="flex justify-between pt-8 px-14">
          <div>
            <img className=" md:h-9 md:w-14 h-7 w-10  " src={logo} alt="logo" />{" "}
          </div>
          <div className="space-x-3 hidden md:flex">
            {/* <FaFacebookF size={28} color="white" />
            <FaYoutube size={28} color="white" />
            <BsTwitter size={28} color="white" />
            <FaWhatsapp size={28} color="white" />
            <FaGooglePlusG size={32} color="white" /> */}
            <ul className="flex gap-14 font-semibold pr-12 gru text-white">
              <li>GMAT</li>
              <li>Success Stories</li>
              <li>About Us</li>
              <li> Blogs</li>
              <li>Contact Us</li>

              <li></li>
            </ul>
          </div>
        </div>
        <div className="flex relative m-auto">
          <span className="absolute top-[39%] left-[68%] ">
            <AiOutlineStar color="white " className="h-3 w-3 md:h-6 md:w-6" />
          </span>
          <motion.span
            initial={{ x: "-35vh", y: "50vh", scale: 5 }}
            animate={{
              x: ["-30vh", "-25vh", "-20vh", "-10vh", "0vh"],
              y: ["-20vh", "-50vh", "-20vh", "20vh", "0vh"],
              scale: 1,
            }}
            transition={{ duration: 2, ease: "linear" }}
            className="absolute top-[39%] left-[68%] "
          >
            <AiFillStar color="yellow " className="h-3 w-3 md:h-6 md:w-6" />
          </motion.span>
          <img className="md:h-72 h-32 w-32 md:w-80" src={main} alt=""></img>
        </div>
      </div>
    </section>
  );
}

export default Start;
