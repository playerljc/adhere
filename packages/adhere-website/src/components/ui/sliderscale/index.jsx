import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';

import './index.less';

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
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
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
        type: 'PlayGround',
        codeText: P3CodeText,
        renderChildren: () => <P3 />,
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
