import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';
import P5CodeText from '!!raw-loader!./examples/p5';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `gridlayout.less`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'gridlayout.css',
            info: 'gridlayout.css - 一个多列的布局实现,可以实现最多11列的布局',
          },
        },
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `mixin.less`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'mixin.less',
            info: 'mixin.less - less全局的函数和混入',
          },
        },
        codeText: P2CodeText,
        type: 'PlayGround',
      },
      {
        id: `p3`,
        name: `switch.less`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'switch.less',
            info: 'switch.less - 一个将checkbox转换成switch的样式',
          },
        },
        codeText: P3CodeText,
        type: 'PlayGround',
      },
      {
        id: `p4`,
        name: `normalize-antd.less`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'normalize-antd.less',
            info: 'normalize-antd.less - 对antd样式的重写',
          },
        },
        codeText: P4CodeText,
        type: 'PlayGround',
      },
      {
        id: `p5`,
        name: `normalize-default.less`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'normalize-default.less',
            info: 'normalize-default.less - 对缺省样式的重写',
          },
        },
        codeText: P5CodeText,
        type: 'PlayGround',
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="CSS">
        <p>提供很多公共的样式</p>
        <ul>
          <li>- 默认样式的重置</li>
          <li>- ant-design 样式的重置</li>
          <li>- switch样式</li>
          <li>- gridlayout样式</li>
          <li>- 全局通用less函数</li>
          <li>- 全局通用iconfont</li>
        </ul>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />
    </PlayGroundPage>
  );
};
