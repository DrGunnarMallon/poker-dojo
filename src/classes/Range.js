import { comboRange } from "../utils/Constants";

export const getNewRange = () => {
  const newRange = [];
  comboRange.map((combo) => newRange.push({ combo, value: 0 }));
  return newRange;
};
