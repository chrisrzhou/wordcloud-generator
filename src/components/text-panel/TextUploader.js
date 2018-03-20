import Icon from 'antd/lib/icon';
import message from 'antd/lib/message';
import {Dragger} from 'antd/lib/upload';
import React from 'react';
import {connect} from 'react-redux';

import words from 'store/modules/words';

const TextUploader = ({onUploadText}) => (
  <Dragger
    accept=".csv, .txt, .js"
    beforeUpload={(file, fileList) => {
      if (file) {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = event => {
          onUploadText(event.target.result);
          message.success(`${file.name} file uploaded successfully.`);
        };
      }
      return false;
    }}
    multiple={false}
    name="file">
    <p className="ant-upload-drag-icon">
      <Icon type="upload" />
    </p>
    <p className="ant-upload-text">Click or drag file to upload</p>
  </Dragger>
);

export default connect(null, {onUploadText: words.actions.creators.uploadText})(
  TextUploader,
);
