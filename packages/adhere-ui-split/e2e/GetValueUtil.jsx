import { Button, Space } from 'antd';
import React, { useState } from 'react';

import { getValue } from '../src/index';

export default () => {
  const [result, setResult] = useState('');

  return (
    <div style={{ padding: 16 }}>
      <Space wrap>
        <Button
          onClick={() => {
            setResult(getValue({ isUseMedia: false }, 10));
          }}
        >
          getValue(no media, 10)
        </Button>
        <Button
          onClick={() => {
            setResult(getValue({ isUseMedia: true, designWidth: 750 }, 10));
          }}
        >
          getValue(media 750, 10)
        </Button>
        <Button
          onClick={() => {
            setResult(getValue({}, '1.5rem'));
          }}
        >
          getValue(string)
        </Button>
      </Space>
      <pre style={{ marginTop: 16, padding: 12, background: '#f5f5f5' }}>
        {result || 'click a button...'}
      </pre>
    </div>
  );
};
