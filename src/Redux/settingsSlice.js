import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState: {
    barcodeSaveLocation: null,
    workflowSaveLocation: null,
    inputDataLocation: null,
  },
  reducers: {
    set: (state, action) => {
      return action.payload;
    },
    clear: () => {
      return {
        barcodeSaveLocation: null,
        workflowSaveLocation: null,
        inputDataLocation: null,
      };
    },
  },
});

export default settingsSlice;
