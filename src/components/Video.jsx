import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
function Video() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.3,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        transition: { duration: 1.2 },
        opacity: [0.2, 0.4, 0.6, 0.8, 1],
      });
      animation2.start({
        y: 0,
        transition: { duration: 1.2 },
        opacity: [0.2, 0.3, 0.4, 0.9, 1],
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });

      animation2.start({ y: "10vh", opacity: 0 });
    }
  }, [inView]);
  return (
    <section ref={ref} className="scroll-area">
      <div className="md:m-6 py-10 md:flex w-full h-full">
        <div className=" shadow-2xl box lg:basis-[55%] md:w-[60vw]  lg:h-[85vh] h-[300px] md:h-[360px]   rounded-3xl p-[2px]   ">
          <motion.iframe
            animate={animation}
            // className="md:rounded-3xl rounded-2xl md:h-[350px] md:w-[440px] lg:h-[480px] lg:w-[550px] xl:w-[700px]  mx-auto h-72 w-80 "
            className="md:rounded-3xl rounded-2xl  w-full h-full  mx-auto "
            src={`https://www.youtube.com/embed/crGpT6C7jeM?autoplay=${
              inView ? "1" : "0"
            }`}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></motion.iframe>
        </div>
        <div className="px-8 xl:px-14 my-3 md:basis-[40%] lg:basis-[45%] ">
          <h2 className="text-2xl lg:text-4xl text-center lg:font-extrabold my-2">
            What is Mission 770?
          </h2>
          <motion.p
            animate={animation2}
            className="text-sm lg:text-xl  md:text-sm  lg:mt-16 "
          >
            {" "}
            From the past 15 years, we here at the Top One Percent started
            delivering scores of 770+ when not 1 institute back then peak was
            higher than a 720. We are proud to accomplish this on more than
            hundreds of occasions year on year. We along with Sandeep Gupta have
            been able to deliver even perfect scores to our students and our
            testimonials talk for themselves.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default Video;
