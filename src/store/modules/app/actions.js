import {createAction} from 'redux-actions';

import {APPLY, RESET} from './constants';

export const apply = createAction(APPLY);

export const reset = createAction(RESET);
