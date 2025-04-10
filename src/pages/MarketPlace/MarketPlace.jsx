import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Filter from "./Filter";
import { getMarketplaceData } from "../../utils/artsy-api";
import { useQuery } from "@tanstack/react-query";
import { formatPrice } from "../../utils/priceFormatter";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useQueryParam } from "../../utils/useQueryParams";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MarketPlace = () => {
  const [allMarketProducts, setAllMarketProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [openSort, setOpenSort] = useState(false);

  const updateQueryParam = useQueryParam();

  const [searchParams, setSearchParams] = useSearchParams();
  const sortByPrice = searchParams.get("sortByPrice");
  const priceFilter = searchParams.get("priceFilter");
  const category = searchParams.getAll("category") || [];
  const name = searchParams.get("name") || "";

  const [searchName, setSearchName] = useState(name);
  const [showFilterNav, setShowFilterNav] = useState(false);
  const [page, setPage] = useState(1);

  const {
    data: marketplace,
    isLoading: marketplaceLoading,
    error: marketplaceError,
  } = useQuery({
    queryKey: ["marketplace", category, sortByPrice, priceFilter, name],
    queryFn: () => getMarketplaceData(category, sortByPrice, priceFilter, name),
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

  const handleSeeMore = () => {
    const nextpage = page + 1;
    const nextViisble = allMarketProducts.slice(0, nextpage * 9);
    setVisibleProducts(nextViisble);
    setPage(nextpage);
  };

  useEffect(() => {
    setVisibleProducts(allMarketProducts.slice(0, page * 9));
  }, [allMarketProducts]);

  useEffect(() => {
    if (marketplace?.products) {
      setAllMarketProducts([...marketplace.products]);
    }
  }, [marketplace]);

  if (marketplaceLoading) return <p className="text-center">Loading...</p>;

  return (
    <div id="marketplace" className="lg:mx-[7.6%] mx-[3%] font-satoshi">
      <p className="text-[#BCB7B7] my-4 font-medium text-sm lg:hidden">
        Home/ Marketplace/ <span className="text-pure-black">Editorials</span>
      </p>
      <p className="block lg:hidden mt-4 italic font-normal text-base text-[#BCB7B7]">
        Showing 1-{visibleProducts.length} of {marketplace.noOfProducts} results
      </p>
      <div className="flex flex-row items-center gap-[57px] lg:mt-0 mt-4">
        <form
          onSubmit={handleSearch}
          className="relative lg:block hidden w-[17%]"
        >
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
        <div className="relative lg:w-[83%] w-full flex flex-row items-center justify-between py-2 px-4 rounded-2xl bg-white text-pure-black drop-shadow-marketplace text-md z-10">
          <p className="lg:block hidden">
            Showing 1-{visibleProducts.length} of {marketplace.noOfProducts}{" "}
            results
          </p>
          <button
            onClick={() => setShowFilterNav((prev) => !prev)}
            className="flex flex-row items-center text-sm gap-2 lg:hidden"
          >
            Filters <MdOutlineKeyboardArrowDown />{" "}
          </button>
          <button
            onClick={() => setOpenSort(!openSort)}
            className="lg:font-medium font-normal font-satoshi flex items-center gap-1 lg:border-[0.4px] border-[#2F2F2F] px-[20px] py-[6px] rounded-lg cursor-pointer lg:text-md text-sm"
          >
            Sort by
            <MdKeyboardArrowDown />
          </button>
          {openSort && (
            <div className="absolute right-4 top-full">
              <div className="flex flex-col divide-y bg-white rounded-lg  drop-shadow-marketplace">
                <button
                  onClick={() => {
                    updateQueryParam("sortByPrice", "ascending");
                    setOpenSort(false);
                  }}
                  className="text-sm font-normal py-1 px-4"
                >
                  Price: Low to High
                </button>
                <button
                  onClick={() => {
                    updateQueryParam("sortByPrice", "descending");
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

      <div className="flex flex-row items-start lg:gap-[57px] w-full mb-10">
        <div
          className={`fixed lg:static top-0 left-0 lg:p-0 py-4 px-8 h-full z-50 bg-white lg:bg-transparent transition-transform duration-300 ease-in-out
  ${showFilterNav ? "translate-x-0" : "-translate-x-full"} 
  lg:translate-x-0 lg:w-[17%] sm:w-1/2 w-3/4 shadow-md lg:shadow-none`}
        >
          <Filter
            showFilterNav={showFilterNav}
            setShowFilterNav={setShowFilterNav}
          />
        </div>
        {showFilterNav && (
          <div
            onClick={() => setShowFilterNav(false)}
            className="fixed inset-0 bg-pure-black bg-opacity-40 z-40 lg:hidden"
          />
        )}
        <div className="lg:w-[83%] w-full flex flex-col justify-center items-center h-full lg:my-0">
          <div className="">
            {marketplaceLoading && <p>Loading...</p>}
            {marketplaceError && <p>Error: {marketplaceError.message}</p>}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-0 gap-x-6">
              {visibleProducts?.map((product) => (
                <Link
                  to={"/marketplace/editorials/" + product._id}
                  key={product._id}
                >
                  <div className="bg-white md:my-8 my-4 px-3.5 py-5 drop-shadow-marketplaceproduct rounded-[15px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full sm:aspect-square sm:max-w-full aspect-square rounded-lg"
                    />
                    <div className="lg:min-h-[130px] min-h-[110px] flex sm:flex-col flex-row justify-between items-center sm:items-start gap-2 md:pt-2.5 pt-1">
                      <p className="md:my-3 my-2 text-sm whitespace-normal text-secondary-black uppercase font-normal">
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
            {marketplace?.noOfProducts === 0 && (
              <p className="text-lg font-satoshi font-medium">
                Products not available!
              </p>
            )}
            {allMarketProducts.length != visibleProducts.length && (
              <div className="my-10 flex justify-center items-center">
                <button
                  onClick={handleSeeMore}
                  className="border border-secondary-black text-secondary-black text-[24px] rounded-[10px] font-medium px-8 py-2 font-satoshi"
                >
                  See More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MarketPlace;
