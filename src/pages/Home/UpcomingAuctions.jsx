import React, { useState } from "react";
import UpcomingAuctionsData from "../../data/UpcomingAuctionsData";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const UpcomingAuctions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    const firstSlide = currentSlide === 0;
    const newSlide = firstSlide
      ? UpcomingAuctionsData.length - 1
      : currentSlide - 1;
    // if it's on the first slide and you click on the previous button, it goes to the last slide
    setCurrentSlide(newSlide);
  };

  const nextSlide = () => {
    const lastSlide = currentSlide === UpcomingAuctionsData.length - 1;
    const newSlide = lastSlide ? 0 : currentSlide + 1;
    // if it's on the last slide and you click on the next button, it goes to the first slide
    setCurrentSlide(newSlide);
  };

  return (
    <>
      <div className="lg:px-[8%] py-[5%] bg-gradient-to-r from-blue via-light-blue to-orange">
        <h2 className="text-[40px] text-white leading-normal lg:block hidden ">
          See Upcoming Auctions and Exhibitions
        </h2>
        <hr className="w-[55%] hidden lg:block text-white" />
        <div
          className="my-6 p-8 md:pt-[30%] text-white bg-no-repeat bg-blend-overlay bg-cover bg-[rgba(0,0,0,52%)] flex flex-row justify-between"
          style={{
            backgroundImage: `url(${UpcomingAuctionsData[currentSlide].url})`,
          }}
        >
          {/* <img src={UpcomingAuctionsData[currentSlide].url} alt="" /> */}
          <div className="flex flex-row lg:items-end items-center gap-2">
            <span className="text-3xl">
              {UpcomingAuctionsData[currentSlide].id}
            </span>
            <div className="flex lg:flex-row flex-col gap-4 items-end justify-between">
              <div className="flex flex-col gap-6 lg:w-[70%] w-full">
                <p
                  className="text-lg leading-normal
                "
                >
                  {UpcomingAuctionsData[currentSlide].title}
                </p>
                <p className="font-normal uppercase text-[0.9rem]">
                  {UpcomingAuctionsData[currentSlide].date}
                </p>
                <p className="font-medium text-base uppercase">
                  {UpcomingAuctionsData[currentSlide].desc}
                </p>
              </div>
              <div className="md:text-md text-sm flex flex-row items-end gap-4">
                <a className="pb-[1px] border-b border-white">See more</a>
                <button className="py-1 px-2 rounded-md border border-white">
                  Set a reminder
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex hidden flex-row justify-between items-center my-4">
          <div className="relative bg-grey w-[200px] h-[6px]">
            <span
              className={`absolute bg-white w-[50px] h-[6px] rounded-md
            ${currentSlide === 0 && "left-0"}
              ${currentSlide === 1 && "left-[50px]"}
              ${currentSlide === 2 && "left-[100px]"}
              ${currentSlide === 3 && "left-[150px]"}
            `}
            ></span>
          </div>
          <div className="flex flex-row items-center gap-6">
            <div
              onClick={previousSlide}
              className="bg-secondary-white p-5 drop-shadow-[7.77px_7.77px_11.66px_rgba(0,0,0,15%)] blur-[15.54] rounded-full cursor-pointer"
            >
              <MdKeyboardArrowLeft
                style={{ color: "#ffffff", fontSize: "20px" }}
              />
            </div>

            <div
              onClick={nextSlide}
              className="bg-secondary-white p-5 drop-shadow-[7.77px_7.77px_11.66px_rgba(0,0,0,15%)] blur-[15.54] rounded-full cursor-pointer"
            >
              <MdKeyboardArrowRight
                style={{ color: "#ffffff", fontSize: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white md:my-[10%] my-[8%]">
        <hr className="border-t- border-secondary-black" />
        <Link to="/marketplace">
          <div className="flex items-center justify-between lg:px-[8%] sm:px-[5%] px-[3%] py-4">
            <h2 className="text-secondary-black">Explore marketplace</h2>
            <div className="border border-secondary-black p-3 rounded-full">
              <BsArrowRight className="lg:text-[40px] text-[20px] text-[#616161] cursor-pointer" />
            </div>
          </div>
        </Link>
        <hr className="border-t- border-secondary-black" />
        <Link to="/auctions">
          <div className="flex items-center justify-between lg:px-[8%] sm:px-[5%] px-[3%] py-4">
            <h2 className="text-secondary-black">See Auctions</h2>
            <div className="border border-secondary-black p-3 rounded-full">
              <BsArrowRight className="lg:text-[40px] text-[20px] text-[#616161] cursor-pointer" />
            </div>
          </div>
        </Link>

        <hr className="border-t- border-secondary-black" />
      </div>
    </>
  );
};

export default UpcomingAuctions;
