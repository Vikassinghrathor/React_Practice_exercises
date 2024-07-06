import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  number: 1,
};

const appSlice = createSlice({
  name: "vikas",
  initialState,  // Use the defined initialState here
  reducers: {
    increaseCounter : (state) => {
      state.count += Number(state.number);
    },
    decreaseCounter : (state) => {
      state.count -= Number(state.number);
    },
    updateNumber: (state , action) => {
      state.number = action.payload; // Update the number with the provided payload.
    }
  },
});

export const { increaseCounter, decreaseCounter , updateNumber} = appSlice.actions; // Export the actions for use in other parts of the application.

export default appSlice.reducer;
