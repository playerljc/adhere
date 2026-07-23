import { Button, Space } from 'antd';
import React, { useState } from 'react';

import SlideLayout from '../src/index';

import '../src/index.less';

const horizontalCSS = {
  position: 'relative',
  width: 360,
  height: 280,
  border: '1px solid rgba(0,0,0,.1)',
  overflow: 'hidden',
};

const verticalCSS = {
  position: 'relative',
  width: 360,
  height: 280,
  border: '1px solid rgba(0,0,0,.1)',
  overflow: 'hidden',
};

function DirectionDemo({ title, direction, boxStyle }) {
  const [collapse, setCollapse] = useState(false);

  return (
    <div style={{ marginBottom: 24 }}>
      <h3>{title}</h3>
      <Space style={{ marginBottom: 8 }}>
        <Button type="primary" onClick={() => setCollapse(true)}>
          打开
        </Button>
        <Button onClick={() => setCollapse(false)}>关闭</Button>
      </Space>
      <div style={boxStyle}>
        <SlideLayout.Overlay
          direction={direction}
          collapse={collapse}
          onAfterClose={() => setCollapse(false)}
        >
          {title}
        </SlideLayout.Overlay>
      </div>
    </div>
  );
}

export default () => {
  return (
    <div style={{ padding: 16, display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      <DirectionDemo title="left" direction="left" boxStyle={horizontalCSS} />
      <DirectionDemo title="right" direction="right" boxStyle={horizontalCSS} />
      <DirectionDemo title="top" direction="top" boxStyle={verticalCSS} />
      <DirectionDemo title="bottom" direction="bottom" boxStyle={verticalCSS} />
    </div>
  );
};
