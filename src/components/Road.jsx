import React, { useEffect, useState } from "react";
import road from "../assets/road.png";
import Slider from "react-slick";
import videos from "../data2";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import template from "../assets/template.jpg";
import "./slide.css";
import location from "../assets/location.png";
import location2 from "../assets/location2.png";

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
    className: "slide",
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "dots",
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    // lazyLoad: true,
    // centerMode: true,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
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

  return (
    <section className={`back scroll-area md:flex relative items-center py-8`}>
      <div className=" relative md:absolute text-white top-0 text-xl md:text-2xl font-bold left-[5%] py-2 z-20 bg-black">
        15 YEARS OF SUCCESSFULLY PRODUCING 770 SCORES AND COUNTING...{" "}
      </div>
      <div className="w-full md:w-[44%]  basis-[55%]  pl-5  h-full ">
        <Slider {...settings}>
          {videos.map((v) => {
            return (
              <div className="">
                <div className="border cursor-pointer relative border-red-400 h-[88vh] m-auto w-[500px]  right-0 rounded-xl bg-orange-600 p-1">
                  <iframe
                    title="Rankers video"
                    height={220}
                    className="relative top-3 w-full h-[70%]  border-red-500 border rounded-2xl"
                    src={v.video}
                    frameborder="0"
                    autoplay
                  ></iframe>
                  <div className="pt-3">
                    <h2 className="text-center font-semibold text-white">
                      {v.name}
                    </h2>
                    <p className="text-xs mt-2 px-1 text-white">{v.content}</p>
                  </div>
                  {/* <div className="absolute -bottom-1  -right-4 p-[4px] font-bold border-4 rounded-full  bg-white  border-red-600 ">
                    {v.year}
                  </div> */}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className=" hidden basis-[45%]  md:block">
        <div className="relative text-[13px] font-semibold py-8 my-2">
          <div className="absolute left-[18%] top-8"></div>
          <img className="h-[90%] lg:h-[90vh] w-full  " src={road} alt="road" />
          {/* <div className="relative">
            <img
              className={` ${
                video === 0
                  ? `border-red-600 opacity-100 p-3`
                  : `border-gray-600 opacity-40`
              } absolute bottom-24 font-semibold  h-18 w-12  left-[25%] transition-all ease-in  p-2 delay-150 `}
              src={location}
              alt=""
            />
            <h1 className="absolute text-black">2007</h1>
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
          </div> */}
          {video === 0 ? (
            <span
              className={`  ${
                video === 0 ? "  opacity-100 p-1 lg:p-3" : " opacity-60"
              } left-[25%] w-fit bottom-20  transition-all ease-in delay-200 absolute`}
            >
              <img className="h-16 w-18" src={location2} alt="" />
              <h4 className="relative bottom-[50px] left-3">2007</h4>
            </span>
          ) : (
            <span
              className={`  ${
                video === 0 ? "  opacity-100 p-1 lg:p-3" : " opacity-60"
              } left-[25%] w-fit bottom-20  transition-all ease-in delay-200 absolute`}
            >
              <img className="h-16 w-18" src={location} alt="" />
              <h4 className="relative bottom-[50px] left-3">2007</h4>
            </span>
          )}
          {video === 1 ? (
            <span
              className={` ${
                video === 1 ? "  opacity-100 p-1 lg:p-3" : " opacity-60"
              } right-[35%] w-fit bottom-[38%]  transition-all ease-in delay-200  absolute`}
            >
              <img className="h-16 w-18" src={location2} alt="" />
              <h4 className="relative bottom-[50px] left-3">2013</h4>
            </span>
          ) : (
            <span
              className={` ${
                video === 1 ? "  opacity-100 p-1 lg:p-3" : " opacity-60"
              } right-[35%] w-fit bottom-[38%]  transition-all ease-in delay-200  absolute`}
            >
              <img className="h-16 w-18" src={location} alt="" />
              <h4 className="relative bottom-[50px] left-3">2013</h4>
            </span>
          )}
          {video === 2 ? (
            <span
              className={`${
                video === 2 ? "  opacity-100 p-1 lg:p-3" : " opacity-60"
              } left-[25%] w-fit bottom-[55%]  transition-all ease-in delay-200  absolute`}
            >
              <img className="h-16 w-18" src={location2} alt="" />
              <h4 className="relative bottom-[50px] left-3">2014</h4>
            </span>
          ) : (
            <span
              className={`${
                video === 2 ? "  opacity-100 p-1 lg:p-3" : " opacity-60"
              } left-[25%] w-fit bottom-[55%]  transition-all ease-in delay-200  absolute`}
            >
              <img className="h-16 w-18" src={location} alt="" />
              <h4 className="relative bottom-[50px] left-3">2014</h4>
            </span>
          )}
          {video === 3 ? (
            <span
              className={`${
                video === 3 ? " opacity-100 p-1 lg:p-2" : " opacity-60"
              } right-[29%] w-fit top-24  transition-all ease-in delay-200 absolute`}
            >
              <img className="h-16 w-18" src={location2} alt="" />
              <h4 className="relative bottom-[50px] left-3">2015</h4>
            </span>
          ) : (
            <span
              className={`${
                video === 3 ? " opacity-100 p-1 lg:p-2" : " opacity-60"
              } right-[29%] w-fit top-[80px]  transition-all ease-in delay-200 absolute`}
            >
              <img className="h-16 w-18" src={location} alt="" />
              <h4 className="relative bottom-[50px] left-3">2015</h4>
            </span>
          )}
          {video === 4 ? (
            <span
              className={` ${
                video === 4 ? " opacity-100 p-1 lg:p-3" : "opacity-60"
              } right-[50%] w-fit top-6  transition-all ease-in delay-200  absolute`}
            >
              <img className="h-14 w-18" src={location2} alt="" />
              <h4 className="relative text-sm bottom-[45px] left-2">2022</h4>
            </span>
          ) : (
            <span
              className={` ${
                video === 4 ? " opacity-100 p-1 lg:p-3" : "opacity-60"
              } right-[50%] w-fit top-6  transition-all ease-in delay-200  absolute`}
            >
              <img className="h-14 w-18" src={location} alt="" />
              <h4 className="relative text-sm bottom-[45px] left-2">2022</h4>
            </span>
          )}
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
