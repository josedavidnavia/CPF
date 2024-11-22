import { configureStore } from "@reduxjs/toolkit";
import poemsReducer from "./poemsSlice";

const store = configureStore({
  reducer: {
    poems: poemsReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
