import { Button } from 'antd';
import React, { Component, useState } from 'react';

import Decorators from '../src/index';

import '../src/index.less';
import './index.less';

@Decorators.ReactErrorBoundaries
class SafeClass extends Component {
  getReactErrorBoundariesErrorUI = ({ error }) => (
    <div className="DecoratorsE2E-error">
      类实例自定义错误 UI：{error?.message || 'unknown error'}
    </div>
  );

  render() {
    if (this.props.shouldThrow) {
      throw new Error('custom instance error ui');
    }

    return <div>自定义类实例错误 UI</div>;
  }
}

/**
 * ReactErrorBoundaries - 自定义组件错误 UI（实例方法 + @ 装饰器）
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
