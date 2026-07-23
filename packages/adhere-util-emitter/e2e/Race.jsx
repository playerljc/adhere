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
            Emitter.once('e2e-race-a', () => pushLog('a'));
            Emitter.once('e2e-race-b', () => pushLog('b'));
            Emitter.once('e2e-race-c', () => pushLog('c'));
            pushLog('已注册 a/b/c once');
          }}
        >
          注册 a/b/c
        </Button>
        <Button
          onClick={() => {
            Emitter.race(['e2e-race-a', 'e2e-race-b', 'e2e-race-c'], () => {
              pushLog('race(a,b,c) changed (first wins)');
            });
            Emitter.trigger('e2e-race-a');
            Emitter.trigger('e2e-race-b');
            Emitter.trigger('e2e-race-c');
          }}
        >
          race + trigger
        </Button>
      </Space>
      <pre style={{ padding: 12, background: '#f5f5f5', minHeight: 160 }}>
        {logs.length ? logs.join('\n') : 'logs...'}
      </pre>
    </div>
  );
};
