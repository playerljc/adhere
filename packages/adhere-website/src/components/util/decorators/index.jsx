import React from 'react';

import Playground from '@/lib/Playground';

export default () => {
  return (
    <div className="Page">
      <h1>ReactErrorBoundaries(React错误边界处理，防止白屏操作)</h1>
      <ul>
        <li>- class 组件使用@方式使用</li>
        <li>- 函数组件使用高阶函数方式使用</li>
      </ul>

      <h2>class组件的使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        expand
        codeText={`
  import React from 'react';      
  import { Decorators } from '@baifendian/adhere';

  @Decorators.ReactErrorBoundaries
  class MyComponent extends React.Component {
    
  }
      `}
      />

      <h2>函数组件的使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        expand
        codeText={`
  import React from 'react';      
  import { Decorators } from '@baifendian/adhere';

  function MyComponent() {
  
  }
  
  export default Decorators.ReactErrorBoundaries(MyComponent);
      `}
      />
    </div>
  );
};
