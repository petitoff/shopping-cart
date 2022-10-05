import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../models/Product";

export interface ProductSlice {
  products: Product[];
}

const initialState: ProductSlice = {
  products: [],
};

const productSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    receivedProducts(state, action: PayloadAction<Product[]>) {
      const products = action.payload;
      products.forEach((product) => {
        state.products.push(product);
      });
    },
  },
});

export const { receivedProducts } = productSlice.actions;
export default productSlice.reducer;
