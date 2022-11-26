import create from 'zustand';
import produce from 'immer';
import { getNewRange } from '../lib/range';
import { comboRange } from '../lib/constants';

/*

TODO:
- Fix the addRangeCombo and removeRangeCombo functions

*/

export const useUserStore = create((set, get) => ({
  userName: '',
  userEmail: '',
  userImage: '/images/defaultAvatar.png',
  currentPage: '/',
  isLoggedIn: false,
  premium: true,
  ranges: {},
  path: '',
  currentRange: {},
  currentAction: '',
  currentPosition: '',

  loginUser: (user) => set({}),
  logoutUser: (user) => set({}),

  addRangeCombo: (combo) => {
    const index = comboRange.indexOf(combo);
    set(
      produce((state) => {
        state.ranges[state.path][combo].value = 1;
      })
    );
  },
  removeRangeCombo: (combo) => {
    const index = comboRange.indexOf(combo);
    set(
      produce((state) => {
        state.ranges[state.path][combo].value = 0;
      })
    );
  },
  resetRange: () => {
    set(
      produce((state) => {
        state.ranges[state.path] = getNewRange();
      })
    );
  },
  changeCurrentAction: (newAction) => {
    set({
      currentAction: newAction,
      path: `${newAction}`,
    });
  },
  changeCurrentPosition: (newPosition, path) => {
    set({
      currentPosition: newPosition,
      path,
    });
  },
  setNewUser: (user) => {
    set({
      userName: user.name,
      userEmail: user.email,
      userImage: user.image,
    });
  },
  setCurrentRange: (range) => {
    set({ currentRange: range });
  },
  setPath: (path) => {
    set({ path });
  },
  addRange: (path, range) => {
    set({ ranges: { ...get().ranges, [path]: range } });
  },
  setCurrentPage: (page) => {
    set({ currentPage: page });
  },
}));
