import React, { useState } from 'react';

import RangeMatrix from '../../components/RangeMatrix';
import { useUserStore } from '../../stores/useUserStore';
import { allRangeLabels } from '../../lib/constants';
import { getSession } from 'next-auth/react';
import { getNewRange } from '../../lib/range';
import { ToastContainer, toast } from 'react-toastify';

import styles from '../../styles/RangeEditor.module.css';
import 'react-toastify/dist/ReactToastify.css';

import Slider from '@mui/material/Slider';
import SliderComponent from '../../components/SliderComponent';

function RangeEditor({ session }) {
  const [rfi, setRfi] = useState(0);
  const [call, setCall] = useState(0);
  const [b3cB4, setB3cB4] = useState(0);
  const [b3B5, setB3B5] = useState(0);
  const [b3F, setB3F] = useState(0);

  const userPath = useUserStore((state) => state.path);
  const userRanges = useUserStore((state) => state.ranges);
  const userChangeAction = useUserStore((state) => state.changeCurrentAction);
  const userChangePosition = useUserStore((state) => state.changeCurrentPosition);
  const userCurrentAction = useUserStore((state) => state.currentAction);
  const userCurrentPosition = useUserStore((state) => state.currentPosition);
  const userResetRange = useUserStore((state) => state.resetRange);
  const userAddRange = useUserStore((state) => state.addRange);

  const allPositions = allRangeLabels[userCurrentAction];

  const handleSaveRange = async () => {
    const data = await fetch(`/api/mongo/writerange`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: session.user.email,
        path: userPath,
        range: userRanges[userPath],
      }),
    });
    if (data.status === 200) {
      toast.success('Range saved to database', { icon: '🚀' });
    } else {
      toast.error('Range could not be saved', { icon: '💩' });
    }
  };

  const handleReloadRange = async () => {
    const data = await fetch('/api/mongo/readrange', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: session.user.email,
        path: userPath,
      }),
    });
    const results = await data.json();

    // Loading range from Mongo
    if (Object.keys(results).length > 0) {
      userAddRange(results[0].path, results[0].range);
      toast.success('Range reloaded from database', { icon: '🚀' });
    } else {
      toast.error('Range not found', { icon: '💩' });
    }
  };

  const handleActionChange = async (action) => {
    userChangeAction(action);
  };

  const handlePositionChange = async (position) => {
    const path = `${userCurrentAction} ${position}`;
    userChangePosition(position, path);

    // Range does not exist in state yet
    if (!userRanges[path]) {
      // Check if it exists in Mongo
      const data = await fetch('/api/mongo/readrange', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: session.user.email,
          path,
        }),
      });
      const results = await data.json();

      // Not in Mongo
      if (Object.keys(results).length === 0) {
        // Create a new empty range
        const newRange = getNewRange();

        // Put new range into state
        userAddRange(path, newRange);
      } else {
        userAddRange(results[0].path, results[0].range);
      }
    }
  };

  return (
    <>
      <div className={styles.title}>
        <div className={styles.titleText}>Range Editor</div>
      </div>
      <div className={styles.rangeEditorContainer}>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          draggable
          theme="colored"
        />
        <section className={styles.leftPanel}>
          <div className={styles.actionPanel}>
            {Object.keys(allRangeLabels).map((action) => (
              <div
                onClick={() => handleActionChange(action)}
                className={`${userCurrentAction === action ? styles.selected : ''}`}
                key={action}
              >
                {action}
              </div>
            ))}
          </div>
          <div className={styles.comboPercentages}>
            <div>
              {userCurrentAction === 'Open Raise' && (
                <>
                  <SliderComponent label={'Open Raise'} sliderColor="primary" sliderChange={setRfi} />
                  <SliderComponent label={'Call'} sliderColor="secondary" sliderChange={setCall} />
                </>
              )}
              {userCurrentAction === '3-bet' && (
                <>
                  <SliderComponent label={'3-Bet / Call 4-bet'} sliderColor="green" sliderChange={setB3cB4} />
                  <SliderComponent label={'3-Bet / 5-Bet'} sliderColor="pink" sliderChange={setB3B5} />
                  <SliderComponent label={'3-Bet / Fold'} sliderColor="blue" sliderChange={setB3F} />
                </>
              )}
              {userCurrentAction === 'Call 3-bet' && (
                <>
                  <SliderComponent label={'4-Bet'} sliderColor="pink" />
                  <SliderComponent label={'Call 3-Bet'} sliderColor="green" />
                </>
              )}
              {userCurrentAction === 'Defend BB' && (
                <>
                  <SliderComponent label={'Call'} sliderColor="green" />
                  <SliderComponent label={'3-Bet / Call 4-bet'} sliderColor="yellow" />
                  <SliderComponent label={'3-Bet / 5-Bet'} sliderColor="pink" />
                  <SliderComponent label={'3-Bet / Fold'} sliderColor="blue" />
                </>
              )}
            </div>
          </div>
        </section>
        <section className={styles.centerPanel}>
          <RangeMatrix />
        </section>
        <section className={styles.rightPanel}>
          {allPositions?.map((position) => (
            <div
              key={position}
              onClick={() => handlePositionChange(position)}
              className={`${userCurrentPosition === position ? styles.selected : ''}`}
            >
              {position}
            </div>
          ))}
        </section>
      </div>
      <section className={styles.saveContainer}>
        <div onClick={handleSaveRange}>Save Range</div>
        <div onClick={handleReloadRange}>Reload Range</div>
        <div onClick={userResetRange} className={styles.resetButton}>
          Reset
        </div>
      </section>
    </>
  );
}

export default RangeEditor;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signup',
      },
    };
  }

  return {
    props: { session },
  };
};
