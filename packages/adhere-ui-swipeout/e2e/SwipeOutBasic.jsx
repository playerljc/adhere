import { Button, Space } from 'antd';
import React, { useState } from 'react';

import SwipeOut from '../src';

import '../src/index.less';

export default () => {
  const [beforeShow, setBeforeShow] = useState(false);
  const [afterShow, setAfterShow] = useState(false);

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
        duration={250}
        before={() => (
          <div style={{ padding: '8px 12px', background: '#1677ff', color: '#fff' }}>Before</div>
        )}
        after={() => (
          <div style={{ padding: '8px 12px', background: '#ff4d4f', color: '#fff' }}>After</div>
        )}
      >
        <div style={{ padding: 16, background: '#fafafa', border: '1px solid #eee' }}>
          SwipeOut basic content
        </div>
      </SwipeOut>
    </div>
  );
};
