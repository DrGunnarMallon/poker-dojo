import create from 'zustand';
import produce from 'immer';

export const useTrainerStore = create((set, get) => ({
  actions: { RFI: false, BET3: false, CALL3BET: false, DEFEND: false, FULL: false, CUSTOM: false },
  positionHero: { UTG: false, MP: false, CO: false, BTN: false, SB: false, BB: false },
  positionVillain: { UTG: false, MP: false, CO: false, BTN: false, SB: false, BB: false },
  numberTables: 1,
  timer: 0,

  toggleAction: (value) => {
    set(
      produce((state) => {
        state.actions[value] = !state.actions[value];
      })
    );
  },

  togglePositionHero: (value) => {
    set(
      produce((state) => {
        state.positionHero[value] = !state.positionHero[value];
      })
    );
  },

  togglePositionVillain: (value) => {
    set(
      produce((state) => {
        state.positionVillain[value] = !state.positionVillain[value];
      })
    );
  },

  setNumberTables: (value) => {
    set({ numberTables: value });
  },

  setTimer: (value) => {
    set({ timer: value });
  },
}));
