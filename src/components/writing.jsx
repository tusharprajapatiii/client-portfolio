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

function Writing() {
  const [gmat, setGmat] = useState(false);
  const [gre, setGre] = useState(false);

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
    }
    if (!inView) {
      animation.start({ y: "10vh", opacity: 0 });
    }
  }, [inView]);
  return (
    <section
      ref={ref}
      className={`md:flex scroll-area md:py-8 lg:py-2 relative overflow-y-scroll overflow-x-hidden  px-10 bg-blue-100 py-8 md:bg-white`}
    >
      <div className="lg:h-[100vh] lg:w-[25vw] md:basis-[45%] lg:basis-[30%]">
        <img
          className="h-48 mx-auto md:hidden w-36"
          src={sandeep}
          alt="sandeep"
        />
        <motion.img
          animate={animation}
          className=" hidden md:block h-full w-full"
          src={sand}
          alt=""
        />
      </div>
      <h1 className="text-center cursive md:hidden py-3">
        a note from sandeep gupta
      </h1>
      <div className="text-[12px] md:basis-[70%] lg:leading-6 line tracking-wider md:tracking-widest md:border-t-3 lg:text-sm xl:text-base relative md:rounded-bl-[140px] md:text-xs lg:sm md:box md:border-t-4  md:border-blue-400 md:px-14 md:py-14 px-6">
        Hi, This is Sandeep Gupta, the foremost
        <button
          onClick={() => setGmat(true)}
          className="py-1 px-2 mr-1 ml-1 border-2 font-semibold border-black text-white bg-orange-500 rounded-md"
        >
          GMAT
        </button>
        /
        <button
          onClick={() => setGre(true)}
          className=" py-1 ml-1 px-2 border-2 font-semibold border-black text-white bg-orange-500 rounded-md"
        >
          GRE
        </button>{" "}
        Trainer in Asia with perfect scores on both exams. For the last 25+
        years (since 1996), I have dedicated my life to making the dream of a
        GMAT / GRE 99th percentile score and of an Ivy League education come
        true for thousands of my students (from places like Harvard, Stanford,
        MIT, and every other top university in the world) for MBA, MS, and Ph.D.
        programs. The biggest strength of my teaching is that I am able to
        transfer my “Success-DNA” to my students – I repeat: my biggest
        achievement is not that I have scored the perfect scores on the GMAT/GRE
        multiple times but that, by using the same techniques that I used
        (OCTAVE, CLESSSP, PRIME, ACT, ANT, ACED, LINGO, and TRAPS), my students
        have been able to get similar successes on more than 20,000 occasions.
        <div className=" hidden md:block md:top-6 md:text-xl lg:top-32  left-0 relative cursive text-center lg:text-3xl">
          {" "}
          <Typewriter
            options={{
              strings: "Request a live demo session with Sandeep",
              autoStart: inView,
              cursor: " ",
              delay: 50,
            }}
          />
        </div>
      </div>
      {gmat && <ScoreModal gmat={gmat} setGmat={setGmat} Score={GMAT} />}
      {gre && <ScoreModal gre={gre} setGre={setGre} Score={GRE} />}
    </section>
  );
}

export default Writing;
