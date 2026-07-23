import { Button, Space } from 'antd';
import React, { useState } from 'react';

import Spin from '../src';

import '../src/index.less';

const sizes = ['small', 'default', 'large'];

export default () => {
  const [spinning, setSpinning] = useState(true);

  return (
    <div style={{ padding: 16 }}>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => setSpinning(true)}>
          显示
        </Button>
        <Button onClick={() => setSpinning(false)}>取消</Button>
      </Space>
      <div style={{ display: 'flex', gap: 16 }}>
        {sizes.map((size) => (
          <div
            key={size}
            style={{
              position: 'relative',
              flex: 1,
              height: 180,
              border: '1px dashed #ddd',
              padding: 12,
            }}
          >
            size={size}
            <Spin spinning={spinning} text={size} size={size} />
          </div>
        ))}
      </div>
    </div>
  );
};
