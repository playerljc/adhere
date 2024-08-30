import { Button } from 'antd-mobile';
import React, { useState } from 'react';

import MobileSpin from '../src';

import '../src/index.less';

export default () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Button
        color="primary"
        onClick={() => {
          setLoading(!loading);
        }}
      >
        {loading ? '取消' : '开启'}
      </Button>

      <div style={{ border: '1px solid red', height: 200, position: 'relative' }}>
        <MobileSpin spinning={loading} />
      </div>
    </div>
  );
};
