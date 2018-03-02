import React from 'react';
import {Link} from 'react-router-dom';

import {HOME} from 'routes/paths';

export default () => (
  <div>
    <h2>Page not found :(</h2>
    <p>
      Head <Link to={HOME}>home</Link> and try again.
    </p>
  </div>
);
