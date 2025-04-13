import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { formatPrice } from "../../utils/priceFormatter";
import axiosInstance, { getToken } from "../../utils/axiosInstance";
import { toast, Toaster } from "sonner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCart } from "../../utils/artsy-api";

const CartItems = () => {
  const { data: cart, isLoading: cartLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  console.log(cart);

  const queryClient = useQueryClient();

  const { mutate: removeItem } = useMutation({
    mutationFn: async (id) => {
      const response = await axiosInstance.delete("/cart", {
        data: {
          userId: getToken(),
          productId: id,
        },
      });
      return response.data;
    },
    onMutate: async (id) => {
      await queryClient.cancelQueries(["cart"]);

      const previousCart = queryClient.getQueryData(["cart"]);

      queryClient.setQueryData(["cart"], (oldData) => {
        if (!oldData) return oldData;

        return {
          ...oldData,
          cart: {
            ...oldData.cart,
            products: oldData.cart.products.filter(
              (item) => item.productId !== id
            ),
          },
        };
      });

      return { previousCart };
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries(["cart"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
      console.error(error);
    },
  });

  const { mutate: updateQuantity } = useMutation({
    mutationFn: async (product) => {
      const response = await axiosInstance.patch("/cart", {
        userId: getToken(),
        productId: product.productId,
        quantity: product.quantity,
      });
      return response.data;
    },

    onMutate: async (product) => {
      await queryClient.cancelQueries(["cart"]);

      const previousCart = queryClient.getQueryData(["cart"]);

      queryClient.setQueryData(["cart"], (oldData) => {
        if (!oldData) return oldData;

        return {
          ...oldData,
          cart: {
            ...oldData.cart,
            products: oldData.cart.products.map((item) =>
              item.productId === product.productId
                ? {
                    ...item,
                    quantity: product.quantity,
                    price: (item.price / item.quantity) * product.quantity,
                  }
                : item
            ),
          },
        };
      });

      return { previousCart };
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
      queryClient.setQueryData(["cart"], context.previousCart);
      console.error(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  const removeItemHandler = (id) => {
    removeItem(id);
  };

  const increaseQuantityHandler = (product) => {
    const updatedQuantity = product.quantity + 1;
    updateQuantity({
      ...product,
      quantity: updatedQuantity,
    });
  };

  const decreaseQuantityHandler = (product) => {
    const updatedQuantity = product.quantity - 1;
    updateQuantity({
      ...product,
      quantity: updatedQuantity,
    });
  };

  return (
    <section className="font-satoshi">
      <Toaster position="top-right" richColors duration={1000} />
      <div className="pt-4">
        <div className="flex flex-col">
          {cart.cart.products.map((item) => (
            <div
              key={item._id}
              className="py-6 border-[#747474] border-opacity-30 border-t-[0.3px]"
            >
              <div className="flex flex-row md:gap-8 gap-4 w-full h-full">
                <div className="w-[150px] max-[400px]:w-[100px] h-[196px] sm:w-[210px] sm:h-[196px] flex-shrink-0 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="flex flex-col items-start w-full h-full">
                    <div className="flex flex-row items-start justify-between gap-4 w-full">
                      <h4 className="font-medium leading-relaxed">
                        {item.name}
                      </h4>
                      <CiCircleRemove
                        onClick={() => removeItemHandler(item.productId)}
                        className="cursor-pointer text-xl text-grey3 shrink-0"
                      />
                    </div>
                    <div className="sm:flex hidden flex-col flex-grow justify-center gap-4">
                      <p className="text-grey3 text-sm">
                        Created by: {item.creator}
                      </p>
                      <p className="text-grey3 text-sm">
                        Category: <span>{item.category}</span>
                      </p>
                    </div>
                    <div className="w-full flex flex-row items-end justify-between  mt-auto">
                      <div className="text-[30px]  flex flex-row items-center gap-4 text-secondary-black">
                        <span
                          className="cursor-pointer font-medium"
                          onClick={
                            item.quantity > 1
                              ? () => decreaseQuantityHandler(item)
                              : () => removeItemHandler(item.productId)
                          } //removes item from cart when quantity is less than 1
                        >
                          -
                        </span>
                        <p className="font-medium lg:text-[30px] text-md">
                          {item.quantity}
                        </p>
                        <span
                          className="cursor-pointer font-medium"
                          onClick={() => increaseQuantityHandler(item)}
                        >
                          +
                        </span>
                      </div>
                      <h3 className="md:font-bold font-medium pb-3">
                        {formatPrice(item.price)}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CartItems;
