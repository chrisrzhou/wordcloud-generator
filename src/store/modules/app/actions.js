import {createActions} from 'redux-arc';

export const namespace = 'app';

export const {creators, types} = createActions(namespace, {
  apply: null,
  reset: null,
});
