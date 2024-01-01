import { createSlice } from "@reduxjs/toolkit";

const csvDataSlice = createSlice({
  name: "csvData",
  initialState: {
    data: null, // Initial state for CSV data
  },
  reducers: {
    setCSVData: (state, action) => {
      state.data = action.payload;
    },
    clearCSVData: (state) => {
      state.data = null;
    },
  },
});

export const { setCSVData, clearCSVData } = csvDataSlice.actions;
export default csvDataSlice.reducer;
