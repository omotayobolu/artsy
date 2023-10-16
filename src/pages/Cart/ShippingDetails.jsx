import React from "react";
import CartItems from "./CartItems";
import Input from "../../components/Input";
import PrimaryBtn from "../../components/PrimaryBtn";
import CartTotals from "./CartTotals";
import Select from "../../components/Select";

const ShippingDetails = () => {
  return (
    <section className="py-8">
      <div className="w-full flex flex-row gap-16">
        <div className="md:w-[55%] w-full">
          <Input
            label="Your Email"
            type="email"
            id="email"
            placeholder="willymonka@gmail.com"
          />
          <div className="flex flex-row items-center gap-2">
            <input type="checkbox" id="updates" />
            <label htmlFor="updates" className="text-sm text-grey3">
              Get updates about new drops & exclusive offers
            </label>
          </div>
          <Input
            label="Your Full Name"
            type="text"
            id="name"
            placeholder="Agbado Cassava"
            className="mt-8"
          />
          <Select label="Choose a wallet" className="mt-8">
            <option value=""></option>
            <option value="Coinbase">Coinbase</option>
            <option value="Metamask">Metamask</option>
            <option value="Trust wallet">Trust Wallet</option>
          </Select>
          <Select label="City" className="mt-8">
            <option value=""></option>
            <option value="Netherlands">Netherlands</option>
            <option value="United States">United States</option>
            <option value="Spain">Spain</option>
          </Select>
          <div className="mt-8 flex flex-row items-center gap-8">
            <Select label="Country" className="w-[70%]">
              <option value=""></option>
              <option value="Netherlands">Netherlands</option>
              <option value="United States">United States</option>
              <option value="Spain">Spain</option>
            </Select>
            <Input
              label="Postal Code"
              type="text"
              id="postal code"
              placeholder="00001"
              className="w-[30%]"
            />
          </div>
          <Input
            label="Phone Number"
            type="tel"
            id="phone number"
            placeholder="0812 345 6789"
            className="mt-8"
          />
          <div>
            <PrimaryBtn className="w-full text-md mt-8 py-4">
              Proceed to payment
            </PrimaryBtn>
          </div>
        </div>
        <div className="w-[45%]">
          <CartItems />
          <CartTotals />
        </div>
      </div>
    </section>
  );
};

export default ShippingDetails;
