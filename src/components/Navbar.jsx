import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi";
import Hamburger from "../assets/images/hamburger.png";
import CloseNav from "../assets/images/close nav.png";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState("close");

  function switchNav(mobileNav) {
    if (mobileNav === "close") {
      setMobileNav("close");
    } else {
      setMobileNav("open");
    }
  }

  return (
    <header className="py-6">
      <div
        className={`lg:mx-[8%] sm:mx-[5%] mx-[3%] ${
          mobileNav === "close" && "flex flex-row justify-between items-center"
        }`}
      >
        {mobileNav === "close" && (
          <img
            src={Hamburger}
            alt=""
            className="sm:hidden block"
            onClick={() => switchNav("open")}
          />
        )}
        {mobileNav === "open" && (
          <img
            src={CloseNav}
            alt=""
            className="sm:hidden block absolute top-[5%] right-[5%]"
            onClick={() => switchNav("close")}
          />
        )}
        <h3
          className={`uppercase text-primary-black sm:block flex justify-center items-center ${
            mobileNav === "open" && "absolute top-[5%] left-[5%]"
          }`}
        >
          Artsy.
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
                mobileNav === "open" ? "font-medium text-lg" : ""
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
                mobileNav === "open" ? "font-medium text-lg" : ""
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
                mobileNav === "open" ? "font-medium text-lg" : ""
              } link `}
              onClick={() => setMobileNav("close")}
            >
              Drop
            </NavLink>
          </li>
        </ul>
        <div
          className={`flex flex-row items-center gap-6 ${
            mobileNav === "open" && "hidden"
          }`}
        >
          <BiSearch style={{ fontSize: "30px", color: "#333333" }} />
          <AiOutlineShoppingCart
            style={{ fontSize: "30px", color: "#333333" }}
          />
          <HiOutlineBell
            style={{ fontSize: "30px", color: "#333333" }}
            className="sm:block hidden"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
