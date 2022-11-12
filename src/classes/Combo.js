export class Combo {
  #combo;
  #value;

  constructor(combo, value) {
    this.combo = combo;
    this.value = value;
  }

  getCombo() {
    return this.combo;
  }

  getValue() {
    return this.value;
  }
}
