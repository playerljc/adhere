import { Button, Space } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';

import WatchMemoized from '../src/index';

const { watch } = WatchMemoized;

export default () => {
  const [logs, setLogs] = useState([]);
  const pushLog = (text) => setLogs((prev) => [text, ...prev].slice(0, 16));

  const watchObj = useMemo(
    () =>
      watch.create(
        {},
        {
          a: () => pushLog('a 改变了'),
          b: () => pushLog('b 改变了'),
          c: () => pushLog('c 改变了'),
          'c.c1': () => pushLog('c.c1 改变了'),
          'c.c1.c111.c1111': (property) => pushLog(`c.c1.c111.c1111 改变了 ${property ?? ''}`),
        },
      ),
    [],
  );

  useEffect(() => {
    const handler = () => pushLog('c.c1.c111 改变了');
    watchObj.on('c.c1.c111', handler);
    return () => {
      watchObj.remove('c.c1.c111', handler);
    };
  }, [watchObj]);

  return (
    <div style={{ padding: 16 }}>
      <Space wrap style={{ marginBottom: 12 }}>
        <Button
          type="primary"
          onClick={() => {
            watchObj.value.a = 'a';
            watchObj.value.b = 'b';
            watchObj.value.c = { gl: 1 };
            watchObj.value.c.c1 = {
              g2: 2,
            };
            watchObj.value.c.c1.c111 = {
              g3: 3,
              c1111: '1',
            };
            delete watchObj.value.c.c1.c111.c1111;
          }}
        >
          对对象进行监控赋值/删除
        </Button>
      </Space>
      <pre style={{ padding: 12, background: '#f5f5f5', minHeight: 180 }}>
        {logs.length ? logs.join('\n') : 'logs...'}
      </pre>
    </div>
  );
};
