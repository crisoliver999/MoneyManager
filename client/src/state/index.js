import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  loggedIn: true,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLoggedIn: (state) => {
      state.loggedIn = state.loggedIn ? false : true;
    },
  },
});

export const { setMode, setLoggedIn } = globalSlice.actions;

export default globalSlice.reducer;
