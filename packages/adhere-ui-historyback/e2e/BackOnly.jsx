import { Button, Space } from 'antd';
import React, { useState } from 'react';

import HistoryBack from '../src/index';
import { useHistoryStackListener, useMockHistory } from './mockHistory';

/**
 * BackOnly
 * @description 不传 routePath，仅在可返回时 back
 */
export default () => {
  const { history, pathname, logs } = useMockHistory('/a/1');
  useHistoryStackListener(history);
  const [, bump] = useState(0);

  return (
    <div style={{ padding: 24, lineHeight: 1.8 }}>
      <p>
        当前 pathname：<code>{pathname}</code>
      </p>
      <Space wrap style={{ marginBottom: 16 }}>
        <Button
          onClick={() => {
            history.push('/a/2');
            bump((n) => n + 1);
          }}
        >
          push /a/2
        </Button>
        <Button
          type="primary"
          onClick={() => {
            HistoryBack(history, pathname);
            bump((n) => n + 1);
          }}
        >
          HistoryBack(history, pathname) 无 fallback
        </Button>
      </Space>
      <pre style={{ background: '#f5f5f5', padding: 12 }}>{logs.join('\n') || '-'}</pre>
    </div>
  );
};
