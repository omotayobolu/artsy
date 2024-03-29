import React, { useState, useEffect } from "react";
import filter from "../../assets/images/filter.png";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Filter = () => {
  const [categoryOpened, setCategoryOpened] = useState(false);
  const [priceOpened, setPriceOpened] = useState(false);
  const [artistOpened, setArtistOpened] = useState(false);
  const [filterOpened, setFilterOpened] = useState(false);

  const [value, setValue] = useState(100);

  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });

  return (
    <div>
      <div>
        <div
          className="flex mt-2 flex-row items-center gap-3 cursor-pointer"
          onClick={() => setFilterOpened(!filterOpened)}
        >
          <img src={filter} className="md:block hidden" alt="" />
          <h3 className="font-medium text-primary-black">Filter</h3>
          {filterOpened ? (
            <MdKeyboardArrowUp style={{ fontSize: "30px" }} />
          ) : (
            <MdKeyboardArrowDown style={{ fontSize: "30px" }} />
          )}
        </div>
        <div className=" mt-1 rounded-xl bg-[#AFB091] h-[5px] md:block hidden"></div>
      </div>
      {filterOpened && (
        <>
          <div
            className="mt-12 filter"
            onClick={() => setCategoryOpened(!categoryOpened)}
          >
            <h3 className="font-medium leading-normal text-primary-black">
              By Category
            </h3>
            {categoryOpened ? (
              <MdKeyboardArrowUp style={{ fontSize: "30px" }} />
            ) : (
              <MdKeyboardArrowDown style={{ fontSize: "30px" }} />
            )}
          </div>
          {categoryOpened && (
            <div className="my-6">
              <div className="category">
                <input type="checkbox" id="Editorial" />
                <label htmlFor="Editorial" className="text-md">
                  Editorial
                </label>
              </div>
              <div className="category">
                <input type="checkbox" id="Fashion" />
                <label htmlFor="Fashion" className="text-md">
                  Fashion
                </label>
              </div>
              <div className="category">
                <input type="checkbox" id="Optics" />
                <label htmlFor="Optics" className="text-md">
                  Optics
                </label>
              </div>
              <div className="category">
                <input type="checkbox" id="Art & Museum" />
                <label htmlFor="Art & Museum" className="text-md">
                  Art & Museum
                </label>
              </div>
              <div className="category">
                <input type="checkbox" id="Nature" />
                <label htmlFor="Nature" className="text-md">
                  Nature
                </label>
              </div>
            </div>
          )}
          <div
            className={`${categoryOpened ? "mt-12" : "mt-6"} filter`}
            onClick={() => setPriceOpened(!priceOpened)}
          >
            <h3 className="font-medium text-primary-black">By Price</h3>
            {priceOpened ? (
              <MdKeyboardArrowUp style={{ fontSize: "30px" }} />
            ) : (
              <MdKeyboardArrowDown style={{ fontSize: "30px" }} />
            )}
          </div>
          {priceOpened && (
            <div>
              <p className="font-regular my-4">$100.00 - $150.00</p>
              <div className="relative">
                <input
                  type="range"
                  min="100"
                  max="150"
                  id="price"
                  value={value}
                  onChange={({ target: { value: radius } }) => {
                    setValue(radius);
                  }}
                />
                {/* <div className="buble absolute font-medium top-[-10px]">
              ${value}
            </div> */}
                <div
                  className="absolute z-10 top-0 h-5 w-5 bg-white border border-[#000000]
              cursor-pointer rounded-full "
                ></div>
              </div>
            </div>
          )}
          <div
            className={`${priceOpened ? "mt-12" : "mt-6"} filter`}
            onClick={() => setArtistOpened(!artistOpened)}
          >
            <h3 className="font-medium text-primary-black">By Artist</h3>
            {artistOpened ? (
              <MdKeyboardArrowUp style={{ fontSize: "30px" }} />
            ) : (
              <MdKeyboardArrowDown style={{ fontSize: "30px" }} />
            )}
          </div>
          {artistOpened && (
            <div className="text-primary-black text-md font-normal flex flex-col gap-2 my-4">
              <span className="underline">All</span>
              <span>Below $100.00</span>
              <span>$100.00 - $150.00</span>
              <span>$150.00 - $200.00</span>
              <span>Above $200.00</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Filter;
