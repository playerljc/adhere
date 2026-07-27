import { Button } from 'antd';
import React, { Component, useState } from 'react';

import Decorators from '../src/index';

import '../src/index.less';
import './index.less';

@Decorators.ReactErrorBoundaries
class SafeClass extends Component {
  render() {
    if (this.props.shouldThrow) {
      throw new Error('class component render error');
    }

    return <div>Class Component 正常渲染</div>;
  }
}

/**
 * ReactErrorBoundaries - class 组件（@ 装饰器）
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
        <SafeClass shouldThrow={shouldThrow} />
      </div>
    </div>
  );
};
