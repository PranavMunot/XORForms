import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  formTitle: "",
  formDescription: "",
};

let TitleReducer = createSlice({
  name: "Title Slice",
  initialState: initialValue,
  reducers: {
    addTitle(state, action) {
      state.formTitle = action.payload.title;
    },
    addDescription(state, action) {
      state.formDescription = action.payload.title;
    },
  },
});

export const TitleActions = TitleReducer.actions;
export default TitleReducer;
