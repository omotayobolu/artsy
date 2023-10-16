import React from "react";
import { GrSecure } from "react-icons/gr";

const PaymentDetails = () => {
  return (
    <section className="">
      <div className="flex flex-row justify-between items-center mt-4">
        <h4>Payment Method</h4>
        <div className="flex flex-row items-center gap-2">
          <GrSecure style={{ fontSize: "1.5rem", color: "#747474" }} />
          <p className="text-[#747474]">Secure server</p>
        </div>
      </div>
    </section>
  );
};

export default PaymentDetails;
