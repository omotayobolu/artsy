import React from "react";

const SecondaryBtn = (props) => {
  return (
    <button className="font-medium text-md underline underline-offset-8">
      {props.children}
    </button>
  );
};

export default SecondaryBtn;
