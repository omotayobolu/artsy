import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MarketPlaceData } from "../../data/MarketPlaceData";
import Footer from "../../components/Footer";

const MarketPlace = () => {
  const [marketProducts, setMarketProducts] = useState(6);
  const [filteredMarketProducts, setFilteredMarketProducts] =
    useState(MarketPlaceData);

  const handleFilteredMarketProducts = (e) => {
    const productToSearch = e.target.value.toLowerCase();
    const filteredProducts = MarketPlaceData.filter((item) =>
      item.name.toLowerCase().includes(productToSearch)
    );
    setFilteredMarketProducts(filteredProducts);
  };

  const DisplayAllProducts = () => {
    setMarketProducts(MarketPlaceData.length);
  };

  return (
    <div id="marketplace" className="lg:mx-[8%] sm:mx-[5%] mx-[3%]">
      <div className="flex lg:flex-row flex-col items-center justify-center gap-10 lg:my-[5%]">
        <div className="relative">
          <input
            className="w-full bg-grey2 rounded-2xl p-[10px] pl-12 placeholder:text-sm placeholder:text-[#999999]"
            type="text"
            placeholder="Search"
            onChange={handleFilteredMarketProducts}
          />
          <FiSearch
            style={{
              position: "absolute",
              fontSize: "25px",
              color: "#999999",
              top: "-10%",
              left: 0,
              transform: "translate(50%, 50%)",
            }}
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center h-full  md:my-[5%]">
        <div className="">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {filteredMarketProducts.slice(0, marketProducts).map((product) => (
              <Link
                to={"/marketplace/editorials/" + product.id}
                key={product.id}
              >
                <div className="bg-white my-8 drop-shadow-marketplaceproduct rounded-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="md:w-full md:aspect-square md:max-w-full aspect-square rounded-t-xl"
                  />
                  <div className="flex md:flex-col flex-row  justify-between items-center md:items-start gap-2 p-4 ">
                    <p className="my-3 text-sm whitespace-normal text-secondary-black uppercase font-normal">
                      {product.name}
                    </p>
                    <span className="text-md font-bold text-secondary-black">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {!filteredMarketProducts.length && (
            <p className="text-lg font-medium">Product not available!</p>
          )}
          {filteredMarketProducts.length > marketProducts && (
            <div className="my-10 flex justify-center items-center">
              <button
                className="border border-secondary-black textsecondary-black text-[24px] rounded-xl font-medium px-8 py-2"
                onClick={DisplayAllProducts}
              >
                See More
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MarketPlace;
