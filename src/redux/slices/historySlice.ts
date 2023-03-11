import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  history: string[];
}

const initialState: IInitialState = {
  history: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    historyAdd: (state, action) => {
      const { TTN } = action.payload;
      if (!state.history.includes(TTN)) state.history.push(TTN);
    },

    historyDelete: () => initialState,
  },
});

export const historyActions = historySlice.actions;

export default historySlice.reducer;
