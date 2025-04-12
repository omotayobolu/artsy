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
              <div className="flex flex-row gap-8 w-full h-full">
                <div className="w-[210px] h-[196px] flex items-center justify-center bg-gray-200">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover max-w-full"
                    alt={item.name}
                  />
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="flex flex-col items-start h-full">
                    <h4 className="font-medium leading-relaxed">{item.name}</h4>
                    <div className="sm:flex hidden flex-col flex-grow justify-center gap-4">
                      <p className="text-grey3 text-sm">
                        Created by: {item.creator}
                      </p>
                      <p className="text-grey3 text-sm">
                        Category: <span>{item.category}</span>
                      </p>
                    </div>
                    <div className="text-[30px]  flex flex-row items-center gap-4 text-secondary-black mt-auto">
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
                  </div>
                  <div className="max-w-full flex flex-col  justify-between">
                    <CiCircleRemove
                      onClick={() => removeItemHandler(item.productId)}
                      className="self-end cursor-pointer text-xl text-grey3"
                    />
                    <h3 className="self-end mb-3">{formatPrice(item.price)}</h3>
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
