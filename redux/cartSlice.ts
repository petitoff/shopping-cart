import { createSlice } from "@reduxjs/toolkit";

export interface CartSlice {
  items: { [productId: string]: number };
}

const initialState: CartSlice = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
