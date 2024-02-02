import MenuDataCodeText from '!!raw-loader!./MenuData';
import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';

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

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        active: 'p1.jsx',
        config: [
          {
            key: 'p1.jsx',
            title: 'p1.jsx',
            codeText: P1CodeText,
          },
          {
            key: 'MenuData.jsx',
            title: 'MenuData.jsx',
            codeText: MenuDataCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `右键弹出`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '右键弹出',
            info: '右键弹出',
          },
        },
        active: 'p2.jsx',
        config: [
          {
            key: 'p2.jsx',
            title: 'p2.jsx',
            codeText: P2CodeText,
          },
          {
            key: 'MenuData.jsx',
            title: 'MenuData.jsx',
            codeText: MenuDataCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `多项按钮`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '多项按钮',
            info: '多项按钮',
          },
        },
        active: 'p3.jsx',
        config: [
          {
            key: 'p3.jsx',
            title: 'p3.jsx',
            codeText: P3CodeText,
          },
          {
            key: 'MenuData.jsx',
            title: 'MenuData.jsx',
            codeText: MenuDataCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P3 />,
      },
      {
        id: 'p4',
        name: '扇形菜单',
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '扇形菜单',
            info: '扇形菜单',
          },
        },
        codeText: P4CodeText,
        type: 'PlayGround',
        renderChildren: () => <P4 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="ContextMenu">
        <p>上下文菜单</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'IData',
            data: [
              {
                params: 'name',
                desc: '菜单名称',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'icon',
                desc: '菜单图标',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'id',
                desc: '菜单的唯一id',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'disabled',
                desc: '是否可用',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'separation',
                desc: '是否是分割线',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'attribute',
                desc: '自定义参数',
                type: 'Object',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '孩子',
                type: 'Array<IData>',
                defaultVal: '[]',
              },
              {
                params: 'className',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加样式',
                type: 'Object',
                defaultVal: '',
              },
              {
                params: 'subMenuClassName',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'subMenuStyle',
                desc: '附加样式',
                type: 'Object',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'IConfig',
            data: [
              {
                params: 'x',
                desc: '菜单显示的x坐标，现对于视口',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'y',
                desc: '菜单显示的y坐标，现对于视口',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'width',
                desc: '菜单宽度',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'maskClosable',
                desc: '是否点击遮罩消失',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'handler',
                desc: '点击菜单项的钩子',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'className',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加样式',
                type: 'Object',
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
            title: '方法',
            data: [
              {
                name: 'open',
                desc: '显示一个上下文菜单',
                modifier: 'public',
                params: [
                  {
                    name: 'data',
                    desc: '菜单的数据',
                    type: 'IData',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'config',
                    desc: '配置',
                    type: 'IConfig',
                    defaultVal: '{}',
                    required: '',
                  },
                ],
                returnType: 'HtmlElement',
                returnDesc: '上下文菜单的el',
              },
              {
                name: 'close',
                desc: '关闭一个上下文菜单',
                modifier: 'public',
                params: [
                  {
                    name: 'el',
                    desc: '使用open方法返回的参数',
                    type: 'HtmlElement',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
