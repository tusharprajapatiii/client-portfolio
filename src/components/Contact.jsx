import React from "react";
import girl from "../assets/girl.png";

function Contact() {
  return (
    <section className="-m-3 md:m-0 scroll-area  relative ">
      <div className=" bg-black lg:h-[100vh] relative lg:flex ">
        <div className="flex justify-center h-[70vh] bg-black rounded-br-[120px] items-center basis-1/2  ">
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
      />
    </section>
  );
}

export default Contact;
