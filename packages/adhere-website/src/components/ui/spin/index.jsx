import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';

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
        name: `各种尺寸`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '各种尺寸',
            info: '各种尺寸',
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
      <Section title="Spin">
        <p>无侵入的loading</p>
        <p>放入含有position:relative的元素中则遮罩这个元素，否则遮罩body</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [
              {
                params: 'spinning',
                desc: '是否显示这招',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'text',
                desc: '显示的文本',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'zIndex',
                desc: '遮罩的层级',
                type: 'number',
                defaultVal: '19999',
              },
              {
                params: 'size',
                desc: '大小',
                type: 'default | small | large',
                defaultVal: 'default',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
