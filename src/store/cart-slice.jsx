import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalProducts: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id
      ); //checks if product exists
      if (!existingProduct) {
        state.products.push({
          id: newProduct.id,
          name: newProduct.name,
          size: newProduct.size,
          itemPrice: newProduct.price, //actual price
          price: newProduct.price * newProduct.quantity, //price if we add more than 1 quantity at a time
          quantity: newProduct.quantity,
          creator: newProduct.creator,
        });
      } else {
        existingProduct.quantity =
          existingProduct.quantity + newProduct.quantity;
        existingProduct.price =
          existingProduct.price + newProduct.price * newProduct.quantity;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },
    increaseQuantity(state, action) {
      const { id, quantity, itemPrice } = action.payload;
      const product = state.products.findIndex((item) => item.id === id);
      state.products[product].quantity = quantity + 1;
      state.products[product].price = state.products[product].price + itemPrice;
    },
    decreaseQuantity(state, action) {
      const { id, quantity, itemPrice } = action.payload;
      const product = state.products.findIndex((item) => item.id === id);
      state.products[product].quantity = quantity - 1;
      state.products[product].price = state.products[product].price - itemPrice;
    },
    total(state, action) {
      let { totalPrice, totalQuantity } = state.products.reduce(
        (cartTotal, cartProduct) => {
          const { price, quantity } = cartProduct;
          const itemTotal = price;

          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;

          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0, //initial values
        }
      );

      state.totalPrice = totalPrice;
      state.totalProducts = totalQuantity;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
