import { Button, Space } from 'antd';
import React, { useState } from 'react';

import { deal } from '../src/index';

export default () => {
  const [visible, setVisible] = useState(true);

  const el = deal({
    element: <div style={{ padding: 8, background: '#f5f5f5' }}>deal() 控制 display</div>,
    conditional: visible,
    prop: 'display',
    value: visible ? '' : 'none',
  });

  return (
    <div style={{ padding: 16 }}>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => setVisible((v) => !v)}>
          {visible ? '隐藏' : '显示'}
        </Button>
      </Space>
      <div style={{ border: '1px dashed #ccc', padding: 12, minHeight: 40 }}>{el}</div>
    </div>
  );
};
