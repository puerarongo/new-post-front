import { createReducer } from "@reduxjs/toolkit";
import { getConsignmentData } from "../operation/consignment-operation";

const initialState = {
  data: {},
  message: "",
  loading: false,
};

const consignmentReducer = createReducer(initialState, {
  [getConsignmentData.pending]: (state) => {
    state.loading = true;
  },
  [getConsignmentData.fulfilled]: (state, { payload }) => {
    state.data = payload;
    state.message = "";
    state.loading = false;
  },
  [getConsignmentData.rejected]: (state, { payload }) => {
    state.data = {};
    state.message = payload;
    state.loading = false;
  },
});

export default consignmentReducer;
