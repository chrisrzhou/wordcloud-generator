import {createActions} from 'redux-arc';

export const namespace = 'properties';

export const {creators, types} = createActions(namespace, {
  edit: null,
});
