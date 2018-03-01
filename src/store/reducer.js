import {combineReducers} from 'redux';

import properties from 'store/modules/properties';
import words from 'store/modules/words';

export default combineReducers({
  properties,
  [words.constants._NAME]: words.reducer,
});
