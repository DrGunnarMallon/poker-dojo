import create from "zustand";

export const useMouseStore = create((set) => ({
  mouse: false,
  add: true,
  mouseDown: () => set({ mouse: true }),
  mouseUp: () => set({ mouse: false }),
  adding: () => set({ add: true }),
  deleting: () => set({ add: false }),
}));
