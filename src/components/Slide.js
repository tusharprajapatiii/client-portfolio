import React, { useEffect, useState } from "react";
import peopl from "../data.js";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./slide.css";
import Card from "./Card";

function Slide() {
  // const [start, setStart] = useState(false);
  const [people, setPeople] = useState(peopl);
  const [index, setIndex] = React.useState(0);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.3,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  // useEffect(() => {
  //   if (inView) {
  //     setTimeout(() => {
  //       setStart(true);
  //     }, 2000);
  //   } else {
  //     setStart(false);
  //   }
  //   console.log(start);
  // }, [inView]);

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 5000);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [index]);
  // useEffect(() => {
  //   const lastIndex = people.length - 1;
  //   if (index < 0) {
  //     setIndex(lastIndex);
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0);
  //   }
  // }, [index, people]);
  // useEffect(() => {
  //   console.log(inView);
  //   if (inView) {
  //     animation.start({
  //       y: 0,
  //       transition: { duration: 2 },
  //       opacity: [0.2, 0.4, 0.6, 0.8, 1],
  //     });
  //     animation2.start({
  //       x: 0,
  //       transition: { duration: 2 },
  //       opacity: [0.2, 0.4, 0.6, 0.8, 1],
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({ y: "40vh", opacity: 0 });
  //     animation2.start({ x: "-40vw", opacity: 0 });
  //   }
  // }, [inView]);

  return (
    <section className="lg:h-100vh relative overflow-hidden">
      <div ref={ref} className="relative top-10 overflow-hidden md:top-4">
        <div className="relative bg-black h-1 md:h-2 left-10 w-1/4 md:w-1/3 top-10 "></div>
        <motion.div
          animate={animation2}
          className=" text-5xl md:text-[180px]  tracking-widest whitespace-nowrap text-center w-full bg-transparent font-bold absolute text-shadow top-10 "
        >
          {people[index].name}
        </motion.div>
        <motion.div
          animate={animation}
          className="h-[210px] md:h-80 lg:h-[450px] lg:w-[100vw] mx-auto grid z-10 grid-cols-3  "
        >
          {people.map((person, personIndex) => {
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <div
                key={personIndex}
                className={position || " trans opacity-0 relative "}
              >
                <div className=" absolute top-48 -left-10 ">
                  <h1 className="underline text-lg  underline-offset-4">
                    {person.name}
                  </h1>
                  <p>{person.name}</p>
                </div>
                <motion.img
                  className={
                    "h-[210px] trans md:h-80 md:w-72 lg:h-[470px] lg:w-[470px]  w-[210px]  "
                  }
                  src={person.image}
                  alt="boy"
                />
              </div>
            );
          })}
        </motion.div>

        <div className="absolute md:h-2 bg-black h-1 right-5 w-1/5 md:1/4 bottom-12  xl:bottom-40" />
        <Card />
      </div>
    </section>
  );
}

export default Slide;
