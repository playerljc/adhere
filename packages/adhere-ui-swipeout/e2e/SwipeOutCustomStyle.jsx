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
        className="custom-swipeout"
        style={{ border: '1px solid #91caff', borderRadius: 8, overflow: 'hidden' }}
        beforeClassName="custom-before"
        beforeStyle={{ background: '#e6f4ff' }}
        afterClassName="custom-after"
        afterStyle={{ background: '#fff1f0' }}
        contentClassName="custom-content"
        contentStyle={{ background: '#f6ffed' }}
        beforeShow={beforeShow}
        afterShow={afterShow}
        duration={400}
        before={() => <div style={{ padding: '8px 16px' }}>Before</div>}
        after={() => <div style={{ padding: '8px 16px' }}>After</div>}
      >
        <div style={{ padding: 16 }}>Custom className / style / duration=400</div>
      </SwipeOut>
    </div>
  );
};
