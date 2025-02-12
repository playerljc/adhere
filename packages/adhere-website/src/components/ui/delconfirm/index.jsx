import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';

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
        codeText: P1CodeText,
        type: 'PlayGround',
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `Confirm.open`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'Confirm.open',
            info: 'Confirm.open',
          },
        },
        codeText: P2CodeText,
        type: 'PlayGround',
        renderChildren: () => <P2 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="DelConfirm">
        <p>删除确认提示(使用的是antd的Modal)</p>
        <p>删除的时候弹出提示，确认后在执行操作</p>
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
