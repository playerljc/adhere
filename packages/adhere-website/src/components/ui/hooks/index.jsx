import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';
import P5CodeText from '!!raw-loader!./examples/p5';
import P6CodeText from '!!raw-loader!./examples/p6';
import P7CodeText from '!!raw-loader!./examples/p7';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';
import P5 from './examples/p5';
import P6 from './examples/p6';
import P7 from './examples/p7';

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
            title: 'useForceUpdate',
            info: 'useForceUpdate',
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
            title: 'useSetState',
            info: 'useSetState',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `useLatestState`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'useLatestState',
            info: 'useLatestState',
          },
        },
        type: 'PlayGround',
        codeText: P3CodeText,
        renderChildren: () => <P3 />,
      },
      {
        id: `p4`,
        name: `useSetState`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'useSetState',
            info: 'useSetState',
          },
        },
        type: 'PlayGround',
        codeText: P4CodeText,
        renderChildren: () => <P4 />,
      },
      {
        id: `p5`,
        name: `usePropToState`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'usePropToState',
            info: 'usePropToState',
          },
        },
        type: 'PlayGround',
        codeText: P5CodeText,
        renderChildren: () => <P5 />,
      },
      {
        id: `p6`,
        name: `useTriggerQuery`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'useTriggerQuery',
            info: 'useTriggerQuery',
          },
        },
        type: 'PlayGround',
        codeText: P6CodeText,
        renderChildren: () => <P6 />,
      },
      {
        id: `p7`,
        name: `use`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'use',
            info: 'use',
          },
        },
        type: 'PlayGround',
        codeText: P7CodeText,
        renderChildren: () => <P7 />,
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
          <li>- useLatestState</li>
          <li>- usePropToState</li>
          <li>- useSetState</li>
          <li>- useTriggerQuery</li>
          <li>- use</li>
        </ul>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />
    </PlayGroundPage>
  );
};
