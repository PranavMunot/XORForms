import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const FormDataReducer = createSlice({
  name: "Form data",
  initialState,
  reducers: {
    addUpdateSingleData(state, action) {
      let { id, fieldName, data } = action.payload;
      let currentValue = state.find((item) => item.id === id);
      if (currentValue) {
        currentValue.data = data;
      } else {
        state.push({ id, fieldName, data });
      }
    },
    addCheckBoxData(state, action) {
      let { id, fieldName, index, data } = action.payload;
      let currentValue = state.find((item) => item.id === id);

      if (currentValue) {
        currentValue.data.push(data);
      } else {
        state.push({ id, fieldName, data: [data] });
      }
    },
    removeCheckBoxData(state, action) {
      let { id, index, data } = action.payload;
      let currentValue = state.find((item) => item.id === id);
      let changeIndex;
      if (currentValue) {
        currentValue.data.map((item, ind) => {
          if (item === data) {
            changeIndex = ind;
          }
        });
        currentValue.data.splice(changeIndex, 1);
      }
    },
    addUpdateRadioData(state, action) {
      let { id, fieldName, data } = action.payload;
      let currentValue = state.find((item) => item.id === id);
      if (currentValue) {
        currentValue.data = data;
      } else {
        state.push({ id, fieldName, data });
      }
    },
    removeAllData(state) {
      return initialState;
    },
    addUpdateFileData(state, action) {},
    addUpdateDate(state, action) {
      let { id, fieldName, data } = action.payload;
      let currentValue = state.find((item) => item.id === id);
      if (currentValue) {
        currentValue.data = data;
      } else {
        state.push({ id, fieldName, data });
      }
    },
  },
});

export const FormDataActions = FormDataReducer.actions;
export default FormDataReducer;
