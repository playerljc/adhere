import { Button, Space } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';

import WatchMemoized from '../src/index';

const { createRef, memoized } = WatchMemoized;

export default () => {
  const [logs, setLogs] = useState([]);
  const pushLog = (text) => setLogs((prev) => [text, ...prev].slice(0, 12));

  const [get4Value, set4Value, property4] = useMemo(() => createRef([{ a: 1 }]), []);
  const [get5Value, set5Value, property5] = useMemo(() => createRef([{ a: 2 }]), []);

  useEffect(() => {
    const off = memoized.watch.all(
      () => {
        pushLog(`all -> v4=${JSON.stringify(get4Value())} v5=${JSON.stringify(get5Value())}`);
      },
      [
        { property: property4, mode: 'light' },
        { property: property5, mode: 'light' },
      ],
    );

    return () => off?.();
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <Space wrap style={{ marginBottom: 12 }}>
        <Button
          type="primary"
          onClick={() => {
            set4Value([{ a: 1 }]);
            set5Value([{ a: 2 }]);
          }}
        >
          同时更新两个值 (watch.all)
        </Button>
        <Button
          onClick={() => {
            set4Value([{ a: 9 }]);
          }}
        >
          只更新 v4
        </Button>
      </Space>
      <pre style={{ padding: 12, background: '#f5f5f5', minHeight: 160 }}>
        {logs.length ? logs.join('\n') : 'logs...'}
      </pre>
    </div>
  );
};
