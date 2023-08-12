import React, { useState } from "react";
import PrimaryBtn from "../../components/PrimaryBtn";
import { Link } from "react-router-dom";
import CartSummary from "../../components/CartSummary";
import TestImage from "../../assets/images/egyptians.png";
import { CiCircleRemove } from "react-icons/ci";

const ShoppingCart = () => {
  const [number, setNumber] = useState(1);

  const addNumber = () => {
    setNumber(number + 1);
  };

  const removeNumber = () => {
    setNumber(number - 1);
    if (number === 1) {
      setNumber(1);
    }
  };

  return (
    <section className="py-8">
      <div className="pt-4">
        <hr style={{ color: "#747474", height: "0.3px", opacity: "0.3" }} />
        <div className="py-6 flex flex-row items-center gap-8 w-full">
          <img src={TestImage} className="w-[150px] h-[150px]" alt="" />
          <div className="flex flex-row justify-between w-full">
            <div>
              <h4 className="font-medium">Philomena</h4>
              <p className="text-grey3 font-normal my-2">Creator</p>
              <p className="text-grey3 text-sm">
                Size: <span>200ft</span>
              </p>
              <div className="text-[30px]  flex flex-row items-center gap-4 text-secondary-black">
                <span
                  className={`cursor-pointer font-medium ${
                    number === 1 ? "opacity-50" : ""
                  }`}
                  onClick={removeNumber}
                >
                  -
                </span>
                <p className="font-medium lg:text-[30px]">{number}</p>
                <span
                  className="cursor-pointer font-medium"
                  onClick={addNumber}
                >
                  +
                </span>
              </div>
            </div>
            <div className="max-w-full flex flex-col  justify-between">
              <CiCircleRemove className="self-center text-xl text-grey3" />
              <h3 className="self-end">$45.05</h3>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ color: "#747474", height: "0.3px", opacity: "0.3" }} />
      <div className="mt-8 flex flex-row items-center gap-16 w-full">
        <div className="w-[40%] grid gap-4 place-items-center">
          <PrimaryBtn className="text-md w-full py-4">
            Proceed to checkout
          </PrimaryBtn>
          <Link
            to="/marketplace"
            className="font-medium text-md border-b-2 border-secondary-black"
          >
            Continue Shopping
          </Link>
        </div>
        <div className="w-[60%] flex flex-col gap-8">
          <CartSummary>
            <h4 className="text-grey3 font-normal">Products in cart:</h4>
            <span className="text-primary-black text-lg font-normal">
              {" "}
              3 items
            </span>
          </CartSummary>
          <CartSummary>
            <h4 className="text-grey3 font-normal">Shipping:</h4>
            <span className="text-primary-black text-lg font-normal">
              {" "}
              $2.50
            </span>
          </CartSummary>
          <CartSummary>
            <h4 className="text-grey3 font-normal">Total:</h4>
            <span className="text-primary-black text-lg font-normal">
              $150.67
            </span>
          </CartSummary>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
