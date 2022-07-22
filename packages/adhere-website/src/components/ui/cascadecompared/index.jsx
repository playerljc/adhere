import React, { useRef, useState, useEffect } from 'react';
import { Button } from 'antd';
import { CascadeCompared, Space } from '@baifendian/adhere';

import PlayGroundPage, {
  Section,
  PropsSection,
  CodeBoxSection,
  FunctionPropsSection,
} from '@/lib/PlaygroundPage';

const columns = [];
columns.length = 10;
columns.fill(0);

const data = [];
data.length = 10;
data.fill(0);

function getIndicator() {
  return {
    columns: columns.map((t, i) => ({
      dataIndex: `column${i + 1}`,
      isFixed: i === 0,
      width: 120,
      render: () => <h2>{`指标${i + 1}`}</h2>,
    })),
    dataSource: {
      columns1: 1,
      columns2: 2,
      columns3: 3,
      columns4: 4,
      columns5: 5,
      columns6: 6,
      columns7: 7,
      columns8: 8,
      columns9: 9,
      columns10: 10,
    },
  };
}

function getMaster() {
  return data.map((t, i) => ({
    title: (
      <h2
        style={{ padding: '15px 0 15px 15px', margin: 0, borderBottom: '1px solid rgba(0,0,0,.1)' }}
      >{`header${i + 1}`}</h2>
    ),
    columns: columns.map((c, j) => ({
      dataIndex: `column${j + 1}`,
      isFixed: j === 0,
      width: 120,
      render: () => <h4>{`厂家指导价${j + 1}`}</h4>,
    })),
    dataSource: [
      {
        columns1: 1,
        columns2: 2,
        columns3: 3,
        columns4: 4,
        columns5: 5,
        columns6: 6,
        columns7: 7,
        columns8: 8,
        columns9: 9,
        columns10: 10,
      },
      {
        columns1: 1,
        columns2: 2,
        columns3: 3,
        columns4: 4,
        columns5: 5,
        columns6: 6,
        columns7: 7,
        columns8: 8,
        columns9: 9,
        columns10: 10,
      },
      {
        columns1: 1,
        columns2: 2,
        columns3: 3,
        columns4: 4,
        columns5: 5,
        columns6: 6,
        columns7: 7,
        columns8: 8,
        columns9: 9,
        columns10: 10,
      },
    ],
  }));
}

