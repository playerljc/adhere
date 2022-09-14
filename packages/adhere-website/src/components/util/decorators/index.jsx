import React from 'react';

import PlayGroundPage, { CodeBoxSection, Section } from '@/lib/PlaygroundPage';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `ReactErrorBoundaries - class组件的使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'ReactErrorBoundaries - class组件的使用',
            info: 'ReactErrorBoundaries - class组件的使用',
          },
        },
        codeText: `
  import React from 'react';
  import { Decorators } from '@baifendian/adhere';

  @Decorators.ReactErrorBoundaries
  class MyComponent extends React.Component {

  }
      `,
        type: 'PlayGround',
      },
      {
        id: `p2`,
        name: `ReactErrorBoundaries - 函数组件的使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'ReactErrorBoundaries - 函数组件的使用',
            info: 'ReactErrorBoundaries - 函数组件的使用',
          },
        },
        codeText: `
  import React from 'react';
  import { Decorators } from '@baifendian/adhere';

  function MyComponent() {

  }

  export default Decorators.ReactErrorBoundaries(MyComponent);
      `,
        type: 'PlayGround',
      },
      {
        id: `p3`,
        name: `ReactErrorBoundaries - 定义全局缺省的错误UI`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'ReactErrorBoundaries - 定义全局缺省的错误UI',
            info: 'ReactErrorBoundaries - 定义全局缺省的错误UI',
          },
        },
        codeText: `
  import React from 'react';
  import { Decorators } from '@baifendian/adhere';

  function MyComponent() {

  }

  // 设置全局缺省UI
  Decorators.ReactErrorBoundaries.setDefaultErrorUI(<div>error</div>);

  export default Decorators.ReactErrorBoundaries(MyComponent);
      `,
        type: 'PlayGround',
      },
      {
        id: `p4`,
        name: `ReactErrorBoundaries - 自定义组件的错误UI(1)`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'ReactErrorBoundaries - 自定义组件的错误UI(1)',
            info: 'ReactErrorBoundaries - 自定义组件的错误UI(1)',
          },
        },
        codeText: `
  import React from 'react';
  import { Decorators } from '@baifendian/adhere';

  function MyComponent() {

  }

  // 自定义组件发生错误时候显示的UI(类组件也是一样)
  MyComponent.getReactErrorBoundariesErrorUI = () => <div>error</div>

  export default Decorators.ReactErrorBoundaries(MyComponent);
      `,
        type: 'PlayGround',
      },
      {
        id: `p5`,
        name: `ReactErrorBoundaries - 自定义组件的错误UI(2)`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'ReactErrorBoundaries - 自定义组件的错误UI(2)',
            info: 'ReactErrorBoundaries - 自定义组件的错误UI(2)',
          },
        },
        codeText: `
  import React from 'react';
  import { Decorators } from '@baifendian/adhere';

  @Decorators.ReactErrorBoundaries
  class MyComponent() extends React.Component {
    // 自定义组件发生错误时候显示的UI(类组件也是一样)
    getReactErrorBoundariesErrorUI = () => <div>error</div>
  }

  export default MyComponent;
      `,
        type: 'PlayGround',
      },
      {
        id: `p6`,
        name: `ReactAutoTryCatch`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'ReactAutoTryCatch',
            info: 'ReactAutoTryCatch',
          },
        },
        codeText: `
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
      `,
        type: 'PlayGround',
      },
      {
        id: `p7`,
        name: `ReactAop`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'ReactAop',
            info: 'ReactAop',
          },
        },
        codeText: `
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
      `,
        type: 'PlayGround',
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Decorators">
        <h1>ReactErrorBoundaries(React错误边界处理，防止白屏操作)</h1>
        <ul>
          <li>- class 组件使用@方式使用</li>
          <li>- 函数组件使用高阶函数方式使用</li>
        </ul>

        <h1>ReactAutoTryCatch - 为成员属性方法自动添加try/catch</h1>

        <h1>ReactAop - 为成员属性方法加入aop功能</h1>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />
    </PlayGroundPage>
  );
};
