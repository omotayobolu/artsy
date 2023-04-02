import React from "react";
import Filter from "./Filter";
import MarketPlaceProducts from "./MarketPlaceProducts";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const MarketPlace = () => {
  return (
    <section id="marketplace">
      <div className="flex flex-row items-center gap-10 lg:my-[5%] lg:mx-[8%]">
        <div className="relative">
          <input
            className="w-full bg-grey2 rounded-2xl p-[10px] pl-12 placeholder:text-sm placeholder:text-[#999999]"
            type="text"
            placeholder="Search"
          />
          <FiSearch
            style={{
              position: "absolute",
              fontSize: "25px",
              color: "#999999",
              top: "-10%",
              left: 0,
              transform: "translate(50%, 50%)",
            }}
          />
        </div>
        <div className="w-full flex flex-row items-center justify-between py-2 px-4 rounded-2xl bg-white text-pure-black drop-shadow-marketplace text-md">
          <span>See 1-6 of 15 results</span>
          <div className="font-medium flex items-center gap-1 border border-[#2F2F2F] px-[20px] py-[6px] rounded-lg cursor-pointer">
            Sort by
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row items-start gap-10 h-full  lg:my-[5%] lg:mx-[8%]">
        <div className="lg:w-[20%]">
          <Filter />
        </div>
        <div className="lg:w-[80%]">
          <MarketPlaceProducts />
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
