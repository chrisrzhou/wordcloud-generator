import {createActions} from 'redux-arc';

export const namespace = 'words';

export const {creators, types} = createActions(namespace, {
  editText: null,
  excludeWord: null,
  resetText: null,
  selectWord: null,
  toggleEdit: null,
  uploadText: null,
});
