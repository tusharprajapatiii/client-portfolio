import React from "react";
import logo from "../assets/logo_main.png";
import main from "../assets/Asset-1.png";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./slide.css";
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
  const [openDemo, setOpenDemo] = useState(false);
  return (
    <section id="Start" className="bg-[#FF9D01] scroll-area relative">
      <div className="absolute top-3 right-3 rounded-md  bg-inherit  md:hidden  ">
        {!openMenu && (
          <GiHamburgerMenu
            onClick={() => setOpenMenu(true)}
            className="bg-white p-[3px] rounded-md"
            color="#FF9D01"
            size={40}
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
          openMenu ? "translate-y-[0%]" : "translate-y-[-100%]"
        } transition-all  duration-200 ease-linear text-[#FF9D01] bg-white w-full right-0 md:hidden `}
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
            <button
              onClick={() => setOpenDemo(true)}
              className="bg-[#164C87]  font-medium  shadow-blue-900 px-2 py-2 text-white  rounded-md"
            >
              Request a Live Demo with Sandeep
            </button>
          </ul>
        </div>
      </div>

      <div className=" h-[540px] md:h-[450px]  lg:h-full  flex flex-col">
        <div className="flex  justify-between relative  md:pt-8 items-start px-8">
          <div className=" hidden md:-ml-5 lg:ml-0   xl:mx-auto  md:block">
            {/* <FaFacebookF size={28} color="white" />
            <FaYoutube size={28} color="white" />
            <BsTwitter size={28} color="white" />
            <FaWhatsapp size={28} color="white" />
            <FaGooglePlusG size={32} color="white" /> */}
            <ul className="flex lg:gap-8 xl:gap-12 md:text-[15px] lg:text-base  cursor-pointer md:gap-4 font-semibold pr-12  text-white">
              <li>
                <a
                  target="_blank"
                  href="https://www.top-one-percent.com/classroom_course.php"
                >
                  GMAT
                </a>
              </li>
              <li>
                <a href="#Success">SUCCESS STORIES</a>
              </li>
              <li>
                <a href="#About"> ABOUT US</a>
              </li>
              <li>
                <a target="_blank" href="https://the-bold-you.blogspot.com/">
                  BLOGS
                </a>{" "}
              </li>
              <li>
                <a href="#Contact">CONTACT US</a>
              </li>
            </ul>
            <button
              onClick={() => setOpenDemo(true)}
              className="bg-[#164C87] py-[6px] font-medium shadow-md  absolute top-[50%] text-white  right-2 xl:right-[2%] px-3 rounded-md"
            >
              Request a Live Demo with Sandeep
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
      {openDemo && (
        <div className="fixed overflow-auto h-full w-full  flex justify-between  bg-black text-white top-0 left-0 xl:h-screen z-50">
          <div className="w-full xl:w-[27vw] bg-[#FF9D01] ">
            <span
              onClick={() => setOpenDemo(false)}
              className="py-2 px-3 text-xl font-bold bg-[#FF9D01] float-right xl:hidden text-white  "
            >
              X
            </span>
            <h3 className="lg:px-6 lg:text-lg my-4  px-12 font-semibold">
              To Fix your Demo Appointment, Call / Whatsapp / Text immediately
              to +9197395-61394
            </h3>
            <div className="h-full  text-center  ">
              <form
                className="flex max-w-lg mx-auto h-fit my-auto flex-col text-black py-8  lg:py-6 justify-between space-y-5 xl:space-y-3 px-8 bg-black "
                action=""
                onSubmit={(e) => e.preventDefault()}
              >
                <h2 className="text-2xl mb-2 text-white font-bold">
                  Request for a Demo
                </h2>

                <input
                  className="h-8 rounded-sm"
                  type="text"
                  placeholder="NAME"
                />
                <input
                  className="h-8 rounded-sm"
                  type="email"
                  placeholder="EMAIL"
                />
                <input
                  className="h-8 rounded-sm"
                  type="number"
                  placeholder="+91"
                />
                <input
                  className="h-8 rounded-sm"
                  type="tel"
                  placeholder="Phone"
                />
                <input
                  className="h-8 rounded-sm"
                  type="text"
                  placeholder="Select Course"
                />
                <input
                  className="h-8 rounded-sm"
                  type="text"
                  placeholder="How did you hear about us"
                />

                <button
                  type="submit"
                  className="bg-[#FF9D01] text-white w-fit mx-auto px-3 py-2 rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="xl:w-[73vw] hidden xl:block relative text-black bg-white">
            <div className="text-center mt-2 py-5">
              <h1 className="text-3xl 2xl:text-4xl font-bold">
                This is the START to your 99%ile Score
              </h1>
              <h6 className="text-sm 2xl:text-base py-1">
                Schedule a one-on-one Demo Session and a Call with Sandeep
              </h6>
            </div>
            <div className="pl-20 2xl:text-xl pr-6">
              <h3 className="text-lg 2xl:text-xl font-bold">
                Let’s schedule your personalized demo + call with Sandeep
              </h3>
              <p>
                We will call you briefly to understand you: your academic and
                work background, your target score, your target b-schools /
                universities, whether you are starting afresh or have had any
                exposure to the test, your strong and weak areas, your timelines
                etc.
              </p>
              <br />
              <p>
                In this call, we will try to understand how much time you can
                spend per day or per week and guide you for your next plan of
                action. We will suggest the right material for your specific
                needs. We will also customize the entire GMAT preparation for
                you.
              </p>
              <br />
              <p>
                Thereafter, we will take up all your questions / doubts /
                queries, address them one by one, and guide you on the next
                steps.
              </p>
              <br />
              <p></p>
              <h3 className="text-lg 2xl:text-xl font-bold">
                Transform Your Ivy-League Dream School Into Reality
              </h3>
              <p>
                The single call / demo appointment can change your entire
                direction of your efforts towards the 99th percentile(760-800
                range) score on the GMAT.
              </p>
            </div>
            <span
              onClick={() => setOpenDemo(false)}
              className="py-2 px-3 texxl font-bold cursor-pointer bg-[#FF9D01] absolute text-black right-4 top-0 "
            >
              X
            </span>
          </div>
        </div>
      )}
      <h2 className="absolute uppercase  bold1 text-shadow-1 xl:block text-base xl:tracking-[0.04em]  text-white bottom-3  xl:text-lg text-center w-full ">
        Transforming Your Ivy-League Dream School Into Reality
      </h2>
    </section>
  );
}

export default Start;
