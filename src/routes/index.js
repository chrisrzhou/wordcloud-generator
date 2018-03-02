import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {HOME, INFO} from './paths';
import Layout from 'components/layout/Layout';
import Info from 'views/Info';
import Main from 'views/Main';
import NotFound from 'views/NotFound';

export default () => (
  <Layout>
    <Switch>
      <Route path={HOME} exact component={Main} />
      <Route path={INFO} component={Info} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);
