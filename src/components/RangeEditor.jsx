import React from "react";

import {
  resetRange,
  changeCurrentPosition,
  changeCurrentAction,
} from "../features/ranges/rangesSlice";
import { useDispatch, useSelector } from "react-redux";

import styles from "../styles/RangeEditor.module.css";
import RangeMatrix from "../features/ranges/RangeMatrix";

import { allRangeLabels } from "../utils/Constants";

function RangeEditor() {
  const currentPosition = useSelector((state) => state.ranges.currentPosition);
  const currentAction = useSelector((state) => state.ranges.currentAction);
  const dispatch = useDispatch();

  const allPositions = allRangeLabels[currentAction];

  return (
    <div className={styles.rangeEditorContainer}>
      <section className={styles.leftPanel}>
        <div
          onClick={() => dispatch(changeCurrentAction("RFI"))}
          className={`${currentAction === "RFI" ? styles.selected : ""}`}
        >
          Open raise
        </div>
        <div
          onClick={() => dispatch(changeCurrentAction("BET3"))}
          className={`${currentAction === "BET3" ? styles.selected : ""}`}
        >
          3-bet
        </div>
        <div
          onClick={() => dispatch(changeCurrentAction("CALL3BET"))}
          className={`${currentAction === "CALL3BET" ? styles.selected : ""}`}
        >
          Call 3-bet/4-bet
        </div>
        <div
          onClick={() => dispatch(changeCurrentAction("DEFEND"))}
          className={`${currentAction === "DEFEND" ? styles.selected : ""}`}
        >
          Defend BB
        </div>
        <div
          onClick={() => dispatch(changeCurrentAction("CUSTOM"))}
          className={`${currentAction === "CUSTOM" ? styles.selected : ""}`}
        >
          Custom
        </div>
      </section>
      <div className={styles.centerPanel}>
        <RangeMatrix />
        <section className={styles.saveContainer}>
          <div>Save Range</div>
          <div>Save All Ranges</div>
          <div onClick={(e) => dispatch(resetRange())} className={styles.resetButton}>
            Reset
          </div>
        </section>
      </div>
      <section className={styles.rightPanel}>
        {allPositions.map((position) => (
          <div
            key={position}
            onClick={() => dispatch(changeCurrentPosition(position))}
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

// Just making a difference
