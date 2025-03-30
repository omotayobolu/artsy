import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Filter from "./Filter";
import { getMarketplaceData } from "../../utils/artsy-api";
import { useQuery } from "@tanstack/react-query";
import { formatPrice } from "../../utils/priceFormatter";
import { MdKeyboardArrowDown } from "react-icons/md";

const MarketPlace = () => {
  const [allMarketProducts, setAllMarketProducts] = useState([]);
  const [openSort, setOpenSort] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const offset = parseInt(searchParams.get("offset")) || 0;
  const limit = parseInt(searchParams.get("limit")) || 9;
  const sortByPrice = searchParams.get("sortByPrice");
  const priceFilter = searchParams.get("priceFilter");
  const category = searchParams.getAll("category") || [];
  const name = searchParams.get("name") || "";

  const [searchName, setSearchName] = useState(name);

  const {
    data: marketplace,
    isLoading: marketplaceLoading,
    error: marketplaceError,
  } = useQuery({
    queryKey: [
      "marketplace",
      limit,
      offset,
      category,
      sortByPrice,
      priceFilter,
      name,
    ],
    queryFn: () =>
      getMarketplaceData(
        limit,
        offset,
        category,
        sortByPrice,
        priceFilter,
        name
      ),
  });

  console.log(marketplace);

  const handleSearch = (e) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    if (searchName.trim()) {
      newParams.set("name", searchName);
    } else {
      newParams.delete("name");
    }
    setSearchParams(newParams);
  };

  useEffect(() => {
    if (marketplace?.products) {
      setAllMarketProducts([...marketplace.products]);
    }
  }, [marketplace]);

  if (marketplaceLoading) return <p className="text-center">Loading...</p>;

  return (
    <div id="marketplace" className="lg:mx-[7.6%] sm:mx-[5%] mx-[3%]">
      <div className="flex lg:flex-row flex-col items-center justify-center gap-10 lg:mb-[5%]"></div>
      <div className="flex flex-row items-center space-x-[57px]">
        <form onSubmit={handleSearch} className="relative">
          <input
            className="w-full bg-grey2 rounded-2xl p-[10px] pl-12 placeholder:text-sm placeholder:text-[#999999]"
            type="text"
            placeholder="Search"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
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
        </form>
        <div className="relative w-full flex flex-row items-center justify-between py-2 px-4 rounded-2xl bg-white text-pure-black drop-shadow-marketplace text-md z-10">
          <p>
            See 1-{} of {marketplace.noOfProducts} results
          </p>
          <button
            onClick={() => setOpenSort(!openSort)}
            className="font-medium font-satoshi flex items-center gap-1 border-[0.4px] border-[#2F2F2F] px-[20px] py-[6px] rounded-lg cursor-pointer"
          >
            Sort by
            <MdKeyboardArrowDown />
          </button>
          {openSort && (
            <div className="absolute right-4 top-full">
              <div className="flex flex-col divide-y bg-white rounded-lg  drop-shadow-marketplace border border-primary-black">
                <button
                  onClick={() => {
                    setSearchParams({ sortByPrice: "ascending" });
                    setOpenSort(false);
                  }}
                  className="text-sm font-normal py-1 px-4"
                >
                  Price: Low to High
                </button>
                <button
                  onClick={() => {
                    setSearchParams({ sortByPrice: "descending" });
                    setOpenSort(false);
                  }}
                  className="text-sm font-normal py-1 px-4"
                >
                  Price: High to Low
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row items-start gap-[57px] w-full my-10">
        <div className="w-[17%]">
          <Filter />
        </div>

        <div className="w-[83%] flex flex-col justify-center items-center h-full  md:my-[5%] lg:my-0">
          <div className="">
            {marketplaceLoading && <p>Loading...</p>}
            {marketplaceError && <p>Error: {marketplaceError.message}</p>}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-0 gap-x-6">
              {allMarketProducts?.map((product) => (
                <Link
                  to={"/marketplace/editorials/" + product._id}
                  key={product._id}
                >
                  <div className="bg-white my-8 px-3.5 py-5 drop-shadow-marketplaceproduct rounded-[15px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="md:w-full md:aspect-square md:max-w-full aspect-square rounded-lg"
                    />
                    <div className="min-h-[130px] flex md:flex-col flex-row justify-between items-center md:items-start gap-2 pt-2.5">
                      <p className=" my-3 text-sm whitespace-normal text-secondary-black uppercase font-normal">
                        {product.name}
                      </p>
                      <span className="text-md font-bold font-satoshi text-secondary-black">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {marketplace.noOfProducts === 0 && (
              <p className="text-lg font-satoshi font-medium">
                Products not available!
              </p>
            )}
            {/* {allMarketProducts?.length < 29 && (
              <div className="my-10 flex justify-center items-center">
                <button
                  className="border border-secondary-black text-secondary-black text-[24px] rounded-[10px] font-medium px-8 py-2 font-satoshi"
                  onClick={() =>
                    setSearchParams(
                      { category, offset: offset + 9, limit: limit },
                      "replace"
                    )
                  }
                >
                  See More
                </button>
              </div>
            )} */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MarketPlace;
