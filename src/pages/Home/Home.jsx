import React from "react";
import Creators from "./Creators";
import FeaturedProduct from "./FeaturedProduct";
import Footer from "./Footer";
import Hero from "./Hero";
import UpcomingAuctions from "./UpcomingAuctions";

const Home = () => {
  return (
    <section id="home">
      <Hero />
      <FeaturedProduct />
      <UpcomingAuctions />
      <Creators />
      <Footer />
    </section>
  );
};

export default Home;
