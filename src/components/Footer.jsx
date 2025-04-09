import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiEnvelope } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import PrimaryBtn from "../components/PrimaryBtn";
import axiosInstance from "../utils/axiosInstance";
import { Toaster, toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");
  const subscribeNewsletter = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/subscribe", { email });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Toaster position="top-right" expand={true} richColors duration={1000} />
      <div className="md:border border-secondary-black md:flex flex-col gap-8  justify-center items-center py-16 font-satoshi">
        <h3 className="md:font-normal font-medium uppercase font-Baskervville">
          Newsletter
        </h3>
        <p className="md:text-xl text-md md:my-0 my-4 md:normal-case uppercase leading-normal md:text-center">
          Subscribe to get daily updates on new drops & exciting deals
        </p>
        <form
          onSubmit={subscribeNewsletter}
          className="flex flex-col md:flex-row md:items-center gap-4 w-full max-w-xl mx-auto"
        >
          <input
            type="email"
            className="flex-1 border border-secondary-black px-6 py-2.5 placeholder:uppercase placeholder:text-base text-secondary-black w-full"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <PrimaryBtn className="uppercase font-Baskervville text-base w-full md:w-auto">
            Subscribe
          </PrimaryBtn>
        </form>
      </div>
      <div className="lg:my-[5%] md:my-[8%] my-[3%] flex flex-row items-center justify-between font-satoshi">
        <h2 className="uppercase md:block hidden text-primary-black font-bold ">
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
