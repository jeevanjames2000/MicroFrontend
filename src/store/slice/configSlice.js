// store/hostSlice.js
import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    mainRoute: false,
    searchRoute: [
      {
        search: false,
      },
    ],
    profile: [],
  },
  reducers: {
    home: (state, action) => {
      state.mainRoute = action.payload;
    },
    search: (state, action) => {
      state.searchRoute = action.payload;
    },
    profile: (state, action) => {
      state.profileStore = action.payload;
    },
  },
});

export const { home, search, profile } = configSlice.actions;
export default configSlice.reducer;
