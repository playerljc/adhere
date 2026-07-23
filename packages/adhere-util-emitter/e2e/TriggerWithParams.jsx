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
            Emitter.on('e2e-type2', (params) => pushLog(`收到: ${params}`));
            pushLog('注册成功');
          }}
        >
          注册通知
        </Button>
        <Button
          onClick={() => {
            Emitter.trigger('e2e-type2', 'Hello World');
          }}
        >
          发出通知
        </Button>
      </Space>
      <pre style={{ padding: 12, background: '#f5f5f5', minHeight: 160 }}>
        {logs.length ? logs.join('\n') : 'logs...'}
      </pre>
    </div>
  );
};
