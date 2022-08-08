import React from "react";
import img1 from "../assets/pic-760.png";
import img2 from "../assets/pic-770.png";
import img3 from "../assets/pic-780.png";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function Showcase() {
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
    <section className="  scroll-area" ref={ref}>
      <div className="md:flex my-6 md:py-16 overflow-hidden ">
        <div className="md:hidden">
          <div className="relative">
            <motion.img
              animate={animation}
              className="h-52 mx-auto w-52"
              src={img1}
              alt=""
            />
            <motion.img
              animate={animation2}
              className="h-36 w-36 right-10 absolute top-24"
              src={img3}
              alt=""
            />
            <motion.img
              animate={animation3}
              className="h-40 w-40 -mt-28 relative left-10  "
              src={img2}
              alt=""
            />
          </div>
          <div className="flex justify-center -mt-12 ">
            <button className=" px-3 font-semibold text-slate-100 py-2 rounded-xl bg-orange-600 ">
              CONTACT US
            </button>
          </div>
        </div>
        <div className="justify-center md:items-start flex flex-col items-center md:px-10 mt-6 ">
          <h1 className="text-orange-400 text-2xl md:text-[40px] lg:text-[54px] md:leading-[60px] font-bold">
            DO YOU WANT A 99<sup>th</sup>
            <br /> PERCENTILE SCORE
            <br />
            ON YOUR <span className="text-blue-500">GMAT / GRE ?</span>
          </h1>
          <p className="text-center md:text-lg mt-4 lg:text-2xl md:my-10 md:text-left font-medium">
            If yes, please read on.
            <br />
            Else, leave this page right now!
          </p>
          <div class="hidden md:block space-x-4 ">
            <button class="px-3 py-2 bg-orange-500 text-slate-100 rounded-2xl">
              CONTACT US
            </button>
            <button class="px-3 py-2 rounded-2xl text-slate-100 bg-orange-500">
              BOOK MEETING
            </button>
          </div>
          {/* <h1 class="">DO YOU WANT A 99<sup>TH</sup>
          <br>PERCENTILE SCORE
          <br>ON YOUR <span>GMAT / GRE ?</span>   */}
        </div>
        <div className="hidden relative flex-1 md:block">
          <motion.img
            animate={animation}
            className="lg:h-80 lg:w-80 md:h-48 md:w-48 absolute right-0 "
            src={img1}
            alt=""
          />
          <motion.img
            animate={animation2}
            className="lg:h-60 lg:w-60 md:h-40 md:w-40 top-20 lg:top-28 absolute lg:right-44 right-20 "
            src={img3}
            alt=""
          />
          <motion.img
            animate={animation3}
            className="lg:h-64 lg:w-64 md:h-40 md:w-40 top-36 lg:top-48 absolute lg:right-10 right-2 "
            src={img2}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Showcase;
