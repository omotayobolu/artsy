import React from "react";
import Footer from "../../components/Footer";

const HomeFooter = () => {
  return (
    <div className="relative mt-10 bg-white lg:px-[8%] sm:px-[5%] px-[3%] pt-[5%] pb-[2%] text-secondary-black">
      <Footer />
      <div className="mt-[10%] flex justify-center items-center">
        <h4 className="font-medium text-secondary-black font-Rubik">
          Artsystudios © 2022. All Rights Reserved.
        </h4>
      </div>
    </div>
  );
};

export default HomeFooter;
