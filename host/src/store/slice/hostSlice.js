// store/hostSlice.js
import { createSlice } from "@reduxjs/toolkit";

const hostSlice = createSlice({
  name: "module",
  initialState: {
    cartStore: false,
    searchStore: [
      {
        search: false,
      },
    ],
    profileStore: [],
    buynowStore: [],
  },
  reducers: {
    cartState: (state, action) => {
      state.cartStore = action.payload;
    },
    searchState: (state, action) => {
      state.searchStore = action.payload;
    },
    profileState: (state, action) => {
      state.profileStore = action.payload;
    },
    buynowState: (state, action) => {
      state.buynowStore = action.payload;
    },
  },
});

export const { cartState, searchState, profileState, buynowState } =
  hostSlice.actions;
export default hostSlice.reducer;
