import { Button, DatePicker, Form, Input, Radio } from 'antd';
import React, { useState } from 'react';

import { ConditionalRender, Resource, Space, TableGridLayout } from '@baifendian/adhere';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

const { Label, Value } = TableGridLayout;

export default () => {
  const [density, setDensity] = useState('default');
  const [layout, setLayout] = useState('horizontal');

  const [form] = Form.useForm();

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
            codeText: `
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { TableGridLayout } from '@baifendian/adhere';

  const { Label, Value } = TableGridLayout;

  ReactDOM.render(
    <div>
      <TableGridLayout
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 3,
            colgroup: [, 'auto', , 'auto', , 'auto'],
            data: [
              {
                key: 'UserName',
                label: <Label>UserName：</Label>,
                value: <Value>Zhou Maomao</Value>,
              },
              {
                key: 'Telephone',
                label: <Label>Telephone：</Label>,
                value: <Value>1810000000</Value>,
              },
              {
                key: 'Live',
                label: <Label>Live：</Label>,
                value: <Value>Hangzhou, Zhejiang</Value>,
              },
              {
                key: 'Remark',
                label: <Label>Remark：</Label>,
                value: <Value>empty</Value>,
              },
              {
                key: 'Address',
                label: <Label valign="top">Address：</Label>,
                value: (
                  <Value>
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                  </Value>
                ),
              },
            ],
          },
        ]}
      />
    </div>,
    document.getElementById('app')
  )
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <div>
                <TableGridLayout
                  data={[
                    {
                      name: 'g1',
                      width: '100%',
                      columnCount: 3,
                      colgroup: [, 'auto', , 'auto', , 'auto'],
                      data: [
                        {
                          key: 'UserName',
                          label: <Label>UserName：</Label>,
                          value: <Value>Zhou Maomao</Value>,
                        },
                        {
                          key: 'Telephone',
                          label: <Label>Telephone：</Label>,
                          value: <Value>1810000000</Value>,
                        },
                        {
                          key: 'Live',
                          label: <Label>Live：</Label>,
                          value: <Value>Hangzhou, Zhejiang</Value>,
                        },
                        {
                          key: 'Remark',
                          label: <Label>Remark：</Label>,
                          value: <Value>empty</Value>,
                        },
                        {
                          key: 'Address',
                          label: <Label valign="top">Address：</Label>,
                          value: (
                            <Value>
                              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                            </Value>
                          ),
                        },
                      ],
                    },
                  ]}
                />
              </div>
            ),
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
            codeText: `
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { TableGridLayout } from '@baifendian/adhere';

  const { Label, Value } = TableGridLayout;

  ReactDOM.render(
    <div>
      <TableGridLayout
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 3,
            defaultLabelWidth: 150,
            colgroup: [, 'auto', , 'auto', , 'auto'],
            data: [
              {
                key: 'UserName',
                label: <Label>UserName：</Label>,
                value: <Value>Zhou Maomao</Value>,
              },
              {
                key: 'Telephone',
                label: <Label>Telephone：</Label>,
                value: <Value>1810000000</Value>,
              },
              {
                key: 'Live',
                label: <Label>Live：</Label>,
                value: <Value>Hangzhou, Zhejiang</Value>,
              },
              {
                key: 'Remark',
                label: <Label>Remark：</Label>,
                value: <Value>empty</Value>,
              },
              {
                key: 'Address',
                label: <Label valign="top">Address：</Label>,
                value: (
                  <Value>
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                  </Value>
                ),
              },
            ],
          },
        ]}
      />
    </div>,
    document.getElementById('app')
  )
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <div>
                <TableGridLayout
                  data={[
                    {
                      name: 'g1',
                      width: '100%',
                      columnCount: 3,
                      defaultLabelWidth: 150,
                      colgroup: [, 'auto', , 'auto', , 'auto'],
                      data: [
                        {
                          key: 'UserName',
                          label: <Label>UserName：</Label>,
                          value: <Value>Zhou Maomao</Value>,
                        },
                        {
                          key: 'Telephone',
                          label: <Label>Telephone：</Label>,
                          value: <Value>1810000000</Value>,
                        },
                        {
                          key: 'Live',
                          label: <Label>Live：</Label>,
                          value: <Value>Hangzhou, Zhejiang</Value>,
                        },
                        {
                          key: 'Remark',
                          label: <Label>Remark：</Label>,
                          value: <Value>empty</Value>,
                        },
                        {
                          key: 'Address',
                          label: <Label valign="top">Address：</Label>,
                          value: (
                            <Value>
                              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                            </Value>
                          ),
                        },
                      ],
                    },
                  ]}
                />
              </div>
            ),
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
            codeText: `
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { TableGridLayout } from '@baifendian/adhere';

  const { Label, Value } = TableGridLayout;

  ReactDOM.render(
    <div>
      <TableGridLayout
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 3,
            colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
            data: [
              {
                key: 'UserName',
                label: <Label>UserName：</Label>,
                value: <Value>Zhou Maomao</Value>,
              },
              {
                key: 'Telephone',
                label: <Label>Telephone：</Label>,
                value: <Value>1810000000</Value>,
              },
              {
                key: 'Live',
                label: <Label>Live：</Label>,
                value: <Value>Hangzhou, Zhejiang</Value>,
              },
              {
                key: 'Remark',
                label: <Label>Remark：</Label>,
                value: <Value>empty</Value>,
              },
              {
                key: 'Address',
                label: <Label valign="top">Address：</Label>,
                value: (
                  <Value>
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                  </Value>
                ),
              },
            ],
          },
        ]}
      />
    </div>,
    document.getElementById('app')
  )
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <div>
                <TableGridLayout
                  data={[
                    {
                      name: 'g1',
                      width: '100%',
                      columnCount: 3,
                      colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
                      data: [
                        {
                          key: 'UserName',
                          label: <Label>UserName：</Label>,
                          value: <Value>Zhou Maomao</Value>,
                        },
                        {
                          key: 'Telephone',
                          label: <Label>Telephone：</Label>,
                          value: <Value>1810000000</Value>,
                        },
                        {
                          key: 'Live',
                          label: <Label>Live：</Label>,
                          value: <Value>Hangzhou, Zhejiang</Value>,
                        },
                        {
                          key: 'Remark',
                          label: <Label>Remark：</Label>,
                          value: <Value>empty</Value>,
                        },
                        {
                          key: 'Address',
                          label: <Label valign="top">Address：</Label>,
                          value: (
                            <Value>
                              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                            </Value>
                          ),
                        },
                      ],
                    },
                  ]}
                />
              </div>
            ),
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
            codeText: `
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { TableGridLayout } from '@baifendian/adhere';

  const { Label, Value } = TableGridLayout;

  ReactDOM.render(
    <div>
      <TableGridLayout
        bordered
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 3,
            colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
            data: [
              {
                key: 'UserName',
                label: <Label>UserName：</Label>,
                value: <Value>Zhou Maomao</Value>,
              },
              {
                key: 'Telephone',
                label: <Label>Telephone：</Label>,
                value: <Value>1810000000</Value>,
              },
              {
                key: 'Live',
                label: <Label>Live：</Label>,
                value: <Value>Hangzhou, Zhejiang</Value>,
              },
              {
                key: 'Remark',
                label: <Label>Remark：</Label>,
                value: <Value>empty</Value>,
              },
              {
                key: 'Address',
                label: <Label valign="top">Address：</Label>,
                value: (
                  <Value colSpan={3}>
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                  </Value>
                ),
              },
            ],
          },
        ]}
      />
    </div>,
    document.getElementById('app')
  )
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <div>
                <TableGridLayout
                  bordered
                  data={[
                    {
                      name: 'g1',
                      width: '100%',
                      columnCount: 3,
                      colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
                      data: [
                        {
                          key: 'UserName',
                          label: <Label>UserName：</Label>,
                          value: <Value>Zhou Maomao</Value>,
                        },
                        {
                          key: 'Telephone',
                          label: <Label>Telephone：</Label>,
                          value: <Value>1810000000</Value>,
                        },
                        {
                          key: 'Live',
                          label: <Label>Live：</Label>,
                          value: <Value>Hangzhou, Zhejiang</Value>,
                        },
                        {
                          key: 'Remark',
                          label: <Label>Remark：</Label>,
                          value: <Value>empty</Value>,
                        },
                        {
                          key: 'Address',
                          label: <Label valign="top">Address：</Label>,
                          value: (
                            <Value colSpan={3}>
                              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                            </Value>
                          ),
                        },
                      ],
                    },
                  ]}
                />
              </div>
            ),
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
            codeText: `
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { TableGridLayout } from '@baifendian/adhere';

  const { Label, Value } = TableGridLayout;

  ReactDOM.render(
    <div>
      <TableGridLayout
        bordered
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 3,
            colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
            data: [
              {
                key: 'UserName',
                label: <Label>UserName：</Label>,
                value: <Value>Zhou Maomao</Value>,
              },
              {
                key: 'Telephone',
                label: <Label>Telephone：</Label>,
                value: <Value>1810000000</Value>,
              },
              {
                key: 'Live',
                label: <Label>Live：</Label>,
                value: <Value>Hangzhou, Zhejiang</Value>,
              },
              {
                key: 'Remark',
                label: <Label>Remark：</Label>,
                value: <Value>empty</Value>,
              },
              {
                key: 'Address',
                label: <Label valign="top">Address：</Label>,
                value: (
                  <Value colSpan={3}>
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                  </Value>
                ),
              },
            ],
          },
          {
            name: 'g1',
            width: '100%',
            columnCount: 2,
            colgroup: [120, 'auto', 150, 'auto'],
            data: [
              {
                key: 'UserName',
                label: <Label>UserName：</Label>,
                value: <Value>Zhou Maomao</Value>,
              },
              {
                key: 'Telephone',
                label: <Label>Telephone：</Label>,
                value: <Value>1810000000</Value>,
              },
              {
                key: 'Live',
                label: <Label>Live：</Label>,
                value: <Value>Hangzhou, Zhejiang</Value>,
              },
              {
                key: 'Remark',
                label: <Label>Remark：</Label>,
                value: <Value>empty</Value>,
              },
            ],
          },
        ]}
      />
    </div>,
    document.getElementById('app')
  )
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <div>
                <TableGridLayout
                  bordered
                  data={[
                    {
                      name: 'g1',
                      width: '100%',
                      columnCount: 3,
                      colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
                      data: [
                        {
                          key: 'UserName',
                          label: <Label>UserName：</Label>,
                          value: <Value>Zhou Maomao</Value>,
                        },
                        {
                          key: 'Telephone',
                          label: <Label>Telephone：</Label>,
                          value: <Value>1810000000</Value>,
                        },
                        {
                          key: 'Live',
                          label: <Label>Live：</Label>,
                          value: <Value>Hangzhou, Zhejiang</Value>,
                        },
                        {
                          key: 'Remark',
                          label: <Label>Remark：</Label>,
                          value: <Value>empty</Value>,
                        },
                        {
                          key: 'Address',
                          label: <Label valign="top">Address：</Label>,
                          value: (
                            <Value colSpan={3}>
                              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                            </Value>
                          ),
                        },
                      ],
                    },
                    {
                      name: 'g1',
                      width: '100%',
                      columnCount: 2,
                      colgroup: [120, 'auto', 150, 'auto'],
                      data: [
                        {
                          key: 'UserName',
                          label: <Label>UserName：</Label>,
                          value: <Value>Zhou Maomao</Value>,
                        },
                        {
                          key: 'Telephone',
                          label: <Label>Telephone：</Label>,
                          value: <Value>1810000000</Value>,
                        },
                        {
                          key: 'Live',
                          label: <Label>Live：</Label>,
                          value: <Value>Hangzhou, Zhejiang</Value>,
                        },
                        {
                          key: 'Remark',
                          label: <Label>Remark：</Label>,
                          value: <Value>empty</Value>,
                        },
                      ],
                    },
                  ]}
                />
              </div>
            ),
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
            codeText: `
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { TableGridLayout } from '@baifendian/adhere';

  const { Label, Value } = TableGridLayout;

  ReactDOM.render(
    <div>
      <TableGridLayout
        bordered
        parity
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 3,
            colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
            data: [
              {
                key: 'UserName',
                label: <Label>UserName：</Label>,
                value: <Value>Zhou Maomao</Value>,
              },
              {
                key: 'Telephone',
                label: <Label>Telephone：</Label>,
                value: <Value>1810000000</Value>,
              },
              {
                key: 'Live',
                label: <Label>Live：</Label>,
                value: <Value>Hangzhou, Zhejiang</Value>,
              },
              {
                key: 'Remark',
                label: <Label>Remark：</Label>,
                value: <Value>empty</Value>,
              },
              {
                key: 'Address',
                label: <Label valign="top">Address：</Label>,
                value: (
                  <Value colSpan={3}>
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                  </Value>
                ),
              },
            ],
          },
        ]}
      />
    </div>,
    document.getElementById('app')
  )
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <div>
                <TableGridLayout
                  bordered
                  parity
                  data={[
                    {
                      name: 'g1',
                      width: '100%',
                      columnCount: 3,
                      colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
                      data: [
                        {
                          key: 'UserName',
                          label: <Label>UserName：</Label>,
                          value: <Value>Zhou Maomao</Value>,
                        },
                        {
                          key: 'Telephone',
                          label: <Label>Telephone：</Label>,
                          value: <Value>1810000000</Value>,
                        },
                        {
                          key: 'Live',
                          label: <Label>Live：</Label>,
                          value: <Value>Hangzhou, Zhejiang</Value>,
                        },
                        {
                          key: 'Remark',
                          label: <Label>Remark：</Label>,
                          value: <Value>empty</Value>,
                        },
                        {
                          key: 'Address',
                          label: <Label valign="top">Address：</Label>,
                          value: (
                            <Value colSpan={3}>
                              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                            </Value>
                          ),
                        },
                      ],
                    },
                  ]}
                />
              </div>
            ),
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
            codeText: `
  import React,{ useState } from 'react';
  import ReactDOM from 'react-dom';
  import { Radio } from 'antd';
  import { TableGridLayout,Space } from '@baifendian/adhere';

  const { Label, Value } = TableGridLayout;

  const [density, setDensity] = useState('default');

  ReactDOM.render(
    <Space.Group>
      <div>
        <Radio.Group
          onChange={(e) => {
            setDensity(e.target.value);
          }}
          value={density}
          options={[
            { label: 'default', value: 'default' },
            { label: 'middle', value: 'middle' },
            { label: 'small', value: 'small' },
          ]}
        />
      </div>
      <TableGridLayout
        bordered
        parity
        density={density}
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 3,
            colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
            data: [
              {
                key: 'UserName',
                label: <Label>UserName：</Label>,
                value: <Value>Zhou Maomao</Value>,
              },
              {
                key: 'Telephone',
                label: <Label>Telephone：</Label>,
                value: <Value>1810000000</Value>,
              },
              {
                key: 'Live',
                label: <Label>Live：</Label>,
                value: <Value>Hangzhou, Zhejiang</Value>,
              },
              {
                key: 'Remark',
                label: <Label>Remark：</Label>,
                value: <Value>empty</Value>,
              },
              {
                key: 'Address',
                label: <Label valign="top">Address：</Label>,
                value: (
                  <Value colSpan={3}>
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                  </Value>
                ),
              },
            ],
          },
        ]}
      />
    </Space.Group>,
    document.getElementById('app')
  )
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <Space.Group>
                <div>
                  <Radio.Group
                    onChange={(e) => {
                      setDensity(e.target.value);
                    }}
                    value={density}
                    options={[
                      { label: 'default', value: 'default' },
                      { label: 'middle', value: 'middle' },
                      { label: 'small', value: 'small' },
                    ]}
                  />
                </div>
                <TableGridLayout
                  bordered
                  parity
                  density={density}
                  data={[
                    {
                      name: 'g1',
                      width: '100%',
                      columnCount: 3,
                      colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
                      data: [
                        {
                          key: 'UserName',
                          label: <Label>UserName：</Label>,
                          value: <Value>Zhou Maomao</Value>,
                        },
                        {
                          key: 'Telephone',
                          label: <Label>Telephone：</Label>,
                          value: <Value>1810000000</Value>,
                        },
                        {
                          key: 'Live',
                          label: <Label>Live：</Label>,
                          value: <Value>Hangzhou, Zhejiang</Value>,
                        },
                        {
                          key: 'Remark',
                          label: <Label>Remark：</Label>,
                          value: <Value>empty</Value>,
                        },
                        {
                          key: 'Address',
                          label: <Label valign="top">Address：</Label>,
                          value: (
                            <Value colSpan={3}>
                              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                            </Value>
                          ),
                        },
                      ],
                    },
                  ]}
                />
              </Space.Group>
            ),
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
            codeText: `
  import React,{ useState } from 'react';
  import ReactDOM from 'react-dom';
  import { Radio } from 'antd';
  import { TableGridLayout,Space,ConditionalRender } from '@baifendian/adhere';

  const { Label, Value } = TableGridLayout;

  const [layout, setLayout] = useState('horizontal');

  ReactDOM.render(
    <Space.Group>
      <div>
        <Radio.Group
          onChange={(e) => {
            setLayout(e.target.value);
          }}
          value={layout}
          options={[
            { label: 'horizontal', value: 'horizontal' },
            { label: 'vertical', value: 'vertical' },
          ]}
        />
      </div>
      <ConditionalRender
        conditional={layout === 'vertical'}
        noMatch={() => (
          <TableGridLayout
            bordered
            parity
            data={[
              {
                name: 'g1',
                width: '100%',
                columnCount: 3,
                colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
                data: [
                  {
                    key: 'UserName',
                    label: <Label>UserName：</Label>,
                    value: <Value>Zhou Maomao</Value>,
                  },
                  {
                    key: 'Telephone',
                    label: <Label>Telephone：</Label>,
                    value: <Value>1810000000</Value>,
                  },
                  {
                    key: 'Live',
                    label: <Label>Live：</Label>,
                    value: <Value>Hangzhou, Zhejiang</Value>,
                  },
                  {
                    key: 'Remark',
                    label: <Label>Remark：</Label>,
                    value: <Value>empty</Value>,
                  },
                  {
                    key: 'Address',
                    label: <Label valign="top">Address：</Label>,
                    value: (
                      <Value colSpan={3}>
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                      </Value>
                    ),
                  },
                ],
              },
            ]}
          />
        )}
      >
        {() => (
          <TableGridLayout
            bordered
            parity
            layout="vertical"
            data={[
              {
                name: 'g1',
                width: '100%',
                columnCount: 3,
                colgroup: ['auto', 'auto', 'auto'],
                data: [
                  {
                    key: 'UserName',
                    label: <Label >UserName：</Label>,
                    value: <Value>Zhou Maomao</Value>,
                  },
                  {
                    key: 'Telephone',
                    label: <Label >Telephone：</Label>,
                    value: <Value>1810000000</Value>,
                  },
                  {
                    key: 'Live',
                    label: <Label >Live：</Label>,
                    value: <Value>Hangzhou, Zhejiang</Value>,
                  },
                  {
                    key: 'Remark',
                    label: <Label >Remark：</Label>,
                    value: <Value>empty</Value>,
                  },
                  {
                    key: 'Address',
                    label: (
                      <Label  colSpan={2} valign="top">
                        Address：
                      </Label>
                    ),
                    value: (
                      <Value colSpan={2}>
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                      </Value>
                    ),
                  },
                ],
              },
            ]}
          />
        )}
      </ConditionalRender>
    </Space.Group>,
    document.getElementById('app')
  )
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <Space.Group>
                <div>
                  <Radio.Group
                    onChange={(e) => {
                      setLayout(e.target.value);
                    }}
                    value={layout}
                    options={[
                      { label: 'horizontal', value: 'horizontal' },
                      { label: 'vertical', value: 'vertical' },
                    ]}
                  />
                </div>
                <ConditionalRender
                  conditional={layout === 'vertical'}
                  noMatch={() => (
                    <TableGridLayout
                      bordered
                      parity
                      data={[
                        {
                          name: 'g1',
                          width: '100%',
                          columnCount: 3,
                          colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
                          data: [
                            {
                              key: 'UserName',
                              label: <Label>UserName：</Label>,
                              value: <Value>Zhou Maomao</Value>,
                            },
                            {
                              key: 'Telephone',
                              label: <Label>Telephone：</Label>,
                              value: <Value>1810000000</Value>,
                            },
                            {
                              key: 'Live',
                              label: <Label>Live：</Label>,
                              value: <Value>Hangzhou, Zhejiang</Value>,
                            },
                            {
                              key: 'Remark',
                              label: <Label>Remark：</Label>,
                              value: <Value>empty</Value>,
                            },
                            {
                              key: 'Address',
                              label: <Label valign="top">Address：</Label>,
                              value: (
                                <Value colSpan={3}>
                                  No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                                </Value>
                              ),
                            },
                          ],
                        },
                      ]}
                    />
                  )}
                >
                  {() => (
                    <TableGridLayout
                      bordered
                      parity
                      layout="vertical"
                      data={[
                        {
                          name: 'g1',
                          width: '100%',
                          columnCount: 3,
                          colgroup: ['auto', 'auto', 'auto'],
                          data: [
                            {
                              key: 'UserName',
                              label: <Label>UserName：</Label>,
                              value: <Value>Zhou Maomao</Value>,
                            },
                            {
                              key: 'Telephone',
                              label: <Label>Telephone：</Label>,
                              value: <Value>1810000000</Value>,
                            },
                            {
                              key: 'Live',
                              label: <Label>Live：</Label>,
                              value: <Value>Hangzhou, Zhejiang</Value>,
                            },
                            {
                              key: 'Remark',
                              label: <Label>Remark：</Label>,
                              value: <Value>empty</Value>,
                            },
                            {
                              key: 'Address',
                              label: (
                                <Label colSpan={2} valign="top">
                                  Address：
                                </Label>
                              ),
                              value: (
                                <Value colSpan={2}>
                                  No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                                </Value>
                              ),
                            },
                          ],
                        },
                      ]}
                    />
                  )}
                </ConditionalRender>
              </Space.Group>
            ),
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
            codeText: `
  import React,{ useRef } from 'react';
  import ReactDOM from 'react-dom';
  import { Radio,Form,Button } from 'antd';
  import { TableGridLayout,Space} from '@baifendian/adhere';

  const { Label, Value } = TableGridLayout;

  const formRef = useRef();

  ReactDOM.render(
    <Space.Group>
      <div>
        <Button
          type="primary"
          onClick={() => {
            formRef.current.validateFields().then((values) => {
              alert(JSON.stringify(values));
            });
          }}
        >
          提交
        </Button>
      </div>
      <Form ref={formRef}>
        <TableGridLayout
          innerStyle={{ padding: '0 0 20px 0' }}
          // bordered
          // parity
          // density="middle"
          data={[
            {
              name: 'g1',
              width: '100%',
              columnCount: 4,
              colgroup: [135, 'auto', 130, 'auto', 90, 150, , 'auto'],
              data: [
                {
                  key: 'UserName',
                  require: true,
                  label: <Label>UserName：</Label>,
                  value: (
                    <Value>
                      <Form.Item
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: '请输入姓名',
                          },
                          Resource.Dict.value.FormInputStringRule.value,
                        ]}
                      >
                        <Input placeholder="username" />
                      </Form.Item>
                    </Value>
                  ),
                },
                {
                  key: 'Telephone',
                  require: true,
                  label: <Label>Telephone：</Label>,
                  value: (
                    <Value>
                      <Form.Item
                        name="Telephone"
                        rules={[
                          {
                            required: true,
                            message: '请输入姓名',
                          },
                          Resource.Dict.value.FormInputStringRule.value,
                        ]}
                      >
                        <Input placeholder="Telephone" />
                      </Form.Item>
                    </Value>
                  ),
                },
                {
                  key: 'Sex',
                  require: true,
                  label: <Label>Sex：</Label>,
                  value: (
                    <Value>
                      <Form.Item
                        name="Sex"
                        rules={[
                          {
                            required: true,
                            message: '请选择性别',
                          },
                        ]}
                      >
                        <Radio.Group
                          options={[
                            { label: '男', value: 1 },
                            { label: '女', value: 0 },
                          ]}
                        />
                      </Form.Item>
                    </Value>
                  ),
                },
                {
                  key: 'Birthday',
                  require: true,
                  label: <Label>Birthday：</Label>,
                  value: (
                    <Value>
                      <Form.Item
                        name="Birthday"
                        rules={[
                          {
                            required: true,
                            message: '请选择出生年月',
                          },
                        ]}
                      >
                        <DatePicker />
                      </Form.Item>
                    </Value>
                  ),
                },
                {
                  key: 'Address',
                  require: true,
                  label: <Label valign="top">Address：</Label>,
                  value: (
                    <Value colSpan={7}>
                      <Form.Item
                        name="Address"
                        rules={[
                          {
                            required: true,
                            message: '请输入地址',
                          },
                        ]}
                      >
                        <Input.TextArea />
                      </Form.Item>
                    </Value>
                  ),
                },
              ],
            },
          ]}
        />
      </Form>
    </Space.Group>,
    document.getElementById('app')
  )
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <Space.Group>
                <div>
                  <Button
                    type="primary"
                    onClick={() => {
                      form
                        .validateFields()
                        .then((values) => {
                          alert(JSON.stringify(values));
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    提交
                  </Button>
                </div>
                <Form form={form}>
                  <TableGridLayout
                    innerStyle={{ padding: '0 0 20px 0' }}
                    // bordered
                    // parity
                    // density="middle"
                    data={[
                      {
                        name: 'g1',
                        width: '100%',
                        columnCount: 4,
                        colgroup: [135, 'auto', 130, 'auto', 90, 150, , 'auto'],
                        data: [
                          {
                            key: 'UserName',
                            require: true,
                            label: <Label>UserName：</Label>,
                            value: (
                              <Value>
                                <Form.Item
                                  name="username"
                                  rules={[
                                    {
                                      required: true,
                                      message: '请输入姓名',
                                    },
                                    Resource.Dict.value.FormInputStringRule.value,
                                  ]}
                                >
                                  <Input placeholder="username" />
                                </Form.Item>
                              </Value>
                            ),
                          },
                          {
                            key: 'Telephone',
                            require: true,
                            label: <Label>Telephone：</Label>,
                            value: (
                              <Value>
                                <Form.Item
                                  name="Telephone"
                                  rules={[
                                    {
                                      required: true,
                                      message: '请输入姓名',
                                    },
                                    Resource.Dict.value.FormInputStringRule.value,
                                  ]}
                                >
                                  <Input placeholder="Telephone" />
                                </Form.Item>
                              </Value>
                            ),
                          },
                          {
                            key: 'Sex',
                            require: true,
                            label: <Label>Sex：</Label>,
                            value: (
                              <Value>
                                <Form.Item
                                  name="Sex"
                                  rules={[
                                    {
                                      required: true,
                                      message: '请选择性别',
                                    },
                                  ]}
                                >
                                  <Radio.Group
                                    options={[
                                      { label: '男', value: 1 },
                                      { label: '女', value: 0 },
                                    ]}
                                  />
                                </Form.Item>
                              </Value>
                            ),
                          },
                          {
                            key: 'Birthday',
                            require: true,
                            label: <Label>Birthday：</Label>,
                            value: (
                              <Value>
                                <Form.Item
                                  name="Birthday"
                                  rules={[
                                    {
                                      required: true,
                                      message: '请选择出生年月',
                                    },
                                  ]}
                                >
                                  <DatePicker />
                                </Form.Item>
                              </Value>
                            ),
                          },
                          {
                            key: 'Address',
                            require: true,
                            label: <Label valign="top">Address：</Label>,
                            value: (
                              <Value colSpan={7}>
                                <Form.Item
                                  name="Address"
                                  rules={[
                                    {
                                      required: true,
                                      message: '请输入地址',
                                    },
                                  ]}
                                >
                                  <Input.TextArea />
                                </Form.Item>
                              </Value>
                            ),
                          },
                        ],
                      },
                    ]}
                  />
                </Form>
              </Space.Group>
            ),
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
