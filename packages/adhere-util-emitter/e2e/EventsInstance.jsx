import { Button, Space } from 'antd';
import React, { useState } from 'react';

import { Events } from '../src/index';

export default () => {
  const [bus] = useState(() => new Events());
  const [logs, setLogs] = useState([]);
  const pushLog = (text) => setLogs((prev) => [text, ...prev].slice(0, 12));

  return (
    <div style={{ padding: 16 }}>
      <Space wrap style={{ marginBottom: 12 }}>
        <Button
          type="primary"
          onClick={() => {
            bus.on('local', () => pushLog('local handler'));
            pushLog(
              `on local, hasType=${bus.hasType('local')}, count=${bus.getHandlerCount('local')}`,
            );
          }}
        >
          on
        </Button>
        <Button onClick={() => bus.trigger('local')}>trigger</Button>
        <Button
          onClick={() => {
            pushLog(`types: ${JSON.stringify(bus.getEventTypes())}`);
          }}
        >
          getEventTypes
        </Button>
        <Button
          onClick={() => {
            bus.clear('local');
            pushLog(`clear local, hasType=${bus.hasType('local')}`);
          }}
        >
          clear
        </Button>
        <Button
          danger
          onClick={() => {
            bus.clearAll();
            pushLog('clearAll');
          }}
        >
          clearAll
        </Button>
      </Space>
      <pre style={{ padding: 12, background: '#f5f5f5', minHeight: 160 }}>
        {logs.length ? logs.join('\n') : 'logs...'}
      </pre>
    </div>
  );
};
