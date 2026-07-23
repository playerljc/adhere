import { Button, Space } from 'antd';
import React, { useState } from 'react';

import SlideLayout from '../src/index';

import '../src/index.less';

const horizontalCSS = {
  position: 'relative',
  width: 400,
  height: 400,
  border: '1px solid rgba(0,0,0,.1)',
  overflow: 'hidden',
};

export default () => {
  const [collapseLeft, setCollapseLeft] = useState(false);
  const [collapseRight, setCollapseRight] = useState(false);

  return (
    <div style={{ padding: 16, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
      <div>
        <h3>Revolving left</h3>
        <Space style={{ marginBottom: 8 }}>
          <Button type="primary" onClick={() => setCollapseLeft(true)}>
            打开
          </Button>
          <Button onClick={() => setCollapseLeft(false)}>关闭</Button>
        </Space>
        <div style={horizontalCSS}>
          <SlideLayout.Revolving
            collapse={collapseLeft}
            onAfterClose={() => setCollapseLeft(false)}
            slide={<div>left</div>}
            master={<div>Master</div>}
          />
        </div>
      </div>

      <div>
        <h3>Revolving right</h3>
        <Space style={{ marginBottom: 8 }}>
          <Button type="primary" onClick={() => setCollapseRight(true)}>
            打开
          </Button>
          <Button onClick={() => setCollapseRight(false)}>关闭</Button>
        </Space>
        <div style={horizontalCSS}>
          <SlideLayout.Revolving
            direction="right"
            collapse={collapseRight}
            onAfterClose={() => setCollapseRight(false)}
            slide={<div>right</div>}
            master={<div>Master</div>}
          />
        </div>
      </div>
    </div>
  );
};
