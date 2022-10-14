import React from "react";
import contact from "../assets/contactu.jpg";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaGooglePlusG,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function Contact() {
  return (
    <section
      style={{
        backgroundImage: `url(${contact})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "-80px",
        height: "100vh",
      }}
      className="-m-3 md:m-0 scroll-area  flex justify-center items-center  relative "
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
      </div>
      <div className="z-20 absolute bottom-0 text-sm  bg-[#373737] text-white w-full ">
        <div className="flex justify-between">
          <div className="flex justify-between w-[40%] rounded-tr-[30px] rounded-br-[30px] relative bottom-2 px-8 py-2 bg-orange-600">
            <span>
              <strong>
                Call us: <a href="tel:+919739561394">+91 97395-61394</a> &nbsp;{" "}
              </strong>
            </span>
            <span>
              <a href="mailto:info@top-one-percent.com">
                info@top-one-percent.com
              </a>
            </span>
          </div>
          <div className="pr-4">
            Copyright © 2022 BOLD Education Pvt. Ltd. All Rights Reserved.
          </div>
        </div>
        <div className="flex my-2  justify-center space-x-4">
          <FaFacebookF size={25} color="white" />
          <FaYoutube size={25} color="white" />
          <FaInstagram size={25} color="white" />
          <FaLinkedin size={25} color="white" />
          {/* <FaGooglePlusG size={20} color="white" /> */}
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
