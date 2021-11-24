import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const AuthenticateReducer = createSlice({
  name: "Auth Redux",
  initialState,
  reducers: {
    addUser(state, action) {},
    login(state, action) {},
    logout(state, action) {},
  },
});

export const AuthenticateActions = AuthenticateReducer.actions;
export default AuthenticateReducer;
