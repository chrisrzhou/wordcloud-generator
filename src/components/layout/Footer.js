import {Footer} from 'antd/lib/layout';
import React from 'react';

import ExternalLink from 'components/shared/ExternalLink';
import {GITHUB_PROJECT} from 'constants/links';

const style = {
  textAlign: 'center',
};

export default () => (
  <Footer style={style}>
    Created by <ExternalLink content="chrisrzhou" href={GITHUB_PROJECT} />
    , Feb 2018
  </Footer>
);
