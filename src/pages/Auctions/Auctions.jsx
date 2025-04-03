import React from "react";
import { getAuctionsData } from "../../utils/artsy-api";
import { useQuery } from "@tanstack/react-query";
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { formatPrice } from "../../utils/priceFormatter";
import PrimaryBtn from "../../components/PrimaryBtn";
import { Link } from "react-router-dom";

const auctionStyles = `
  .swiper-pagination {
    position: relative;
    bottom: 0 !important;
    margin-top: 60px;
  }
  
  .swiper-pagination-bullet {
    background: #B8BCB5;
    opacity: 1;
  }
  
  .swiper-pagination-bullet-active {
    background: #272727;
  }
`;

const formatTimeDifference = (startTime, endTime) => {
  const start = new Date(startTime);
  const end = new Date(endTime);
  let differenceInSeconds = Math.floor((end - start) / 1000);

  const hours = Math.floor(differenceInSeconds / 3600);
  differenceInSeconds %= 3600;
  const minutes = Math.floor(differenceInSeconds / 60);
  const seconds = differenceInSeconds % 60;

  return `${hours > 0 ? `${hours}` : 0} hr : ${
    minutes > 0 ? `${minutes}` : 0
  } mins : ${seconds > 0 ? `${seconds}` : 0} s`.trim();
};

const Auctions = () => {
  const {
    data: auctions,
    isLoading: auctionsLoading,
    error,
  } = useQuery({
    queryKey: ["auctions"],
    queryFn: getAuctionsData,
  });

  console.log(auctions);

  if (auctionsLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div id="auctions" className="lg:mx-[7.6%] sm:mx-[5%] mx-[3%]">
      <div className="my-20 ">
        <h4 className="font-satoshi text-[#BCB7B7] font-medium">
          Home/
          <span className="text-secondary-black">Auctions</span>
        </h4>
        <div className="mt-16">
          <h4 className="font-medium font-satoshi">
            Here’s an overview of products actively on auction, explore!
          </h4>
        </div>
        <div className="mt-28">
          <style>{auctionStyles}</style>
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={43}
            slidesPerView={3}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            className="auction-swiper-container"
            breakpoints={{
              // Mobile
              320: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              // Tablet
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // Desktop
              1024: {
                slidesPerView: 3,
                spaceBetween: 43,
              },
            }}
          >
            {auctions
              .filter((auction) => auction.status === "live")
              .map((auction) => (
                <SwiperSlide key={auction._id}>
                  <Link to={`/auctions/${auction._id}/livebid`}>
                    <div className="relative">
                      <img
                        src={auction.image}
                        alt={auction.name}
                        className="w-full h-[396px] max-h-[396px] object-cover rounded-[15px] drop-shadow-[0px_0px_9px_rgba(0,0,0,0.25)]"
                      />
                      <div className="absolute inset-0 bg-secondary-black bg-opacity-10 rounded-[15px]" />
                      <div className="absolute bottom-[31px] left-1/2 -translate-x-1/2 border-[0.5px] border-white rounded-lg bg-[rgba(245,244,244,0.24)] text-white font-stix text-xl whitespace-nowrap py-2.5 px-6">
                        {formatTimeDifference(
                          auction.startTime,
                          auction.endTime
                        )}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="mt-[45px]">
          <h3 className="font-satoshi font-bold text-[#000000]">
            Top bids from popular creators
          </h3>
          <div className="mt-[74px] flex flex-row items-center gap-[110px]">
            {auctions
              .filter((auction) => auction.bids.length > 0)
              .map((auction) => (
                <div key={auction._id} className="font-satoshi">
                  <div className="bg-white rounded-[15px] drop-shadow-[0px_0px_9px_rgba(0,0,0,0.25)] pb-9 pt-2 w-full">
                    <div className="flex justify-end mr-[30px]">
                      <div className="border border-[#000000] rounded-full w-fit p-4">
                        {auction.isLiked ? (
                          <IoMdHeart
                            fontSize="35px"
                            cursor="pointer"
                            color="red"
                          />
                        ) : (
                          <IoIosHeartEmpty fontSize="35px" cursor="pointer" />
                        )}
                      </div>
                    </div>
                    <img
                      src={auction.image}
                      alt={auction.name}
                      className="w-[548px] max-w-full h-[280px] mt-3 object-cover rounded-lg"
                    />
                    <h3 className="mt-[30px] mx-[34px] ">{auction.name}</h3>
                  </div>
                  <div className="flex flex-col gap-[30px] mt-[47px]">
                    <h3 className="flex flex-row items-center font-medium text-[#616161] text-xl">
                      Creator:
                      <p className="ml-2 text-[30px] font-bold text-secondary-black leading-normal">
                        {auction.creator}
                      </p>
                    </h3>
                    <h3 className="flex flex-row items-center font-medium text-[#616161]">
                      Date:
                      <p className="ml-2 text-[30px] font-bold text-secondary-black leading-normal">
                        {new Date().toISOString().split("T")[0]}
                      </p>
                    </h3>
                    <h3 className="flex flex-row items-center font-medium text-[#616161]">
                      Current Bid:
                      <p className="ml-2 text-[30px] font-bold text-secondary-black leading-normal">
                        {formatPrice(auction.highestBid)}
                      </p>
                    </h3>
                  </div>
                  <div className="mt-10">
                    <div className="flex flex-row items-center justify-between">
                      {/* <div className="flex flex-col justify-between">
                        <p className="text-[#616161] font-bold text-[30px]">
                          Current Bid
                        </p>
                        <p className="text-[#000000] font-bold text-[30px]">
                          {formatPrice(auction.currentBid)}
                        </p>
                      </div> */}
                      <Link to={`/auctions/${auction._id}/livebid`}>
                        <PrimaryBtn className="font-medium text-lg py-5">
                          Place Bid
                        </PrimaryBtn>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auctions;
