import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';
import P5CodeText from '!!raw-loader!./examples/p5';
import P6CodeText from '!!raw-loader!./examples/p6';
import P7CodeText from '!!raw-loader!./examples/p7';
import P8CodeText from '!!raw-loader!./examples/p8';
import P9CodeText from '!!raw-loader!./examples/p9';
import P10CodeText from '!!raw-loader!./examples/p10';

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
import P5 from './examples/p5';
import P6 from './examples/p6';
import P7 from './examples/p7';
import P8 from './examples/p8';
import P9 from './examples/p9';
import P10 from './examples/p10';

export default () => {
  // console.log(
  //   'getRenderDetail',
  //   TableGridLayout.getRenderDetail(
  //     [
  //       {
  //         name: 'g1',
  //         width: '100%',
  //         columnCount: 3,
  //         colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
  //         data: [
  //           {
  //             key: 'UserName',
  //             label: <Label>UserName：</Label>,
  //             value: <Value>Zhou Maomao</Value>,
  //           },
  //           {
  //             key: 'Telephone',
  //             label: <Label>Telephone：</Label>,
  //             value: <Value>1810000000</Value>,
  //           },
  //           {
  //             key: 'Live',
  //             label: <Label>Live：</Label>,
  //             value: <Value>Hangzhou, Zhejiang</Value>,
  //           },
  //           {
  //             key: 'Remark',
  //             label: <Label>Remark：</Label>,
  //             value: <Value>empty</Value>,
  //           },
  //           {
  //             key: 'Address',
  //             label: <Label valign="top">Address：</Label>,
  //             value: (
  //               <Value colSpan={3}>
  //                 No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
  //               </Value>
  //             ),
  //           },
  //         ],
  //       },
  //     ],
  //     { layout: 'horizontal' },
  //   ),
  // );

  return (
    <PlayGroundPage>
      <Section title="TableGridLayout">
        <p>表格布局</p>
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
                info: '简单的展示',
              },
            },
            type: 'PlayGround',
            codeText: P1CodeText,
            renderChildren: () => <P1 />,
          },
          {
            id: `p2`,
            name: `设置缺省Label宽度`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '设置缺省Label宽度',
                info: '可以设置缺省Label的宽度，默认是120px',
              },
            },
            type: 'PlayGround',
            codeText: P2CodeText,
            renderChildren: () => <P2 />,
          },
          {
            id: `p3`,
            name: `设置每一列Label的宽度`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '设置每一列Label的宽度',
                info: '可以对每一列的Label宽度进行自定义',
              },
            },
            type: 'PlayGround',
            codeText: P3CodeText,
            renderChildren: () => <P3 />,
          },
          {
            id: `p4`,
            name: `边框`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '边框',
                info: '带有边框',
              },
            },
            type: 'PlayGround',
            codeText: P4CodeText,
            renderChildren: () => <P4 />,
          },
          {
            id: `p5`,
            name: `多组`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '多组',
                info: '一个组是一个Table，一般适用于每一组是不同列数',
              },
            },
            type: 'PlayGround',
            codeText: P5CodeText,
            renderChildren: () => <P5 />,
          },
          {
            id: `p6`,
            name: `基偶不同色`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '基偶不同色',
                info: '基偶不同色',
              },
            },
            type: 'PlayGround',
            codeText: P6CodeText,
            renderChildren: () => <P6 />,
          },
          {
            id: `p7`,
            name: `密度`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '密度',
                info: '三种不同的密度',
              },
            },
            type: 'PlayGround',
            codeText: P7CodeText,
            renderChildren: () => <P7 />,
          },
          {
            id: `p8`,
            name: `布局`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '布局',
                info: '两种不同布局',
              },
            },
            type: 'PlayGround',
            codeText: P8CodeText,
            renderChildren: () => <P8 />,
          },
          {
            id: `p9`,
            name: `配合antd的Form使用`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '配合antd的Form使用',
                info: '配合antd的Form使用',
              },
            },
            type: 'PlayGround',
            codeText: P9CodeText,
            renderChildren: () => <P9 />,
          },
          {
            id: `p10`,
            name: `隐藏和显示`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '隐藏和显示',
                info: '隐藏和显示',
              },
            },
            type: 'PlayGround',
            codeText: P10CodeText,
            renderChildren: () => <P10 />,
          },
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: 'TableGridLayout',
            data: [
              {
                name: 'renderGridSearchFormGroup',
                desc: '渲染TableGrodLayout',
                modifier: 'static',
                params: [
                  {
                    name: 'data',
                    desc: '分组数据',
                    type: 'IDataItem[]',
                    defaultVal: '[]',
                    required: '',
                  },
                  {
                    name: 'props',
                    desc: 'TableGridLayout配置信息',
                    type: `
                      Pick<
                        ITableGridLayoutProps,
                        Exclude<keyof ITableGridLayoutProps, 'className' | 'style' | 'data'>
                      >
                    `,
                    defaultVal: '{}',
                    required: '',
                  },
                ],
                returnType: 'React.Element',
                returnDesc: '',
              },
              {
                name: 'getRenderDetail',
                desc: '获取渲染细节',
                modifier: 'static',
                params: [
                  {
                    name: 'data',
                    desc: '分组数据',
                    type: 'IDataItem[]',
                    defaultVal: '[]',
                    required: '',
                  },
                  {
                    name: 'props',
                    desc: 'TableGridLayout配置信息',
                    type: `
                      Pick<
                        ITableGridLayoutProps,
                        Exclude<keyof ITableGridLayoutProps, 'className' | 'style' | 'data'>
                      >
                    `,
                    defaultVal: '{}',
                    required: '',
                  },
                ],
                returnType: (
                  <pre>
                    {`
  {
    // 总行数
    rowCount: number;
    // 渲染时候的布局
    layout: 'horizontal' | 'vertical';
    // 细节
    detail: Array<{
      // 组名称
      name: string;
      // 总行数
      rowCount: number;
      // 细节
      detail: GroupRenderDetail;
    }>;
  }
                      `}
                  </pre>
                ),
                returnDesc: '',
              },
            ],
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
                params: 'innerClassName',
                desc: 'table样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'innerStyle',
                desc: 'table样式表',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'bordered',
                desc: '是否有边框',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'layout',
                desc: '布局',
                type: 'horizontal | vertical',
                defaultVal: 'horizontal',
              },
              {
                params: 'density',
                desc: '密度',
                type: 'default | middle | small',
                defaultVal: 'default',
              },
              {
                params: 'parity',
                desc: '是否是奇偶数不同色',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'data',
                desc: '数据配置，一个数据表示一个表格',
                type: 'IDataItem[]',
                defaultVal: '[]',
              },
            ],
          },
          {
            border: true,
            title: 'IDataItem',
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
                params: 'name',
                desc: 'group的名字',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'width',
                desc: 'group的宽度',
                type: 'string | number',
                defaultVal: '100%',
              },
              {
                params: 'defaultLabelWidth',
                desc: '缺省的列宽度',
                type: 'number',
                defaultVal: '120',
              },
              {
                params: 'padding',
                desc: '列的padding',
                type: 'string',
                defaultVal: '0',
              },
              {
                params: 'colgroup',
                desc: '列宽度的设置',
                type: "(number | 'auto' | undefined)[]",
                defaultVal: '[]',
              },
              {
                params: 'columnCount',
                desc: '列数',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'data',
                desc: '数据',
                type: `
                  Array<{
                    key: string;
                    label: JSX.Element;
                    value: JSX.Element;
                    show: boolean;
                  }>
                `,
                defaultVal: '[]',
              },
            ],
          },
          {
            border: true,
            title: 'Label',
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
          {
            border: true,
            title: 'Value',
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
    </PlayGroundPage>
  );
};
