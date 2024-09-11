import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';
import P5CodeText from '!!raw-loader!./examples/p5';
import P6CodeText from '!!raw-loader!./examples/p6';
import P7CodeText from '!!raw-loader!./examples/p7';
import P8CodeText from '!!raw-loader!./examples/p8';

import React from 'react';

import { Link } from '@ctsj/router';

import PlayGroundPage, { CodeBoxSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';
import P5 from './examples/p5';
import P6 from './examples/p6';
import P7 from './examples/p7';
import P8 from './examples/p8';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `静态字典`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '静态字典',
            info: '静态字典',
          },
        },
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => P1(),
      },
      {
        id: `p2`,
        name: `动态字典`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '动态字典',
            info: '动态字典',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => P2(),
      },
      {
        id: `p3`,
        name: `方法`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '方法',
            info: '方法',
          },
        },
        type: 'PlayGround',
        codeText: P3CodeText,
        renderChildren: () => P3(),
      },
      {
        id: `p4`,
        name: `方法(不使用缓存)`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '方法(不使用缓存)',
            info: '方法(不使用缓存)',
          },
        },
        type: 'PlayGround',
        codeText: P4CodeText,
        renderChildren: () => P4(),
      },
      {
        id: `p5`,
        name: `刷新字典`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '刷新字典',
            info: '刷新字典',
          },
        },
        type: 'PlayGround',
        codeText: P5CodeText,
        renderChildren: () => P5(),
      },
      {
        id: `p6`,
        name: `省市区联动`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '省市区联动',
            info: '省市区联动',
          },
        },
        type: 'PlayGround',
        codeText: P6CodeText,
        renderChildren: () => P6(),
      },
      {
        id: `p7`,
        name: `使用字典的React组件`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '使用字典的React组件',
            info: '重写省市区联动',
          },
        },
        type: 'PlayGround',
        codeText: P7CodeText,
        renderChildren: () => P7(),
      },
      {
        id: 'p8',
        name: `使用useDict`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '使用useDict',
            info: '使用useDict',
          },
        },
        type: 'PlayGround',
        codeText: P8CodeText,
        renderChildren: () => P8(),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Dict">
        <p>字典</p>
        <ul>
          <li>- 静态字典</li>
          <li>- 异步字典</li>
        </ul>
        <p>
          第一次使用的时候才加载到内存，加载过之后就不在加载，如果字典是函数，也会对函数的值进行memoized处理，可以进行设置是否缓存,函数缓存请参考
          <Link to={`${window.location.origin}/adhere/component/util/watchmemoized`}>
            adhere-util-watchmemoized
          </Link>
        </p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />
    </PlayGroundPage>
  );
};
