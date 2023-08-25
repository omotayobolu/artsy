import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PrimaryBtn from "../../components/PrimaryBtn";
import { Link } from "react-router-dom";
import CartSummary from "../../components/CartSummary";
import TestImage from "../../assets/images/egyptians.png";
import { CiCircleRemove } from "react-icons/ci";
import { cartActions } from "../../store/cart-slice";
import { getItem } from "localforage";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.products); //gets the cart list
  const totalProducts = useSelector((state) => state.cart.totalProducts);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.total());
  }, [cartItems]);

  const shipping = totalPrice / 100;

  // const addItemHandler = (product) => {
  //   dispatch(cartActions.addItemToCart(product));
  // };

  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const increaseQuantityHandler = (product) => {
    dispatch(cartActions.increaseQuantity(product));
  };

  const decreaseQuantityHandler = (product) => {
    dispatch(cartActions.decreaseQuantity(product));
  };

  // dispatch(cartActions.summary());

  return (
    <section className="py-8">
      {cartItems.length > 0 ? (
        <div>
          <div className="pt-4">
            <div className="flex flex-col">
              {cartItems.map((item) => (
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
          <hr style={{ color: "#747474", height: "0.3px", opacity: "0.3" }} />
          <div className="mt-8 flex flex-row items-center gap-16 w-full">
            <div className="w-[40%] grid gap-4 place-items-center">
              <PrimaryBtn className="text-md w-full py-4">
                Proceed to checkout
              </PrimaryBtn>
              <Link
                to="/marketplace"
                className="font-medium text-md border-b-2 border-secondary-black"
              >
                Continue Shopping
              </Link>
            </div>
            <div className="w-[60%] flex flex-col gap-8">
              <CartSummary>
                <h4 className="text-grey3 font-normal">Products in cart:</h4>
                <span className="text-primary-black text-lg font-normal">
                  {" "}
                  {cartItems.length === 1
                    ? cartItems[0].quantity
                    : totalProducts}{" "}
                  {cartItems[0].quantity > 1 || totalProducts > 1
                    ? "items"
                    : "item"}
                </span>
              </CartSummary>
              <CartSummary>
                <h4 className="text-grey3 font-normal">Shipping:</h4>
                <span className="text-primary-black text-lg font-normal">
                  {" "}
                  ${shipping}
                </span>
              </CartSummary>
              <CartSummary>
                <h4 className="text-grey3 font-normal">Total:</h4>
                <span className="text-primary-black text-lg font-normal">
                  ${totalPrice + shipping}
                </span>
              </CartSummary>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid place-items-center">
          <h3>Cart is empty</h3>
        </div>
      )}
    </section>
  );
};

export default ShoppingCart;
