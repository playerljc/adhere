import { Button, Space } from 'antd';
import React, { useState } from 'react';

import Spin from '../src';

import '../src/index.less';

export default () => {
  const [spinning, setSpinning] = useState(false);

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
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved.
        <Spin spinning={spinning} text="处理中..." />
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
