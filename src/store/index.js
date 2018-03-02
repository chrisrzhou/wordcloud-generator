import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import reducer from 'store/reducer';

export default compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore)(reducer);
