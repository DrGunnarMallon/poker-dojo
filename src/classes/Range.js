import { Combo } from "./Combo";

import { comboRange } from "../utils/Constants";

export const getNewRange = () => {
  const newRange = [];
  comboRange.map((combo) => newRange.push({ combo, value: 0 }));
  return newRange;
};

export class Range {
  #combos;

  constructor() {
    this.combos = [];
    comboRange.map((combo) => this.combos.push({ combo, value: 0 }));
  }

  getIndex(combo) {
    return comboRange.indexOf(combo);
  }

  isComboInRange(combo) {
    return this.combos[this.getIndex(combo)].value > 0 ? true : false;
  }

  addCombo(combo, value) {
    this.combos[this.getIndex(combo)].value = value;
  }

  removeCombo(combo) {
    this.combos[this.getIndex(combo)].value = 0;
  }

  getCombos() {
    return this.combos;
  }
}
