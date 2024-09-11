import React from 'react';

import { Decorators } from '@baifendian/adhere';

function MyComponent() {
  return <div>MyComponent</div>;
}

// 设置全局缺省UI
Decorators.ReactErrorBoundaries.setDefaultErrorUI(<div>error</div>);

export default Decorators.ReactErrorBoundaries(MyComponent);
