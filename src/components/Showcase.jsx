import React from "react";
import img1 from "../assets/pic-760.png";
import img2 from "../assets/pic-770.png";
import img3 from "../assets/pic-780.png";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

function Showcase() {
  const [openDemo, setOpenDemo] = useState(false);

  const { ref, inView, entry } = useInView({
    /* Optional options */
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { duration: 1.2 },
        opacity: [0.2, 0.4, 0.6, 0.8, 1],
      });
      animation2.start({
        x: 0,

        transition: { duration: 1.8 },
        opacity: [0.2, 0.3, 0.4, 0.9, 1],
      });
      animation3.start({
        x: 0,

        transition: { duration: 2.2 },
        opacity: [0.2, 0.3, 0.4, 0.9, 1],
      });
    }
    if (!inView) {
      animation.start({ x: "30vw", opacity: 0 });

      animation2.start({ x: "60vw", opacity: 0 });
      animation3.start({ x: "50vw", opacity: 0 });
    }
  }, [inView]);
  return (
    <section className=" relative scroll-area" ref={ref}>
      <div className="md:flex my-6 md:py-16 overflow-hidden ">
        <div className="md:hidden">
          <div className="relative">
            <img className="h-52 mx-auto w-52" src={img1} alt="scorer" />
            <img
              className="h-36 w-36 right-10 absolute top-24"
              src={img3}
              alt="scorer"
            />
            <img
              className="h-40 w-40 -mt-28 relative left-10  "
              src={img2}
              alt="scorer"
            />
          </div>
        </div>
        <div className="justify-center md:items-start  tracking-tight flex flex-col items-center md:px-10 -mt-5 md:mt-6 ">
          <h1 className="text-orange-400 text-2xl md:text-[34px] lg:text-[50px] xl:text-[58px] md:leading-[48px] lg:leading-[60px]  font-bold">
            DO YOU WANT A 99<sup>th</sup>
            <br /> PERCENTILE SCORE
            <br />
            ON YOUR <span className="text-blue-500">GMAT / GRE ?</span>
          </h1>
          <p className="text-center md:text-lg mt-4 lg:text-2xl md:my-6 lg:my-10 md:text-left font-medium">
            If yes, please read on.
            <br />
            Else, leave this page right now!
          </p>
          <div className="hidden md:block space-x-4 ">
            <button className="px-3 py-2 bg-[#ff9d01] text-slate-100 rounded-2xl">
              CONTACT US
            </button>
            <button
              onClick={() => setOpenDemo(true)}
              className="px-3 py-2 rounded-2xl text-slate-100 bg-[#ff9d01]"
            >
              LIVE DEMO
            </button>
          </div>
          <div className="flex md:hidden justify-center mt-3 ">
            <button
              onClick={() => setOpenDemo(true)}
              className=" px-3 uppercase font-semibold text-slate-100 py-2 rounded-xl bg-[#ff9d01] "
            >
              Request Demo
            </button>
          </div>
          {/* <h1 class="">DO YOU WANT A 99<sup>TH</sup>
          <br>PERCENTILE SCORE
          <br>ON YOUR <span>GMAT / GRE ?</span>   */}
        </div>
        <div className="hidden relative xl:mr-0 lg:-mr-[50px] flex-1 md:block">
          <motion.img
            animate={animation}
            className="xl:h-[375px] lg:h-[340px]  lg:w-[340px] xl:w-[375px] md:h-48 md:w-48 absolute right-0 "
            src={img1}
            alt=""
          />
          <motion.img
            animate={animation2}
            className="xl:h-[290px] xl:w-[290px] lg:h-[270px] lg:w-[270px] md:h-40 md:w-40 top-20 lg:top-28 absolute lg:right-52 right-28 "
            src={img3}
            alt=""
          />
          <motion.img
            animate={animation3}
            className="xl:h-[312px] xl:w-[312px] lg:h-[270px] lg:w-[270px] md:h-40 md:w-40 top-36 lg:top-52 absolute lg:right-4 right-2 "
            src={img2}
            alt=""
          />
        </div>
      </div>

      {openDemo && (
        <div className="absolute h-screen w-full  flex justify-between  bg-black text-white top-0 left-0 xl:h-screen z-50">
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
    </section>
  );
}

export default Showcase;
