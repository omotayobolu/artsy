import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { MarketPlaceData } from "../../data/MarketPlaceData";
import Price from "../../assets/images/price.png";
import PrimaryBtn from "../../components/PrimaryBtn";
import { BsArrowRight } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { cartActions } from "../../store/cart-slice";

const MarketPlaceProducts = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addProductToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        name: product.name,
        actualPrice: product.price,
        price: product.price,
        creator: product.creator,
        size: product.size,
        image: product.image,
        quantity: number,
        totalProducts: cart.totalProducts,
        totalPrice: cart.totalPrice,
      })
    );
  };

  const { id } = useParams();
  const product = MarketPlaceData.find((item) => item.id === Number(id));

  // to format views
  function formatViews(views) {
    if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K";
    }
  }
  const views = product.views;
  const formattedViews = formatViews(views);

  const [number, setNumber] = useState(1);

  const addNumber = () => {
    setNumber(number + 1);
  };

  const removeNumber = () => {
    setNumber(number - 1);
    if (number === 1) {
      setNumber(1);
    }
  };

  const [descriptionActive, setDescriptionActive] = useState(false);
  const [listingActive, setListingActive] = useState(false);
  const [statusActive, setStatusActive] = useState(false);

  return (
    <div className="lg:my-[2%] lg:mx-[8%] sm:mx-[5%] mx-[3%]">
      <p className="text-[#BCB7B7] my-4">
        Home/ Marketplace/ Editorials/{" "}
        <span className="text-pure-black">{product.name}</span>
      </p>
      <div className="my-8 border border-secondary-black">
        <div className="flex lg:flex-row flex-col">
          <div className="p-4 lg:w-[50%] w-full border-r border-secondary-black">
            <img
              src={product.image}
              alt={product.name}
              className="lg:w-[525px] lg:h-[600px] max-w-full"
            />
          </div>
          <div className="lg:w-[50%] w-full">
            <div className="w-full lg:py-4 py-2 lg:px-8 px-6 flex flex-row items-center justify-between">
              <h3 className="lg:text-[40px] text-secondary-black">
                {product.name}
              </h3>
              <div className="flex flex-row items-center">
                <img src={Price} alt="" />
                <h3 className="font-medium">{"0." + product.price}</h3>
              </div>
            </div>
            <div className="border-y border-secondary-black lg:py-4 py-2 lg:px-8 px-6">
              <p className="my-2 text-[#616161]">
                Creator:{" "}
                <span className="text-[#4693ED] font-medium">
                  {product.creator}
                </span>
              </p>
              <p className="my-2 text-pure-black">Made in {product.location}</p>
              <p className="my-2 font-medium">
                Total views:{" "}
                <span className="text-secondary-black">
                  {formattedViews} views
                </span>
              </p>
              <div className="text-[30px] my-2 flex flex-row items-center gap-4 text-secondary-black">
                <span
                  className={`cursor-pointer font-medium ${
                    number === 1 ? "opacity-50" : ""
                  }`}
                  onClick={removeNumber}
                >
                  -
                </span>
                <p className="font-medium lg:text-[30px]">{number}</p>
                <span
                  className="cursor-pointer font-medium"
                  onClick={addNumber}
                >
                  +
                </span>
              </div>
              <div className="lg:my-6 flex flex-row items-center gap-6">
                <PrimaryBtn
                  className="flex items-center gap-2 text-sm"
                  onClick={addProductToCartHandler}
                >
                  Add to cart <BsArrowRight color="#F5F4F4" />
                </PrimaryBtn>
                <div className="border border-primary-black py-2 px-3">
                  <CiHeart fontSize="35px" cursor="pointer" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="py-4 px-8 border-b border-secondary-black">
                <div
                  className="flex flex-row items-center justify-between cursor-pointer"
                  onClick={() => setDescriptionActive(!descriptionActive)}
                >
                  <h4>Description</h4>
                  {descriptionActive ? (
                    <MdKeyboardArrowUp fontSize="30px" />
                  ) : (
                    <MdKeyboardArrowDown fontSize="30px" />
                  )}
                </div>
                {descriptionActive && (
                  <p className="text-sm pt-4">{product.description}</p>
                )}
              </div>
              <div>
                <div className="py-4 px-8 border-b border-secondary-black">
                  <div
                    className="flex flex-row items-center justify-between cursor-pointer"
                    onClick={() => setListingActive(!listingActive)}
                  >
                    <h4>Listing</h4>
                    {listingActive ? (
                      <MdKeyboardArrowUp fontSize="30px" />
                    ) : (
                      <MdKeyboardArrowDown fontSize="30px" />
                    )}
                  </div>
                  <Link>
                    {listingActive && (
                      <p className="text-sm pt-4 hover:text-orange">
                        {product.listing}
                      </p>
                    )}
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="py-4 px-8">
                <div
                  className="flex flex-row items-center justify-between cursor-pointer"
                  onClick={() => setStatusActive(!statusActive)}
                >
                  <h4>Status</h4>
                  {statusActive ? (
                    <MdKeyboardArrowUp fontSize="30px" />
                  ) : (
                    <MdKeyboardArrowDown fontSize="30px" />
                  )}
                </div>
                {statusActive && (
                  <p className="text-sm pt-4">{product.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceProducts;
