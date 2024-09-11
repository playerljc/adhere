import P1CodeText from '!!raw-loader!./examples/p1';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';

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
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="SwipeOut">
        <p>滑动操作</p>
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
                params: 'beforeClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'beforeStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'afterClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'afterStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'contentClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'contentStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'beforeShow',
                desc: '是否显示内容之前的操作',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'afterShow',
                desc: '是否显示内容之后的操作',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'direction',
                desc: '方向',
                type: "'horizontal' | 'vertical'",
                defaultVal: 'horizontal',
              },
              {
                params: 'before',
                desc: '内容之前的UI',
                type: '() => React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'after',
                desc: '内容之后的UI',
                type: '() => React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'duration',
                desc: 'beforeShow和afterShow的持续时间(毫秒)',
                type: 'number',
                defaultVal: '200',
              },
              {
                params: 'onInit',
                desc: 'onInit',
                type: '() => void',
                defaultVal: '',
              },
              {
                params: 'slideChangeTransitionStart',
                desc: 'slideChangeTransitionStart',
                type: '() => void',
                defaultVal: '',
              },
              {
                params: 'slideChangeTransitionEnd',
                desc: 'slideChangeTransitionEnd',
                type: '() => void',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
