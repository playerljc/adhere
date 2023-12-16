import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `useForceUpdate`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本的使用',
            info: '基本的使用',
          },
        },
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `useSetState`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本的使用',
            info: '基本的使用',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Hooks">
        <ul>
          <li>- useFirst</li>
          <li>- useForceUpdate</li>
          <li>- usePrevious</li>
        </ul>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />
    </PlayGroundPage>
  );
};
