import React from "react";
import PrimaryBtn from "../../components/PrimaryBtn";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import CartTotals from "./CartTotals";
import SecondaryBtn from "../../components/SecondaryBtn";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../utils/artsy-api";

const ShoppingCart = () => {
  const {
    data: cart,
    isLoading: cartLoading,
    error,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  if (cartLoading) {
    <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center">{error.message}</p>;
  }

  return (
    <section className="py-8">
      {cart.cart.products.length > 0 ? (
        <div>
          <CartItems cart={cart.cart.products} />
          <hr style={{ color: "#747474", height: "0.3px", opacity: "0.3" }} />
          <div className="mt-16 flex lg:flex-row flex-col-reverse items-center gap-24 w-full">
            <div className="lg:w-[40%] w-full grid gap-4 place-items-center">
              <PrimaryBtn className="text-md w-full py-4">
                <Link to="/cart/shipping-details">Proceed to checkout</Link>
              </PrimaryBtn>
              <Link to="/marketplace">
                <SecondaryBtn>Continue Shopping</SecondaryBtn>
              </Link>
            </div>
            <div className="lg:w-[60%] w-full">
              <CartTotals cart={cart.cart} />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid place-items-center gap-4">
          <h3>Cart is empty</h3>
          <PrimaryBtn className="text-md py-4">
            <Link to="/marketplace">Go to marketplace</Link>
          </PrimaryBtn>
        </div>
      )}
    </section>
  );
};

export default ShoppingCart;
