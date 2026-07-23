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
            Emitter.once('e2e-all-a', () => pushLog('a'));
            Emitter.once('e2e-all-b', () => pushLog('b'));
            Emitter.once('e2e-all-c', () => pushLog('c'));
            pushLog('已注册 a/b/c once');
          }}
        >
          注册 a/b/c
        </Button>
        <Button
          onClick={() => {
            Emitter.all(['e2e-all-a', 'e2e-all-b', 'e2e-all-c'], () => {
              pushLog('all(a,b,c) changed');
            });
            Emitter.trigger('e2e-all-a');
            Emitter.trigger('e2e-all-b');
            Emitter.trigger('e2e-all-c');
          }}
        >
          all + trigger
        </Button>
      </Space>
      <pre style={{ padding: 12, background: '#f5f5f5', minHeight: 160 }}>
        {logs.length ? logs.join('\n') : 'logs...'}
      </pre>
    </div>
  );
};
