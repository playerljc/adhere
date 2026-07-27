import { Button } from 'antd';
import React, { useEffect, useState } from 'react';

import Decorators from '../src/index';

import '../src/index.less';
import './index.less';

function UnsafeComponent({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error('default error ui demo');
  }

  return <div>使用全局缺省错误 UI</div>;
}

const SafeComponent = Decorators.ReactErrorBoundaries(UnsafeComponent);

/**
 * ReactErrorBoundaries - 定义全局缺省错误 UI
 */
export default () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  useEffect(() => {
    Decorators.ReactErrorBoundaries.setDefaultErrorUI(
      <div className="DecoratorsE2E-error">全局缺省错误 UI：组件发生了错误</div>,
    );
  }, []);

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
