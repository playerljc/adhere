import { Button } from 'antd';
import React, { useState } from 'react';

import Decorators from '../src/index';

import '../src/index.less';
import './index.less';

function UnsafeFunction({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error('function component render error');
  }

  return <div>Function Component 正常渲染</div>;
}

const SafeFunction = Decorators.ReactErrorBoundaries(UnsafeFunction);

/**
 * ReactErrorBoundaries - 函数组件
 */
export default () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  return (
    <div className="DecoratorsE2E-panel">
      <div className="DecoratorsE2E-toolbar">
        <Button type="primary" danger onClick={() => setShouldThrow(true)}>
          触发渲染错误
        </Button>
        <Button
          onClick={() => {
            setShouldThrow(false);
            window.location.reload();
          }}
        >
          刷新页面恢复
        </Button>
      </div>
      <div className="DecoratorsE2E-card">
        <SafeFunction shouldThrow={shouldThrow} />
      </div>
    </div>
  );
};
