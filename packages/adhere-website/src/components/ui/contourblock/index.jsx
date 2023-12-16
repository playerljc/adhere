import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p1';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';

export default () => {
  return (
    <PlayGroundPage>
      <Section title="ContourBlock">
        <p>宽度和高度相等的元素</p>
      </Section>

      <CodeBoxSection
        title="代码演示"
        config={[
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
            name: `画廊`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '画廊',
                info: '画廊',
              },
            },
            codeText: P2CodeText,
            type: 'PlayGround',
            renderChildren: () => <P2 />,
          },
        ]}
      />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
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
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
