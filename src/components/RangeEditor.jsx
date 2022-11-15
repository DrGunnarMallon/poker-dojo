import React from "react";

import { useRangeStore } from "../stores/useRangeStore";
import RangeMatrix from "./RangeMatrix";
import { allRangeLabels } from "../utils/Constants";

import styles from "../styles/RangeEditor.module.css";

function RangeEditor() {
  const currentAction = useRangeStore((state) => state.currentAction);
  const currentPosition = useRangeStore((state) => state.currentPosition);
  const resetRange = useRangeStore((state) => state.resetRange);
  const changeCurrentPosition = useRangeStore((state) => state.changeCurrentPosition);
  const changeCurrentAction = useRangeStore((state) => state.changeCurrentAction);

  const allPositions = allRangeLabels[currentAction];

  return (
    <div className={styles.rangeEditorContainer}>
      <section className={styles.leftPanel}>
        <div
          onClick={() => changeCurrentAction("RFI")}
          className={`${currentAction === "RFI" ? styles.selected : ""}`}
        >
          Open raise
        </div>
        <div
          onClick={() => changeCurrentAction("BET3")}
          className={`${currentAction === "BET3" ? styles.selected : ""}`}
        >
          3-bet
        </div>
        <div
          onClick={() => changeCurrentAction("CALL3BET")}
          className={`${currentAction === "CALL3BET" ? styles.selected : ""}`}
        >
          Call 3-bet/4-bet
        </div>
        <div
          onClick={() => changeCurrentAction("DEFEND")}
          className={`${currentAction === "DEFEND" ? styles.selected : ""}`}
        >
          Defend BB
        </div>
        <div
          onClick={() => changeCurrentAction("CUSTOM")}
          className={`${currentAction === "CUSTOM" ? styles.selected : ""}`}
        >
          Custom
        </div>
      </section>
      <div className={styles.centerPanel}>
        <RangeMatrix />
        <section className={styles.saveContainer}>
          <div>Save Range</div>
          <div onClick={resetRange} className={styles.resetButton}>
            Reset
          </div>
        </section>
      </div>
      <section className={styles.rightPanel}>
        {allPositions.map((position) => (
          <div
            key={position}
            onClick={() => changeCurrentPosition(position)}
            className={`${currentPosition === position ? styles.selected : ""}`}
          >
            {position}
          </div>
        ))}
      </section>
    </div>
  );
}

export default RangeEditor;
