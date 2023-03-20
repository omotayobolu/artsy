import React from "react";
import FeaturedProduct from "./FeaturedProduct";
import Hero from "./Hero";
import UpcomingAuctions from "./UpcomingAuctions";

const Home = () => {
  return (
    <section id="home">
      <Hero />
      <FeaturedProduct />
      <UpcomingAuctions />
    </section>
  );
};

export default Home;
