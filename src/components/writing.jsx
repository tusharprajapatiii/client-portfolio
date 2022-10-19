import React, { useEffect } from "react";
import sandeep from "../assets/sandeep.png";
import GMAT from "../assets/GMATScore.png";
import GRE from "../assets/GREScore.jpg";
import sand from "../assets/san.png";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import ScoreModal from "./ScoreModal";
import "./slide.css";
import { FaLinkedin } from "react-icons/fa";

function Writing() {
  const [gmat, setGmat] = useState(false);
  const [gre, setGre] = useState(false);
  const [hide, setHide] = useState(false);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.3,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: { duration: 1 },
        opacity: [0.2, 0.4, 0.6, 0.8, 1],
      });
      setTimeout(() => {
        setHide(true);
      }, 2000);
    }
    if (!inView) {
      animation.start({ y: "10vh", opacity: 0 });
      setHide(false);
    }
  }, [inView, hide]);

  return (
    <section
      ref={ref}
      className={`md:flex scroll-area md:py-2 lg:py-2 relative ${
        hide ? "overflow-y-auto" : "overflow-y-hidden"
      } ${
        (gmat || gre) && "overlay"
      } lg:max-h-screen overflow-x-hidden  px-4 bg-blue-100 py-8 md:bg-white`}
    >
      <div className="lg:h-full lg:w-[25vw] relative md:basis-[37%] lg:basis-[30%]">
        <img
          className="h-48 mx-auto md:hidden w-36"
          src={sandeep}
          alt="sandeep"
        />
        <motion.div
          animate={animation}
          className={"hidden relative md:block h-full w-full"}
        >
          <motion.img
            className={` ${(gmat || gre) && "overlay"} h-full w-full`}
            src={sand}
            alt="Sandeep Gupta"
          />
          <span
            className={
              " hidden lg:flex absolute py-[6%] text-white bottom-[6%] mx-auto text-xs rounded-3xl bg-blue-500 px-[14%] right-[19%]"
            }
          >
            <h1>Meet Your Mentor</h1>
            <span className="ml-2 cursor-pointer">
              <FaLinkedin size={18} color="white" />
            </span>
          </span>
        </motion.div>
      </div>
      {/* <h1 className="text-center cursive md:hidden py-3">
        a note from sandeep gupta
      </h1> */}
      <div className="text-[12px]   md:basis-[63%] lg:basis-[70%] lg:h-[95%] lg:my-auto  line tracking-wider md:tracking-widest md:border-t-3 lg:text-sm xl:text-sm relative md:rounded-bl-[50px] md:text-xs  md:box md:border-t-4  md:border-blue-400 xl:py-6  md:px-6 md:py-4 px-2">
        <p className="mt-2">
          Hi, This is Sandeep Gupta, the foremost GMAT / GRE Trainer in Asia
          with perfect scores on both GMAT and GRE exams.
        </p>
        <div className="grid grid-rows-2 md:grid-cols-2 gap-2 md:flex my-4 xl:my-9  text-white font-bold text-[1.4rem] ">
          <div
            className="md:h-[18vh] mx-auto flex flex-col items-center w-full md:w-[20vw]"
            style={{
              backgroundImage: `url(${GMAT})`,
              backgroundBlendMode: "overlay",
              backgroundSize: "cover",
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
          >
            <h3 className="text-center md:text-[0.8rem] xl:text-[1.4rem] mt-3">
              GMAT:PERFECT 800
            </h3>
            <button
              onClick={() => {
                setGmat(true);
                setGre(false);
              }}
              className="py-1 mt-2 md:mt-4 px-2 mr-1 ml-1 border-2 font-semibold text-xs  border-black text-white bg-blue-500 rounded-md"
            >
              Click Here
            </button>
          </div>
          <div
            className="md:h-[18vh] h-[100px] flex flex-col w-full items-center mx-auto md:w-[20vw]"
            style={{
              backgroundImage: `url(${GRE})`,
              backgroundBlendMode: "overlay",
              backgroundSize: "cover",
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
          >
            <h3 className="text-center md:text-[0.8rem] xl:text-[1.4rem] mt-3">
              GRE:PERFECT 340
            </h3>
            <button
              onClick={() => {
                setGre(true);
                setGmat(false);
              }}
              className=" py-1 mt-2 md:mt-4 ml-1 px-2 border-2 text-xs font-semibold border-black text-white bg-yellow-500 rounded-md"
            >
              Click Here
            </button>
          </div>
        </div>
        <p>
          {" "}
          For the last 25+ years (since 1996), I have dedicated my life to
          making the dream of a GMAT / GRE 99th percentile score and of an Ivy
          League education come true for thousands of my students from places
          like Harvard, Stanford, MIT, and every other top university in the
          world for MBA, MS, and Ph.D. programs.
        </p>

        <p className="mt-3">
          The biggest strength of my teaching is that I am able to transfer my
          “Success-DNA” to my students – I repeat: my biggest achievement is not
          that I have scored the perfect scores on the GMAT/GRE multiple times
          but that, by using the same techniques that I used (OCTAVE, CLESSSP,
          PRIME, ACT, ANT, ACED, LINGO, and TRAPS), my students have been able
          to get similar successes on more than 20,000 occasions.
        </p>
        {/* <button
          onClick={() => {
            setGmat(true);
            setGre(false);
          }}
          className="py-1 px-2 mr-1 ml-1 border-2 font-semibold border-black text-white bg-orange-500 rounded-md"
        >
          GMAT
        </button>
        /
        <button
          onClick={() => {
            setGre(true);
            setGmat(false);
          }}
          className=" py-1 ml-1 px-2 border-2 font-semibold border-black text-white bg-orange-500 rounded-md"
        >
          GRE
        </button>{" "} */}
        {/* For the last 25+ years (since 1996), I have dedicated my life to making
        the dream of a GMAT / GRE 99th percentile score and of an Ivy League
        education come true for thousands of my students (from places like
        Harvard, Stanford, MIT, and every other top university in the world) for
        MBA, MS, and Ph.D. programs. The biggest strength of my teaching is that
        I am able to transfer my “Success-DNA” to my students – I repeat: my
        biggest achievement is not that I have scored the perfect scores on the
        GMAT/GRE multiple times but that, by using the same techniques that I
        used (OCTAVE, CLESSSP, PRIME, ACT, ANT, ACED, LINGO, and TRAPS), my
        students have been able to get similar successes on more than 20,000
        occasions. */}
        <button
          className={`hidden ${
            hide
              ? "bg-blue-500 text-white delay-[1000ms] transition-[2000ms]  "
              : "text-black"
          }    lg:block text-sm max-w-max mx-auto md:top-6 md:text-base  lg:text-xl xl:top-7 rounded-3xl  px-3 py-1 relative  text-center  xl:text-2xl`}
        >
          {" "}
          <Typewriter
            options={{
              strings: "Request a live demo session with Sandeep",
              autoStart: inView,
              wrapperClassName: "typewriter",
              cursor: " ",
              delay: 50,
            }}
          />
        </button>
      </div>
      {gmat && <ScoreModal gmat={gmat} setGmat={setGmat} Score={GMAT} />}
      {gre && <ScoreModal gre={gre} setGre={setGre} Score={GRE} />}
    </section>
  );
}

export default Writing;
