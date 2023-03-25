import React, { useState } from "react";
import UpcomingAuctionsData from "../../data/UpcomingAuctionsData";
import Next from "../../assets/images/next.png";
import Previous from "../../assets/images/previous.png";
import BlueArrow from "../../assets/images/arrow-blue.png";

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
      {" "}
      <div className="lg:px-[8%] py-[5%] bg-gradient-to-r from-blue via-light-blue to-orange">
        <h2 className="text-[40px] text-white leading-normal">
          See Upcoming Auctions and Exhibitions
        </h2>
        <hr className="w-[55%] text-white" />
        <div
          className="my-6 p-8 md:pt-[30%] text-white bg-no-repeat bg-blend-overlay bg-cover bg-[rgba(0,0,0,52%)] flex flex-row justify-between"
          style={{
            backgroundImage: `url(${UpcomingAuctionsData[currentSlide].url})`,
          }}
        >
          {/* <img src={UpcomingAuctionsData[currentSlide].url} alt="" /> */}
          <div className="flex flex-row items-end gap-2 w-[70%]">
            <span className="text-3xl">
              {UpcomingAuctionsData[currentSlide].id}
            </span>
            <div>
              <h3 className="font-normal">
                {UpcomingAuctionsData[currentSlide].title}
              </h3>
              <p className="font-normal uppercase text-[0.9rem] mb-4">
                {UpcomingAuctionsData[currentSlide].date}
              </p>
              <p className="font-medium text-base uppercase">
                {UpcomingAuctionsData[currentSlide].desc}
              </p>
            </div>
          </div>
          <div className="text-md flex flex-row items-end gap-4">
            <a className="pb-[1px] border-b border-white">See more</a>
            <button className="py-1 px-2 rounded-md border border-white">
              Set a reminder
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center my-4">
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
          <div className="arrows flex flex-row items-center gap-6">
            <img src={Previous} onClick={previousSlide} alt="" />
            <img src={Next} onClick={nextSlide} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-white md:my-[10%]">
        <hr className="border-t- border-secondary-black" />
        <div className="flex items-center justify-between lg:px-[8%] py-4">
          <h2 className="text-secondary-black">Explore marketplace</h2>
          <img src={BlueArrow} alt="" />
        </div>
        <hr className="border-t- border-secondary-black" />
        <div className="flex items-center justify-between lg:px-[8%] py-4">
          <h2 className="text-secondary-black">See Auctions</h2>
          <img src={BlueArrow} alt="" />
        </div>

        <hr className="border-t- border-secondary-black" />
      </div>
    </>
  );
};

export default UpcomingAuctions;
