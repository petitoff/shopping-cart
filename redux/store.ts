import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartSlice";
import ProductsSlice from "./productsSlice";

export const store = configureStore({
  reducer: {
    cartSlice: CartSlice,
    productsSlice: ProductsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
