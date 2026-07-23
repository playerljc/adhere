import { Button, Space } from 'antd';
import React, { useLayoutEffect, useRef, useState } from 'react';

import Notification from '../src/index';

import '../src/index.less';
import './index.less';

/**
 * Callbacks
 * @description 演示 onCreate / onShow / onCloseBefore / onCloseAfter
 */
export default () => {
  const containerRef = useRef(null);
  const insRef = useRef(null);
  const [logs, setLogs] = useState([]);

  const pushLog = (message) => {
    setLogs((prev) => [`${new Date().toLocaleTimeString()} ${message}`, ...prev].slice(0, 8));
  };

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    insRef.current = Notification.build(containerRef.current, {
      style: 'ios',
      type: 'top',
      onCreate: () => pushLog('onCreate'),
      onShow: () => pushLog('onShow'),
      onCloseBefore: () => pushLog('onCloseBefore'),
      onCloseAfter: () => pushLog('onCloseAfter'),
    });
  }, []);

  return (
    <div className="Tab">
      <div className="Fixed">
        <Space>
          <Button
            type="primary"
            onClick={() => {
              insRef.current?.showStandard?.({
                headerLabel: 'Callbacks',
                headerIcon: '',
                title: '生命周期',
                text: '关闭通知可触发 onCloseBefore / onCloseAfter',
                icon: '',
                closed: true,
                datetime: 'now',
              });
            }}
          >
            showStandard
          </Button>
        </Space>
      </div>
      <div style={{ padding: 12, fontFamily: 'monospace', fontSize: 12 }}>
        {logs.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <div className="Auto" ref={containerRef} />
    </div>
  );
};
