import { comboRange } from './constants';

export const getNewRange = () => {
  const newRange = [];
  comboRange.map((combo) => newRange.push({ combo, value: 0 }));
  return newRange;
};

export const getBlankRanges = () => {
  return {
    'Open Raise': { UTG: getNewRange(), MP: getNewRange(), CO: getNewRange(), BTN: getNewRange(), SB: getNewRange() },
    '3-bet': {
      'MP v UTG': getNewRange(),
      'CO v UTG': getNewRange(),
      'CO v MP': getNewRange(),
      'BTN v UTG': getNewRange(),
      'BTN v MP': getNewRange(),
      'BTN v CO': getNewRange(),
      'SB v UTG': getNewRange(),
      'SB v MP': getNewRange(),
      'SB v CO': getNewRange(),
      'SB v BTN': getNewRange(),
    },
    'Call 3-bet': {
      'UTG v MP': getNewRange(),
      'UTG v CO': getNewRange(),
      'UTG v BTN': getNewRange(),
      'UTG v SB': getNewRange(),
      'UTG v BB': getNewRange(),
      'MP v CO': getNewRange(),
      'MP v BTN': getNewRange(),
      'MP v SB': getNewRange(),
      'MP v BB': getNewRange(),
      'CO v BTN': getNewRange(),
      'CO v SB': getNewRange(),
      'CO v BB': getNewRange(),
      'BTN v SB': getNewRange(),
      'BTN v BB': getNewRange(),
      'SB v BB': getNewRange(),
    },
    'Defend BB': {
      'vs BTN': getNewRange(),
      'vs CO': getNewRange(),
      'vs MP': getNewRange(),
      'vs UTG': getNewRange(),
      'vs SB': getNewRange(),
    },
  };
};
