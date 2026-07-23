import { Button, Space } from 'antd';
import React, { useRef } from 'react';

import GlobalIndicator from '../src';

import '../src/index.less';

/**
 * ShowInParent
 * @description 在指定父容器内显示 / hide
 */
export default () => {
  const ref = useRef(null);
  const handlerRef = useRef(null);

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
        <Button
          type="primary"
          onClick={() => {
            handlerRef.current = GlobalIndicator.show(ref.current, '处理中...');
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
