import React, { useState } from 'react';

import { FontSizeSetting, Space } from '@baifendian/adhere';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

export default () => {
  const [fontSize, setFontSize] = useState(12);

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
  import React, { useState } from 'react';
  import { FontSizeSetting, Space } from '@baifendian/adhere';

  const [fontSize, setFontSize] = useState(12);

  <FontSizeSetting
    min={12}
    max={40}
    step={1}
    onChange={(size) => {
      setFontSize(size);
    }}
  />

  <Space direction="vertical" />

  <p style={{ fontSize }}>我是一个粉刷匠</p>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <FontSizeSetting
              min={12}
              max={40}
              step={1}
              onChange={(size) => {
                setFontSize(size);
              }}
            />

            <Space direction="vertical" />

            <p style={{ fontSize }}>我是一个粉刷匠</p>
          </>
        ),
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
