import {handleActions} from 'redux-actions';

import {EDIT} from './constants';
import app from 'store/modules/app';

const getInitialState = () => ({
  fontFamily: 'times new roman',
  maxWords: 100,
  orientations: 1,
  orientationAngles: [0, 0],
  scale: 'log',
  spiral: 'archimedean',
  tooltipEnabled: true,
  transitionDuration: 1000,
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
