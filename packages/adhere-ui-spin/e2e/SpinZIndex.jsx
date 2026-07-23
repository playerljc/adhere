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
          zIndex: 1,
        }}
      >
        Container zIndex=1, Spin zIndex=3000
        <div
          style={{
            position: 'absolute',
            inset: 40,
            background: 'rgba(0,0,0,.15)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          overlay zIndex=2000
        </div>
        <Spin spinning={spinning} text="zIndex=3000" zIndex={3000} />
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
