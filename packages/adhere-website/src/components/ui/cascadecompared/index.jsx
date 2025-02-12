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
  return (
    <PlayGroundPage className="CascadeCompared">
      <Section title="CascadeCompared">
        <p>级联比较</p>
      </Section>

      <CodeBoxSection
        title="代码演示"
        columnCount={1}
        config={[
          {
            id: `p1`,
            name: `基本使用`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本的级联操作',
              },
            },
            codeText: P1CodeText,
            type: 'PlayGround',
            renderChildren: () => <P1 />,
          },
          {
            id: `p2`,
            name: `在底部插入`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '在底部插入',
                info: '在底部插入行',
              },
            },
            codeText: P2CodeText,
            type: 'PlayGround',
            renderChildren: () => <P2 />,
          },
          {
            id: `p3`,
            name: `通过索引滚动`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '通过索引滚动',
                info: '通过索引滚动到顶部',
              },
            },
            codeText: P3CodeText,
            type: 'PlayGround',
            renderChildren: () => <P3 />,
          },
          {
            id: `p4`,
            name: `滚动到指定列`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '滚动到指定列',
                info: '滚动到指定列',
              },
            },
            codeText: P4CodeText,
            type: 'PlayGround',
            renderChildren: () => <P4 />,
          },
        ]}
      />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'CascadeCompared',
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
                params: 'indicatorClassName',
                desc: 'indicator附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'indicatorStyle',
                desc: 'indicator的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'indicatorFixedWrapClassName',
                desc: 'indicatorFixedWrap样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'indicatorFixedWrapStyle',
                desc: 'indicatorFixedWrap附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'indicatorAutoWrapClassName',
                desc: 'indicatorAutoWrap样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'indicatorAutoWrapStyle',
                desc: 'indicatorAutoWrap附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'masterClassName',
                desc: 'masterWrap样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'masterStyle',
                desc: 'master附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'masterInnerClassName',
                desc: 'masterInner样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'masterInnerStyle',
                desc: 'masterInner附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'masterStickFixedClassName',
                desc: 'masterStickFixed样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'masterStickFixedStyle',
                desc: 'masterStickFixed附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'masterStickInnerClassName',
                desc: 'masterStickInner样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'masterStickInnerStyle',
                desc: 'masterStickInner附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'indicator',
                desc: '指示器数据',
                type: 'IIndicatorTableConfig',
                defaultVal: '',
              },
              {
                params: 'master',
                desc: '主数据',
                type: 'Array<IMasterItem>',
                defaultVal: '',
              },
              {
                params: 'onStickChange',
                desc: '滚动改变钩子',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'defaultCellWidth',
                desc: '缺省的列宽度',
                type: 'number | string',
                defaultVal: '120',
              },
            ],
          },
          {
            border: true,
            title: 'IIndicatorTableConfig',
            data: [
              {
                params: 'columns',
                desc: '列配置',
                type: 'Array<IColumnConfig>',
                defaultVal: '[]',
              },
              {
                params: 'dataSource',
                desc: '数据',
                type: 'Object',
                defaultVal: '{}',
              },
            ],
          },
          {
            border: true,
            title: 'IColumnConfig',
            data: [
              {
                params: 'dataIndex',
                desc: '数据索引',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'isFixed',
                desc: '是否是固定列',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'width',
                desc: '列的宽度',
                type: 'number | string',
                defaultVal: '120',
              },
              {
                params: 'render',
                desc: '渲染列的方法',
                type: 'Function',
                defaultVal: '120',
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
            ],
          },
          {
            border: true,
            title: 'IMasterItem',
            data: [
              {
                params: 'columns',
                desc: '列配置',
                type: 'Array<IColumnConfig>',
                defaultVal: '[]',
              },
              {
                params: 'dataSource',
                desc: '数据',
                type: 'Array<Object>',
                defaultVal: '[]',
              },
              {
                params: 'title',
                desc: 'header',
                type: 'React.ReactElement',
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
                defaultVal: '{}',
              },
              {
                params: 'fixedWrapClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'fixedWrapStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '{}',
              },
              {
                params: 'autoWrapClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'autoWrapStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '{}',
              },
              {
                params: 'autoInnerClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'autoInnerStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '{}',
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
              {
                name: 'scrollToByColumn',
                desc: '滚动到指定列',
                modifier: 'public',
                params: [
                  {
                    name: 'columnIndex',
                    desc: '列的索引从1开始',
                    type: 'number',
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
