import {createReducers} from 'redux-arc';

import {types} from './actions';
import {FONTS, SCALES, SPIRALS} from './constants';
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

const handleEdit = (state, {payload}) => {
  const {field, value} = payload;
  return {
    ...state,
    [field]: value,
  };
};

const handleReset = (state, action) => getInitialState();

export default createReducers(getInitialState(), {
  [app.actions.types.RESET]: handleReset,
  [types.EDIT]: handleEdit,
});
