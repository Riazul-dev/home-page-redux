import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "ProductCard",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cartProducts.push(action.payload)
    },
    updateProduct: (state, action) => {},
    deleteProduct: (state, action) => {},
  },
});

export const { addProduct, updateProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
