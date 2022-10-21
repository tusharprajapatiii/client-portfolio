import React, { useEffect, useState } from "react";
import people from "../data.js";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./slide.css";
import Slider from "react-slick";
function Sliders() {
  const [index, setIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.3,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 2000,
    autoplay: true,

    autoplaySpeed: 4500,
    beforeChange: (current, next) => setImageIndex(next),
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,

          infinite: true,
        },
      },

      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  useEffect(() => {
    if (inView) {
      var slider = setInterval(() => {
        setIndex((oldIndex) => {
          let index = oldIndex + 1;
          if (index > people.length - 1) {
            index = 0;
          }
          return index;
        });
      }, 4000);
    }
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation.start({
        y: 0,
        transition: { duration: 2 },
        opacity: [0.2, 0.4, 0.6, 0.8, 1],
      });
      animation2.start({
        x: 0,
        transition: { duration: 2 },
        opacity: [0.2, 0.4, 0.6, 0.8, 1],
      });
    }
    if (!inView) {
      animation.start({ y: "40vh", opacity: 0 });
      animation2.start({ x: "-40vw", opacity: 0 });
    }
  }, [inView]);
  return (
    <section
      id="Slider"
      ref={ref}
      className="py-8 md:py-0  relative scroll-area"
    >
      <h1 className="bg-black text-[120%] md:text-[180%]  font-extrabold tracking-[0.2em] py-3 text-center text-white ">
        RECENT ADMITS
      </h1>
      {/* <div className=" absolute md:h-[7px] bg-black h-1 left-2 abs w-1/5 md:w-[30%] 2xl:w-[30%] xl:w-[20%] md:bottom-[244px] xl:top-[53%] bottom-[254px]  z-20  "></div> */}
      {/* {people.map((people, i) => {
        const { name, image } = people;
        return (
          <motion.div
            animate={animation2}
            className={`${
              index === i && "opacity-0 name"
            } text-5xl absolute  left-0 md:text-[180px] opacity-100 name tracking-widest whitespace-nowrap text-center w-full bg-transparent font-bold text-shadow top-14 `}
          >
            {name}
          </motion.div>
        );
      })} */}
      {/* <motion.div
        animate={animation2}
        className={
          " text-5xl md:text-[180px] name tracking-widest opacity-100 whitespace-nowrap text-center w-full bg-transparent font-bold text-shadow top-14 "
        }
      >
        {name}
      </motion.div> */}
      {/* <div className="absolute md:h-[7px] bg-black h-1 right-5 abs w-1/5 md:w-[30%] md:bottom-[244px] xl:bottom-[53%] bottom-[258px]  z-20 " /> */}
      <div className=" relative ">
        <div className=" absolute md:h-[7px] bg-black h-1 left-2 abs w-1/5 md:w-[30%]  xl:w-[30%] md:bottom-[244px] xl:top-[47%] bottom-[200px] md:hidden xl:block  z-20  "></div>
        <div className="absolute md:h-[7px] bg-black h-1 right-5 abs w-1/5 md:w-[30%] md:bottom-[244px] xl:bottom-[53%] bottom-[200px] md:hidden  z-20 xl:block" />
        <Slider {...settings}>
          {people.map((people, i) => (
            <div
              key={people.id}
              animate={animation}
              className={
                i === imageIndex
                  ? "relative w-full image opacity-100"
                  : "image relative w-full opacity-0 "
              }
            >
              <motion.img
                animate={animation}
                className="h-[240px]  md:h-80 md:w-72 lg:h-[480px] lg:w-[470px]  w-[230px] mx-auto "
                src={people.image}
                alt="people"
              />
              <motion.div
                animate={animation2}
                className={`${
                  index !== i && "opacity-0 "
                } text-[100px] flex justify-center absolute  -z-10  left-0 md:text-[200px] opacity-100 name tracking-widest whitespace-nowrap text-center w-full bg-transparent font-semibold  text-shadow top-[20px] `}
              >
                {people.name}
              </motion.div>
              {/* <div className=" absolute top-28 lg:top-[330px] xl:font-semibold left-2 md:left-[20%] lg:-left-[120px] ">
                <h1 className="underline text-base md:text-xl  underline-offset-4">
                  {people.name}
                </h1>
                <p>{people.name}</p>
              </div> */}

              <article className="w-[70%]  md:w-1/2 lg:w-[75%]  xl:h-36 shadow-2xl z-10 bg-slate-100 rounded-lg transition-all delay-300 ease-linear top-2 border-2 h-32 mx-auto xl:-top-32 md:-top-20 relative">
                {/* <AiFillLeftCircle className="absolute top-1/2 -left-2" /> */}
                <img
                  className="absolute left-4  -top-4 h-14 w-14"
                  src={people.imageC}
                />
                <div className="relative left-20 lg:top-2 lg:font-semibold text-sm lg:text-[16px] tracking-wider">
                  {people.name}
                </div>
                <div className="text-[8px] h-full relative top-6">
                  <img
                    className="w-3/4 h-1/2 m-auto"
                    src={people.college}
                    alt={people.college}
                  />
                </div>
                {/* <AiFillRightCircle className="absolute top-1/2 -right-2" /> */}
              </article>
              <div className=" xl:block mx-auto -left-[50%]  -z-10   w-[200%] absolute hidden  bottom-[10%]">
                <img
                  className=" w-full opacity-20  h-64"
                  src={people.college}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Sliders;
{
  /* <div className="mx-auto w-[80vw] h-[450px] max-w-[800px] relative flex overflow-hidden">
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
                k
                className={"  top-0 left-0 w-full  h-full opacity-1 "}
              >
                <div className=" absolute top-48 left-20 ">
                  <h1 className="underline text-lg  underline-offset-4">
                    {i.name}
                  </h1>
                  <p>{i.name}</p>
                </div>
                <motion.img
                  className={
                    "h-[210px] md:h-80 md:w-72 lg:h-[470px] lg:w-[470px] mx-auto w-[210px]  "
                  }
                  src={.image}
                  alt="boy"
                />
              </div>
            );
          })}
        </div> */
}
