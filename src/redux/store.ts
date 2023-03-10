import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "./reducer/place-reducer";
import consignmentReducer from "./reducer/consignment-reducer";
import historySlice from "./slices/historySlice";

const store = configureStore({
  reducer: {
    place: placeReducer,
    consignment: consignmentReducer,
    history: historySlice,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
