import React from "react";

import styles from "../../styles/ComboCell.module.css";

function ComboCell({
  value,
  editable,
  selected,
  handleClick,
  onMouseDown,
  onMouseOver,
  onMouseUp,
}) {
  return (
    <div
      className={`${styles.comboCell} ${
        value[0] === value[1]
          ? styles.pocketPair
          : value.at(-1) === "s"
          ? styles.suited
          : styles.offSuit
      }  ${selected ? styles.selected : ""}`}
      onMouseDown={onMouseDown}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
    >
      {value}
    </div>
  );
}

export default ComboCell;
