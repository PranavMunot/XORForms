import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
};

const AuthenticateReducer = createSlice({
  name: "Auth Redux",
  initialState,
  reducers: {
    addUser(state, action) {},
    login(state) {
      state.isLoggedin = true;
    },
    logout(state) {
      state.isLoggedin = false;
    },
  },
});

export const AuthenticateActions = AuthenticateReducer.actions;
export default AuthenticateReducer;
