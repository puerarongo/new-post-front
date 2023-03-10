import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "./reducer/place-reducer";
import consignmentReducer from "./reducer/consignment-reducer";

const store = configureStore({
  reducer: {
    place: placeReducer,
    consignment: consignmentReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
