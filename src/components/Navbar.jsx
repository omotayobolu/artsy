import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Hamburger from "../assets/images/hamburger.png";
import CloseNav from "../assets/images/close nav.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [mobileNav, setMobileNav] = useState("close");

  function switchNav(mobileNav) {
    if (mobileNav === "close") {
      setMobileNav("close");
    } else {
      setMobileNav("open");
    }
  }

  return (
    <header className="py-8">
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
          className={`uppercase text-primary-black sm:block flex justify-center items-center ${
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
              ? "flex-col flex z-20 bg-white h-screen mt-[30%] mx-[5%] gap-12"
              : "flex-row hidden"
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
        </ul>
        <div className={` ${mobileNav === "open" && "hidden"}`}>
          <Link to="cart" className="relative">
            <AiOutlineShoppingCart className="text-[30px] text-secondary-black" />
            {products.length > 0 && (
              <div className="absolute top-0 right-[-3px] w-[5px] h-[5px] rounded-full bg-[#E31616]"></div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
