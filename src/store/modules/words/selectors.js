import {namespace} from './actions';

export const _getState = state => state[namespace];

export const getText = state => _getState(state).text;

export const getIsEditMode = state => _getState(state).isEditMode;

export const getWords = state => _getState(state).words;

export const getSelectedWords = state => _getState(state).selectedWords;

export const getExcludedWords = state => _getState(state).excludedWords;
