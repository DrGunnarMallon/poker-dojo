import produce from "immer";
import create from "zustand";
import { getNewRange } from "../classes/Range";

import { allRangeLabels, comboRange } from "../utils/Constants";

export const useRangeStore = create((set, get) => ({
  currentRange: getNewRange(),
  currentAction: "RFI",
  currentPosition: "UTG",

  addCombo: (combo) => {
    const index = comboRange.indexOf(combo);
    set(
      produce((state) => {
        state.currentRange[index].value = 1;
      })
    );
  },
  removeCombo: (combo) => {
    const index = comboRange.indexOf(combo);
    set(
      produce((state) => {
        state.currentRange[index].value = 0;
      })
    );
  },
  resetRange: () => {
    set({
      currentRange: getNewRange(),
    });
  },
  changeCurrentPosition: (newPosition) => {
    set({
      currentPosition: newPosition,
      currentRange: getNewRange(),
    });
  },
  changeCurrentAction: (newAction) => {
    set({
      currentAction: newAction,
      currentPosition: allRangeLabels[get().currentAction][0],
      currentRange: getNewRange(),
    });
  },
}));
