import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';

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
        name: `初始化图片`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '初始化图片',
            info: '使用originSrc设置初始化图片',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `加载错误`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '加载错误',
            info: '加载错误',
          },
        },
        type: 'PlayGround',
        codeText: P3CodeText,
        renderChildren: () => <P3 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="ImageLazy">
        <p>图片懒加载</p>
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
                params: 'className',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'imgArgs',
                desc: '图片的参数',
                type: 'object',
                defaultVal: `{originSrc:'',targetSrc:''}`,
              },
            ],
          },
          {
            border: true,
            title: 'imgArgs',
            data: [
              {
                params: 'originSrc',
                desc: '预加载的图片地址',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'errorSrc',
                desc: '图片载入错误时候图片的地址',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'targetSrc',
                desc: '实际的图片地址',
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
