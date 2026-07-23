import { Button, Space } from 'antd';
import React, { useState } from 'react';

import HistoryBack, { getHistoryStack } from '../src/index';
import { useHistoryStackListener, useMockHistory } from './mockHistory';

/**
 * HistoryBackBasic
 * @description initHistoryListener + 兄弟路径返回 / 非兄弟路径 replace 到 fallback
 */
export default () => {
  const { history, pathname, logs, getBrowserStack } = useMockHistory('/user/list');
  useHistoryStackListener(history);
  const [, bump] = useState(0);

  return (
    <div style={{ padding: 24, lineHeight: 1.8 }}>
      <p>
        当前 pathname：<code>{pathname}</code>
      </p>
      <p>
        HistoryBack 栈：<code>{JSON.stringify(getHistoryStack())}</code>
      </p>
      <p>
        mock browser 栈：<code>{JSON.stringify(getBrowserStack())}</code>
      </p>

      <Space wrap style={{ marginBottom: 16 }}>
        <Button
          onClick={() => {
            history.push('/user/detail');
            bump((n) => n + 1);
          }}
        >
          push /user/detail（兄弟路径）
        </Button>
        <Button
          onClick={() => {
            history.push('/admin/home');
            bump((n) => n + 1);
          }}
        >
          push /admin/home（非兄弟）
        </Button>
        <Button
          type="primary"
          onClick={() => {
            HistoryBack(history, pathname, '/fallback');
            bump((n) => n + 1);
          }}
        >
          HistoryBack(..., '/fallback')
        </Button>
        <Button
          onClick={() => {
            bump((n) => n + 1);
          }}
        >
          刷新展示
        </Button>
      </Space>

      <pre style={{ background: '#f5f5f5', padding: 12 }}>{logs.join('\n') || '-'}</pre>
    </div>
  );
};
