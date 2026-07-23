import { Button, Space } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';

import WatchMemoized from '../src/index';

const { createRef, memoized } = WatchMemoized;

export default () => {
  const [logs, setLogs] = useState([]);
  const pushLog = (text) => setLogs((prev) => [text, ...prev].slice(0, 12));

  const [get1Value, set1Value, property1] = useMemo(() => createRef([{ a: 1 }]), []);
  const [get2Value, set2Value, property2] = useMemo(() => createRef({ a: 1 }), []);
  const [get3Value, set3Value, property3] = useMemo(() => createRef({ a: 1 }), []);

  useEffect(() => {
    const off1 = memoized.watch.race(() => {
      pushLog(`light race -> ${JSON.stringify(get1Value())}`);
    }, [{ property: property1, mode: 'light' }]);

    const off2 = memoized.watch.race(() => {
      pushLog(`deep race -> ${JSON.stringify(get2Value())}`);
    }, [{ property: property2, mode: 'deep' }]);

    const off3 = memoized.watch.race(() => {
      pushLog(`custom race -> ${JSON.stringify(get3Value())}`);
    }, [
      {
        property: property3,
        mode: (oldValue, newValue) => oldValue === newValue,
      },
    ]);

    return () => {
      off1?.();
      off2?.();
      off3?.();
    };
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <Space wrap style={{ marginBottom: 12 }}>
        <Button
          onClick={() => {
            set1Value([{ a: 1 }]);
          }}
        >
          light 比较
        </Button>
        <Button
          onClick={() => {
            set2Value({ a: 2 });
          }}
        >
          deep 比较
        </Button>
        <Button
          onClick={() => {
            set3Value({ a: 2 });
          }}
        >
          自定义比较
        </Button>
      </Space>
      <pre style={{ padding: 12, background: '#f5f5f5', minHeight: 160 }}>
        {logs.length ? logs.join('\n') : 'logs...'}
      </pre>
    </div>
  );
};
