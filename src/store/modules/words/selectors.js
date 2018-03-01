import {createSelector} from 'reselect';

import {_NAME} from './constants';

export const _getState = state => state[_NAME];

export const getText = createSelector(_getState, state => state.text);

export const getIsEditMode = createSelector(
  _getState,
  state => state.isEditMode,
);

export const getWords = createSelector(_getState, state => state.words);

export const getSelectedWords = createSelector(
  _getState,
  state => state.selectedWords,
);

export const getExcludedWords = createSelector(
  _getState,
  state => state.excludedWords,
);
