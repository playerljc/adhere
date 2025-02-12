import { Button } from 'antd';
import React from 'react';

import { AdapterScreen } from '@baifendian/adhere';

export default () => (
  <Button
    type="primary"
    onClick={() => {
      AdapterScreen.init();
    }}
  >
    控制整体页面的缩放
  </Button>
);
