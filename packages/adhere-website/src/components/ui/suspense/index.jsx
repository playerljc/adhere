import ASyncCodeText from '!!raw-loader!./async';
import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';
import P5CodeText from '!!raw-loader!./examples/p5';
import SyncCodeText from '!!raw-loader!./sync';
import TableCodeText from '!!raw-loader!./table';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
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
        name: `基本使用`,
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        active: 'p1.jsx',
        config: [
          {
            title: 'p1.jsx',
            key: 'p1.jsx',
            codeText: P1CodeText,
          },
          {
            title: 'table.jsx',
            key: 'table.jsx',
            codeText: TableCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `自定义firstLoading的UI`,
        cardProps: {
          description: {
            title: '自定义firstLoading的UI',
            info: '自定义firstLoading的UI',
          },
        },
        active: 'p2.jsx',
        config: [
          {
            title: 'p2.jsx',
            key: 'p2.jsx',
            codeText: P2CodeText,
          },
          {
            title: 'table.jsx',
            key: 'table.jsx',
            codeText: TableCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `不调用接口值传递数据`,
        cardProps: {
          description: {
            title: '不调用接口值传递数据',
            info: '不调用接口值传递数据',
          },
        },
        active: 'p3.jsx',
        config: [
          {
            title: 'p3.jsx',
            key: 'p3.jsx',
            codeText: P3CodeText,
          },
          {
            title: 'Sync.jsx',
            key: 'Sync.jsx',
            codeText: SyncCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P3 />,
      },
      {
        id: `p4`,
        name: `调用接口传递数据`,
        cardProps: {
          description: {
            title: '调用接口传递数据',
            info: '调用接口传递数据',
          },
        },
        active: 'p4.jsx',
        config: [
          {
            title: 'p4.jsx',
            key: 'p4.jsx',
            codeText: P4CodeText,
          },
          {
            title: 'ASync.jsx',
            key: 'ASync.jsx',
            codeText: ASyncCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P4 />,
      },
      {
        id: `p5`,
        name: `自定义renderNormalLoading`,
        cardProps: {
          description: {
            title: '自定义renderNormalLoading',
            info: '自定义renderNormalLoading',
          },
        },
        active: 'p5.jsx',
        config: [
          {
            title: 'p5.jsx',
            key: 'p5.jsx',
            codeText: P5CodeText,
          },
          {
            title: 'ASync.jsx',
            key: 'ASync.jsx',
            codeText: ASyncCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P5 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Suspense">
        <p>
          数据加载单元(如第一次是骷髅骨架，其他是loading)，有数据加载的单元，第一次是骷髅骨架(或其他)mount，更新是loading
        </p>
        <p>
          此组件是一个父类，使用的时候需要写一个子类，人后重写fetchData、renderInner和showLoading三个方法，所以只能使用class的方式，不能使用hooks
        </p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'SuspenseProps',
            data: [
              {
                params: 'reset',
                desc: '是否重置',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'firstLoading',
                desc: '自定义firstLoading',
                type: 'React.ReactElement | null',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'SuspenseSyncProps',
            data: [
              {
                params: 'data',
                desc: '数据',
                type: 'any',
                defaultVal: '{}',
              },
              {
                params: 'isEmpty',
                desc: '是否是空数据',
                type: '() => boolean',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'SuspenseASyncProps',
            data: [
              {
                params: 'isEmpty',
                desc: '是否是空数据',
                type: '() => boolean',
                defaultVal: '',
              },
              {
                params: 'fetchData',
                desc: '加载数据',
                type: '(params?:any) => Promise<void>',
                defaultVal: '',
              },
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '重写的方法',
            data: [
              {
                name: 'fetchData',
                desc: '加载数据',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'renderInner',
                desc: '渲染的UI',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement',
                returnDesc: '',
              },
              {
                name: 'showLoading',
                desc: '是否显示遮罩',
                modifier: 'public',
                params: [],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'reset',
                desc: '重置',
                modifier: 'public',
                params: [],
                returnType: 'Promise<void>',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
