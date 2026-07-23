import { Button, Space } from 'antd';
import React, { useMemo, useState } from 'react';

import WatchMemoized from '../src/index';

const { memoized } = WatchMemoized;

export default () => {
  const [logs, setLogs] = useState([]);
  const pushLog = (text) => setLogs((prev) => [text, ...prev].slice(0, 12));

  const asyncFun = useMemo(
    () =>
      memoized.createMemoFun((...params) => {
        pushLog(`callAsyncFun args=${JSON.stringify(params)}`);
        return new Promise((resolve) => {
          resolve(params.reduce((pre, current) => pre + current, 0));
        });
      }),
    [],
  );

  return (
    <div style={{ padding: 16 }}>
      <Space wrap style={{ marginBottom: 12 }}>
        <Button
          type="primary"
          onClick={async () => {
            const p1 = asyncFun(1, 2, 3);
            const r1 = await p1;
            pushLog(`asyncFun(1,2,3) -> ${r1}`);

            const p2 = asyncFun(1, 2, 3);
            pushLog(`asyncFun(1,2,3) again -> ${p2 === p1 ? 'same promise (cache)' : 'new promise'}`);

            const p3 = asyncFun(1, 2, 4);
            const r3 = await p3;
            pushLog(`asyncFun(1,2,4) -> ${r3}`);

            const p4 = asyncFun(1, 2, 4);
            pushLog(`asyncFun(1,2,4) again -> ${p4 === p3 ? 'same promise (cache)' : 'new promise'}`);
          }}
        >
          调用 async memoized
        </Button>
      </Space>
      <pre style={{ padding: 12, background: '#f5f5f5', minHeight: 160 }}>
        {logs.length ? logs.join('\n') : 'logs...'}
      </pre>
    </div>
  );
};
