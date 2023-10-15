import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restourant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
  },
};

export const restourantSlice = createSlice({
  name: "restourant",
  initialState,
  reducers: {
    setRestourant: (state, action) => {
      state.restourant = action.payload;
    },
  },
});
export const { setRestourant } = restourantSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectRestourant = (state) => state.restourant.restourant;

export default restourantSlice.reducer;
