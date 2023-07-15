import React from "react";
import { NavLink } from "react-router-dom";
import { BiEnvelope } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="lg:my-[5%] my-[8%] flex flex-row items-center justify-between">
      <h2 className="uppercase md:block hidden text-primary-black font-semibold">
        Artsy.
      </h2>
      <ul className="flex-col md:flex hidden gap-6 text-secondary-black">
        <li>
          <NavLink to={`/home`} className="footer-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={`/marketplace`} className="footer-link">
            Marketplace
          </NavLink>
        </li>
        <li>
          <NavLink to={`/auctions`} className="footer-link">
            Auctions
          </NavLink>
        </li>
        <li>
          <NavLink to={`/drop`} className="footer-link">
            Drop
          </NavLink>
        </li>
      </ul>
      <ul className="md:flex hidden flex-col gap-8 text-secondary-black">
        <li className="footer-link">Blog</li>
        <li className="footer-link">Wallets</li>
        <li className="footer-link">Rates</li>
        <li className="footer-link">High bids</li>
      </ul>
      <div className="flex flex-col md:gap-8 gap-4">
        <p className="uppercase block md:hidden font-light">Reach Us</p>
        <div className="flex flex-row items-center text-secondary-black gap-1">
          <BiEnvelope style={{ fontSize: "35px" }} />
          <p>artsystudios@gmail.com</p>
        </div>
        <div className="flex flex-row items-center text-secondary-black gap-1">
          <MdOutlineLocationOn style={{ fontSize: "35px" }} />
          <p>Lagos, Nigeria.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
