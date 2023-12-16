import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';

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
        name: `同一时刻只有一个Tab`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '同一时刻只有一个Tab',
            info: 'tab同一时刻只有一个Tab',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `置顶或置底`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '置顶或置底',
            info: '置顶或置底',
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
      <Section title="JDCategoryTab">
        <p>京东的面板</p>
        <p>本组件基于iscroll开发</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'JdCategoryTab',
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
                params: 'menuClassName',
                desc: 'menu附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'menuStyle',
                desc: 'menu附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'menuInnerClassName',
                desc: 'menuInner附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'menuInnerStyle',
                desc: 'menuInner附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'tabClassName',
                desc: 'tab附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'tabStyle',
                desc: 'tab附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'menuItemClassName',
                desc: 'menuItem附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'menuItemStyle',
                desc: 'menuItem附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'menuData',
                desc: '菜单数据',
                type: 'Object{key,name}',
                defaultVal: '{}',
              },
              {
                params: 'activeKey',
                desc: '当前激活项',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'renderMenuItem',
                desc: '自定义渲染菜单',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onBeforeChange',
                desc: '激活之前的钩子',
                type: 'Function',
                defaultVal: '执行改变返回true，否则返回false',
              },
              {
                params: 'onChange',
                desc: '菜单激活想发生改变',
                type: 'Function',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'JdCategoryTab.Item',
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
                params: 'key',
                desc: '唯一标志',
                type: 'string',
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
                name: 'scrollTo',
                desc: '滚动到指定key',
                modifier: 'public',
                params: [
                  {
                    name: 'key',
                    desc: '唯一标志',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'time',
                    desc: '滚动时间',
                    type: 'number',
                    defaultVal: '250',
                    required: '',
                  },
                  {
                    name: 'easing',
                    desc: 'IScroll的easing',
                    type: 'string',
                    defaultVal: 'IScroll.utils.ease',
                    required: '',
                  },
                ],
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
