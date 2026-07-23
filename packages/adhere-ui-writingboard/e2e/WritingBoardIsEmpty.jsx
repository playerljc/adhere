import { Button, Space, message } from 'antd';
import React, { useRef } from 'react';

import WritingBoard from '../src/index';

import '../src/index.less';
import './index.less';

export default () => {
  const ref = useRef();

  return (
    <div style={{ padding: 16 }}>
      <Space style={{ marginBottom: 12 }}>
        <Button
          type="primary"
          onClick={() => {
            message.info(`isEmpty: ${ref.current?.isEmpty?.()}`);
          }}
        >
          isEmpty
        </Button>
        <Button
          onClick={() => {
            ref.current?.clear?.();
          }}
        >
          clear
        </Button>
        <Button
          onClick={() => {
            const url = ref.current?.toDataURL?.('#fff', 'image/png', 1);
            console.log(url);
            message.success(url ? 'toDataURL logged' : 'empty');
          }}
        >
          toDataURL
        </Button>
      </Space>
      <div style={{ height: 360, border: '1px solid #ccc' }}>
        <WritingBoard ref={ref} defaultMode="free" />
      </div>
    </div>
  );
};
