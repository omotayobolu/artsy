import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const UpcomingAuctions = ({ auctions }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    const firstSlide = currentSlide === 0;
    const newSlide = firstSlide ? auctions.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const nextSlide = () => {
    const lastSlide = currentSlide === auctions.length - 1;
    const newSlide = lastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const date = new Date(auctions[currentSlide].startTime);

  const day = date.toLocaleDateString("en-US", { weekday: "long" });

  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <>
      <div className="font-satoshi lg:px-[8%] md:px-[5%] py-[5%] bg-gradient-to-r from-blue via-light-blue to-orange">
        <h2 className="text-[40px] text-white leading-normal lg:block hidden underline underline-offset-[16px]">
          See Upcoming Auctions and Exhibitions
        </h2>

        <div
          className="my-6 md:p-8 p-4 md:pt-[30%] text-white bg-no-repeat bg-blend-overlay bg-cover bg-[rgba(0,0,0,52%)] flex flex-row justify-between"
          style={{
            backgroundImage: `url(${auctions[currentSlide].image})`,
          }}
        >
          <div className="flex flex-row lg:items-end items-center xl:gap-2 gap-4 w-full">
            <span className="text-3xl">0{currentSlide + 1}</span>
            <div className="flex xl:flex-row flex-col gap-4 xl:items-end items-start justify-between w-full">
              <div className="flex flex-col gap-6 lg:w-[70%] w-full">
                <p
                  className="text-xl leading-normal font-Bellefair uppercase
                "
                >
                  {auctions[currentSlide].name}
                </p>
                <p className="font-normal uppercase text-[0.9rem]">
                  starts on: {time} {day}
                </p>
                <p className="font-medium text-base uppercase xl:w-[628.8px] md:w-[500px]">
                  get exclusive viewing of contemporary art and connect with
                  investors and auctioneers across the world bringing their
                  highest and lowest bids.
                </p>
              </div>
              <div className="w-full xl:w-auto flex justify-end">
                <div className="md:text-md text-base flex flex-row items-center gap-4">
                  <Link to="/auctions" className="underline underline-offset-4">
                    See more
                  </Link>
                  <button className="py-1 px-2 rounded-md border border-white">
                    Set a reminder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex hidden flex-row justify-between items-center my-4">
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
