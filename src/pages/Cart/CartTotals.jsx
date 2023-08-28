import React from "react";
import { useSelector } from "react-redux";
import CartSummary from "../../components/CartSummary";

const CartTotals = () => {
  const cart = useSelector((state) => state.cart); //gets all the cart details

  return (
    <div className="flex flex-col gap-8">
      <hr style={{ color: "#747474", height: "0.3px", opacity: "0.3" }} />
      <CartSummary>
        <h4 className="text-grey3 font-normal">Products in cart:</h4>
        <span className="text-primary-black text-lg font-normal">
          {" "}
          {cart.products.length === 1
            ? cart.products[0].quantity
            : cart.totalProducts}{" "}
          {cart.products[0].quantity > 1 || cart.totalProducts > 1
            ? "items"
            : "item"}
        </span>
      </CartSummary>
      <CartSummary>
        <h4 className="text-grey3 font-normal">Shipping:</h4>
        <span className="text-primary-black text-lg font-normal">
          {" "}
          ${cart.shipping}
        </span>
      </CartSummary>
      <CartSummary>
        <h4 className="text-grey3 font-normal">Total:</h4>
        <span className="text-primary-black text-lg font-normal">
          ${cart.totalPrice + cart.shipping}
        </span>
      </CartSummary>
    </div>
  );
};

export default CartTotals;
