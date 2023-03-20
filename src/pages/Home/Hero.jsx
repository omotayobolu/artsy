import React from "react";
import Carousel1 from "../../assets/images/white-boy-in-glass.png";
import Carousel2 from "../../assets/images/leaf.png";
import Carousel3 from "../../assets/images/girl-in-pink.png";
import Carousel4 from "../../assets/images/kangaroo.png";
import Carousel5 from "../../assets/images/tiny-orange-fruit.png";

const Hero = () => {
  return (
    <div>
      <div className="mx-[8%] text-primary-black">
        <h1 className="text-center font-semibold xl:text-[80px]">
          Photography is poetry & beautiful untold stories
        </h1>
        <p className="mx-[8%] leading-[156.7%] text-lg font-medium text-center">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>
      <div className="my-8 flex flex-row items-center gap-2 overflow-x-hidden">
        <img src={Carousel1} alt="" />
        <img src={Carousel2} alt="" />
        <img src={Carousel3} alt="" />
        <img src={Carousel4} alt="" />
        <img src={Carousel5} alt="" />
      </div>
    </div>
  );
};

export default Hero;