export default () => {
  const ref1 = useRef();

  const ref2 = useRef();

  const ref3 = useRef();

  const [data1, setData1] = useState(getMaster());

  useEffect(() => {
    ref1.current.scrollToByIndex(data1.length - 1);
  }, [data1]);

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
            name: `公共代码`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '公共代码',
                info: '下面例子公共的代码',
              },
            },
            codeText: `
  const columns = [];
  columns.length = 10;
  columns.fill(0);

  const data = [];
  data.length = 10;
  data.fill(0);

  function getIndicator() {
    return {
      columns: columns.map((t, i) => ({
        dataIndex: "column" + (i + 1),
        isFixed: i === 0,
        width: 120,
        render: () => <h2>{"指标" + (i + 1)}</h2>,
      })),
      dataSource: {
        columns1: 1,
        columns2: 2,
        columns3: 3,
        columns4: 4,
        columns5: 5,
        columns6: 6,
        columns7: 7,
        columns8: 8,
        columns9: 9,
        columns10: 10,
      },
    };
  }

  function getMaster() {
    return data.map((t, i) => ({
      title: (
        <h2
          style={{ padding: '15px 0 15px 15px', margin: 0, borderBottom: '1px solid rgba(0,0,0,.1)' }}
        >{"header" + (i + 1)}</h2>
      ),
      columns: columns.map((c, j) => ({
        dataIndex: "column" + (j + 1),
        isFixed: j === 0,
        width: 120,
        render: () => <h4>{"厂家指导价" + (j + 1)}</h4>,
      })),
      dataSource: [
        {
          columns1: 1,
          columns2: 2,
          columns3: 3,
          columns4: 4,
          columns5: 5,
          columns6: 6,
          columns7: 7,
          columns8: 8,
          columns9: 9,
          columns10: 10,
        },
        {
          columns1: 1,
          columns2: 2,
          columns3: 3,
          columns4: 4,
          columns5: 5,
          columns6: 6,
          columns7: 7,
          columns8: 8,
          columns9: 9,
          columns10: 10,
        },
        {
          columns1: 1,
          columns2: 2,
          columns3: 3,
          columns4: 4,
          columns5: 5,
          columns6: 6,
          columns7: 7,
          columns8: 8,
          columns9: 9,
          columns10: 10,
        },
      ],
    }));
  }
      `,
            type: 'PlayGround',
          },
          {
            id: `p2`,
            name: `基本使用`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本的级联操作',
              },
            },
            codeText: `
  import { CascadeCompared } from '@baifendian/adhere';

  <div style={{ width: 320, height: 548, border: '1px solid rgba(0,0,0,.1)' }}>
    <CascadeCompared indicator={getIndicator()} master={getMaster()} />
  </div>
      `,
            type: 'PlayGround',
            renderChildren: () => (
              <div style={{ width: 320, height: 548, border: '1px solid rgba(0,0,0,.1)' }}>
                <CascadeCompared indicator={getIndicator()} master={getMaster()} />
              </div>
            ),
          },
          {
            id: `p3`,
            name: `在底部插入`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '在底部插入',
                info: '在底部插入行',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { Button } from 'antd';
  import { CascadeCompared, Space } from '@baifendian/adhere';

  const [data1, setData1] = useState(getMaster());

  <Button
    type="primary"
    onClick={() => {
      // eslint-disable-next-line no-shadow
      setData1((data) => {
        return data.concat([
          {
            title: (
              <h2
                style={{
                  padding: '15px 0 15px 15px',
                  margin: 0,
                  borderBottom: '1px solid rgba(0,0,0,.1)',
                }}
              >{"header" + (data.length + 1)}</h2>
            ),
            columns: columns.map((c, j) => ({
              dataIndex: "column" + (j + 1),
              isFixed: j === 0,
              width: 120,
              render: () => <h4>{"厂家指导价" + (j + 1)}</h4>,
            })),
            dataSource: [
              {
                columns1: 1,
                columns2: 2,
                columns3: 3,
                columns4: 4,
                columns5: 5,
                columns6: 6,
                columns7: 7,
                columns8: 8,
                columns9: 9,
                columns10: 10,
              },
              {
                columns1: 1,
                columns2: 2,
                columns3: 3,
                columns4: 4,
                columns5: 5,
                columns6: 6,
                columns7: 7,
                columns8: 8,
                columns9: 9,
                columns10: 10,
              },
              {
                columns1: 1,
                columns2: 2,
                columns3: 3,
                columns4: 4,
                columns5: 5,
                columns6: 6,
                columns7: 7,
                columns8: 8,
                columns9: 9,
                columns10: 10,
              },
            ],
          },
        ]);
      });
    }}
  >
    插入
  </Button>

  <Space />

  <div style={{ width: 320, height: 548, border: '1px solid rgba(0,0,0,.1)' }}>
    <CascadeCompared ref={ref1} indicator={getIndicator()} master={data1} />
  </div>
      `,
            type: 'PlayGround',
            renderChildren: () => (
              <>
                <Button
                  type="primary"
                  onClick={() => {
                    // eslint-disable-next-line no-shadow
                    setData1((data) => {
                      return data.concat([
                        {
                          title: (
                            <h2
                              style={{
                                padding: '15px 0 15px 15px',
                                margin: 0,
                                borderBottom: '1px solid rgba(0,0,0,.1)',
                              }}
                            >{`header${data.length + 1}`}</h2>
                          ),
                          columns: columns.map((c, j) => ({
                            dataIndex: `column${j + 1}`,
                            isFixed: j === 0,
                            width: 120,
                            render: () => <h4>{`厂家指导价${j + 1}`}</h4>,
                          })),
                          dataSource: [
                            {
                              columns1: 1,
                              columns2: 2,
                              columns3: 3,
                              columns4: 4,
                              columns5: 5,
                              columns6: 6,
                              columns7: 7,
                              columns8: 8,
                              columns9: 9,
                              columns10: 10,
                            },
                            {
                              columns1: 1,
                              columns2: 2,
                              columns3: 3,
                              columns4: 4,
                              columns5: 5,
                              columns6: 6,
                              columns7: 7,
                              columns8: 8,
                              columns9: 9,
                              columns10: 10,
                            },
                            {
                              columns1: 1,
                              columns2: 2,
                              columns3: 3,
                              columns4: 4,
                              columns5: 5,
                              columns6: 6,
                              columns7: 7,
                              columns8: 8,
                              columns9: 9,
                              columns10: 10,
                            },
                          ],
                        },
                      ]);
                    });
                  }}
                >
                  插入
                </Button>

                <Space />

                <div style={{ width: 320, height: 548, border: '1px solid rgba(0,0,0,.1)' }}>
                  <CascadeCompared ref={ref1} indicator={getIndicator()} master={data1} />
                </div>
              </>
            ),
          },
          {
            id: `p4`,
            name: `通过索引滚动`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '通过索引滚动',
                info: '通过索引滚动到顶部',
              },
            },
            codeText: `
  import React, { useRef } from 'react';
  import { Button } from 'antd';
  import { CascadeCompared, Space } from '@baifendian/adhere';

  const ref2 = useRef();

  <Space.Group direction="horizontal">
    <Button
      type="primary"
      onClick={() => {
        ref2.current.scrollToByIndex(9, 0);
      }}
    >
      滚动到底部(无动画)
    </Button>

    <Button
      onClick={() => {
        ref2.current.scrollToByIndex(9);
      }}
    >
      滚动到底部(有动画)
    </Button>

    <Button
      onClick={() => {
        ref2.current.scrollToByIndex(0);
      }}
    >
      回到顶部
    </Button>
  </Space.Group>

  <Space />

  <div style={{ width: 320, height: 548, border: '1px solid rgba(0,0,0,.1)' }}>
    <CascadeCompared ref={ref2} indicator={getIndicator()} master={getMaster()} />
  </div>
      `,
            type: 'PlayGround',
            renderChildren: () => (
              <>
                <Space.Group direction="horizontal">
                  <Button
                    type="primary"
                    onClick={() => {
                      ref2.current.scrollToByIndex(9, 0);
                    }}
                  >
                    滚动到底部(无动画)
                  </Button>

                  <Button
                    onClick={() => {
                      ref2.current.scrollToByIndex(9);
                    }}
                  >
                    滚动到底部(有动画)
                  </Button>

                  <Button
                    onClick={() => {
                      ref2.current.scrollToByIndex(0);
                    }}
                  >
                    回到顶部
                  </Button>
                </Space.Group>

                <Space />

                <div style={{ width: 320, height: 548, border: '1px solid rgba(0,0,0,.1)' }}>
                  <CascadeCompared ref={ref2} indicator={getIndicator()} master={getMaster()} />
                </div>
              </>
            ),
          },
          {
            id: `p5`,
            name: `滚动到指定列`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '滚动到指定列',
                info: '滚动到指定列',
              },
            },
            codeText: `
  import React, { useRef } from 'react';
  import { Button } from 'antd';
  import { CascadeCompared, Space } from '@baifendian/adhere';

  const ref3 = useRef();

  <Space.Group direction="horizontal">
    <Button
      type="primary"
      onClick={() => {
        ref3.current.scrollToByColumn(1);
      }}
    >
      滚动到第一列
    </Button>

    <Button
      onClick={() => {
        ref3.current.scrollToByColumn(9);
      }}
    >
      滚动到最后一列(有动画)
    </Button>
  </Space.Group>

  <Space />

  <div style={{ width: 320, height: 548, border: '1px solid rgba(0,0,0,.1)' }}>
    <CascadeCompared ref={ref3} indicator={getIndicator()} master={getMaster()} />
  </div>
      `,
            type: 'PlayGround',
            renderChildren: () => (
              <>
                <Space.Group direction="horizontal">
                  <Button
                    type="primary"
                    onClick={() => {
                      ref3.current.scrollToByColumn(1);
                    }}
                  >
                    滚动到第一列
                  </Button>

                  <Button
                    onClick={() => {
                      ref3.current.scrollToByColumn(9);
                    }}
                  >
                    滚动到最后一列(有动画)
                  </Button>
                </Space.Group>

                <Space />

                <div style={{ width: 320, height: 548, border: '1px solid rgba(0,0,0,.1)' }}>
                  <CascadeCompared ref={ref3} indicator={getIndicator()} master={getMaster()} />
                </div>
              </>
            ),
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
