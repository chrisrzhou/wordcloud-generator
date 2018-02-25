import React from 'react';
import {Link} from 'react-router-dom';

import Wordcloud from 'components/wordcloud/Wordcloud';
import {INFO} from 'routes/paths';

const Main = () => (
  <div>
    <Link style={styles.link} to={INFO}>
      [info]
    </Link>
    <Wordcloud />
  </div>
);

const styles = {
  link: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

export default Main;
