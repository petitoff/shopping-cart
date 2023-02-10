import { RootState } from "./store";
import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";

export interface CartSlice {
  items: { [productId: string]: number };
}

const initialState: CartSlice = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.items[id] >= 0) {
        state.items[id]--;
      } else {
        // remove item by id
        

        delete state.items[id];
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

export const getNumItems = (state: RootState) => {
  let numItems = 0;
  for (let id in state.cartSlice.items) {
    numItems += state.cartSlice.items[id];
  }
  return numItems;
};

export const getMemoizedNumItems = createSelector(
  (state: RootState) => state.cartSlice.items,
  (items) => {
    let numItems = 0;
    for (let id in items) {
      numItems += items[id];
    }
    return numItems;
  }
);
