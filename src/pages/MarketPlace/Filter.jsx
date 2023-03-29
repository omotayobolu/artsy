import React from "react";
import SearchFilter from "../../assets/images/searchFilter.png";

const Filter = () => {
  return (
    <div>
      <div className="relative">
        <input
          className="bg-grey2 rounded-2xl p-[10px] pl-12 placeholder:text-md"
          type="text"
          placeholder="Search"
        />
        <img className="absolute top-0 left-0" src={SearchFilter} alt="" />
      </div>
    </div>
  );
};

export default Filter;
