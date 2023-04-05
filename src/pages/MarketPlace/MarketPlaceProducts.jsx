import React from "react";
import MarketPlaceData from "../../data/MarketPlaceData";

const MarketPlaceProducts = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between no-wrap lg:flex-wrap">
      {MarketPlaceData.map((product) => (
        <div
          className="bg-white my-8 drop-shadow-marketplaceproduct rounded-xl p-2"
          key={product.id}
        >
          <img src={product.image} alt="" />
          <div className="flex flex-col gap-3">
            <p className="my-3 text-sm text-secondary-black uppercase font-normal">
              {product.name}
            </p>
            <span className="text-md font-bold text-secondary-black">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketPlaceProducts;
