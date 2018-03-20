import Button from 'antd/lib/button';
import React from 'react';
import {connect} from 'react-redux';

import app from 'store/modules/app';

const ResetButton = ({onReset}) => (
  <Button
    size="small"
    onClick={() => {
      if (
        window.confirm(
          'This will reset all text and properties for the wordcloud.  Proceed?',
        )
      ) {
        onReset();
      }
    }}>
    Reset
  </Button>
);

export default connect(null, {
  onReset: app.actions.creators.reset,
})(ResetButton);
