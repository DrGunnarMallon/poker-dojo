import React from 'react';

import RangeMatrix from '../../components/RangeMatrix';
import { useUserStore } from '../../stores/useUserStore';
import { allRangeLabels } from '../../lib/constants';

import styles from '../../styles/RangeEditor.module.css';

function RangeEditor() {
  const user = useUserStore();

  const allPositions = allRangeLabels[user.currentAction];

  return (
    <div className={styles.rangeEditorContainer}>
      <section className={styles.leftPanel}>
        {Object.keys(allRangeLabels).map((action) => (
          <div
            onClick={() => user.changeCurrentAction(action)}
            className={`${user.currentAction === action ? styles.selected : ''}`}
            key={action}
          >
            {action}
          </div>
        ))}
      </section>
      <section className={styles.centerPanel}>
        <RangeMatrix />
        <section className={styles.saveContainer}>
          <div>Save Range</div>
          <div onClick={user.resetRange} className={styles.resetButton}>
            Reset
          </div>
        </section>
      </section>
      <section className={styles.rightPanel}>
        {allPositions.map((position) => (
          <div
            key={position}
            onClick={() => user.changeCurrentPosition(position)}
            className={`${user.currentPosition === position ? styles.selected : ''}`}
          >
            {position}
          </div>
        ))}
      </section>
    </div>
  );
}

export default RangeEditor;
