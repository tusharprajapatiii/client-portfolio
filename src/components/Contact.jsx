import React from "react";
import contact from "../assets/contactu.jpg";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaGooglePlusG,
  FaLinkedin,
  FaPhone,
  FaInstagram,
  FaMailchimp,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import "./slide.css";
function Contact() {
  return (
    <section
      id="Contact"
      style={{
        backgroundImage: `url(${contact})`,
        backgroundRepeat: "no-repeat",
      }}
      className="-m-3  background   md:m-0 scroll-area  flex justify-center items-center  relative "
    >
      <h1 className="bg-black absolute top-0 left-0 uppercase md:hidden text-[110%] mt-4 md:text-[180%]  font-extrabold tracking-[0.1em] w-full py-3 text-center text-white ">
        Download Sandeep's secrets
      </h1>
      <div className="absolute hidden lg:block  right-0  w-[43%]  h-[50vh] lg:top-[26%] xl:top-[30%] bg-[#f5f5f5] "></div>
      <div className=" block lg:absolute right-[6%] z-10 w-96 mx-auto max-w-xs  top-[37%] ">
        <form className="flex flex-col   gap-y-5   ">
          <input
            className="p-2 h-[35px] w-full text-white rounded-xl bg-black font-extrabold"
            type="text"
            placeholder="NAME"
          />
          <input
            className="p-2  h-[35px] rounded-xl text-white bg-black"
            type="text"
            placeholder="EMAIL"
          />
          <input
            className="p-2 h-[35px]  rounded-xl text-white bg-black"
            type="text"
            placeholder="PHONE"
          />
          <button
            className="p-2 rounded-2xl w-60 mx-auto mt-5 bg-blue-700 text-slate-100 font-medium  "
            type="submit"
          >
            DOWNLOAD NOW
          </button>
        </form>
        <div className="xl:flex hidden   mt-8 z-50 cursor-pointer justify-center space-x-4">
          <a
            target="_blank"
            href="https://www.facebook.com/toponepercent.gmatgre/"
          >
            <FaFacebookF size={18} color="blue" />
          </a>
          <a
            target="_blank"
            href=" https://www.youtube.com/channel/UCokGO_K5Ws51EZVx31JoZMA"
          >
            <FaYoutube size={18} color="red" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/toponepercent.gmatgre/?hl=en"
          >
            <FaInstagram size={18} fill="purple" />
          </a>
          <a
            target="_blank"
            href=" https://www.linkedin.com/in/sandeep-gupta-gmat-800-gre-340/"
          >
            <FaLinkedin size={18} color="blue" />
          </a>
          <a href="mailto:info@top-one-percent.com">
            <GrMail fill="red" size={18} />
          </a>
          <a href="tel:+919739561394">
            <FaPhone size={18} color="blue" />
          </a>
        </div>
      </div>
      <div className="z-20 absolute bottom-0 text-sm flex py-1 flex-col-reverse  bg-[#373737] text-white w-full ">
        <div className="flex flex-col">
          <div className="flex xl:hidden z-50 py-1 cursor-pointer justify-center space-x-4">
            <a
              target="_blank"
              href="https://www.facebook.com/toponepercent.gmatgre/"
            >
              <FaFacebookF size={18} color="white" />
            </a>
            <a
              target="_blank"
              href=" https://www.youtube.com/channel/UCokGO_K5Ws51EZVx31JoZMA"
            >
              <FaYoutube size={18} color="white" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/toponepercent.gmatgre/?hl=en"
            >
              <FaInstagram size={18} fill="white" />
            </a>
            <a
              target="_blank"
              href=" https://www.linkedin.com/in/sandeep-gupta-gmat-800-gre-340/"
            >
              <FaLinkedin size={18} color="white" />
            </a>
            <a href="mailto:info@top-one-percent.com">
              <GrMail fill="white" size={18} />
            </a>
            <a href="tel:+919739561394">
              <FaPhone size={18} color="white" />
            </a>
          </div>
          <h1 className=" text-[12px] py-1 text-center md:text-[14px]  ">
            Copyright © 2022 BOLD Education Pvt. Ltd. All Rights Reserved.
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Contact;
