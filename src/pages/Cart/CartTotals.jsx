import React from "react";
import CartSummary from "../../components/CartSummary";
import { formatPrice } from "../../utils/priceFormatter";

const CartTotals = ({ cart }) => {
  return (
    <div className="flex flex-col gap-8 font-satoshi">
      <CartSummary>
        <h4 className="text-grey3 font-normal">Products in cart:</h4>
        <span className="text-primary-black text-lg font-normal">
          {cart.totalItems}
          {cart.totalItems > 1 ? " items" : " item"}
        </span>
      </CartSummary>
      <CartSummary>
        <h4 className="text-grey3 font-normal">Shipping:</h4>
        <span className="text-primary-black text-lg font-normal">
          {formatPrice(cart.shipping)}
        </span>
      </CartSummary>
      <CartSummary>
        <h4 className="text-grey3 font-normal">Total:</h4>
        <span className="text-primary-black text-lg font-normal">
          {formatPrice(cart.roundedTotal)}
        </span>
      </CartSummary>
    </div>
  );
};

export default CartTotals;
