import { Button, Empty, Space } from 'antd';
import React, { useState } from 'react';

import ConditionalRender from '../src/index';

export default () => {
  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: 16 }}>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => setShow((v) => !v)}>
          {show ? '隐藏' : '显示'}
        </Button>
      </Space>
      <ConditionalRender conditional={show} noMatch={() => <Empty description="noMatch" />}>
        {() => <div>条件为 true 时渲染的内容</div>}
      </ConditionalRender>
    </div>
  );
};
