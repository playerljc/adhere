import { Button, Space } from 'antd';
import React, { useState } from 'react';

import SwipeOut from '../src';

import '../src/index.less';

export default () => {
  const [beforeShow, setBeforeShow] = useState(false);
  const [afterShow, setAfterShow] = useState(false);
  const [logs, setLogs] = useState([]);

  const pushLog = (text) => {
    setLogs((prev) => [text, ...prev].slice(0, 10));
  };

  return (
    <div style={{ padding: 16, maxWidth: 480 }}>
      <Space style={{ marginBottom: 12 }}>
        <Button
          type="primary"
          onClick={() => {
            setBeforeShow(true);
            setAfterShow(false);
          }}
        >
          showBefore
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setBeforeShow(false);
            setAfterShow(true);
          }}
        >
          showAfter
        </Button>
        <Button
          onClick={() => {
            setBeforeShow(false);
            setAfterShow(false);
          }}
        >
          close
        </Button>
      </Space>

      <SwipeOut
        beforeShow={beforeShow}
        afterShow={afterShow}
        duration={200}
        onInit={() => pushLog('onInit')}
        slideChangeTransitionStart={(activeIndex) =>
          pushLog(`slideChangeTransitionStart: ${activeIndex}`)
        }
        slideChangeTransitionEnd={(activeIndex) =>
          pushLog(`slideChangeTransitionEnd: ${activeIndex}`)
        }
        before={() => (
          <div style={{ padding: '8px 12px', background: '#1677ff', color: '#fff' }}>Before</div>
        )}
        after={() => (
          <div style={{ padding: '8px 12px', background: '#ff4d4f', color: '#fff' }}>After</div>
        )}
      >
        <div style={{ padding: 16, background: '#fafafa', border: '1px solid #eee' }}>
          Callbacks demo
        </div>
      </SwipeOut>

      <pre style={{ marginTop: 12, padding: 12, background: '#f5f5f5', minHeight: 140 }}>
        {logs.length ? logs.join('\n') : 'callback logs...'}
      </pre>
    </div>
  );
};
