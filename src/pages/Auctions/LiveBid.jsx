import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { getAuction } from "../../utils/artsy-api";
import { Link, useParams } from "react-router-dom";
import { formatPrice } from "../../utils/priceFormatter";
import { CgClose } from "react-icons/cg";
import { IoPaperPlaneSharp } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import axiosInstance, { getToken } from "../../utils/axiosInstance";
import { toast, Toaster } from "sonner";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

const LiveBid = () => {
  const { id } = useParams();
  const [hearts, setHearts] = useState([]);
  const [message, setMessage] = useState("");

  const scrollRef = useRef(null);

  const sendHeart = () => {
    const newHeart = {
      id: Date.now(),
      left: Math.random() * 80 + 10,
      bottom: Math.random() * 50 + 50,
    };

    setHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
    }, 2000);
  };

  const {
    data: auction,
    isLoading: auctionLoading,
    refetch,
  } = useQuery({
    queryKey: ["auction", id],
    queryFn: () => getAuction(id),
  });

  const submitBid = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(`/auctions/${id}`, {
        bidder: `${getToken().slice(0, 4)}...${getToken().slice(-4)}`,
        message: message,
      });
      console.log(response.data);
      toast.success(response.data.message);
      refetch();
      setMessage("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [auction?.bids]);

  if (auctionLoading) return <div className="text-center">Loading...</div>;
  return (
    <div className="lg:my-[2%] lg:mx-[8%] sm:mx-[5%] mx-[3%] font-satoshi">
      <Toaster position="top-right" richColors />
      <h4 className="inline-flex items-center gap-2 font-medium text-[#BCB7B7]">
        Home/ Auctions/ <p className="text-lg text-secondary-black">Live Bid</p>
      </h4>
      <div className="w-full border border-[#000000] mt-[37px] flex flex-row items-start">
        <div className="w-1/2 relative">
          <img
            src={auction.image}
            alt=""
            className="w-full h-[600px] max-h-full"
          />
          <div className="absolute inset-0 bg-secondary-black bg-opacity-40 rounded-[15px]" />

          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 font-semibold text-white whitespace-nowrap">
            Current Bid: {formatPrice(auction.highestBid)}
          </h2>
          <div className="absolute top-6 right-[22px] bg-[#4693ED] rounded-[20px] py-2 px-7">
            <p className="text-md font-medium text-white uppercase">
              {auction.status}
            </p>
          </div>
          <Link to="/auctions">
            <div className="absolute top-6 left-6 bg-[rgba(184,180,180,0.49)] p-1 rounded-full">
              <CgClose color="#FFFFFF" size="27px" />
            </div>
          </Link>
        </div>
        <div className="w-1/2 px-9 pb-9 flex flex-col h-[600px]">
          <div ref={scrollRef} className="flex-1 overflow-y-auto">
            {auction.bids.map((bid) => (
              <div
                key={bid._id}
                className="my-4 flex flex-row items-center space-x-2"
              >
                <IoPersonCircleSharp size="60px" color="#333333" />
                <div className="flex flex-col space-y-1">
                  <p>{bid.bidder}</p>
                  <p className="text-md font-medium">{bid.message}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-shrink-0 flex flex-row items-end justify-between gap-16">
            <div className="w-full flex flex-col gap-2.5">
              <p className="text-md italic text-[#BAB9B9] font-medium">
                Creator: {auction.creator}
              </p>
              <div className="p-[1px] w-full bg-gradient-to-r from-[rgba(120,163,173,1)] to-[rgba(192,86,9,0.49)] rounded-[25px]">
                <form onSubmit={submitBid} className="relative">
                  <input
                    type="text"
                    className="rounded-[25px] py-[15px] px-8 w-full"
                    placeholder="Place a bid..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button className="absolute right-8 top-4">
                    <IoPaperPlaneSharp color="#292929" size="25px" />
                  </button>
                </form>
              </div>
            </div>
            <div className="relative">
              {hearts.map((heart) => (
                <IoMdHeart
                  color="red"
                  key={heart.id}
                  className="absolute text-xl animate-float"
                  style={{ left: `${heart.left}%`, bottom: `${heart.bottom}` }}
                />
              ))}
              <button
                onClick={sendHeart}
                className="border border[#000000] rounded-full w-fit p-2.5"
              >
                <IoMdHeart fontSize="35px" cursor="pointer" color="red" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Link to="/drop">
        <div className="mt-9 flex flex-row items-center space-x-7">
          <h3 className="font-medium ">See upcoming drops </h3>
          <div className="p-3 border-[0.5px] border-[#000000] rounded-full">
            <BsArrowRight
              style={{
                fontSize: "30px",
              }}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LiveBid;
