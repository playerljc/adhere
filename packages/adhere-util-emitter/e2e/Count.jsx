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
            Emitter.on('e2e-count', () => pushLog('count event fired'));
            pushLog('已注册 count 事件');
          }}
        >
          注册通知
        </Button>
        <Button
          onClick={() => {
            Emitter.count('e2e-count', 2, () => {
              pushLog('count=2 reached');
            });
            Emitter.trigger('e2e-count');
            Emitter.trigger('e2e-count');
          }}
        >
          count(2) + trigger x2
        </Button>
      </Space>
      <pre style={{ padding: 12, background: '#f5f5f5', minHeight: 160 }}>
        {logs.length ? logs.join('\n') : 'logs...'}
      </pre>
    </div>
  );
};
