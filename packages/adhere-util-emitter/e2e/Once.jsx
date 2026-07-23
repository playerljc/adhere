import { Button, Space } from 'antd';
import React, { useState } from 'react';

import Emitter from '../src/index';

export default () => {
  const [logs, setLogs] = useState([]);
  const pushLog = (text) => setLogs((prev) => [text, ...prev].slice(0, 10));

  return (
    <div style={{ padding: 16 }}>
      <Space wrap style={{ marginBottom: 12 }}>
        <Button
          type="primary"
          onClick={() => {
            Emitter.once('e2e-type3', () => pushLog('once handler A'));
            Emitter.once('e2e-type3', () => pushLog('once handler B'));
            pushLog('已注册 2 个 once');
          }}
        >
          注册 once
        </Button>
        <Button
          onClick={() => {
            Emitter.trigger('e2e-type3');
          }}
        >
          trigger (再点应无回调)
        </Button>
      </Space>
      <pre style={{ padding: 12, background: '#f5f5f5', minHeight: 160 }}>
        {logs.length ? logs.join('\n') : 'logs...'}
      </pre>
    </div>
  );
};
