import React from 'react';

import { ImportantConfirm } from '@baifendian/adhere';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

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
        codeText: `
  import React from 'react';
  import { ImportantConfirm } from '@baifendian/adhere';

  <ImportantConfirm
    success={() => {
      return new Promise((resolve) => {
        alert('点击了确认');

        resolve();
      });
    }}
  >
    <a>删除</a>
  </ImportantConfirm>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <ImportantConfirm
            success={() => {
              return new Promise((resolve) => {
                alert('点击了确认');

                resolve();
              });
            }}
          >
            <a>删除</a>
          </ImportantConfirm>
        ),
      },
      {
        id: `p2`,
        name: `ImportantConfirm.open`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'ImportantConfirm.open',
            info: 'ImportantConfirm.open',
          },
        },
        codeText: `
  import React from 'react';
  import { ImportantConfirm } from '@baifendian/adhere';

  <a
    onClick={() => {
      ImportantConfirm.open(() => {
        return new Promise((resolve) => {
          alert('点击了确认');

          resolve();
        });
      });
    }}
  >
    删除
  </a>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <a
            onClick={() => {
              ImportantConfirm.open(() => {
                return new Promise((resolve) => {
                  alert('点击了确认');

                  resolve();
                });
              });
            }}
          >
            删除
          </a>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="ImportantConfirm">
        <p>重要操作确认提示(使用的是antd的Modal)</p>
        <p>重要操作确认提示，确认后在执行操作</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [
              {
                params: 'zIndex',
                desc: '显示的层级',
                type: 'number',
                defaultVal: '19999',
              },
              {
                params: 'className',
                desc: '附加的样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'success',
                desc: '确认后的回调，此方法需要返回Promise对象',
                type: 'Function',
                defaultVal: '() => {}',
              },
              {
                name: 'title',
                desc: '标题',
                type: 'string',
                defaultVal: '',
              },
              {
                name: 'text',
                desc: '文本',
                type: 'string',
                defaultVal: '',
              },
              {
                name: 'icon',
                desc: '图标',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '子组件',
                type: 'React.ReactElement',
                defaultVal: 'null',
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
                desc: '打开确认对话框',
                modifier: 'static',
                params: [
                  {
                    name: 'success',
                    desc: '成功的回调，此方法需要返回Promise对象',
                    type: 'Function',
                    defaultVal: '() => {}',
                    required: 'true',
                  },
                  {
                    name: 'title',
                    desc: '标题',
                    type: 'string',
                    defaultVal: '',
                    required: 'false',
                  },
                  {
                    name: 'text',
                    desc: '文本',
                    type: 'string',
                    defaultVal: '',
                    required: 'false',
                  },
                  {
                    name: 'icon',
                    desc: '图标',
                    type: 'string',
                    defaultVal: '',
                    required: 'false',
                  },
                  {
                    name: 'zIndex',
                    desc: '显示层级',
                    type: 'number',
                    defaultVal: '19999',
                    required: 'false',
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
