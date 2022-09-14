import { Slider } from 'antd';
import React, { useState } from 'react';

import { SliderScale, Space } from '@baifendian/adhere';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import './index.less';

export default () => {
  const [value, setValue] = useState(0);

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
  import { SliderScale, Space } from '@baifendian/adhere';

  <SliderScale min={0} max={10} step={1} interval={5} />
  <Space />
  <SliderScale min={0} max={60} step={1} interval={5} />
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <SliderScale min={0} max={10} step={1} interval={5} />
            <Space />
            <SliderScale min={0} max={60} step={1} interval={5} />
          </>
        ),
      },
      {
        id: `p2`,
        name: `不同的刻度`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '不同的刻度',
            info: '不同的刻度',
          },
        },
        codeText: `
  import { SliderScale, Space } from '@baifendian/adhere';

  <SliderScale min={0} max={60} step={1} interval={10} />
  <Space />
  <SliderScale min={0} max={60} step={1} interval={20} />
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <SliderScale min={0} max={60} step={1} interval={10} />
            <Space />
            <SliderScale min={0} max={60} step={1} interval={20} />
          </>
        ),
      },
      {
        id: `p3`,
        name: `动态设置`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '动态设置',
            info: '动态设置',
          },
        },
        codeText: `
  import React, { useState } from 'react';
  import { Slider } from 'antd';
  import { SliderScale, Space } from '@baifendian/adhere';

  const [value, setValue] = useState(0);

  <Slider
    min={0}
    max={60}
    value={value}
    onChange={(v) => {
      setValue(v);
    }}
  />

  <Space />

  <SliderScale
    min={0}
    max={60}
    step={1}
    interval={20}
    value={value}
    onChange={(v) => {
      setValue(v);
    }}
  />
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <Slider
              min={0}
              max={60}
              value={value}
              onChange={(v) => {
                setValue(v);
              }}
            />

            <Space />

            <SliderScale
              min={0}
              max={60}
              step={1}
              interval={20}
              value={value}
              onChange={(v) => {
                setValue(v);
              }}
            />
          </>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage className="SliderScale">
      <Section title="SliderScale">
        <p>刻度盘</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'SliderScale',
            data: [
              {
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'min',
                desc: '最小值',
                type: 'number',
                defaultVal: '0',
              },
              {
                params: 'max',
                desc: '最大值',
                type: 'number',
                defaultVal: '100',
              },
              {
                params: 'step',
                desc: '步进',
                type: 'number',
                defaultVal: '1',
              },
              {
                params: 'value',
                desc: '当前值',
                type: 'number',
                defaultVal: '0',
              },
              {
                params: 'interval',
                desc: '刻度的间隔',
                type: 'number',
                defaultVal: '5',
              },
              {
                params: 'onChange',
                desc: '改变的钩子',
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
