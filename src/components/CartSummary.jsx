import React from "react";

const CartSummary = (props) => {
  return (
    <div className="w-full flex flex-row items-center justify-between ">
      {props.children}
    </div>
  );
};

export default CartSummary;
