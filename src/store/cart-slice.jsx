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
      state.totalProducts++; //increase no. of total products
      if (!existingProduct) {
        state.products.push({
          id: newProduct.id,
          name: newProduct.name,
          size: newProduct.size,
          price: newProduct.price,
          quantity: 1,
          creator: newProduct.creator,
        });
      } else {
        existingProduct.quantity++;
        existingProduct.price = existingProduct.price + newProduct.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
