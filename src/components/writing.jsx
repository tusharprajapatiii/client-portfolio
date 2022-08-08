import React, { useEffect } from "react";
import sandeep from "../assets/sandeep.png";
import sand from "../assets/san.png";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function Writing() {
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
      className="md:flex scroll-area md:py-8 lg:py-2  px-10 bg-blue-100 py-8 md:bg-white"
    >
      <div className="">
        <img
          className="h-48 mx-auto md:hidden w-36"
          src={sandeep}
          alt="sandeep"
        />
        <motion.img
          animate={animation}
          className=" hidden md:block"
          src={sand}
          alt=""
        />
      </div>
      <h1 className="text-center cursive md:hidden py-3">
        a note from sandeep gupta
      </h1>
      <div className="text-[12px] md:border-t-3 relative md:rounded-bl-[140px] md:text-sm md:box md:border-t-4  md:border-blue-400 md:px-14 md:py-14 px-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
        consectetur obcaecati, eos magnam quisquam sapiente numquam dicta neque
        officiis iusto? Necessitatibus omnis iste modi ad molestiae deserunt
        mollitia dolorum iure fugiat alias officia, corporis voluptatum tenetur
        maiores aperiam a! Error neque, eius consequatur numquam provident ab
        dolores ullam alias, porro obcaecati non velit, nobis ex. Molestiae
        ullam in expedita repellat. Est hic repellendus earum, eum excepturi
        laudantium consectetur itaque asperiores obcaecati commodi et aliquid
        rerum perferendis a possimus repellat unde sapiente officiis ab soluta
        ad corporis. Reprehenderit et alias iure voluptas magnam repudiandae
        esse voluptates. Eaque repellat harum blanditiis omnis?
        <div className=" hidden md:block md:top-6 md:text-xl lg:top-20  left-0 relative cursive text-center lg:text-3xl">
          {" "}
          <Typewriter
            options={{
              strings: "a note from sandeep gupta",
              autoStart: inView,
              cursor: " ",
              delay: 50,
            }}
          />
        </div>
        <div className="absolute"></div>
      </div>
    </section>
  );
}

export default Writing;
