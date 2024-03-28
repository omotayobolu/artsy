import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BiEnvelope } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import PrimaryBtn from "../components/PrimaryBtn";

const Footer = () => {
  return (
    <>
      <div className="md:border border-secondary-black md:flex flex-col gap-8  justify-center items-center py-16">
        <h3 className="md:font-normal font-medium uppercase">Newsletter</h3>
        <p className="md:text-xl text-md md:my-0 my-4 md:normal-case uppercase leading-normal md:text-center">
          Subscribe to get daily updates on new drops & exciting deals
        </p>
        <div className="flex md:flex-row flex-col md:items-center items-start gap-6">
          <input
            type="email"
            className="border border-secondary-black px-6 py-2 placeholder:uppercase placeholder:text-base text-secondary-black text-md"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <PrimaryBtn className="uppercase text-sm">Subscribe</PrimaryBtn>
        </div>
      </div>
      <div className="lg:my-[5%] md:my-[8%] my-[3%] flex flex-row items-center justify-between">
        <h2 className="uppercase md:block hidden text-primary-black font-semibold">
          <Link to="/home">Artsy.</Link>
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
          <div className="flex flex-row items-center text-secondary-black gap-1 mb-12 md:mb-0">
            <MdOutlineLocationOn style={{ fontSize: "35px" }} />
            <p>Lagos, Nigeria.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
