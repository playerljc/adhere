import { Button, Space as AntSpace } from 'antd';
import React, { useState } from 'react';

import { getValue } from '../src/index';

export default () => {
  const [result, setResult] = useState('');

  return (
    <div style={{ padding: 16 }}>
      <AntSpace wrap>
        <Button
          onClick={() => {
            setResult(getValue({ isUseMedia: false }, 40));
          }}
        >
          getValue(no media, 40)
        </Button>
        <Button
          onClick={() => {
            setResult(getValue({ isUseMedia: true, designWidth: 750 }, 40));
          }}
        >
          getValue(media 750, 40)
        </Button>
        <Button
          onClick={() => {
            setResult(getValue({}, '1.5rem'));
          }}
        >
          getValue(string)
        </Button>
      </AntSpace>
      <pre style={{ marginTop: 16, padding: 12, background: '#f5f5f5' }}>
        {result || 'click a button...'}
      </pre>
    </div>
  );
};
