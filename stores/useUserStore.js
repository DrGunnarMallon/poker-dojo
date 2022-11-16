import create from 'zustand';
import produce from 'immer';
import { getNewRange, getBlankRanges } from '../lib/range';
import { allRangeLabels, comboRange } from '../lib/constants';

export const useUserStore = create((set, get) => ({
  userName: '',
  userEmail: '',
  userImage: '/images/defaultAvatar.png',
  isLoggedIn: false,
  premium: true,
  ranges: getBlankRanges(),
  currentAction: 'Open Raise',
  currentPosition: 'UTG',

  loginUser: (user) => set({}),
  logoutUser: (user) => set({}),

  addRangeCombo: (combo) => {
    const index = comboRange.indexOf(combo);
    set(
      produce((state) => {
        state.ranges[state.currentAction][state.currentPosition][index].value = 1;
      })
    );
  },
  removeRangeCombo: (combo) => {
    const index = comboRange.indexOf(combo);
    set(
      produce((state) => {
        state.ranges[state.currentAction][state.currentPosition][index].value = 0;
      })
    );
  },
  resetRange: () => {
    set(
      produce((state) => {
        state.ranges[state.currentAction][state.currentPosition] = getNewRange();
      })
    );
  },
  changeCurrentAction: (newAction) => {
    set({
      currentPosition: allRangeLabels[newAction][0],
      currentAction: newAction,
    });
  },
  changeCurrentPosition: (newPosition) => {
    set({
      currentPosition: newPosition,
    });
  },
}));
