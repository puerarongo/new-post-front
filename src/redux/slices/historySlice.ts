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
      const { history } = action.payload;
      state.history.push(history);
    },

    historyDelete: () => initialState,
  },
});

export const historyActions = historySlice.actions;

export default historySlice.reducer;
