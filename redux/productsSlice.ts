import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../models/Product";

export interface ProductSlice {
  products: Product[];
}

const initialState: ProductSlice = {
  products: [{ id: "t", name: "test" }],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
