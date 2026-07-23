import { Button, Space } from 'antd';
import React, { useState } from 'react';

import Spin from '../src';

import '../src/index.less';

export default () => {
  const [spinning, setSpinning] = useState(true);

  return (
    <div style={{ padding: 16 }}>
      <div
        style={{
          position: 'relative',
          height: 200,
          border: '1px dashed #ddd',
          padding: 16,
          marginBottom: 16,
        }}
      >
        Spin without text
        <Spin spinning={spinning} />
      </div>
      <Space>
        <Button type="primary" onClick={() => setSpinning(true)}>
          显示
        </Button>
        <Button onClick={() => setSpinning(false)}>取消</Button>
      </Space>
    </div>
  );
};
