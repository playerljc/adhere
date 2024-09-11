import P1CodeText from '!!raw-loader!./examples/p1';
import ParentCodeText from '!!raw-loader!./parent';
import SubCodeText from '!!raw-loader!./sub';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `强制刷新组件及其子组件`,
        type: 'PlayGroundTab',
        active: 'p1.jsx',
        config: [
          {
            key: 'p1.jsx',
            title: 'p1.jsx',
            codeText: P1CodeText,
          },
          {
            key: 'parent.jsx',
            title: 'parent.jsx',
            codeText: ParentCodeText,
          },
          {
            key: 'sub.jsx',
            title: 'sub.jsx',
            codeText: SubCodeText,
          },
        ],
        renderChildren: () => <P1 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="ForceUpdate">
        <p>强制刷新组件及其子组件</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />
    </PlayGroundPage>
  );
};
