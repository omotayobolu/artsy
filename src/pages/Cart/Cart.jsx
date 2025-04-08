import { useQuery } from "@tanstack/react-query";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getCart } from "../../utils/artsy-api";

const Cart = () => {
  const { data: cart, isLoading: cartLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  if (cartLoading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <section className="lg:my-[1%] lg:mx-[8%] sm:mx-[5%] mx-[3%]">
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default Cart;
