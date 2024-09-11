import React from 'react';
import { Decorators } from '@baifendian/adhere';

@Decorators.ReactErrorBoundaries
class MyComponent extends React.Component {
  // 自定义组件发生错误时候显示的UI(类组件也是一样)
  getReactErrorBoundariesErrorUI = () => <div>error</div>

  render() {
    return <div>MyComponent</div>
  }
}

export default MyComponent;
