import { Button, Space } from 'antd';
import React, { useState } from 'react';

import SwipeOut from '../src';

import '../src/index.less';

export default () => {
  const [beforeShow, setBeforeShow] = useState(false);
  const [afterShow, setAfterShow] = useState(false);

  return (
    <div style={{ padding: 16, maxWidth: 320 }}>
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

      <div style={{ height: 220, border: '1px solid #eee' }}>
        <SwipeOut
          direction="vertical"
          beforeShow={beforeShow}
          afterShow={afterShow}
          duration={300}
          before={() => (
            <div
              style={{
                height: 60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#1677ff',
                color: '#fff',
              }}
            >
              Before
            </div>
          )}
          after={() => (
            <div
              style={{
                height: 60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#ff4d4f',
                color: '#fff',
              }}
            >
              After
            </div>
          )}
        >
          <div
            style={{
              height: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#fafafa',
            }}
          >
            Vertical content
          </div>
        </SwipeOut>
      </div>
    </div>
  );
};
