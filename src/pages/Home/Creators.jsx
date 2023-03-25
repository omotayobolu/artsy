import React from "react";
import Creator1 from "../../assets/images/top-creators-whitegirl.png";

const Creators = () => {
  return (
    <div className="relative bg-light-grey px-[8%] py-[5%]">
      <div className="flex flex-row items-start justify-between">
        <h2 className="uppercase font-semibold">
          Top Creators of <br /> the week
        </h2>
        <div className="flex flex-row gap-4">
          <div className="relative bg-grey h-[200px] w-[10px] rounded-lg">
            <span className="absolute bottom-0 bg-primary-black h-[40px] w-[10px] rounded-lg"></span>
          </div>
          <ul className="creators flex flex-col items-center justify-center gap-6">
            <li>Editorial</li>
            <li>Fashion</li>
            <li>Lifestyle</li>
            <li>Blueprint</li>
          </ul>
        </div>
      </div>
      <p className="my-8 text-[rgba(0,0,0,75%)] leading-[130%] text-xl font-extralight">
        “Everything always looked better in black and white. Everything always
        as if it were the first time; there's always more people in a black and
        white photograph. It just makes it seem that there were more people at a
        gig, more people at a football match, than with colour photography.
        Everything looks more exciting.”– Jack Lowden
      </p>
      <span className="font-bold text-[170px] leading-[155.5%] text-[#161616] line-through right-0 flex items-center justify-end">
        1985
      </span>
      <div className="w-full">
        <img
          className="max-w-full absolute top-[8%] left-[25%]"
          src={Creator1}
          alt=""
        />
      </div>
    </div>
  );
};

export default Creators;
