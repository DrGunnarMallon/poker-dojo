import { createSlice } from "@reduxjs/toolkit";
import { getNewRange } from "../../classes/Range";
import { comboRange } from "../../utils/Constants";

import { allRangeLabels } from "../../utils/Constants";

const initialState = {
  ranges: {
    RFI: {
      UTG: getNewRange(),
    },
    BET3: {},
    CALL3BET: {},
    DEFEND: {},
    CUSTOM: {},
  },
  currentAction: "RFI",
  currentPosition: "UTG",
};

export const rangesSlice = createSlice({
  name: "ranges",
  initialState,
  reducers: {
    addCombo: (state, action) => {
      state.ranges[state.currentAction][state.currentPosition][
        comboRange.indexOf(action.payload)
      ].value = 1;
    },
    removeCombo: (state, action) => {
      state.ranges[state.currentAction][state.currentPosition][
        comboRange.indexOf(action.payload)
      ].value = 0;
    },
    resetRange: (state) => {
      state.ranges[state.currentAction][state.currentPosition] = getNewRange();
    },
    changeCurrentPosition: (state, action) => {
      state.currentPosition = action.payload;

      // Check if a range exists for the current position
      if (!state.ranges[state.currentAction][state.currentPosition]) {
        // Create a new range
        state.ranges[state.currentAction][state.currentPosition] = getNewRange();
      }
    },
    changeCurrentAction: (state, action) => {
      state.currentAction = action.payload;
      state.currentPosition = allRangeLabels[state.currentAction][0];

      // Check if a range exists for the current position
      if (!state.ranges[state.currentAction][state.currentPosition]) {
        // Create new range
        state.ranges[state.currentAction][state.currentPosition] = getNewRange();
      }
    },
  },
});

export const {
  addCombo,
  removeCombo,
  resetRange,
  changeCurrentPosition,
  changeCurrentAction,
  getString,
} = rangesSlice.actions;
export default rangesSlice.reducer;
