import {createReducers} from 'redux-arc';

import {types} from './actions';
import {INITIAL_TEXT} from './constants';
import app from 'store/modules/app';
import {parseWords} from 'utils/parseUtils';
import {addRemoveArrayEntry} from 'utils/reducerUtils';

const getInitialState = () => ({
  isEditMode: true,
  excludedWords: [],
  selectedWords: [],
  text: INITIAL_TEXT,
  words: parseWords(INITIAL_TEXT, []),
});

const handleApply = (state, action) => ({
  ...state,
  words: parseWords(state.text, state.excludedWords),
});

const handleEditText = (state, {payload}) => ({
  ...state,
  excludedWords: [],
  selectedWords: [],
  text: payload,
});

const handleExcludeWord = (state, {payload}) => {
  const excludedWords = addRemoveArrayEntry(state.excludedWords, payload);
  return {
    ...state,
    isEditMode: false,
    excludedWords,
    words: parseWords(state.text, excludedWords),
  };
};

const handleReset = (state, action) => getInitialState();

const handleResetText = (state, action) => ({
  ...state,
  excludedWords: [],
  selectedWords: [],
  text: INITIAL_TEXT,
});

const handleSelectWord = (state, {payload}) => ({
  ...state,
  isEditMode: false,
  selectedWords: addRemoveArrayEntry(state.selectedWords, payload),
});

const handleToggleEdit = (state, action) => ({
  ...state,
  isEditMode: !state.isEditMode,
});

const handleUploadText = (state, {payload}) => ({
  ...getInitialState(),
  text: payload,
  words: parseWords(payload, state.excludedWords),
});

export default createReducers(getInitialState(), {
  [app.actions.types.APPLY]: handleApply,
  [app.actions.types.RESET]: handleReset,
  [types.EDIT_TEXT]: handleEditText,
  [types.EXCLUDE_WORD]: handleExcludeWord,
  [types.RESET_TEXT]: handleResetText,
  [types.SELECT_WORD]: handleSelectWord,
  [types.TOGGLE_EDIT]: handleToggleEdit,
  [types.UPLOAD_TEXT]: handleUploadText,
});
