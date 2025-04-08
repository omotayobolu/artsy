import React from "react";
import Creator1 from "../../assets/images/creator-1.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const FeaturedProduct = ({ marketplace }) => {
  return (
    <div className="my-[5%] mx-[8%]">
      <div>
        <h2 className="text-secondary-black mb-4">Featured Products</h2>
      </div>
      <div className="border-b border-opacity-50 border-secondary-black ">
        {marketplace.products.slice(0, 3).map((product) => (
          <div className="product" key={product._id}>
            <div className="border-t border-opacity-50 border-secondary-black py-[5%] flex lg:flex-row flex-col items-center justify-between gap-12 w-full">
              <div className="relative w-full">
                <div className=" w-full h-full max-w-[610px] lg:max-w-full">
                  <img
                    className="w-full h-[305px] object-cover"
                    src={product.image}
                    alt={`${product.name}'s image`}
                  />
                </div>
                <div className="absolute top-[50%] left-[50%] flex lg:flex-row flex-col items-center justify-center translate-x-[-50%] translate-y-[-50%] gap-8 opacity-0 hover:opacity-100 h-full w-full bg-product-image-hover cursor-pointer">
                  <h3 className="block lg:hidden text-white">{product.name}</h3>
                  <Link
                    to={"/marketplace/editorials/" + product._id}
                    className="flex flex-row items-center gap-3"
                  >
                    <span className="text-white lg:block hidden text-lg">
                      View Product
                    </span>
                    <div className="p-3 border border-white rounded-full">
                      <BsArrowRight
                        style={{
                          color: "#ffffff",
                          fontSize: "30px",
                        }}
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-6 text-secondary-black">
                <h3 className="hidden lg:block leading-normal">
                  {product.name}
                </h3>
                <p className="leading-normal">{product.description}</p>
                <div className="flex flex-row items-center justify-between my-3">
                  <div className="flex flex-row items-center gap-[15px]">
                    <img src={Creator1} alt="" />
                    <p className="font-medium leading-normal ml-2">
                      {product.creator}
                    </p>
                  </div>
                  <Link to={"/marketplace/editorials/" + product._id}>
                    <div className="border border-secondary-black sm:block hidden p-3 rounded-full">
                      <BsArrowRight
                        style={{
                          color: "#616161",
                          fontSize: "35`px",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
