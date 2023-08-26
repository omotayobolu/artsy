export const sendCartData = (cart) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://artsy-cart-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            products: cart.products,
            totalPrice: cart.totalPrice + cart.shipping,
            totalProducts: cart.totalProducts,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Could not send data to cart");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};
