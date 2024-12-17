import { configureStore } from "@reduxjs/toolkit";
import hostReducer from "./slice/hostSlice";
import cartSlice from "./slice/cartSlice";
import configSlice from "./slice/configSlice";

const store = configureStore({
  reducer: {
    module: hostReducer,
    cart: cartSlice,
    config: configSlice,
  },
});

export default store;
