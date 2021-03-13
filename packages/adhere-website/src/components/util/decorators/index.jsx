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

      <h1>ReactAutoTryCatch - 为成员属性方法自动添加try/catch</h1>

      <h1>ReactAop - 为成员属性方法加入aop功能</h1>

      <h2>ReactErrorBoundaries - class组件的使用</h2>
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

      <h2>ReactErrorBoundaries - 函数组件的使用</h2>
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

      <h2>ReactErrorBoundaries - 定义全局缺省的错误UI</h2>
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

      <h2>ReactErrorBoundaries - 自定义组件的错误UI(1)</h2>
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

      <h2>ReactErrorBoundaries - 自定义组件的错误UI(2)</h2>
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

      <h2>ReactAutoTryCatch</h2>
      <Playground
        mode="code"
        scope={{ React }}
        expand
        codeText={`
  import React from 'react';      
  import { Decorators } from '@baifendian/adhere';

  class MyComponent extends React.Component {
    // 这里只能使用function，不能使用箭头函数，可以再function过去到this
    @Decorators.ReactAutoTryCatch(function(e){
       console.error(e);
    })
    display(name) {
       return name;
    }
  }
  
  export default MyComponent;
      `}
      />

      <h2>ReactAop</h2>
      <Playground
        mode="code"
        scope={{ React }}
        expand
        codeText={`
  import React from 'react';      
  import { Decorators } from '@baifendian/adhere';

  class MyComponent extends React.Component {
    // 这里只能使用function，不能使用箭头函数，可以再function过去到this
    @Decorators.ReactAop(function(){
       console.log('start');
    }, function(){
       console.log('end');
    })
    display(name) {
       return name;
    }
  }
  
  export default MyComponent;
      `}
      />
    </div>
  );
}

export default Decorators.ReactErrorBoundaries(Component);
