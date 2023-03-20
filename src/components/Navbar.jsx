import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../assets/images/search icon.png";
import Cart from "../assets/images/cart icon.png";
import Notifications from "../assets/images/notification icon.png";

const Navbar = () => {
  return (
    <header className="py-4">
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
          <img src={Search} alt="" />
          <img src={Cart} alt="" />
          <img src={Notifications} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
