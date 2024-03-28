import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <section className="lg:my-[1%] lg:mx-[8%] sm:mx-[5%] mx-[3%]">
      <div className="grid place-items-center">
        {cart.products.length > 0 && (
          <ul className="md:flex hidden flex-row items-center justify-center gap-8 border-b border-grey4 border-opacity-30">
            <NavLink
              to="shopping-cart"
              className={({ isActive }) =>
                isActive
                  ? "text-primary-black border-b border-secondary-black cart-link"
                  : "cart-link"
              }
            >
              Shopping Cart
            </NavLink>
            <NavLink
              to="shipping-details"
              className={({ isActive }) =>
                isActive
                  ? "text-primary-black border-b border-secondary-black cart-link"
                  : "cart-link"
              }
            >
              Shipping details
            </NavLink>
            <NavLink
              to="payment-details"
              className={({ isActive }) =>
                isActive
                  ? "text-primary-black border-b border-secondary-black cart-link"
                  : "cart-link"
              }
            >
              Payment details
            </NavLink>
          </ul>
        )}
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default Cart;
