import React from "react";

const Input = (props) => {
  return (
    <div className={`flex flex-col gap-4 w-full mb-2 ${props.className}`}>
      <label htmlFor={props.id} className="text-grey3 text-lg">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        className="border border-grey4 text-md rounded-sm py-3 px-6 bg-[#F2F2F2] placeholder:text-grey3"
      />
    </div>
  );
};

export default Input;
