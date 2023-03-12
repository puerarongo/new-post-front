import { createReducer } from "@reduxjs/toolkit";
import { getPlaceData } from "../operation/place-operation";

const initialState = {
  city: "",
  departments: [],
  message: "",
  loading: false,
};

const placeReducer = createReducer(initialState, {
  [getPlaceData.pending]: (state) => {
    state.loading = true;
  },
  [getPlaceData.fulfilled]: (state, { payload }) => {
    state.city = payload.city;
    state.departments = payload.departments;
    state.message = "";
    state.loading = false;
  },
  [getPlaceData.rejected]: (state, { payload }) => {
    state.city = "";
    state.departments = [];
    state.message = payload;
    state.loading = false;
  },
});

export default placeReducer;
