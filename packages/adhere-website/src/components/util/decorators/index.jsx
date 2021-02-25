import React from 'react';

import { Decorators } from '@baifendian/adhere';
import Playground from '@/lib/Playground';

function Component() {
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

      <h2>定义全局缺省的错误UI</h2>
      <Playground
        mode="code"
        scope={{ React }}
        expand
        codeText={`
  import React from 'react';      
  import { Decorators } from '@baifendian/adhere';

  function MyComponent() {
  
  }
  
  // 设置全局缺省UI
  Decorators.ReactErrorBoundaries.setDefaultErrorUI(<div>error</div>);
  
  export default Decorators.ReactErrorBoundaries(MyComponent);
      `}
      />

      <h2>自定义组件的错误UI(1)</h2>
      <Playground
        mode="code"
        scope={{ React }}
        expand
        codeText={`
  import React from 'react';      
  import { Decorators } from '@baifendian/adhere';

  function MyComponent() {
  
  }
  
  // 自定义组件发生错误时候显示的UI(类组件也是一样)
  MyComponent.getReactErrorBoundariesErrorUI = () => <div>error</div>
  
  export default Decorators.ReactErrorBoundaries(MyComponent);
      `}
      />

      <h2>自定义组件的错误UI(2)</h2>
      <Playground
        mode="code"
        scope={{ React }}
        expand
        codeText={`
  import React from 'react';      
  import { Decorators } from '@baifendian/adhere';

  @Decorators.ReactErrorBoundaries
  class MyComponent() extends React.Component {
    // 自定义组件发生错误时候显示的UI(类组件也是一样)
    getReactErrorBoundariesErrorUI = () => <div>error</div>
  }
  
  export default MyComponent;
      `}
      />
    </div>
  );
}

export default Decorators.ReactErrorBoundaries(Component);
