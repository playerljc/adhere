import P1CodeText from '!!raw-loader!./examples/p1';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import P1 from './examples/p1';

// const dataSource = [
//   {
//     key: '1',
//     name: '胡彦斌',
//     age: 32,
//     address: '西湖区湖底公园1号',
//   },
//   {
//     key: '2',
//     name: '胡彦祖',
//     age: 42,
//     address: '西湖区湖底公园1号',
//   },
// ];

// const columns = [
//   {
//     title: '姓名',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: '年龄',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: '住址',
//     dataIndex: 'address',
//     key: 'address',
//   },
// ];

export default () => {
  // const ref = useRef();

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
      /*{
        id: `p2`,
        name: `传递不同的元素`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '传递不同的元素',
            info: '传递不同的元素',
          },
        },
        codeText: `
  import React, { useRef } from 'react';
  import { Table, Button } from 'antd';
  import { AdapterScreen } from '@baifendian/adhere';

  const ref = useRef();

  <div ref={ref}>
    <Button
      type="primary"
      onClick={() => {
        const handler = AdapterScreen(ref.current);
      }}
    >
      控制表格元素的缩放
    </Button>
    <Table dataSource={dataSource} columns={columns} />
  </div>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div ref={ref}>
            <Button
              type="primary"
              onClick={() => {
                const handler = AdapterScreen(ref.current);
              }}
            >
              控制表格元素的缩放
            </Button>
            <Table dataSource={dataSource} columns={columns} />
          </div>
        ),
      },*/
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="AdapterScreen">
        <p>对屏幕的缩放进行适配的操作</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '方法',
            data: [
              {
                name: 'AdapterScreen',
                desc: '对一个元素进行缩放的管理',
                modifier: 'static',
                params: [
                  {
                    name: 'el',
                    desc: '控制缩放的元素',
                    type: 'HtmlElement',
                    defaultVal: 'window.document.body',
                    required: '',
                  },
                ],
                returnType: 'Function',
                returnDesc: '注销事件的方法',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
