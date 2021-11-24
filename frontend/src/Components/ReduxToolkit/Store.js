import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "./FormSlice";
import TitleReducer from "./TiltleSlice";
import FormDataReducer from "./FormDataSlice";
import ResponseReducer from "./ResponseSlice";

export const Store = configureStore({
  reducer: {
    form: FormReducer.reducer,
    title: TitleReducer.reducer,
    formdata: FormDataReducer.reducer,
    response: ResponseReducer.reducer,
  },
});
