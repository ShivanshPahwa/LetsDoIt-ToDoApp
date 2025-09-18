import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const labelSlice = createSlice({
  name: "labelData",
  initialState: { savedLabels: [] },
  reducers: {
    addLabel: (state, action) => {
      state.savedLabels.push({
        labelName: action.payload.labelName,
        labelColor: action.payload.labelColor,
        labelId: action.payload.labelId
      });
    },
    removeLabel: (state, action) => {
      state.savedLabels = state.savedLabels.filter(
        (label) => label.labelId !== action.payload.labelId
      );
    },
  },
});


export default labelSlice.reducer;
export const {addLabel, removeLabel} = labelSlice.actions;