import { createSlice } from "@reduxjs/toolkit";

const csvDataSlice = createSlice({
  name: "csvData",
  initialState: {
    data: [], // Initial state for CSV data
  },
  reducers: {
    setCSVData: (state, action) => {
      const csvString = action.payload;

      const parsedData = parseCSVString(csvString);

      state.data = parsedData;
    },
    clearCSVData: (state) => {
      state.data = [];
    },
  },
});

export const { setCSVData } = csvDataSlice.actions;

export default csvDataSlice;

const parseCSVString = (csvString) => {
  const rows = csvString.trim().split(/\r?\n/);
  const headers = rows[0].split(",");
  const data = rows.slice(1).map((row) => {
    const values = row.split(",");
    const rowData = {};
    headers.forEach((header, index) => {
      rowData[header.trim()] = values[index].trim();
    });
    return rowData;
  });
  return data;
};
