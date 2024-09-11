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
        name: `Overlay`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'Overlay',
            info: 'Overlay',
          },
        },
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `Push`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'Push',
            info: 'Push',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `Revolving`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'Revolving',
            info: 'Revolving',
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
      <Section title="SlideLayout">
        <p>抽屉布局</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'Overlay',
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
                params: 'width',
                desc: '宽度',
                type: 'string',
                defaultVal: '80%',
              },
              {
                params: 'height',
                desc: '高度',
                type: 'string',
                defaultVal: '40%',
              },
              {
                params: 'mask',
                desc: '是否有遮罩',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'zIndex',
                desc: '显示层级',
                type: 'number',
                defaultVal: '9999',
              },
              {
                params: 'time',
                desc: '过渡时间',
                type: 'number',
                defaultVal: '300ms',
              },
              {
                params: 'direction',
                desc: "方向['left', 'right', 'top', 'bottom']",
                type: 'string',
                defaultVal: 'left',
              },
              {
                params: 'collapse',
                desc: '显示或隐藏',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'onBeforeShow',
                desc: '显示之前',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onBeforeClose',
                desc: '隐藏之前',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onAfterShow',
                desc: '显示之后',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onAfterClose',
                desc: '隐藏之后',
                type: 'Function',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'Push',
            data: [
              {
                params: 'masterClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'masterStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
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
                params: 'slaveClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'slaveStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'width',
                desc: '宽度',
                type: 'string',
                defaultVal: '80%',
              },
              {
                params: 'height',
                desc: '高度',
                type: 'string',
                defaultVal: '40%',
              },
              {
                params: 'mask',
                desc: '是否有遮罩',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'zIndex',
                desc: '显示层级',
                type: 'number',
                defaultVal: '9999',
              },
              {
                params: 'time',
                desc: '过渡时间',
                type: 'number',
                defaultVal: '300ms',
              },
              {
                params: 'direction',
                desc: "方向['left', 'right']",
                type: 'string',
                defaultVal: 'left',
              },
              {
                params: 'collapse',
                desc: '显示或隐藏',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'onBeforeShow',
                desc: '显示之前',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onBeforeClose',
                desc: '隐藏之前',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onAfterShow',
                desc: '显示之后',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onAfterClose',
                desc: '隐藏之后',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'slide',
                desc: '抽屉面板JSX',
                type: 'React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'master',
                desc: '抽屉主面板JSX',
                type: 'React.ReactElement',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'Reveal',
            data: [
              {
                params: 'masterClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'masterStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
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
                params: 'slaveClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'slaveStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'width',
                desc: '宽度',
                type: 'string',
                defaultVal: '80%',
              },
              {
                params: 'height',
                desc: '高度',
                type: 'string',
                defaultVal: '40%',
              },
              {
                params: 'mask',
                desc: '是否有遮罩',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'zIndex',
                desc: '显示层级',
                type: 'number',
                defaultVal: '9999',
              },
              {
                params: 'time',
                desc: '过渡时间',
                type: 'number',
                defaultVal: '300ms',
              },
              {
                params: 'direction',
                desc: "方向['left', 'right']",
                type: 'string',
                defaultVal: 'left',
              },
              {
                params: 'collapse',
                desc: '显示或隐藏',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'onBeforeShow',
                desc: '显示之前',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onBeforeClose',
                desc: '隐藏之前',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onAfterShow',
                desc: '显示之后',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onAfterClose',
                desc: '隐藏之后',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'slide',
                desc: '抽屉面板JSX',
                type: 'React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'master',
                desc: '抽屉主面板JSX',
                type: 'React.ReactElement',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
