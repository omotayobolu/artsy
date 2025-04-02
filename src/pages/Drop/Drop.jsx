import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAuctionsData } from "../../utils/artsy-api";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Drop = () => {
  const {
    data: auctions,
    isLoading: auctionsLoading,
    isError: auctionError,
  } = useQuery({
    queryKey: ["auctions"],
    queryFn: getAuctionsData,
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const getOrdinalSuffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    const hour = date.getHours() % 12 || 12;
    const ampm = date.getHours() >= 12 ? "PM" : "AM";

    return `${day}${getOrdinalSuffix(
      day
    )} ${month} ${year} at ${hour}${ampm} WAT`;
  };

  const [visibleAuctions, setVisibleAuctions] = useState(4);

  const handleShowMore = () => {
    setVisibleAuctions((prev) => prev + 4);
  };

  if (auctionsLoading) return <p className="text-center">Loading....</p>;
  return (
    <div className="lg:mx-[7.6%] sm:mx-[5%] mx-[3%] font-satoshi">
      <div className="my-20 w-full">
        <h4 className="inline-flex items-center gap-2 font-medium text-[#BCB7B7]">
          Home/ Auctions/ Live Bid/
          <p className="text-lg font-medium text-secondary-black"> Drop</p>
        </h4>
        <div className="mt-14 text-center">
          <h2>Upcoming Drops</h2>
          <h4 className="font-normal text-[#616161] my-[30px] ">
            Turn on notifications so that no drops will miss you.
          </h4>
          <button className="w-[420px] h-[84px] text-xl border border-pure-black rounded-[10px]">
            Notify Me
          </button>
        </div>
        <div className="mt-20 flex flex-col gap-28">
          {auctions.slice(0, visibleAuctions).map((drop) => (
            <div className="w-full flex flex-row items-start gap-10">
              <div className="w-1/2">
                <img
                  src={drop.image}
                  alt={drop.name}
                  className="h-[341px] w-full rounded-[10px]"
                />
              </div>
              <div className="w-1/2  flex flex-col  h-[341px]">
                <div className="flex-1">
                  <div className="flex flex-col gap-5">
                    <div
                      className={` uppercase  rounded-[10px] py-2.5 w-[189px] text-center  ${
                        drop.status === "live" && "bg-[#3EA03B]"
                      } ${drop.status === "upcoming" && "bg-[#4693ED]"} ${
                        drop.status === "ended" && "bg-[#999EA5]"
                      } `}
                    >
                      <p className="text-sm font-medium text-white">
                        {drop.status}
                      </p>
                    </div>
                    <p className="">{formatDate(drop.startTime)}</p>
                    <h3 className="font-medium">{drop.name}</h3>
                    <p className="text-[#616161] text-sm">
                      This limited-edition drop features unique items spanning
                      streetwear, home décor, and tech accessories at special
                      launch-day prices.
                    </p>
                    <h4 className="font-medium ">
                      Creator :{" "}
                      <span className="text-[#006CA2]">{drop.creator}</span>
                    </h4>
                  </div>
                </div>

                {drop.status === "live" && (
                  <Link to={`/auctions/${drop._id}/livebid`}>
                    <p className="text-[#006CA2] text-md underline underline-offset-4">
                      Join now
                    </p>
                  </Link>
                )}
                {drop.status === "upcoming" && (
                  <p className="text-[#006CA2] text-md underline underline-offset-4">
                    Get notified
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        {visibleAuctions < auctions.length && (
          <div className="mt-20 text-center">
            <button
              onClick={handleShowMore}
              className="text-lg font-medium py-4 px-8 border border-secondary-black rounded-[10px]"
            >
              See More
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Drop;
