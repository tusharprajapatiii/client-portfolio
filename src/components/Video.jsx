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
      <div className="md:m-6 py-10 md:flex ">
        <div className="lg:mx-3">
          <motion.iframe
            animate={animation}
            className="md:rounded-[100px] rounded-2xl md:h-[350px] md:w-[440px] lg:h-[480px] lg:w-[550px] xl:w-[700px] mx-auto h-60 w-72 "
            src="https://www.youtube.com/embed/K4TOrB7at0Y?controls=0"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></motion.iframe>
        </div>
        <div className="px-8 xl:px-14 my-3 xl: ">
          <h2 className="text-2xl lg:text-4xl text-center font-semibold my-2">
            lorem ipsum
          </h2>
          <motion.p
            animate={animation2}
            className="text-xs lg:text-base lg:mt-10 "
          >
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            corporis. Ipsa amet reiciendis id et nesciunt ab quidem fugiat
            corporis ex, veritatis aspernatur, enim consequuntur maiores
            accusantium inventore similique, quia in reprehenderit sed iste! Ex,
            minus? Sit, temporibus eaque laborum illo earum officiis impedit
            voluptate suscipit necessitatibus nulla, aspernatur, error neque
            praesentium numquam rem animi quam ut distinctio! Architecto nihil
            magnam voluptatibus voluptate tempore nulla dolore incidunt quod
            eius ducimus non laborum deleniti, velit vero nostrum consequatur,
            quis iure dolorem sequi? Quibusdam blanditiis doloremque fugit
            officiis sapiente fuga doloribus possimus.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default Video;
