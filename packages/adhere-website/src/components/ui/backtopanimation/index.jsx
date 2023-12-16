import P1CodeText from '!!raw-loader!./examples/p1';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';

export default () => {
  return (
    <PlayGroundPage>
      <Section title="BackTopAnimation">
        <p>动画的回到顶部</p>
      </Section>

      <CodeBoxSection
        title="代码演示"
        config={[
          {
            id: `p1`,
            name: `列表中使用`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '列表中使用',
                info: '可以动画的回到列表的顶端',
              },
            },
            codeText: P1CodeText,
            type: 'PlayGround',
            renderChildren: () => <P1 />,
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
              {
                params: 'zIndex',
                desc: '层级',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'duration',
                desc: '动画持续的事件',
                type: 'number',
                defaultVal: '300',
              },
              {
                params: 'onScrollTop',
                desc: '获取滚动的目标元素',
                type: '() => HtmlElement',
                defaultVal: '',
              },
              {
                params: 'onTrigger',
                desc: '点击事件',
                type: '() => void',
                defaultVal: '',
              },
              {
                params: 'onScrollTop',
                desc: '滚动',
                type: '(value: number) => void',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
