import React from "react";
import Creator1 from "../../assets/images/top-creators-whitegirl.png";

const Creators = () => {
  return (
    <div className="relative bg-light-grey lg:h-[792px] lg:px-[8%] sm:px-[5%] px-[3%] py-[5%]">
      <div className="flex flex-row items-start justify-between">
        <h2 className="uppercase font-semibold leading-normal">
          Top Creators of <br className="lg:block hidden" /> the week
        </h2>
        <div className="flex flex-row gap-4">
          <div className="relative bg-grey h-[220px] lg:block hidden w-[10px] rounded-lg">
            <span className="absolute bottom-0 bg-primary-black h-[40px] w-[15px] rounded-lg"></span>
          </div>
          <ul className="creators hidden lg:list-none list-disc lg:flex lg:flex-col flex-row items-center justify-center gap-8 mt-[-5%]">
            <li>Editorial</li>
            <li>Fashion</li>
            <li>Lifestyle</li>
            <li>Blueprint</li>
          </ul>
        </div>
      </div>
      <p
        className="mt-9 my-8 text-[rgba(0,0,0,75%)] leading-[150%] lg:text-xl text-lg
       font-extralight"
      >
        “Everything always looked better in black and white. Everything always
        as if it were the first time; there's always more people in a black and
        white photograph. It just makes it seem that there were more people at a
        gig, more people at a football match, than with colour photography.
        Everything looks more exciting.”– Jack Lowden
      </p>
      <span className="font-bold lg:text-[170px] sm:text-[120px] text-[100px] leading-[155.5%] text-[#161616] line-through lg:absolute lg:right-1/4 right-1/2 flex items-center justify-end">
        1985
      </span>
      <div className="w-full">
        <img
          className="max-w-full overflow-y-visible absolute sm:top-[10%] bottom-[-5%] lg:left-[25%] left-0"
          src={Creator1}
          alt=""
        />
      </div>
    </div>
  );
};

export default Creators;
