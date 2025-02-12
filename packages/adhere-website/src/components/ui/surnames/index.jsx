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

import './index.less';

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
        name: `上下结构`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '上下结构',
            info: '上下结构',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `使用api`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '使用api',
            info: '使用api',
          },
        },
        type: 'PlayGround',
        codeText: P3CodeText,
        renderChildren: () => <P3 />,
      },
    ];
  }

  return (
    <PlayGroundPage className="Surnames">
      <Section title="Surnames">
        <p>姓名面板</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'Surnames',
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
                params: 'position',
                desc: "显示的位置 'top', 'right', 'bottom', 'left'",
                type: 'string',
                defaultVal: 'right',
              },
              {
                params: 'indexes',
                desc: '索引的信息',
                type: 'Array',
                defaultVal: '[]',
              },
              {
                params: 'dataSource',
                desc: '数据',
                type: 'Array',
                defaultVal: '[]',
              },
              {
                params: 'onBeforeScroll',
                desc: '滚动之前的钩子',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onScroll',
                desc: '滚动',
                type: 'Function',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'indexes',
            data: [
              {
                params: 'index',
                desc: '索引值',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'renderIndex',
                desc: '渲染索引的方法',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'renderTitle',
                desc: '渲染title的方法',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'renderContent',
                desc: '渲染Content的方法',
                type: 'Function',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'dataSource',
            data: [
              {
                params: 'index',
                desc: '索引值',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'data',
                desc: '数据',
                type: 'Array<Object>',
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
                name: 'scrollToAnimation',
                desc: '动画的滚动到指定所引处',
                modifier: 'public',
                params: [
                  {
                    name: 'name',
                    desc: '索引名称',
                    type: 'string',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'duration',
                    desc: '动画的完成时间',
                    type: 'number',
                    defaultVal: '100',
                    required: 'false',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'scrollTo',
                desc: '滚动到指定所引处',
                modifier: 'public',
                params: [
                  {
                    name: 'name',
                    desc: '索引名称',
                    type: 'string',
                    defaultVal: '',
                    required: 'true',
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
