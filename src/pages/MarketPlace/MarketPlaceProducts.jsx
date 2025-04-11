import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PrimaryBtn from "../../components/PrimaryBtn";
import { BsArrowRight } from "react-icons/bs";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { getMarketplaceProduct } from "../../utils/artsy-api";
import { formatPrice } from "../../utils/priceFormatter";
import axiosInstance, { getToken } from "../../utils/axiosInstance";
import { toast, Toaster } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const MarketPlaceProducts = () => {
  const queryClient = useQueryClient();

  const addProductToCartHandler = async () => {
    try {
      const response = await axiosInstance.post("/cart", {
        userId: getToken(),
        productId: product._id,
        name: product.name,
        price: product.price,
        quantity: number,
        category: product.category,
        creator: product.creator,
        location: product.location,
        image: product.image,
        stripePriceId: product.stripePriceId,
      });
      toast.success("Product added to cart successfully!");
      queryClient.invalidateQueries(["cart"]);
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error(error.response.data.message);
    }
  };

  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [descriptionActive, setDescriptionActive] = useState(false);
  const [listingActive, setListingActive] = useState(false);
  const [statusActive, setStatusActive] = useState(false);

  const {
    data: product,
    isLoading: productLoading,
    isError: productError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getMarketplaceProduct(id),
  });

  const handleLikeStatus = () => {
    try {
      axiosInstance
        .patch(`/marketplace/${id}`, {
          isLiked: !isLiked,
        })
        .then((res) => {
          console.log(res.data);
          setIsLiked(res.data.isLiked);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (product) {
      setIsLiked(product.isLiked);
    }
  }, [product]);

  const formatViews = (views) => {
    if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K";
    }
  };

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

  if (productLoading) return <p className="text-center">Loading...</p>;
  if (productError) return <p className="text-center">Error...</p>;

  return (
    <div className="lg:my-[2%] lg:mx-[8%] sm:mx-[5%] mx-[3%] font-satoshi">
      <Toaster position="top-right" richColors duration={1000} />
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
              className="max-h-full md:h-[600px] h-[380px] w-full"
            />
          </div>
          <div className="lg:w-[50%] w-full">
            <div className="w-full lg:py-4 py-2 lg:px-8 px-6 flex flex-row items-center justify-between gap-8">
              <h3 className="lg:text-[40px] leading-normal text-secondary-black font-satoshi">
                {product.name}
              </h3>
              <h3 className="font-medium">{formatPrice(product.price)}</h3>
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
                  {formatViews(product.views)} views
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
                <p className="font-medium lg:text-[30px] text-md">{number}</p>
                <span
                  className="cursor-pointer font-medium"
                  onClick={addNumber}
                >
                  +
                </span>
              </div>
              <div className="lg:my-6 my-3 flex flex-row items-center gap-6">
                <PrimaryBtn
                  className="flex items-center gap-2 text-sm"
                  onClick={addProductToCartHandler}
                >
                  Add to cart <BsArrowRight color="#F5F4F4" />
                </PrimaryBtn>
                <button className="border border-primary-black py-2 px-3">
                  {isLiked ? (
                    <IoMdHeart
                      fontSize="35px"
                      cursor="pointer"
                      color="red"
                      onClick={handleLikeStatus}
                    />
                  ) : (
                    <IoIosHeartEmpty
                      fontSize="35px"
                      cursor="pointer"
                      onClick={handleLikeStatus}
                    />
                  )}
                </button>
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
                  {listingActive && (
                    <p className="text-sm pt-4">{product.listing}</p>
                  )}
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
