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
      <div className=" h-[60vh] md:h-[inherit]  lg:h-full  flex flex-col">
        <div className="flex justify-between relative pt-8 px-14">
          <div className=" hidden  lg:mx-auto  md:block">
            {/* <FaFacebookF size={28} color="white" />
            <FaYoutube size={28} color="white" />
            <BsTwitter size={28} color="white" />
            <FaWhatsapp size={28} color="white" />
            <FaGooglePlusG size={32} color="white" /> */}
            <ul className="flex lg:gap-8 xl:gap-12 md:gap-4 font font-extrabold pr-12 gru text-white">
              <li>GMAT</li>
              <li>Success Stories</li>
              <li>About Us</li>
              <li> Blogs</li>
              <li>Contact Us</li>
            </ul>
            <button className="bg-blue-700 py-[6px] shadow-md shadow-blue-900 absolute top-[50%] text-white font-semibold right-2 xl:right-[2%] px-3 rounded-md">
              Request a live demo with Sandeep
            </button>
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
            transition={{ duration: 2, ease: "linear", delay: 0.5 }}
            className="absolute top-[39%] left-[68%] "
          >
            <AiFillStar color="yellow " className="h-3 w-3 md:h-6 md:w-6" />
          </motion.span>
          <img className="md:h-72 h-32 w-32 md:w-80" src={main} alt=""></img>
        </div>
        {/* <span className="sticky bottom-2 right-4">what</span> */}
      </div>
    </section>
  );
}

export default Start;
