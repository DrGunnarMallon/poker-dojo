import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mouseDown: false,
  adding: true,
};

export const mouseStateSlice = createSlice({
  name: "mouseState",
  initialState,
  reducers: {
    mouseDown: (state) => {
      state.mouseDown = true;
    },
    mouseUp: (state) => {
      state.mouseDown = false;
    },
    adding: (state) => {
      state.adding = true;
    },
    deleting: (state) => {
      state.adding = false;
    },
  },
});

export const { mouseDown, mouseUp, adding, deleting } = mouseStateSlice.actions;

export default mouseStateSlice.reducer;
