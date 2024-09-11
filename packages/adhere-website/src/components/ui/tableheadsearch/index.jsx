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
            info: '基本使用',
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
      <Section title="TableHeadSearch">
        <p>基于antd-design的Table的列头筛选</p>
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
                name: 'TableHeadSearch',
                desc: '构建UI的方法',
                modifier: 'global',
                params: [
                  {
                    name: 'render',
                    desc: '构建UI的回调方法',
                    type: 'Function({confirm}) confirm用来关闭窗体',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'icon',
                    desc: '右侧的图标',
                    type: 'React.ReactElement',
                    defaultVal: '<SearchOutlined />',
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
