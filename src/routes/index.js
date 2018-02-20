import React from 'react';
import {Route, Switch} from 'react-router-dom';

import About from '../views/About';
import Home from '../views/Home';
import NotFound from '../views/NotFound';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
