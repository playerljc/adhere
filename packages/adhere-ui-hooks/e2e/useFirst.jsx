import { Button, Space } from 'antd';
import React, { useEffect, useState } from 'react';

import Hooks from '../src';

const { useFirst } = Hooks;

/**
 * useFirst
 * @description 跟踪是否首次渲染
 */
export default () => {
  const [isFirst, setIsFirst] = useFirst();
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    if (isFirst) {
      setLogs((prev) => [...prev, '首次渲染']);
      setIsFirst(false);
    } else {
      setLogs((prev) => [...prev, `再次渲染 count=${count}`]);
    }
  }, [count]);

  return (
    <div style={{ padding: 24 }}>
      <Space>
        <Button type="primary" onClick={() => setCount((c) => c + 1)}>
          触发重渲染 ({count})
        </Button>
      </Space>
      <pre style={{ marginTop: 16, background: '#f5f5f5', padding: 12 }}>
        {logs.join('\n') || '-'}
      </pre>
    </div>
  );
};
