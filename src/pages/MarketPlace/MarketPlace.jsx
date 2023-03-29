import React from "react";
import Filter from "./Filter";

const MarketPlace = () => {
  return (
    <section id="marketplace">
      <div className="flex lg:flex-row gap-20 w-full mx-[8%] my-[5%]">
        <div className="lg:w-[15%]">
          <Filter />
        </div>
        <div className="lg:w-[85%]">Marketplace</div>
      </div>
    </section>
  );
};

export default MarketPlace;
