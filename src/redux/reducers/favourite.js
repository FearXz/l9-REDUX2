import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourite: {
    list: [],
  },
};

const favouriteSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
      state.favourite.list.push(action.payload);
    },
    removeFromFavourite: (state, action) => {
      state.favourite.list = state.favourite.list.filter((fav) => fav !== action.payload);
    },
  },
});

export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
