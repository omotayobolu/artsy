import React from "react";

const PrimaryBtn = (props) => {
  return (
    <button
      className={`bg-[#272727] rounded-sm text-white px-10 py-3 cursor-pointer ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default PrimaryBtn;
