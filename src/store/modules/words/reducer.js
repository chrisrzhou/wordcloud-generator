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
