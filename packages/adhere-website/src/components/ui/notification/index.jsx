import P1CodeText from '!!raw-loader!./examples/p1';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import P1 from './examples/p1';

import IndexLessCodeText from '!!raw-loader!./index.less';

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
            key: 'index.less',
            title: 'index.less',
            codeText: IndexLessCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P1 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Notification">
        <p>通知</p>
        <ul>
          <li>- 支持ios和material</li>
          <li>- 支持top和bottom方向</li>
        </ul>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'IConfig',
            data: [
              {
                params: 'style',
                desc: '风格',
                type: "'ios' | 'material'",
                defaultVal: 'ios',
              },
              {
                params: 'type',
                desc: '类型',
                type: "'top' | 'bottom'",
                defaultVal: 'top',
              },
              {
                params: 'onCreate',
                desc: '创建完成',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onShow',
                desc: '显示完成',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onCloseBefore',
                desc: '关闭之前',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onCloseAfter',
                desc: '关闭之后',
                type: 'Function',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'IShowConfig',
            data: [
              {
                params: 'closed',
                desc: '是否有关闭按钮',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '显示的UI',
                type: 'React.ReactElement',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'IShowStandardConfig',
            data: [
              {
                params: 'closed',
                desc: '是否有关闭按钮',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'headerLabel',
                desc: '头部UI',
                type: 'string | React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'headerIcon',
                desc: '头部图标',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'title',
                desc: '标题',
                type: 'string | React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'text',
                desc: '内容',
                type: 'string | React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'icon',
                desc: '图标',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'datetime',
                desc: '时间',
                type: 'string | React.ReactElement',
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
            title: 'NotificationFactory',
            data: [
              {
                name: 'build',
                desc: '构建一个Notification',
                modifier: 'static',
                params: [
                  {
                    name: 'container',
                    desc: '父容器',
                    type: 'HtmlElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'config',
                    desc: '配置',
                    type: 'IConfig',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Notification',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Notification',
            data: [
              {
                name: 'show',
                desc: '显示一个自定义的notification',
                modifier: 'public',
                params: [
                  {
                    name: 'config',
                    desc: '配置',
                    type: 'IShowConfig',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'string',
                returnDesc: 'notification的id',
              },
              {
                name: 'showStandard',
                desc: '显示一个标准的notification',
                modifier: 'public',
                params: [
                  {
                    name: 'config',
                    desc: '配置',
                    type: 'IShowStandardConfig',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'string',
                returnDesc: 'notification的id',
              },
              {
                name: 'close',
                desc: '关闭一个notification',
                modifier: 'public',
                params: [
                  {
                    name: 'id',
                    desc: 'id',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
