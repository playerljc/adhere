import { Button, Space } from 'antd';
import React, { useState } from 'react';

import ConditionalRender from '../src/index';

export default () => {
  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: 16 }}>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => setShow((v) => !v)}>
          {show ? '隐藏 (display:none)' : '显示'}
        </Button>
      </Space>
      <div style={{ border: '1px dashed #ccc', padding: 12 }}>
        <ConditionalRender.Show conditional={show} noMatch={<div>noMatch (display)</div>}>
          <div>Show children — 隐藏时从布局移除</div>
        </ConditionalRender.Show>
      </div>
      <div style={{ marginTop: 16, border: '1px dashed #ccc', padding: 12 }}>
        <ConditionalRender.Show
          conditional={show}
          noMatch={
            <>
              <div>NoMatchFragment1</div>
              <div>NoMatchFragment2</div>
            </>
          }
        >
          <div>Fragment child 1</div>
          <div>Fragment child 2</div>
        </ConditionalRender.Show>
      </div>
    </div>
  );
};
