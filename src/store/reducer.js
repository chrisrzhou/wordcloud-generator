import {combineReducers} from 'redux';

import properties from 'store/modules/properties';
import words from 'store/modules/words';

export default combineReducers({
  [properties.actions.namespace]: properties.reducer,
  [words.actions.namespace]: words.reducer,
});
