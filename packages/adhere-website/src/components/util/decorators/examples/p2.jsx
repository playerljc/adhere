import React from 'react';

import { Decorators } from '@baifendian/adhere';

/**
 * MyComponent
 * @return {JSX.Element}
 * @constructor
 */
function MyComponent() {
  return <div>MyComponent</div>;
}

// 函数组件异常包装
export default Decorators.ReactErrorBoundaries(MyComponent);
