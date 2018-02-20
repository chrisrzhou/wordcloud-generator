import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import reducer from 'store/reducer';

const store = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore)(reducer);

export default store;
