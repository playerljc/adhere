import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';

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
        name: `没有数据的显示`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '没有数据的显示',
            info: '没有数据的显示',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `错误的显示`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '错误的显示',
            info: '错误的显示',
          },
        },
        type: 'PlayGround',
        codeText: P3CodeText,
        renderChildren: () => <P3 />,
      },
      {
        id: `p4`,
        name: `自定义loading和empty`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '自定义loading和empty',
            info: '自定义loading和empty',
          },
        },
        type: 'PlayGround',
        codeText: P4CodeText,
        renderChildren: () => <P4 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="ScrollLoad">
        <p>滚动加载</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'ScrollLoad',
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
                params: 'loadClassName',
                desc: 'load附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'loadStyle',
                desc: 'load附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'emptyClassName',
                desc: 'empty附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'emptyStyle',
                desc: 'empty附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'errorClassName',
                desc: 'error附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'errorStyle',
                desc: 'error附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'distance',
                desc: '距离底部的距离',
                type: 'number',
                defaultVal: '50',
              },
              {
                params: 'onScrollBottom',
                desc: '滚动到底部的钩子',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onEmptyClick',
                desc: '点击empty的钩子',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onErrorClick',
                desc: '点击error的钩子',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'renderLoading',
                desc: '自定义loading的UI',
                type: 'Function',
                defaultVal: '返回JSX',
              },
              {
                params: 'renderEmpty',
                desc: '自定义empty的UI',
                type: 'Function',
                defaultVal: 'JSX',
              },
              {
                params: 'renderError',
                desc: '自定义error的UI',
                type: 'Function',
                defaultVal: 'JSX',
              },
              {
                params: 'getScrollContainer',
                desc: '滚动元素设置',
                type: 'Function',
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
                name: 'hideAll',
                desc: '隐藏所有',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
