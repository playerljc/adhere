import React from 'react';

import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from '@baifendian/adhere-ui-anthoc';

export default () => (
  <Upload
    {...{
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    }}
  >
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
);
