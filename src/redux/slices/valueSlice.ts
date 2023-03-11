import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  value: string;
}

const initialState: IInitialState = {
  value: '',
};

const valueSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    valueAdd: (state, action) => {
        const { value } = action.payload;
        state.value = value;
    },
  },
});

export const valueActions = valueSlice.actions;

export default valueSlice.reducer;
