import {createAction} from 'redux-actions';

import {
  APPLY_WORDS,
  EDIT_TEXT,
  EXCLUDE_WORD,
  RESET_ALL,
  RESET_TEXT,
  SELECT_WORD,
  TOGGLE_EDIT,
  UPLOAD_TEXT,
} from './constants';

export const applyWords = createAction(APPLY_WORDS);

export const editText = createAction(EDIT_TEXT);

export const excludeWord = createAction(EXCLUDE_WORD);

export const resetAll = createAction(RESET_ALL);

export const resetText = createAction(RESET_TEXT);

export const selectWord = createAction(SELECT_WORD);

export const toggleEdit = createAction(TOGGLE_EDIT);

export const uploadText = createAction(UPLOAD_TEXT);
