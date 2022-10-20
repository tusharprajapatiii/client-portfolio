import React from "react";
import logo from "../assets/logo_main.png";
import main from "../assets/Asset-1.png";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import { motion } from "framer-motion";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { useState } from "react";
const variants = {
  show: { opacaity: 1, y: 0, transition: { duration: 0.2 } },
  close: { opacaity: 0, y: "-100%", transition: { duration: 0.2 } },
};
function Start() {
  const [openMenu, setOpenMenu] = useState();

  return (
    <section id="Start" className="bg-[#FF9D01] scroll-area relative">
      <div className="absolute top-4 right-4 rounded-md  border-2 bg-inherit border-white md:hidden  ">
        {!openMenu && (
          <GiHamburgerMenu
            onClick={() => setOpenMenu(true)}
            className="bg-white p-1"
            color="#FF9D01"
            size={44}
          />
        )}
      </div>

      <div
        // animate={openMenu ? "show" : "close"}
        // variants={variants}
        // initial={{ y: -300 }}
        // animate={{ y: 0 }}
        // transition={{ duration: 0.1 }}
        className={`absolute  top-0 z-40 pb-3 ${
          openMenu && "translate-y-0"
        } transition-all translate-y-[-100%] duration-200 ease-linear text-[#FF9D01] bg-white w-full right-0 md:hidden `}
      >
        <div className="flex justify-end p-2">
          <AiOutlineClose onClick={() => setOpenMenu(false)} size={30} />
        </div>
        <div className=" flex justify-center transition-all duration-1000 ease-linear items-center">
          <ul className="flex mt-2 flex-col transition-all duration-1000 ease-linear space-y-4 cursor-pointer text-center  font-bold  ">
            <li>
              <a
                className="transition-all duration-1000 ease-linear"
                target="_blank"
                href="https://www.top-one-percent.com/classroom_course.php"
              >
                GMAT
              </a>
            </li>
            <li>
              <a
                className="transition-all duration-1000 ease-linear"
                href="#Success"
              >
                Success Stories
              </a>
            </li>
            <li>
              <a
                className="transition-all duration-1000 ease-linear"
                href="#About"
              >
                {" "}
                About Us
              </a>
            </li>
            <li>
              <a
                className="transition-all duration-1000 ease-linear"
                target="_blank"
                href="https://the-bold-you.blogspot.com/"
              >
                Blogs
              </a>{" "}
            </li>
            <li>
              <a
                className="transition-all duration-1000 ease-linear"
                href="#Contact"
              >
                Contact Us
              </a>
            </li>
            <button className="bg-blue-700  font-medium  shadow-blue-900 px-2 py-2 text-white  rounded-md">
              Request a live demo with Sandeep
            </button>
          </ul>
        </div>
      </div>

      <div className=" h-[540px] md:h-[450px]  lg:h-full  flex flex-col">
        <div className="flex justify-between relative pt-8 items-start px-8">
          <div className=" hidden  xl:mx-auto  md:block">
            {/* <FaFacebookF size={28} color="white" />
            <FaYoutube size={28} color="white" />
            <BsTwitter size={28} color="white" />
            <FaWhatsapp size={28} color="white" />
            <FaGooglePlusG size={32} color="white" /> */}
            <ul className="flex lg:gap-8 xl:gap-12 cursor-pointer md:gap-4 font-semibold pr-12 gru text-white">
              <li>
                <a
                  target="_blank"
                  href="https://www.top-one-percent.com/classroom_course.php"
                >
                  GMAT
                </a>
              </li>
              <li>
                <a href="#Success">Success Stories</a>
              </li>
              <li>
                <a href="#About"> About Us</a>
              </li>
              <li>
                <a target="_blank" href="https://the-bold-you.blogspot.com/">
                  Blogs
                </a>{" "}
              </li>
              <li>
                <a href="#Contact">Contact Us</a>
              </li>
            </ul>
            <button className="bg-blue-700 py-[6px] font-medium shadow-md shadow-blue-900 absolute top-[50%] text-white  right-2 xl:right-[2%] px-3 rounded-md">
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
