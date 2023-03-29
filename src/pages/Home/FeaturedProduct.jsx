import React from "react";
import FeaturedProductData from "../../data/FeaturedProducts";
import Creator1 from "../../assets/images/creator-1.png";
import Creator2 from "../../assets/images/Creator-2.png";
import Creator3 from "../../assets/images/Creator-3.png";
import Creator4 from "../../assets/images/Creator-4.png";
import Creator5 from "../../assets/images/Creator-5.png";
import { BsArrowRight } from "react-icons/bs";

const FeaturedProduct = () => {
  return (
    <div className="my-[5%] mx-[8%]">
      <div>
        <h2 className="text-secondary-black">Featured Products</h2>
      </div>
      <div>
        {FeaturedProductData.map((product) => (
          <div className="product" key={product.id}>
            <div className="border-t border-secondary-black py-[5%] flex flex-row items-center gap-8">
              <div className="relative w-full">
                <img className="max-w-full" src={product.image} alt="" />
                <div className="absolute top-[50%] left-[50%] flex flex-row items-center justify-center translate-x-[-50%] translate-y-[-50%] gap-8 opacity-0 hover:opacity-100 h-full w-full bg-product-image-hover cursor-pointer">
                  <span className="text-white text-lg">View Product</span>
                  <div className="p-3 border border-white rounded-full">
                    <BsArrowRight
                      style={{
                        color: "#ffffff",
                        fontSize: "30px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 text-secondary-black">
                <h3>{product.title}</h3>
                <p className="leading-normal">{product.text}</p>
                <div
                  className="flex flex-row items-center justify-between my-3 
                "
                >
                  <div className="flex flex-row items-center -space-x-5">
                    <img src={Creator1} alt="" />
                    <img src={Creator2} alt="" />
                    <img src={Creator3} alt="" />
                    <img src={Creator4} alt="" />
                    <img src={Creator5} alt="" />
                  </div>
                  <p className="font-medium leading-normal ml-2">
                    64 major creators
                  </p>
                  <div className="border border-secondary-black p-3 rounded-full">
                    <BsArrowRight
                      style={{
                        color: "#616161",
                        fontSize: "35px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
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
