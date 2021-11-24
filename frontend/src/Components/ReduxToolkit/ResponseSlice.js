import { createSlice } from "@reduxjs/toolkit";
import { v1 as uuidv1 } from "uuid";

const initialState = [];

const ResponseReducer = createSlice({
  name: "Response",
  initialState,
  reducers: {
    addData(state, action) {
      let { data } = action.payload;
      //   [{},{}]
      state.push({
        id: uuidv1(),
        response: data.map((item) => item),
      });
    },
  },
});

export const ResponseActions = ResponseReducer.actions;
export default ResponseReducer;
