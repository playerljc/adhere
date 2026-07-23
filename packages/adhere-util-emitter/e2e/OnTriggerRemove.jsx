import { Button, Space } from 'antd';
import React, { useRef, useState } from 'react';

import Emitter from '../src/index';

export default () => {
  const handlerRef = useRef();
  const [logs, setLogs] = useState([]);

  const pushLog = (text) => setLogs((prev) => [text, ...prev].slice(0, 10));

  return (
    <div style={{ padding: 16 }}>
      <Space wrap style={{ marginBottom: 12 }}>
        <Button
          type="primary"
          onClick={() => {
            if (handlerRef.current) {
              Emitter.remove('e2e-type1', handlerRef.current);
            }
            handlerRef.current = () => pushLog('接到了通知 type1');
            Emitter.on('e2e-type1', handlerRef.current);
            pushLog('注册成功');
          }}
        >
          注册通知
        </Button>
        <Button
          onClick={() => {
            if (!handlerRef.current) {
              pushLog('还没有注册事件');
              return;
            }
            Emitter.trigger('e2e-type1');
          }}
        >
          发出通知
        </Button>
        <Button
          danger
          onClick={() => {
            if (handlerRef.current) {
              Emitter.remove('e2e-type1', handlerRef.current);
              handlerRef.current = null;
              pushLog('已移除');
            }
          }}
        >
          remove
        </Button>
      </Space>
      <pre style={{ padding: 12, background: '#f5f5f5', minHeight: 160 }}>
        {logs.length ? logs.join('\n') : 'logs...'}
      </pre>
    </div>
  );
};
