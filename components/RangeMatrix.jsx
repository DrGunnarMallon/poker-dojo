import React from "react";
import { useMouseStore } from "../stores/useMouseStore";
import { useRangeStore } from "../stores/useRangeStore";
import styles from "../styles/ComboMatrix.module.css";
import ComboCell from "./ComboCell";
import { comboRange } from "../lib/constants";

function RangeMatrix({ editable }) {
  const mouseState = useMouseStore((state) => state.mouse);
  const addState = useMouseStore((state) => state.add);
  const rangeState = useRangeStore((state) => state.currentRange);
  const addCombo = useRangeStore((state) => state.addCombo);
  const removeCombo = useRangeStore((state) => state.removeCombo);
  const mouseDownEvent = useMouseStore((state) => state.mouseDown);
  const mouseUpEvent = useMouseStore((state) => state.mouseUp);
  const adding = useMouseStore((state) => state.adding);
  const deleting = useMouseStore((state) => state.deleting);

  const isComboInRange = (combo) => (rangeState[comboRange.indexOf(combo)].value > 0 ? true : false);

  const handleComboChange = (e) => {
    if (mouseState === true) {
      addState ? addCombo(e.target.innerText) : removeCombo(e.target.innerText);
    }
  };

  const handleMouseDown = (e) => {
    mouseDownEvent();

    if (isComboInRange(e.target.innerText)) {
      deleting();
      removeCombo(e.target.innerText);
    } else {
      adding();
      addCombo(e.target.innerText);
    }
  };

  return (
    <>
      <div className={styles.comboMatrix} onMouseLeave={() => mouseUpEvent()}>
        {comboRange.map((combo) => (
          <ComboCell
            value={combo}
            editable={editable}
            key={combo}
            selected={rangeState && rangeState[comboRange.indexOf(combo)].value}
            onMouseDown={handleMouseDown}
            onMouseUp={mouseUpEvent}
            onMouseOver={handleComboChange}
          />
        ))}
      </div>
    </>
  );
}

export default RangeMatrix;
