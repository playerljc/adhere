import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `横向`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '横向',
            info: '横向',
          },
        },
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `纵向`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '纵向',
            info: '纵向',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `间距`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '间距',
            info: '间距',
          },
        },
        type: 'PlayGround',
        codeText: P3CodeText,
        renderChildren: () => <P3 />,
      },
      {
        id: `p4`,
        name: `SpaceGroup`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'SpaceGroup',
            info: 'SpaceGroup',
          },
        },
        type: 'PlayGround',
        codeText: P4CodeText,
        renderChildren: () => <P4 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Split">
        <p>无侵入性的竖线和横线分割</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'Split',
            data: [
              {
                params: 'direction',
                desc: '方向',
                type: "string - ['vertical' | 'horizontal']",
                defaultVal: 'vertical',
              },
              {
                params: 'size',
                desc: '宽度或这高度',
                type: 'string | number',
                defaultVal: '20',
              },
              {
                params: 'className',
                desc: '附加的样式',
                type: 'string',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'Split.Group',
            data: [
              {
                params: 'direction',
                desc: '方向',
                type: "string - ['vertical' | 'horizontal']",
                defaultVal: 'vertical',
              },
              {
                params: 'size',
                desc: '宽度或这高度',
                type: 'string | number',
                defaultVal: '20',
              },
              {
                params: 'className',
                desc: '附加的样式',
                type: 'string',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
