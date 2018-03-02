import {handleActions} from 'redux-actions';

import {EDIT, FONTS, SCALES, SPIRALS} from './constants';
import app from 'store/modules/app';

const getInitialState = () => ({
  fontFamily: FONTS[0],
  maxWords: 100,
  orientations: 1,
  orientationAngles: [0, 0],
  scale: SCALES[0],
  spiral: SPIRALS[0],
  tooltipEnabled: true,
  transitionDuration: 500,
});

const handleEdit = (state, {payload}) => ({
  ...state,
  [payload.field]: payload.value,
});

const handleReset = (state, action) => getInitialState();

export default handleActions(
  {
    [app.constants.RESET]: handleReset,
    [EDIT]: handleEdit,
  },
  getInitialState(),
);
