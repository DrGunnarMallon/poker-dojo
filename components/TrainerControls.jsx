import React from 'react';

import styles from '../styles/Trainer.module.css';
import { useTrainerStore } from '../stores/useTrainerStore';

function TrainerControls() {
  const toggleAction = useTrainerStore((state) => state.toggleAction);
  const togglePositionHero = useTrainerStore((state) => state.togglePositionHero);
  const togglePositionVillain = useTrainerStore((state) => state.togglePositionVillain);
  const setNumberTables = useTrainerStore((state) => state.setNumberTables);
  const setTimer = useTrainerStore((state) => state.setTimer);
  const actions = useTrainerStore((state) => state.actions);
  const positionHero = useTrainerStore((state) => state.positionHero);
  const positionVillain = useTrainerStore((state) => state.positionVillain);
  const numberTables = useTrainerStore((state) => state.numberTables);
  const timer = useTrainerStore((state) => state.timer);

  return (
    <div>
      <div className={styles.settingsContainer}>
        <h2>Action</h2>
        <div className={styles.actionContainer}>
          <div onClick={() => toggleAction('RFI')} className={actions['RFI'] ? styles.selected : ''}>
            Open Raise
          </div>
          <div onClick={() => toggleAction('BET3')} className={actions['BET3'] ? styles.selected : ''}>
            3bet
          </div>
          <div onClick={() => toggleAction('CALL3BET')} className={actions['CALL3BET'] ? styles.selected : ''}>
            Call 3bet
          </div>
          <div onClick={() => toggleAction('DEFEND')} className={actions['DEFEND'] ? styles.selected : ''}>
            Defend BB
          </div>
          <div onClick={() => toggleAction('FULL')} className={actions['FULL'] ? styles.selected : ''}>
            Full
          </div>
          <div onClick={() => toggleAction('CUSTOM')} className={actions['CUSTOM'] ? styles.selected : ''}>
            Custom
          </div>
        </div>
        <h2 className={styles.header}>Position Hero</h2>
        <div className={styles.positionContainer}>
          {Object.keys(positionHero).map((position) => (
            <div
              key={position}
              onClick={() => togglePositionHero(position)}
              className={positionHero[position] ? styles.selected : ''}
            >
              {position}
            </div>
          ))}
        </div>
        <h2 className={styles.header}>Position Villain</h2>
        <div className={styles.villainPosition}>
          {Object.keys(positionVillain).map((position) => (
            <div
              key={position}
              onClick={() => togglePositionVillain(position)}
              className={positionVillain[position] ? styles.selected : ''}
            >
              {position}
            </div>
          ))}
        </div>
        <h2 className={styles.header}>Number of tables</h2>
        <div className={styles.tables}>
          <div onClick={() => setNumberTables(1)} className={numberTables === 1 ? styles.selected : ''}>
            1
          </div>
          <div onClick={() => setNumberTables(2)} className={numberTables === 2 ? styles.selected : ''}>
            2
          </div>
          <div onClick={() => setNumberTables(3)} className={numberTables === 3 ? styles.selected : ''}>
            3
          </div>
          <div onClick={() => setNumberTables(4)} className={numberTables === 4 ? styles.selected : ''}>
            4
          </div>
        </div>
        <h2 className={styles.header}>Timer</h2>
        <div className={styles.timers}>
          <div onClick={() => setTimer(5)} className={timer === 5 ? styles.selected : ''}>
            5 s
          </div>
          <div onClick={() => setTimer(10)} className={timer === 10 ? styles.selected : ''}>
            10 s
          </div>
          <div onClick={() => setTimer(15)} className={timer === 15 ? styles.selected : ''}>
            15 s
          </div>
          <div onClick={() => setTimer(30)} className={timer === 30 ? styles.selected : ''}>
            30 s
          </div>
          <div onClick={() => setTimer(0)} className={timer === 0 ? styles.selected : ''}>
            Off
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerControls;
