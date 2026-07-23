import { Button, Space } from 'antd';
import React, { useMemo, useState } from 'react';

import WatchMemoized from '../src/index';

const { memoized } = WatchMemoized;

export default () => {
  const [logs, setLogs] = useState([]);
  const pushLog = (text) => setLogs((prev) => [text, ...prev].slice(0, 12));

  const sumFun = useMemo(
    () =>
      memoized.createMemoFun((...params) => {
        pushLog(`callSumFun args=${JSON.stringify(params)}`);
        return params.reduce((pre, current) => {
          if (typeof current === 'number') return pre + current;
          return pre;
        }, 0);
      }),
    [],
  );

  return (
    <div style={{ padding: 16 }}>
      <Space wrap style={{ marginBottom: 12 }}>
        <Button
          type="primary"
          onClick={() => {
            const r1 = sumFun({ a: 1 }, 2, 3);
            const r2 = sumFun({ a: 1 }, 2, 3);
            pushLog(`results: ${r1}, ${r2} (第二次应命中缓存，少一次 callSumFun)`);
          }}
        >
          调用 memoized 函数两次
        </Button>
      </Space>
      <pre style={{ padding: 12, background: '#f5f5f5', minHeight: 160 }}>
        {logs.length ? logs.join('\n') : 'logs...'}
      </pre>
    </div>
  );
};
