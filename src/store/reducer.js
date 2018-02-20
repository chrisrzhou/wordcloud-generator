import {combineReducers} from 'redux';

import properties from './modules/properties';
import text from './modules/text';
import words from './modules/words';

export default combineReducers({
  text,
  properties,
  words,
});
