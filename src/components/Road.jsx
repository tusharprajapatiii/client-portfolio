import React, { useEffect, useState } from "react";
import road from "../assets/road.png";
import Slider from "react-slick";
import videos from "../data2";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./slide.css";
import location from "../assets/location.png";
import location2 from "../assets/location2.png";
import { AiFillYoutube } from "react-icons/ai";
function Road() {
  const [video, setVideoIndex] = useState(0);
  const [map, setMap] = useState(0);
  const [startVideo, setStartVideo] = useState(false);
  useEffect(() => {
    let slider = setInterval(() => {
      setMap(map + 1);
    }, 3000);

    return () => {
      clearInterval(slider);
    };
  }, [map]);
  useEffect(() => {
    const lastIndex = 4;
    if (map < 0) {
      setMap(lastIndex);
    }
    if (map > lastIndex) {
      setMap(0);
    }
  }, [map]);

  const NextArrow = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        className=" rotate-90 relative top-64 cursor-pointer"
      >
        <FaArrowRight color="white " />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="rotate-90 relative top-48 rounded-full cursor-pointer "
        onClick={onClick}
      >
        <FaArrowLeft color=" white" />
      </div>
    );
  };
  const settings = {
    className: "slide",
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,

    vertical: true,

    verticalSwiping: true,
    autoplay: true,

    arrows: false,
    pauseOnHover: true,
    beforeChange: (current, next) => setVideoIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  useEffect(() => {
    var slider = setInterval(() => {
      setVideoIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > videos.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [video]);
  const play = (id) => {};
  return (
    <section
      id="Success"
      className={`back scroll-area rounded-[20px] md:rounded-none md:flex relative items-center py-8`}
    >
      <div className=" relative pl-7 md:pl-0 md:absolute text-white 2xl:text-3xl top-0 text-xl md:text-[22px]  px-2 font-bold md:left-0  lg:left-[5%] pb-2 z-20 bg-black">
        15 YEARS OF SUCCESSFULLY PRODUCING 770 SCORES AND COUNTING...{" "}
      </div>
      <div className="w-full md:w-[44%]  px-0 md:px-0 basis-[55%] my-2 -ml-[20px] md:mx-auto  md:pl-5   ">
        <Slider {...settings}>
          {videos.map((v, i) => {
            return (
              <div key={v.id} className="relative h-full">
                <div className="border  cursor-pointer relative border-red-400 h-[574px] lg:h-[90vh] lg:w-[70%] 2xl:w-[60%]  m-auto w-[80%] md:w-full   xl:right-0 rounded-2xl bg-[#ff9d01]  p-3">
                  {!startVideo ? (
                    <div
                      onClick={() => setStartVideo(true)}
                      className="relative top-3 w-full h-[60%] md:h-[67%]  border-red-500 border rounded-2xl flex justify-center items-center"
                    >
                      <AiFillYoutube
                        className="absolute h-16 lg:h-20 lg:w-20  w-16"
                        color="red"
                      />
                      <img
                        className="h-full w-full rounded-2xl"
                        src={v.img}
                        alt={v.name}
                      />
                    </div>
                  ) : (
                    <iframe
                      title="Rankers video"
                      height={220}
                      className="relative top-3 w-full h-[60%] md:h-[67%] bg-black border-red-500 border rounded-2xl"
                      src={v.video}
                    ></iframe>
                  )}
                  <div className=" mt-5">
                    <h2 className="text-center font-semibold text-white">
                      {v.name}
                    </h2>
                    <p className="text-xs mt-3   px-1 text-white">
                      {v.content}
                    </p>
                  </div>
                </div>
                <div
                  className={` ${
                    i == video ? "opacity-100" : "opacity-0"
                  } absolute top-0 h-full hidden transition-opacity font-extrabold duration-[2500ms] ease-linear year -right-4 2xl:right-[10%]   text-black   xl:flex justify-center items-center 2xl:text-[90px] text-[78px]`}
                >
                  {v.year}{" "}
                </div>
                <div
                  className={` ${
                    i == video ? "opacity-100" : "opacity-0"
                  } absolute top-0 h-full md:hidden transition-opacity font-extrabold duration-[2500ms] ease-linear year -right-[6%]  text-black   flex justify-center items-center text-[50px]`}
                >
                  {v.year}{" "}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className=" hidden basis-[45%] h-full  lg:block">
        <div className="relative text-[13px] font-semibold py-8 my-2">
          <div className="absolute left-[18%] top-8"></div>
          <img className="h-[90%] lg:h-[90vh] w-full  " src={road} alt="road" />

          {map === 0 ? (
            <span
              className={`  ${
                map === 0 ? "  opacity-100 p-1 lg:p-3" : " opacity-60"
              } left-[23%] w-fit bottom-20  transition-all ease-in delay-200 absolute`}
            >
              <img className="h-[76px] w-[64px]" src={location2} alt="" />
              <h4 className="relative text-sm bottom-[57px] left-[25%]">
                2007
              </h4>
            </span>
          ) : (
            <span
              className={`  ${
                map === 0 ? "  opacity-100 p-1 lg:p-3" : " opacity-60"
              } left-[23%] w-fit bottom-20  transition-all ease-in delay-200 absolute`}
            >
              <img className="h-[76px] w-[64px]" src={location} alt="" />
              <h4 className="relative text-[15px] bottom-[57px] left-[25%]">
                2007
              </h4>
            </span>
          )}
          {map === 1 ? (
            <span
              className={` ${
                map === 1 ? "  opacity-100 p-1 lg:p-3" : " opacity-60"
              } right-[35%] w-fit bottom-[38%]  transition-all ease-in delay-200  absolute`}
            >
              <img className="h-16 w-18" src={location2} alt="" />
              <h4 className="relative bottom-[50px] left-3">2011</h4>
            </span>
          ) : (
            <span
              className={` ${
                map === 1 ? " opacity-100 p-1 lg:p-3" : " opacity-60"
              } right-[35%] w-fit bottom-[38%]  transition-all ease-in delay-200  absolute`}
            >
              <img className="h-16 w-18" src={location} alt="" />
              <h4 className="relative bottom-[50px] left-3">2011</h4>
            </span>
          )}
          {map === 2 ? (
            <span
              className={`${
                map === 2 ? "  opacity-100 p-1 lg:p-3" : " opacity-60"
              } left-[25%] w-fit bottom-[55%]  transition-all ease-in delay-200  absolute`}
            >
              <img className="h-16 w-18" src={location2} alt="" />
              <h4 className="relative bottom-[50px] left-3">2015</h4>
            </span>
          ) : (
            <span
              className={`${
                map === 2 ? "  opacity-100 p-1 lg:p-3" : " opacity-60"
              } left-[25%] w-fit bottom-[55%]  transition-all ease-in delay-200  absolute`}
            >
              <img className="h-16 w-18" src={location} alt="" />
              <h4 className="relative bottom-[50px] left-3">2015</h4>
            </span>
          )}
          {map === 3 ? (
            <span
              className={`${
                map === 3 ? " opacity-100 p-1 lg:p-2" : " opacity-60"
              } right-[29%] w-fit top-24  transition-all ease-in delay-200 absolute`}
            >
              <img className="h-16 w-18" src={location2} alt="" />
              <h4 className="relative bottom-[50px] left-3">2019</h4>
            </span>
          ) : (
            <span
              className={`${
                map === 3 ? " opacity-100 p-1 lg:p-2" : " opacity-60"
              } right-[29%] w-fit top-[80px]  transition-all ease-in delay-200 absolute`}
            >
              <img className="h-16 w-18" src={location} alt="" />
              <h4 className="relative bottom-[50px] left-3">2019</h4>
            </span>
          )}
          {map === 4 ? (
            <span
              className={` ${
                map === 4 ? " opacity-100 p-1 lg:p-2" : "opacity-60"
              } right-[48%] w-fit top-6  transition-all ease-in delay-200  absolute`}
            >
              <img className="h-14 w-18" src={location2} alt="" />
              <h4 className="relative  bottom-[45px] left-2">2022</h4>
            </span>
          ) : (
            <span
              className={` ${
                map === 4 ? " opacity-100 p-1 lg:p-3" : "opacity-60"
              } right-[48%] w-fit top-6  transition-all ease-in delay-200  absolute`}
            >
              <img className="h-14 w-18" src={location} alt="" />
              <h4 className="relative  bottom-[45px] left-2">2022</h4>
            </span>
          )}
          <div className="absolute w-[32%] right-10 bottom-20">
            <div className="text-white text-right ">Our first 770 Scorer</div>
            <div className="h-1  bg-white"></div>
          </div>
          <div className="absolute w-[32%] right-[40%]  text-white bottom-[75px]">
            <h6 className="relative text-center top-4"></h6>
            <div className="tracking-[16px] text-right text-lg">...</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Road;
