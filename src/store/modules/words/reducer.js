import {handleActions} from 'redux-actions';

import {
  EDIT_TEXT,
  EXCLUDE_WORD,
  RESET_TEXT,
  SELECT_WORD,
  TOGGLE_EDIT,
  UPLOAD_TEXT,
  INITIAL_TEXT,
} from './constants';
import app from 'store/modules/app';
import parseWords from 'util/parseWords';

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

const handleExcludeWord = (state, {payload}) => {
  const {excludedWords} = state;
  const newExcludedWord = excludedWords.includes(payload)
    ? excludedWords.filter(word => payload !== word)
    : [...excludedWords, payload];
  return {
    ...state,
    excludedWords: newExcludedWord,
    words: parseWords(state.text, newExcludedWord),
  };
};

const handleEditText = (state, {payload}) => ({
  ...state,
  text: payload,
});

const handleReset = (state, action) => getInitialState();

const handleResetText = (state, action) => ({
  ...state,
  text: INITIAL_TEXT,
});

const handleSelectWord = (state, {payload}) => {
  const {selectedWords} = state;
  const newSelectedWords = selectedWords.includes(payload)
    ? selectedWords.filter(word => payload !== word)
    : [...selectedWords, payload];
  return {
    ...state,
    isEditMode: false,
    selectedWords: newSelectedWords,
  };
};

const handleToggleEdit = (state, action) => ({
  ...state,
  isEditMode: !state.isEditMode,
});

const handleUploadText = (state, {payload}) => ({
  ...getInitialState(),
  text: payload,
  words: parseWords(payload, state.excludedWords),
});

export default handleActions(
  {
    [app.constants.APPLY]: handleApply,
    [app.constants.RESET]: handleReset,
    [EDIT_TEXT]: handleEditText,
    [EXCLUDE_WORD]: handleExcludeWord,
    [RESET_TEXT]: handleResetText,
    [SELECT_WORD]: handleSelectWord,
    [TOGGLE_EDIT]: handleToggleEdit,
    [UPLOAD_TEXT]: handleUploadText,
  },
  getInitialState(),
);
