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
import { BsTwitter } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import "./slide.css";
function Contact() {
  return (
    <section
      id="Contact"
      style={{
        backgroundImage: `url(${contact})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "-80px",
        height: "100vh",
      }}
      className="-m-3    md:m-0 scroll-area  flex justify-center items-center  relative "
    >
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
          {/* <div className=" flex justify-between items-center md:grid grid-cols-2 gap-1 text-xs rounded-tr-[30px] rounded-br-[30px] relative bottom-2 px-8 py-1 my-1 bg-orange-600">
            <span>
              <strong>
                Call us: <a href="tel:+919739561394">+91 97395-61394</a> &nbsp;{" "}
              </strong>
            </span>
            <span>
              <a
                className="hidden md:block"
                href="mailto:info@top-one-percent.com"
              >
                info@top-one-percent.com
              </a>
              <a href="mailto:info@top-one-percent.com">
                <GrMail fill="white" size={20} />
              </a>
            </span>
          </div> */}
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
{
  /* <div className=" bg-black lg:h-[100vh] relative lg:flex ">
<div className="flex justify-center h-[70vh] md:h-auto md:py-6 bg-black rounded-br-[120px] items-center basis-1/2  ">
  <div>
    <h1 className="text-slate-100 text-center py-8 font-semibold text-lg">
      DOWNLOAD SANDEEP'S GMAT SECRET
    </h1>
    <form className="flex flex-col gap-y-5 ">
      <input
        className="p-2 rounded-xl"
        type="text"
        placeholder="Name"
      />
      <input
        className="p-2 rounded-xl"
        type="text"
        placeholder="Email"
      />
      <input
        className="p-2 rounded-xl"
        type="text"
        placeholder="Phone"
      />
      <button
        className="p-2 rounded-2xl text-slate-100 font-medium bg-orange-500 "
        type="submit"
      >
        DOWNLOAD NOW
      </button>
    </form>
  </div>
</div>
<div className="flex-1 relative hidden md:flex justify-start items-start  rounded-tl-[120px] bg-sky-500"></div>
</div>
<img
className="  hidden   lg:block absolute -bottom-6 right-0 h-[120vh] w-[980px]"
src={girl}
alt="girl"
/> */
}
