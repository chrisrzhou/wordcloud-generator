import {createAction} from 'redux-actions';

import {EDIT, RESET, UPLOAD} from './constants';

export const edit = createAction(EDIT, text => ({text}));

export const reset = createAction(RESET);

export const upload = createAction(UPLOAD);
