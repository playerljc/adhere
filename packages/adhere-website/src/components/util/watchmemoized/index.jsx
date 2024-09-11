import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';
import P5CodeText from '!!raw-loader!./examples/p5';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';
import P5 from './examples/p5';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `单值缓存监控`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '单值缓存监控',
            info: '单值缓存监控',
          },
        },
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `多值缓存监控`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '多值缓存监控',
            info: '多值缓存监控',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `watch对象的变化`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'watch对象的变化',
            info: 'watch对象的变化',
          },
        },
        type: 'PlayGround',
        codeText: P3CodeText,
        renderChildren: () => <P3 />,
      },
      {
        id: `p4`,
        name: `创建一个memoized的普通函数`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '创建一个memoized的普通函数',
            info: '创建一个memoized的普通函数',
          },
        },
        type: 'PlayGround',
        codeText: P4CodeText,
        renderChildren: () => <P4 />,
      },
      {
        id: `p5`,
        name: `创建一个memoized的Promise函数`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '创建一个memoized的Promise函数',
            info: '创建一个memoized的Promise函数',
          },
        },
        type: 'PlayGround',
        codeText: P5CodeText,
        renderChildren: () => <P5 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="WatchMemoized">
        <p>对值的监控和缓存</p>
        <p>缓存</p>
        <ul>
          <li>支持多值监控</li>
          <li>支持deep、light和自定义三种比较是否修改的方式</li>
          <li>支持all和race两种触发修改的方式</li>
          <li>支持函数调用返回值的缓存</li>
        </ul>
        <p>监控</p>
        <p>支持类似与Vue的watch监控</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '方法',
            data: [
              {
                name: 'createRef',
                desc: '创建一个值(其实就是在srcObj中创建一个属性)',
                modifier: 'public',
                params: [
                  {
                    name: 'defaultValue',
                    desc: '缺省值',
                    type: 'any',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: '[getData, setData, property]',
                returnDesc: '',
              },
              {
                name: 'memoized.watch.all',
                desc: '对依赖项的监控(所有依赖项全部发生改变才执行handler)',
                modifier: 'public',
                params: [
                  {
                    name: 'handler',
                    desc: '函数句柄',
                    type: 'Function',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'depends',
                    desc: '依赖项',
                    type: 'Array<Symbol | {property,mode}>',
                    defaultVal: '[]',
                    required: 'true',
                  },
                ],
                returnType: 'Function',
                returnDesc: '返回清空所有订阅句柄的方法',
              },
              {
                name: 'memoized.watch.race',
                desc: '对依赖项的监控(只要有一个依赖项发生改变的时候就执行handler)',
                modifier: 'public',
                params: [
                  {
                    name: 'handler',
                    desc: '函数句柄',
                    type: 'Function',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'depends',
                    desc: '依赖项',
                    type: 'Array<Symbol | {property,mode}>',
                    defaultVal: '[]',
                    required: 'true',
                  },
                ],
                returnType: 'Function',
                returnDesc: '返回清空所有订阅句柄的方法',
              },
              {
                name: 'memoized.createMemoFun',
                desc: '创建一个memo的Function',
                modifier: 'public',
                params: [
                  {
                    name: 'handler',
                    desc: '函数实现',
                    type: 'Function',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'stackMaxSize',
                    desc: '最大缓存栈的大小',
                    type: 'number',
                    defaultVal: '10',
                    required: 'true',
                  },
                ],
                returnType: 'Function',
                returnDesc: '返回一个可以调用的函数',
              },
              {
                name: 'watch.create',
                desc: 'create - 创建一个watch对象',
                modifier: 'public',
                params: [
                  {
                    name: 'srcObj',
                    desc: '原始对象',
                    type: 'Object',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'listeners',
                    desc: '监控对象',
                    type: 'Object',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: '{value,on:(expression,handler),remove:(expression,handler)}',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
