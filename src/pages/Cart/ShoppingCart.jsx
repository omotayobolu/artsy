import React from "react";
import { useSelector } from "react-redux";
import PrimaryBtn from "../../components/PrimaryBtn";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import CartTotals from "./CartTotals";
import SecondaryBtn from "../../components/SecondaryBtn";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart); //gets all the cart details
  return (
    <section className="py-8">
      {cart.products.length > 0 ? (
        <div>
          <CartItems />
          <hr style={{ color: "#747474", height: "0.3px", opacity: "0.3" }} />
          <div className="mt-8 flex flex-row items-center gap-16 w-full">
            <div className="w-[40%] grid gap-4 place-items-center">
              <PrimaryBtn className="text-md w-full py-4">
                <Link to="/cart/shipping-details">Proceed to checkout</Link>
              </PrimaryBtn>
              <Link to="/marketplace">
                <SecondaryBtn>Continue Shopping</SecondaryBtn>
              </Link>
            </div>
            <div className="w-[60%]">
              <CartTotals />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid place-items-center">
          <h3>Cart is empty</h3>
        </div>
      )}
    </section>
  );
};

export default ShoppingCart;
