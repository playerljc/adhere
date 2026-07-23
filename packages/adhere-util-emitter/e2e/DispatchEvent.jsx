import { Button, Space } from 'antd';
import React, { useEffect, useState } from 'react';

import Emitter from '../src/index';

export default () => {
  const [logs, setLogs] = useState([]);
  const pushLog = (text) => setLogs((prev) => [text, ...prev].slice(0, 10));

  useEffect(() => {
    const handler = (e) => {
      pushLog(`customType detail: ${JSON.stringify(e.detail)}`);
    };
    document.addEventListener('e2e-customType', handler);
    return () => document.removeEventListener('e2e-customType', handler);
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <Space wrap style={{ marginBottom: 12 }}>
        <Button
          type="primary"
          onClick={() => {
            Emitter.dispatchEvent(document, 'e2e-customType', {
              detail: { hazcheeseburger: true },
            });
          }}
        >
          dispatchEvent
        </Button>
      </Space>
      <pre style={{ padding: 12, background: '#f5f5f5', minHeight: 160 }}>
        {logs.length ? logs.join('\n') : 'logs...'}
      </pre>
    </div>
  );
};
