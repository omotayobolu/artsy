import React, { useState } from "react";
import Filter from "./Filter";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import Market from "../../data/MarketPlaceData";
import Footer from "../../components/Footer";

const MarketPlace = () => {
  const [marketProducts, setMarketProducts] = useState(6);

  const DisplayAllProducts = () => {
    setMarketProducts(Market.length);
  };

  return (
    <div id="marketplace" className="lg:mx-[8%] sm:mx-[5%] mx-[3%]">
      <div className="flex flex-row items-center gap-10 lg:my-[5%]">
        <div className="relative lg:block hidden">
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
          <p>See 1-6 of 15 results</p>
          <div className="font-medium flex items-center gap-1 border border-[#2F2F2F] px-[20px] py-[6px] rounded-lg cursor-pointer">
            Sort by
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-start gap-10 h-full  md:my-[5%] ">
        <div className="md:w-[20%]">
          <Filter />
        </div>
        <div className="md:w-[80%] w-full">
          <div className="w-full flex md:flex-row flex-col items-center md:justify-between flex-wrap">
            {Market.slice(0, marketProducts).map((product) => (
              <Link
                to={"/marketplace/editorials/" + product.id}
                key={product.id}
              >
                <div className="bg-white my-8 drop-shadow-marketplaceproduct rounded-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full w-full"
                  />
                  <div className="flex md:flex-col flex-row justify-between items-center md:items-start gap-2 p-3 ">
                    <p className="my-3 text-sm text-secondary-black uppercase font-normal">
                      {product.name}
                    </p>
                    <span className="text-md font-bold text-secondary-black">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {marketProducts < Market.length && (
            <div className="my-10 flex justify-center items-center">
              <button
                className="border border-secondary-black textsecondary-black text-[24px] rounded-xl font-medium px-8 py-2"
                onClick={DisplayAllProducts}
              >
                See More
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MarketPlace;
