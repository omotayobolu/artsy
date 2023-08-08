import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Cart = () => {
  // const [shoppingCart, setShoppingCart] = useState("open");
  // const [shippingDetails, setShippingDetails] = useState("close");
  // const [paymentDetails, setPaymentDetails] = useState("close");

  // const toggleShoppingCart = () => {
  //   if (shoppingCart === "open") {
  //     setShoppingCart("close");
  //   } else {
  //     setShoppingCart("open");
  //   }
  // };

  return (
    <section className="lg:my-[2%] lg:mx-[8%] sm:mx-[5%] mx-[3%]">
      <div className="grid place-items-center">
        <ul
          className="flex flex-row items-center justify-center gap-8 border-b border-[#747474]
"
        >
          <NavLink
            to="shopping-cart"
            className={({ isActive }) =>
              isActive
                ? "text-primary-black border-b border-secondary-black cart-link"
                : "text-[#888888] cart-link"
            }
          >
            Shopping Cart
          </NavLink>
          <NavLink
            to="shipping-details"
            className={({ isActive }) =>
              isActive
                ? "text-primary-black border-b border-secondary-black cart-link"
                : "text-[#888888] cart-link"
            }
          >
            Shipping details
          </NavLink>
          <NavLink
            to="payment-details"
            className={({ isActive }) =>
              isActive
                ? "text-primary-black border-b border-secondary-black cart-link"
                : "text-[#888888] cart-link"
            }
          >
            Payment details
          </NavLink>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default Cart;
