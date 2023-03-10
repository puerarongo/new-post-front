import { createReducer } from "@reduxjs/toolkit";
import { getConsignmentData } from "../operation/consignment-operation";

const initialState = {
  data: {},
  message: "",
};

const consignmentReducer = createReducer(initialState, {
  [getConsignmentData.fulfilled]: (state, { payload }) => {
    state.data = payload;
    state.message = "";
  },
  [getConsignmentData.rejected]: (state, { payload }) => {
    state.data = "";
    state.message = payload.response.data.message;
  },
});

export default consignmentReducer;
