import React, { useEffect } from "react";
import SuccessDesign from "../../assets/images/success design.png";
import Delivery from "../../assets/images/Woman get online delivery.png";
import PartyPopper from "../../assets/images/noto_party-popper.svg";
import axiosInstance from "../../utils/axiosInstance";
import { useQueryClient } from "@tanstack/react-query";

const success = () => {
  const queryClient = useQueryClient();

  const successPayment = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get("session_id");
    console.log(sessionId);
    if (sessionId) {
      axiosInstance
        .post("/clear-cart", { sessionId })
        .then((response) => {
          console.log("Cart cleared successfully");
          queryClient.invalidateQueries(["cart"]);
        })
        .catch((error) => {
          console.error("Error clearing cart:", error);
        });
    }
  };

  useEffect(() => {
    successPayment();
  }, []);

  return (
    <div className="font-satoshi">
      <img src={SuccessDesign} alt="" className="absolute top-0 z-10" />
      <div className="flex flex-col justify-center items-center">
        <img src={Delivery} alt="" />
        <h3 className="text-pure-black font-medium mt-4 leading-normal text-center">
          Hey, thank you for your purchase.
        </h3>
        <h4 className="text-pure-black flex flex-wrap items-center justify-center font-normal mt-7 text-center">
          You are amazing. Cheers to being{" "}
          <span className="ml-2 font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#006CA2] to-[rgba(192,86,9,0.49)]">
            ARTSY!
          </span>
          <img src={PartyPopper} alt="" className="ml-2 w-10 h-10" />
        </h4>
      </div>
    </div>
  );
};

export default success;
