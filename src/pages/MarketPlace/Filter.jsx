import React, { useState } from "react";
import SearchFilter from "../../assets/images/searchFilter.png";
import filter from "../../assets/images/filter.png";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Filter = () => {
  const [categoryOpened, setCategoryOpened] = useState(false);

  return (
    <div className="">
      <div className="relative">
        <input
          className="w-full bg-grey2 rounded-2xl p-[10px] pl-12 placeholder:text-md"
          type="text"
          placeholder="Search"
        />
        <img className="absolute top-0 left-0" src={SearchFilter} alt="" />
      </div>
      <div className="mt-10">
        <div className="flex flex-row items-center gap-3">
          <img src={filter} alt="" />
          <h3 className="font-medium text-primary-black">Filter</h3>
        </div>
        <div className=" mt-1 rounded-xl bg-[#AFB091] h-[5px]"></div>
      </div>
      <div
        className="mt-12 filter"
        onClick={() => setCategoryOpened(!categoryOpened)}
      >
        <h4 className="font-medium text-primary-black">By Category</h4>
        {categoryOpened ? (
          <MdKeyboardArrowUp style={{ fontSize: "30px" }} />
        ) : (
          <MdKeyboardArrowDown style={{ fontSize: "30px" }} />
        )}
      </div>
      {categoryOpened && (
        <div className="my-6">
          <div className="category">
            <input type="checkbox" id="Editorial" />
            <label htmlFor="Editorial" className="text-md">
              Editorial
            </label>
          </div>
          <div className="category">
            <input type="checkbox" id="Fashion" />
            <label htmlFor="Fashion" className="text-md">
              Fashion
            </label>
          </div>
          <div className="category">
            <input type="checkbox" id="Optics" />
            <label htmlFor="Optics" className="text-md">
              Optics
            </label>
          </div>
          <div className="category">
            <input type="checkbox" id="Art & Museum" />
            <label htmlFor="Art & Museum" className="text-md">
              Art & Museum
            </label>
          </div>
          <div className="category">
            <input type="checkbox" id="Nature" />
            <label htmlFor="Nature" className="text-md">
              Nature
            </label>
          </div>
        </div>
      )}
      <div className={`${categoryOpened ? "mt-12" : "mt-6"} filter`}>
        <h4 className="font-medium text-primary-black">By Price</h4>
        <MdKeyboardArrowUp style={{ fontSize: "30px" }} />
      </div>
      <div>
        <p className="font-regular my-4">$100.00 - $150.00</p>
      </div>
    </div>
  );
};

export default Filter;
