import P1CodeText from '!!raw-loader!./examples/p1';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import P1 from './examples/p1';

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
            info: '迭代数组返回一个肯定含有key的JSX数组',
          },
        },
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => <P1 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="ReactUtil">
        <p>扩展React的工具类</p>
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
                name: 'keyMap',
                desc: '迭代数组返回一个肯定含有key的JSX数组',
                modifier: 'public',
                params: [
                  {
                    name: 'arr',
                    desc: '数组',
                    type: 'Array<any>',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'handler',
                    desc: '句柄',
                    type: '(item: any, index: number) => ReactElement',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'Array<ReactElement>',
                returnDesc: '返回迭代的React.ReactElement数组',
              },
              {
                name: 'fillKey',
                desc: '将一个ReactElements填充key',
                modifier: 'public',
                params: [
                  {
                    name: 'elements',
                    desc: '数组',
                    type: 'Array<ReactElement>',
                    defaultVal: '[]',
                    required: 'true',
                  },
                ],
                returnType: 'Array<ReactElement>',
                returnDesc: '返回迭代的React.ReactElement数组',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
