import { Button, Select, Space } from 'antd';
import React, { useRef, useState } from 'react';

import GlobalIndicator from '../src';

import '../src/index.less';

/**
 * Sizes
 * @description small / default / large
 */
export default () => {
  const ref = useRef(null);
  const handlerRef = useRef(null);
  const [size, setSize] = useState('default');

  return (
    <div style={{ padding: 24 }}>
      <div
        ref={ref}
        style={{
          position: 'relative',
          minHeight: 160,
          marginBottom: 12,
          padding: 16,
          border: '1px solid #d9d9d9',
          wordBreak: 'break-all',
        }}
      >
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved.
      </div>

      <Space>
        <Select
          value={size}
          style={{ width: 120 }}
          onChange={setSize}
          options={[
            { value: 'small', label: 'small' },
            { value: 'default', label: 'default' },
            { value: 'large', label: 'large' },
          ]}
        />
        <Button
          type="primary"
          onClick={() => {
            handlerRef.current = GlobalIndicator.show(ref.current, '处理中...', undefined, size);
          }}
        >
          显示
        </Button>
        <Button
          onClick={() => {
            GlobalIndicator.hide(handlerRef.current);
            handlerRef.current = null;
          }}
        >
          取消
        </Button>
      </Space>
    </div>
  );
};
