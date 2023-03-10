import { createReducer } from "@reduxjs/toolkit";
import { getPlaceData } from "../operation/place-operation";

const initialState = {
  city: "",
  departments: [],
  message: "",
};

const placeReducer = createReducer(initialState, {
  [getPlaceData.fulfilled]: (state, { payload }) => {
    state.city = payload.city;
    state.departments = payload.departments;
  },
  [getPlaceData.rejected]: (state, { payload }) => {
    state.message = payload.message;
  },
});

export default placeReducer;
