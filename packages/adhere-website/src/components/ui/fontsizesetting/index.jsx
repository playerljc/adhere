import P1CodeText from '!!raw-loader!./examples/p1';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

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
      <Section title="FontSizeSetting">
        <p>字体设置</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'FlexLayout',
            data: [
              {
                params: 'className',
                desc: '附加的样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: '{}',
                defaultVal: '{}',
              },
              {
                params: 'min',
                desc: '最小值',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'max',
                desc: '最大值',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'step',
                desc: '步进',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '数值改变',
                type: 'Function',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
