const { contextBridge, ipcRenderer } = require("electron");
const fs = require("fs");
const path = require("node:path");

contextBridge.exposeInMainWorld("electronAPI", {
  selectFile: async () => {
    try {
      const filePaths = await ipcRenderer.invoke("selectFile");
      if (filePaths && filePaths.length > 0) {
        const selectedFilePath = filePaths[0]; // For simplicity, consider the first selected file
        console.log(selectedFilePath);
        return selectedFilePath;
      } else {
        return null; // Return null if no file is selected
      }
    } catch (error) {
      console.error("Error selecting file:", error);
      return null;
    }
  },

  selectFolder: () => ipcRenderer.invoke("selectFolder"),

  saveFile: (filename, data) =>
    ipcRenderer.invoke("saveFile", [filename, data]),

  readCSVFile: async (filePath) => {
    try {
      const csvData = await ipcRenderer.invoke("readCSVFile", filePath);
      return csvData;
    } catch (error) {
      throw new Error(`Error reading CSV file: ${error.message}`);
    }
  },
});
