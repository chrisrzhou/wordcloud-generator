import {combineActions, handleActions} from 'redux-actions';

import {EDIT, RESET, UPLOAD, initialText} from './constants';

const initialState = initialText;

const handleEdit = (state, action) => action.payload.text;

const handleReset = (state, action) => initialState;

export default handleActions(
  {
    [combineActions(EDIT, UPLOAD)]: handleEdit,
    [RESET]: handleReset,
  },
  initialState,
);
