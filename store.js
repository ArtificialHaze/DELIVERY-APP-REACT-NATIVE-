import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";
import restourantReducer from "./features/restourantSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restourant: restourantReducer,
  },
});
