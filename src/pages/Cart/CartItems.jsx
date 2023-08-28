import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CiCircleRemove } from "react-icons/ci";
import { cartActions } from "../../store/cart-slice";

const CartItems = () => {
  const cart = useSelector((state) => state.cart); //gets the cart list
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.total());
  }, [cart]);

  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const increaseQuantityHandler = (product) => {
    dispatch(cartActions.increaseQuantity(product));
  };

  const decreaseQuantityHandler = (product) => {
    dispatch(cartActions.decreaseQuantity(product));
  };

  return (
    <section>
      <div className="pt-4">
        <div className="flex flex-col">
          {cart.products.map((item) => (
            <div
              key={item.id}
              className="py-6 border-[#747474] border-opacity-30 border-t-[0.3px]"
            >
              <div className="flex flex-row items-center gap-8 w-full">
                <img
                  src={item.image}
                  className="w-[170px] h-[150px]"
                  alt={item.name}
                />
                <div className="flex flex-row justify-between w-full">
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-grey3 font-normal my-2">
                      {item.creator}
                    </p>
                    <p className="text-grey3 text-sm">
                      Size: <span>{item.size}</span>
                    </p>
                    <div className="text-[30px]  flex flex-row items-center gap-4 text-secondary-black">
                      <span
                        className="cursor-pointer font-medium"
                        onClick={
                          item.quantity > 1
                            ? () => decreaseQuantityHandler(item)
                            : () => removeItemHandler(item.id)
                        } //removes item from cart when quantity is less than 1
                      >
                        -
                      </span>
                      <p className="font-medium lg:text-[30px]">
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
                      onClick={() => removeItemHandler(item.id)}
                      className="self-center cursor-pointer text-xl text-grey3"
                    />
                    <h3 className="self-end">${item.price}</h3>
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
