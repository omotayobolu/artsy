import React from "react";
import CartSummary from "../../components/CartSummary";
import { formatPrice } from "../../utils/priceFormatter";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../utils/artsy-api";

const CartTotals = () => {
  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  return (
    <div className="flex flex-col gap-8 font-satoshi">
      <CartSummary>
        <h4 className="text-grey3 font-normal">Products in cart:</h4>
        <span className="text-primary-black text-lg font-normal">
          {cart.cart.totalItems}
          {cart.cart.totalItems > 1 ? " items" : " item"}
        </span>
      </CartSummary>
      <CartSummary>
        <h4 className="text-grey3 font-normal">Shipping:</h4>
        <span className="text-primary-black text-lg font-normal">
          {formatPrice(cart.cart.shipping)}
        </span>
      </CartSummary>
      <CartSummary>
        <h4 className="text-grey3 font-normal">Total:</h4>
        <span className="text-primary-black text-lg font-normal">
          {formatPrice(cart.cart.roundedTotal)}
        </span>
      </CartSummary>
    </div>
  );
};

export default CartTotals;
