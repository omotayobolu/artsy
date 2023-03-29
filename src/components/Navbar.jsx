import React from "react";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="py-6">
      <div className="lg:mx-[8%] flex flex-row justify-between items-center">
        <h3 className="uppercase text-primary-black">Artsy</h3>
        <ul className="flex flex-row gap-6">
          <li>
            <NavLink
              to={`/home`}
              className={({ isActive }) => (isActive ? "active link" : "link")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`/marketplace`} className="link">
              Marketplace
            </NavLink>
          </li>
          <li>
            <NavLink to={`/auctions`} className="link">
              Auctions
            </NavLink>
          </li>
          <li>
            <NavLink to={`/drop`} className="link">
              Drop
            </NavLink>
          </li>
        </ul>
        <div className="flex flex-row items-center gap-6">
          <BiSearch style={{ fontSize: "30px", color: "#333333" }} />
          <AiOutlineShoppingCart
            style={{ fontSize: "30px", color: "#333333" }}
          />
          <HiOutlineBell style={{ fontSize: "30px", color: "#333333" }} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
