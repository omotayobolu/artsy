import React from "react";
import { NavLink } from "react-router-dom";
import PrimaryBtn from "../../components/PrimaryBtn";
import { BiEnvelope } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="relative mt-10 bg-white px-[8%] pt-[5%] pb-[2%] text-secondary-black">
      <div className="border border-secondary-black flex flex-col gap-8  justify-center items-center py-16">
        <h3 className="font-normal uppercase">Newsletter</h3>
        <p className="lg:text-xl">
          Subscribe to get daily updates on new drops & exciting deals
        </p>
        <div className="flex flex-row items-center gap-6">
          <input
            type="email"
            className="border border-secondary-black px-12 py-2 placeholder:uppercase placeholder:text-base text-secondary-black text-sm"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <PrimaryBtn className="uppercase text-sm">Subscribe</PrimaryBtn>
        </div>
      </div>
      <div className="my-[5%] flex flex-row items-center justify-between">
        <h2 className="uppercase text-primary-black font-semibold">Artsy.</h2>
        <ul className="flex-col flex gap-6 text-secondary-black">
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
        <ul className="flex flex-col gap-8 text-secondary-black">
          <li className="footer-link">Blog</li>
          <li className="footer-link">Wallets</li>
          <li className="footer-link">Rates</li>
          <li className="footer-link">High bids</li>
        </ul>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center text-secondary-black gap-1">
            <BiEnvelope style={{ fontSize: "35px" }} />
            <h4>artsystudios@gmail.com</h4>
          </div>
          <div className="flex flex-row items-center text-secondary-black gap-1">
            <MdOutlineLocationOn style={{ fontSize: "35px" }} />
            <h4>Lagos, Nigeria.</h4>
          </div>
        </div>
      </div>
      <div className="mt-[10%] flex justify-center items-center">
        <h4 className="font-medium">
          Artsystudios © 2022. All Rights Reserved.
        </h4>
      </div>
    </div>
  );
};

export default Footer;
