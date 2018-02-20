import {combineReducers} from 'redux';

import properties from 'store/modules/properties';
import text from 'store/modules/text';
import words from 'store/modules/words';

export default combineReducers({
  properties,
  text,
  words,
});
