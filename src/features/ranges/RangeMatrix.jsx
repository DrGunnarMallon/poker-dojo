import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCombo, removeCombo } from "./rangesSlice";
import { mouseDown, mouseUp, adding, deleting } from "../mouseState/mouseStateSlice";

import styles from "../../styles/ComboMatrix.module.css";
import ComboCell from "./ComboCell";
import { comboRange } from "../../utils/Constants";

function RangeMatrix({ editable }) {
  const dispatch = useDispatch();

  const currentAction = useSelector((state) => state.ranges.currentAction);
  const currentPosition = useSelector((state) => state.ranges.currentPosition);
  const ranges = useSelector((state) => state.ranges.ranges);
  const currentRange = ranges[currentAction][currentPosition];
  const mouseState = useSelector((state) => state.mouseState.mouseDown);
  const add = useSelector((state) => state.mouseState.adding);

  const isComboInRange = (combo) =>
    currentRange[comboRange.indexOf(combo)].value > 0 ? true : false;

  const handleComboChange = (e) => {
    dispatch(add ? addCombo(e.target.innerText) : removeCombo(e.target.innerText));
  };

  const handleMouseDown = (e) => {
    dispatch(mouseDown());

    if (isComboInRange(e.target.innerText)) {
      dispatch(deleting());
      dispatch(removeCombo(e.target.innerText));
    } else {
      dispatch(adding());
      dispatch(addCombo(e.target.innerText));
    }
  };

  const handleMouseUp = (e) => {
    dispatch(mouseUp());
  };

  const handleMouseOver = (e) => {
    if (mouseState === true) {
      handleComboChange(e);
    }
  };

  return (
    <div className={styles.comboMatrix} onMouseLeave={() => dispatch(mouseUp())}>
      {comboRange.map((combo) => (
        <ComboCell
          value={combo}
          editable={editable}
          key={combo}
          selected={currentRange && currentRange[comboRange.indexOf(combo)].value}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseOver={handleMouseOver}
        />
      ))}
    </div>
  );
}

export default RangeMatrix;
