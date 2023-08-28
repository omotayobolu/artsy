import React from "react";

const SecondaryBtn = (props) => {
  return (
    <button className="font-medium text-md border-b-2 border-secondary-black">
      {props.children}
    </button>
  );
};

export default SecondaryBtn;
