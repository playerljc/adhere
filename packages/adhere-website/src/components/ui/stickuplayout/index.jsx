import P1CodeText from '!!raw-loader!./examples/p1';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';

import IndexLessCodeText from '!!raw-loader!./index.less';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        type: 'PlayGroundTab',
        active: 'p1.jsx',
        config: [
          {
            title: 'p1.jsx',
            key: 'p1.jsx',
            codeText: P1CodeText,
          },
          {
            title: 'index.less',
            key: 'index.less',
            codeText: IndexLessCodeText,
          },
        ],
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `滚动到指定位置`,
        cardProps: {
          description: {
            title: '滚动到指定位置',
            info: '滚动到指定位置',
          },
        },
        type: 'PlayGroundTab',
        active: 'p2.jsx',
        config: [
          {
            title: 'p2.jsx',
            key: 'p2.jsx',
            codeText: P1CodeText,
          },
          {
            title: 'index.less',
            key: 'index.less',
            codeText: IndexLessCodeText,
          },
        ],
        renderChildren: () => <P2 />,
      },
    ];
  }

  return (
    <PlayGroundPage className="StickupLayout">
      <Section title="StickupLayout">
        <p>滚动固定头额布局</p>
        <p>父元素需要固定高度</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'SplitLayout',
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
                params: 'fixedClassName',
                desc: '固定头附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'fixedStyle',
                desc: '固定头的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'innerClassName',
                desc: '内部附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'innerStyle',
                desc: '内部附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '滚动到固定区域',
                type: 'Function',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'SplitLayout.Item',
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

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '方法',
            data: [
              {
                name: 'scrollToByIndex',
                desc: '滚动到指定所引出',
                modifier: 'public',
                params: [
                  {
                    name: 'index',
                    desc: '滚动到的索引',
                    type: 'number',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'duration',
                    desc: '滚动的时间',
                    type: 'number',
                    defaultVal: '600',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'scrollToByHeaderEl',
                desc: '滚动到指定el',
                modifier: 'public',
                params: [
                  {
                    name: 'headerEl',
                    desc: '指定的el',
                    type: 'HtmlElement',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'duration',
                    desc: '滚动的时间',
                    type: 'number',
                    defaultVal: '300',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
