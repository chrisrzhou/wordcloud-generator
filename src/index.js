import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import Routes from 'routes';
import store from 'store';
import 'index.css';

// specify basename as 'process.env.PUBLIC_URL' to make gh-pages work (see https://github.com/facebook/create-react-app/issues/1765)
const Root = () => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
