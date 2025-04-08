import React, { useState, useEffect } from "react";
import filter from "../../assets/images/filter.png";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { useQueryParam } from "../../utils/useQueryParams";

const Filter = () => {
  const [categoryOpened, setCategoryOpened] = useState(true);
  const [priceOpened, setPriceOpened] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQueryParam = useQueryParam();

  const priceFilter = searchParams.get("priceFilter");

  const rawCategories = searchParams.getAll("category") || [];
  const selectedCategories = rawCategories.flatMap((category) =>
    category.split(",")
  );

  const handleCategoryChange = (e) => {
    const category = e.target.value;

    let updatedCategories = [...selectedCategories];
    if (selectedCategories.includes(category)) {
      updatedCategories = selectedCategories.filter(
        (item) => item !== category
      );
    } else {
      updatedCategories.push(category);
    }

    if (updatedCategories.length > 0) {
      updateQueryParam("category", updatedCategories.join(","));
    }
  };

  return (
    <div>
      <div className="mt-10">
        <div className="flex flex-row items-center gap-3 cursor-pointer">
          <HiOutlineAdjustmentsHorizontal size="35px" color="#616161" />
          <h3 className="font-medium text-secondary-black font-satoshi">
            Filter
          </h3>
        </div>
        <div className=" mt-2 rounded-xl bg-[#AFB091] h-[5px] md:block hidden"></div>
      </div>
      <div
        className="mt-[60px] filter"
        onClick={() => setCategoryOpened(!categoryOpened)}
      >
        <h3 className="font-medium leading-normal lg:text-[1.5rem] text-primary-black font-satoshi">
          By Category
        </h3>
        {categoryOpened ? (
          <MdKeyboardArrowUp style={{ fontSize: "30px" }} />
        ) : (
          <MdKeyboardArrowDown style={{ fontSize: "30px" }} />
        )}
      </div>
      {categoryOpened && (
        <div className="my-6">
          <div className="category">
            <input
              type="checkbox"
              id="editorials"
              value="editorials"
              onChange={handleCategoryChange}
              checked={selectedCategories.includes("editorials")}
            />
            <label htmlFor="editorials" className="text-md">
              Editorial
            </label>
          </div>
          <div className="category">
            <input
              type="checkbox"
              id="fashion"
              value="fashion"
              onChange={handleCategoryChange}
              checked={selectedCategories.includes("fashion")}
            />
            <label htmlFor="fashion" className="text-md">
              Fashion
            </label>
          </div>
          <div className="category">
            <input
              type="checkbox"
              id="optics"
              value="optics"
              onChange={handleCategoryChange}
              checked={selectedCategories.includes("optics")}
            />
            <label htmlFor="optics" className="text-md">
              Optics
            </label>
          </div>
          <div className="category">
            <input
              type="checkbox"
              id="Art & Museum"
              value="art and museum"
              onChange={handleCategoryChange}
              checked={selectedCategories.includes("art and museum")}
            />
            <label htmlFor="Art & Museum" className="text-md">
              Art & Museum
            </label>
          </div>
          <div className="category">
            <input
              type="checkbox"
              id="Nature"
              value="nature"
              onChange={handleCategoryChange}
              checked={selectedCategories.includes("nature")}
            />
            <label htmlFor="Nature" className="text-md">
              Nature
            </label>
          </div>
        </div>
      )}

      <div
        className={` filter mt-6`}
        onClick={() => setPriceOpened(!priceOpened)}
      >
        <h3 className="font-medium leading-normal lg:text-[1.5rem] text-primary-black font-satoshi">
          By Price
        </h3>
        {priceOpened ? (
          <MdKeyboardArrowUp style={{ fontSize: "30px" }} />
        ) : (
          <MdKeyboardArrowDown style={{ fontSize: "30px" }} />
        )}
      </div>
      {priceOpened && (
        <div className="text-primary-black text-md font-normal flex flex-col items-start gap-2 my-4 font-satoshi">
          <button
            onClick={() =>
              setSearchParams((prev) => {
                const params = new URLSearchParams(prev);
                params.delete("priceFilter");
                return params;
              })
            }
            className={`cursor-pointer ${
              !priceFilter ? "underline underline-offset-4" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => updateQueryParam("priceFilter", "price<100")}
            className={`cursor-pointer ${
              priceFilter == "price<100" ? "underline underline-offset-4" : ""
            }`}
          >
            Below $100.00
          </button>
          <button
            onClick={() =>
              updateQueryParam("priceFilter", "price>=100andprice<=150")
            }
            className={`cursor-pointer ${
              priceFilter == "price>=100andprice<=150"
                ? "underline underline-offset-4"
                : ""
            }`}
          >
            $100.00 - $150.00
          </button>
          <button
            onClick={() =>
              updateQueryParam("priceFilter", "price>=150andprice<=200")
            }
            className={`cursor-pointer ${
              priceFilter == "price>=150andprice<=200"
                ? "underline underline-offset-4"
                : ""
            }`}
          >
            $150.00 - $200.00
          </button>
          <button
            onClick={() => updateQueryParam("priceFilter", "price>200")}
            className={`cursor-pointer ${
              priceFilter == "price>200" ? "underline  underline-offset-4" : ""
            }`}
          >
            Above $200.00
          </button>
        </div>
      )}
    </div>
  );
};

export default Filter;
