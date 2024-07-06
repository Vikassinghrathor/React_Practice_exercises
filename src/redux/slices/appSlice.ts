import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const appSlice = createSlice({
  name: "vikas",
  initialState,  // Use the defined initialState here
  reducers: {
    increaseCounter : (state) => {
      state.count += 1;
    },
    decreaseCounter : (state) => {
      state.count -= 1;
    },
  },
});

export const { increaseCounter, decreaseCounter } = appSlice.actions; // Export the actions for use in other parts of the application.

export default appSlice.reducer;
