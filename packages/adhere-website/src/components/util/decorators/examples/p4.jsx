import React from 'react';

import { Decorators } from '@baifendian/adhere';

function MyComponent() {
  return <div>MyComponent</div>;
}

// 自定义组件发生错误时候显示的UI(类组件也是一样)
MyComponent.getReactErrorBoundariesErrorUI = () => <div>error</div>;

export default Decorators.ReactErrorBoundaries(MyComponent);
