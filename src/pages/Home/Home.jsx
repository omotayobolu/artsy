import React from "react";
import { useQuery } from "@tanstack/react-query";
import Creators from "./Creators";
import FeaturedProduct from "./FeaturedProduct";
import HomeFooter from "./HomeFooter";
import Hero from "./Hero";
import UpcomingAuctions from "./UpcomingAuctions";
import { getMarketplaceData, getAuctionsData } from "../../utils/artsy-api";

const Home = () => {
  const {
    data: marketplace,
    isLoading: marketplaceLoading,
    error: marketplaceError,
  } = useQuery({
    queryKey: ["marketplace"],
    queryFn: () => getMarketplaceData(),
  });

  const {
    data: auctions,
    isLoading: auctionsLoading,
    error: auctionsError,
  } = useQuery({
    queryKey: ["auctions"],
    queryFn: getAuctionsData,
  });

  if (marketplaceLoading || auctionsLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (marketplaceError || auctionsError) {
    return <div>{marketplaceError?.message || auctionsError?.message}</div>;
  }

  return (
    <section id="home">
      <Hero />
      <FeaturedProduct marketplace={marketplace} />
      <UpcomingAuctions auctions={auctions.slice(0, 4)} />
      <Creators />
      <HomeFooter />
    </section>
  );
};

export default Home;
