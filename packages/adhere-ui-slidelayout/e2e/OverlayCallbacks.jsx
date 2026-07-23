import { Button, Space } from 'antd';
import React, { useRef, useState } from 'react';

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
  const [collapse, setCollapse] = useState(false);
  const [logs, setLogs] = useState([]);
  const ref = useRef();

  const pushLog = (text) => {
    setLogs((prev) => [`${text}`, ...prev].slice(0, 8));
  };

  return (
    <div style={{ padding: 16 }}>
      <Space style={{ marginBottom: 12 }}>
        <Button type="primary" onClick={() => setCollapse(true)}>
          打开
        </Button>
        <Button onClick={() => setCollapse(false)}>关闭</Button>
        <Button
          onClick={() => {
            console.log('getEl', ref.current?.getEl?.());
            pushLog(`getEl: ${!!ref.current?.getEl?.()}`);
          }}
        >
          getEl
        </Button>
      </Space>
      <div style={horizontalCSS}>
        <SlideLayout.Overlay
          ref={ref}
          collapse={collapse}
          mask
          width={220}
          time={300}
          zIndex={1000}
          onBeforeShow={() => pushLog('onBeforeShow')}
          onAfterShow={() => pushLog('onAfterShow')}
          onBeforeClose={() => pushLog('onBeforeClose')}
          onAfterClose={() => {
            pushLog('onAfterClose');
            setCollapse(false);
          }}
        >
          Overlay with mask / callbacks
        </SlideLayout.Overlay>
      </div>
      <pre style={{ marginTop: 12, padding: 12, background: '#f5f5f5' }}>
        {logs.length ? logs.join('\n') : 'callback logs...'}
      </pre>
    </div>
  );
};
