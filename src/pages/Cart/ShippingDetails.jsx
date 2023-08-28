import React from "react";
import CartItems from "./CartItems";
import Input from "../../components/Input";
import PrimaryBtn from "../../components/PrimaryBtn";
import CartTotals from "./CartTotals";

const ShippingDetails = () => {
  return (
    <section className="py-8">
      <div className="w-full flex flex-row gap-16">
        <div className="w-[55%]">
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
          <div cl8assName="mt-8">
            <Input
              label="Postal Code"
              type="number"
              id="postal code"
              placeholder="00001"
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
