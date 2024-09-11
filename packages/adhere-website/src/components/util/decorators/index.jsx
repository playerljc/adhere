import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';
import P5CodeText from '!!raw-loader!./examples/p5';
import P6CodeText from '!!raw-loader!./examples/p6';
import P7CodeText from '!!raw-loader!./examples/p7';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';
import P5 from './examples/p5';
import P6 from './examples/p6';
import P7 from './examples/p7';

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
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => <P1 />,
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
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
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
        type: 'PlayGround',
        codeText: P3CodeText,
        renderChildren: () => <P3 />,
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
        type: 'PlayGround',
        codeText: P4CodeText,
        renderChildren: () => <P4 />,
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
        type: 'PlayGround',
        codeText: P5CodeText,
        renderChildren: () => <P5 />,
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
        type: 'PlayGround',
        codeText: P6CodeText,
        renderChildren: () => <P6 />,
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
        type: 'PlayGround',
        codeText: P7CodeText,
        renderChildren: () => <P7 />,
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
