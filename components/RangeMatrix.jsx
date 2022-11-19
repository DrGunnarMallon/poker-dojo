import React from 'react';
import { useMouseStore } from '../stores/useMouseStore';
import styles from '../styles/ComboMatrix.module.css';
import ComboCell from './ComboCell';
import { comboRange } from '../lib/constants';
import { useUserStore } from '../stores/useUserStore';

function RangeMatrix({ editable }) {
  const user = useUserStore();
  const mouseState = useMouseStore();

  const isComboInRange = (combo) => (user.ranges[user.path][combo].value > 0 ? true : false);

  const handleComboChange = (e) => {
    if (user.ranges[user.path]) {
      if (mouseState.mouse === true) {
        mouseState.add ? user.addRangeCombo(e.target.innerText) : user.removeRangeCombo(e.target.innerText);
      }
    }
  };

  const handleMouseDown = (e) => {
    if (user.ranges[user.path]) {
      mouseState.mouseDown();
      if (isComboInRange(e.target.innerText)) {
        mouseState.deleting();
        user.removeRangeCombo(e.target.innerText);
      } else {
        mouseState.adding();
        user.addRangeCombo(e.target.innerText);
      }
    }
  };

  return (
    <>
      <div className={styles.comboMatrix} onMouseLeave={() => mouseState.mouseUp()}>
        {comboRange.map((combo) => (
          <ComboCell
            value={combo}
            editable={editable}
            key={combo}
            selected={user.ranges[user.path] && user.ranges[user.path][combo]?.value}
            onMouseDown={handleMouseDown}
            onMouseUp={mouseState.mouseUp}
            onMouseOver={handleComboChange}
          />
        ))}
      </div>
    </>
  );
}

export default RangeMatrix;
