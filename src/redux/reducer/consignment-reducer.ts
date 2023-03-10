import { createReducer } from "@reduxjs/toolkit";
import { getConsignmentData } from "../operation/consignment-operation";

const initialState = {
  data: {},
  message: "",
};

const consignmentReducer = createReducer(initialState, {
  [getConsignmentData.fulfilled]: (state, { payload }) => {
    state.data = payload;
  },
  [getConsignmentData.rejected]: (state, { payload }) => {
    state.message = payload.message;
  },
});

export default consignmentReducer;
