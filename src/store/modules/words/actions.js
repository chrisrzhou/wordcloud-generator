import {createAction} from 'redux-actions';

import {
  EDIT_TEXT,
  EXCLUDE_WORD,
  RESET_TEXT,
  SELECT_WORD,
  TOGGLE_EDIT,
  UPLOAD_TEXT,
} from './constants';

export const editText = createAction(EDIT_TEXT);

export const excludeWord = createAction(EXCLUDE_WORD);

export const resetText = createAction(RESET_TEXT);

export const selectWord = createAction(SELECT_WORD);

export const toggleEdit = createAction(TOGGLE_EDIT);

export const uploadText = createAction(UPLOAD_TEXT);
