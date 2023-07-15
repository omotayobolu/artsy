import React from "react";
import PrimaryBtn from "../../components/PrimaryBtn";

const Footer = () => {
  return (
    <div className="relative mt-10 bg-white lg:px-[8%] sm:px-[5%] px-[3%] pt-[5%] pb-[2%] text-secondary-black">
      <div className="md:border border-secondary-black md:flex flex-col gap-8  justify-center items-center py-16">
        <h3 className="md:font-normal font-medium uppercase">Newsletter</h3>
        <p className="md:text-xl text-md md:my-0 my-4 md:normal-case uppercase leading-normal">
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
      <Footer />
      <div className="mt-[10%] flex justify-center items-center">
        <h4 className="font-medium text-secondary-black">
          Artsystudios © 2022. All Rights Reserved.
        </h4>
      </div>
    </div>
  );
};

export default Footer;
