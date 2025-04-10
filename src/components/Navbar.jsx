import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Hamburger from "../assets/images/hamburger.png";
import CloseNav from "../assets/images/close nav.png";
import { getToken } from "../utils/axiosInstance";
import { getCart } from "../utils/artsy-api";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState("close");

  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  function switchNav(mobileNav) {
    if (mobileNav === "close") {
      setMobileNav("close");
    } else {
      setMobileNav("open");
    }
  }

  useEffect(() => {
    if (mobileNav === "open") {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileNav]);

  return (
    <header className="py-8 font-satoshi">
      <div
        className={`lg:mx-[8%] sm:mx-[5%] mx-[3%] ${
          mobileNav === "close" && "flex flex-row justify-between items-center"
        }`}
      >
        {mobileNav === "close" && (
          <img
            src={Hamburger}
            alt=""
            className="sm:hidden block cursor-pointer"
            onClick={() => switchNav("open")}
          />
        )}
        {mobileNav === "open" && (
          <img
            src={CloseNav}
            alt=""
            className="sm:hidden block absolute top-[5%] right-[5%] cursor-pointer"
            onClick={() => switchNav("close")}
          />
        )}
        <h3
          className={`uppercase text-primary-black sm:block flex justify-center items-center z-30 ${
            mobileNav === "open" && "absolute top-[5%] left-[5%]"
          }`}
        >
          <Link to="/" onClick={() => setMobileNav("close")}>
            Artsy.
          </Link>
        </h3>
        {mobileNav === "open"}
        <ul
          className={`sm:flex gap-6 ${
            mobileNav === "open"
              ? "flex-col flex z-20 bg-white h-screen mt-[30%] mx-[3%] gap-12"
              : "flex-row hidden z-30"
          } `}
        >
          <li>
            <NavLink
              to={`/home`}
              className={({ isActive }) =>
                isActive
                  ? "active link"
                  : `link ${mobileNav === "open" && "font-medium"} text-lg`
              }
              onClick={() => setMobileNav("close")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/marketplace`}
              className={`${
                mobileNav === "open" ? "font-medium text-lg" : "text-lg"
              } link `}
              onClick={() => setMobileNav("close")}
            >
              Marketplace
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/auctions`}
              className={`${
                mobileNav === "open" ? "font-medium text-lg" : "text-lg"
              } link `}
              onClick={() => setMobileNav("close")}
            >
              Auctions
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/drop`}
              className={`${
                mobileNav === "open" ? "font-medium text-lg" : "text-lg"
              } link `}
              onClick={() => setMobileNav("close")}
            >
              Drop
            </NavLink>
          </li>
        </ul>
        <div className={` ${mobileNav === "open" && "hidden"}`}>
          <Link
            to={`cart/shopping-cart?userId=${getToken()}`}
            className="relative"
          >
            <AiOutlineShoppingCart className="text-[30px] text-secondary-black" />
            {cart?.cart?.products?.length > 0 && (
              <div className="absolute top-0 right-[-3px] w-[5px] h-[5px] rounded-full bg-[#E31616]"></div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
