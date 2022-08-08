import React, { useEffect, useState } from "react";
import road from "../assets/road.png";
import Slider from "react-slick";
import videos from "../data2";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import template from "../assets/template.jpg";
function Road() {
  const [video, setVideoIndex] = useState(0);

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
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    arrows: false,
    pauseOnHover: false,
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

  return (
    <section className={`back scroll-area md:flex relative items-center py-8`}>
      <div className=" relative md:absolute text-white top-5 text-xl md:text-2xl  font-bold left-[5%] ">
        15 YEARS OF SUCESSFULLY PRODUCING 770 SCORES AND COUNTING...{" "}
      </div>
      <div className=" hidden md:block h-64 w-1 absolute left-10 bg-white "></div>
      <div className="w-full md:w-[44%] lg:w-1/2  lg:px-16 my-10  ">
        <Slider {...settings}>
          {videos.map((v) => {
            return (
              <div>
                <div className="border cursor-pointer relative border-red-400 h-72 m-auto w-56 rounded-xl bg-red-800">
                  <div className="relative top-3 mx-4 border-red-500 border h-[150px] bg-black rounded-2xl"></div>
                  <div className="absolute -bottom-2  -right-4 p-[4px] font-bold border-4 rounded-full  bg-white  border-red-600 ">
                    {v.year}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className=" hidden  md:block">
        <div className="relative py-8 my-2">
          <div className="absolute left-[18%] top-8">
            <div className="text-white text-left ">Now we are here</div>
            <div className="h-1 w-28 bg-white"></div>
          </div>
          <img className="h-[90%] lg:h-[90vh] w-full  " src={road} alt="road" />
          <div
            className={` ${
              video === 0
                ? `border-red-600 opacity-100 p-3`
                : `border-gray-600 opacity-40`
            } absolute bottom-24 font-semibold border-[8px]  left-[25%] transition-all ease-in  bg-white p-2 delay-150 rounded-tl-3xl rounded-tr-3xl`}
          >
            2007
          </div>
          <div
            className={` ${
              video === 1
                ? "border-red-600  opacity-100 p-3"
                : "border-gray-600 opacity-40"
            } absolute bottom-[38%] font-semibold border-[8px] transition-all ease-in right-[35%]  bg-white p-2 delay-150 rounded-tl-3xl rounded-tr-3xl`}
          >
            2013
          </div>
          <div
            className={`${
              video === 2
                ? "border-red-600  opacity-100 p-3"
                : "border-gray-600 opacity-40"
            } absolute bottom-[55%] font-semibold border-[8px] left-[25%] bg-white p-2  transition-all delay-150 ease-in rounded-tl-3xl rounded-tr-3xl`}
          >
            2014
          </div>
          <div
            className={`${
              video === 3
                ? "border-red-600  opacity-100 p-3"
                : "border-gray-600 opacity-40"
            } absolute top-24 font-semibold border-[8px] right-[30%] bg-white p-1  rounded-tl-3xl delay-150 transition-all ease-in rounded-tr-3xl`}
          >
            2015
          </div>
          <div
            className={`${
              video === 4
                ? "border-red-600 opacity-100 p-3"
                : "border-gray-600 opacity-40"
            } absolute top-10 font-semibold text-sm border-[5px]  right-[50%] bg-white p-1 transition-all ease-in delay-150 rounded-tl-3xl rounded-tr-3xl`}
          >
            2022
          </div>
          <div className="absolute right-10 bottom-20">
            <div className="text-white text-right ">where it all started</div>
            <div className="h-1 w-80 bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Road;
