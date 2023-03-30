import React from "react";
import Filter from "./Filter";

const MarketPlace = () => {
  return (
    <section id="marketplace">
      <div className="flex lg:flex-row gap-10 h-full mx-[8%] my-[3%]">
        <div className="lg:w-[20%]">
          <Filter />
        </div>
        <div className="lg:w-[80%]">Marketplace</div>
      </div>
    </section>
  );
};

export default MarketPlace;
