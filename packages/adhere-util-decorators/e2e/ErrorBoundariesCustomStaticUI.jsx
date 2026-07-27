import { Button } from 'antd';
import React, { useState } from 'react';

import Decorators from '../src/index';

import '../src/index.less';
import './index.less';

function UnsafeComponent({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error('custom static error ui');
  }

  return <div>自定义组件静态错误 UI</div>;
}

UnsafeComponent.getReactErrorBoundariesErrorUI = () => (
  <div className="DecoratorsE2E-error">组件静态方法自定义错误 UI</div>
);

const SafeComponent = Decorators.ReactErrorBoundaries(UnsafeComponent);

/**
 * ReactErrorBoundaries - 自定义组件错误 UI（静态方法）
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
        <SafeComponent shouldThrow={shouldThrow} />
      </div>
    </div>
  );
};
