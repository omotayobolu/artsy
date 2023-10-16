import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Select = (props) => {
  return (
    <div className={`flex flex-col relative mb-2 ${props.className}`}>
      <label htmlFor="wallet" className="text-grey3 text-lg mb-4">
        {props.label}
      </label>
      <select className="w-full  border border-grey4 text-md rounded-sm py-3 px-6 bg-[#F2F2F2] appearance-none ">
        {props.children}
      </select>
      <MdKeyboardArrowDown
        style={{
          position: "absolute",
          right: "15px",
          top: "50%",
          height: "30px",
          width: "50px",
          color: "#747474",
        }}
      />
    </div>
  );
};

export default Select;
