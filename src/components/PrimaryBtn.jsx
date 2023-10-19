import React from "react";

const PrimaryBtn = (props) => {
  return (
    <button
      className={`bg-[#272727] rounded-sm text-white px-10 py-3 cursor-pointer hover:opacity-80 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default PrimaryBtn;
