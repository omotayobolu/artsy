import React from "react";
import Creators from "./Creators";
import FeaturedProduct from "./FeaturedProduct";
import HomeFooter from "./HomeFooter";
import Hero from "./Hero";
import UpcomingAuctions from "./UpcomingAuctions";

const Home = () => {
  return (
    <section id="home">
      <Hero />
      <FeaturedProduct />
      <UpcomingAuctions />
      <Creators />
      <HomeFooter />
    </section>
  );
};

export default Home;
