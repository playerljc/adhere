import { Button, Space } from 'antd';
import React, { useState } from 'react';

import HistoryBack, { clearHistoryStack, getHistoryStack } from '../src/index';
import { useHistoryStackListener, useMockHistory } from './mockHistory';

/**
 * StackHelpers
 * @description getHistoryStack / clearHistoryStack
 */
export default () => {
  const { history, pathname, logs } = useMockHistory('/home');
  useHistoryStackListener(history);
  const [stack, setStack] = useState(() => getHistoryStack());

  const refresh = () => setStack(getHistoryStack());

  return (
    <div style={{ padding: 24, lineHeight: 1.8 }}>
      <p>
        当前 pathname：<code>{pathname}</code>
      </p>
      <p>
        getHistoryStack()：<code>{JSON.stringify(stack)}</code>
      </p>

      <Space wrap style={{ marginBottom: 16 }}>
        <Button
          onClick={() => {
            history.push(`/page-${stack.length + 1}`);
            refresh();
          }}
        >
          push
        </Button>
        <Button
          onClick={() => {
            history.replace('/replaced');
            refresh();
          }}
        >
          replace
        </Button>
        <Button
          type="primary"
          onClick={() => {
            HistoryBack(history, pathname, '/home');
            refresh();
          }}
        >
          HistoryBack
        </Button>
        <Button
          danger
          onClick={() => {
            clearHistoryStack();
            refresh();
          }}
        >
          clearHistoryStack
        </Button>
        <Button onClick={refresh}>刷新栈展示</Button>
      </Space>

      <pre style={{ background: '#f5f5f5', padding: 12 }}>{logs.join('\n') || '-'}</pre>
    </div>
  );
};
