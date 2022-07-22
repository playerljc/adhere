import React from 'react';
import { WritingBoard } from '@baifendian/adhere';

import PlayGroundPage, { Section, PropsSection, CodeBoxSection } from '@/lib/PlaygroundPage';

import Simple from './simple';

export default () => {
  const ref1 = React.createRef();

  return (
    <PlayGroundPage>
      <Section title="WritingBoard">
        <p>写字板</p>
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
            codeText: ``,
            type: 'PlayGround',
            renderChildren: () => (
              <div
                style={{
                  position: 'relative',
                  height: 300,
                  overflowY: 'hidden',
                  border: '1px solid #ccc',
                }}
              >
                <div style={{ height: '100%' }} ref={ref1}>
                  <WritingBoard />
                </div>
              </div>
            ),
          },
          {
            id: `p2`,
            name: `简易写字板`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '建议写字板',
                info: '切换类型、颜色和粗细',
              },
            },
            codeText: ``,
            type: 'PlayGround',
            renderChildren: () => <Simple />,
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
                params: 'target',
                desc: '获取滚动的目标元素',
                type: '() => HtmlElement | Window',
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
