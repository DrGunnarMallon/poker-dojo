import React from 'react';

import RangeMatrix from './RangeMatrix';
import { useUserStore } from '../stores/useUserStore';
import { allRangeLabels } from '../utils/Constants';

import styles from '../styles/RangeEditor.module.css';

function RangeEditor() {
  const user = useUserStore();

  const allPositions = allRangeLabels[user.currentAction];

  return (
    <div className={styles.rangeEditorContainer}>
      <section className={styles.leftPanel}>
        <div
          onClick={() => user.changeCurrentAction('RFI')}
          className={`${user.currentAction === 'RFI' ? styles.selected : ''}`}
        >
          Open raise
        </div>
        <div
          onClick={() => user.changeCurrentAction('BET3')}
          className={`${user.currentAction === 'BET3' ? styles.selected : ''}`}
        >
          3-bet
        </div>
        <div
          onClick={() => user.changeCurrentAction('CALL3BET')}
          className={`${user.currentAction === 'CALL3BET' ? styles.selected : ''}`}
        >
          Call 3-bet/4-bet
        </div>
        <div
          onClick={() => user.changeCurrentAction('DEFEND')}
          className={`${user.currentAction === 'DEFEND' ? styles.selected : ''}`}
        >
          Defend BB
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
