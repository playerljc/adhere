import React from 'react';

import { Space } from '@baifendian/adhere';

import PlayGroundPage, { Section, PropsSection, CodeBoxSection } from '@/lib/PlaygroundPage';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `横向`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '横向',
            info: '横向',
          },
        },
        codeText: `
  import React from 'react';
  import { Space } from '@baifendian/adhere';

  <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
    <a>编辑</a>
    <Space direction="horizontal" />
    <a>查看</a>
    <Space direction="horizontal" />
    <a>删除</a>
  </div>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
            <a>编辑</a>
            <Space direction="horizontal" />
            <a>查看</a>
            <Space direction="horizontal" />
            <a>删除</a>
          </div>
        ),
      },
      {
        id: `p2`,
        name: `纵向`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '纵向',
            info: '纵向',
          },
        },
        codeText: `
  import React from 'react';
  import { Space } from '@baifendian/adhere';

  <div>
    <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
    <Space direction="vertical" />
    <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
  </div>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div>
            <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
            <Space direction="vertical" />
            <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
          </div>
        ),
      },
      {
        id: `p3`,
        name: `间距`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '间距',
            info: '间距',
          },
        },
        codeText: `
  import React from 'react';
  import { Space } from '@baifendian/adhere';

  <div>
    <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
      <a>编辑</a>
      <Space direction="horizontal" size={10} />
      <a>查看</a>
      <Space direction="horizontal" size={10} />
      <a>删除</a>
    </div>

    <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
    <Space direction="vertical" size={10} />
    <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
  </div>
      `,
        type: 'PlayGround',
        theme: 'eclipse',
        renderChildren: () => (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
              <a>编辑</a>
              <Space direction="horizontal" size={10} />
              <a>查看</a>
              <Space direction="horizontal" size={10} />
              <a>删除</a>
            </div>

            <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
            <Space direction="vertical" size={10} />
            <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
          </div>
        ),
      },
      {
        id: `p4`,
        name: `SpaceGroup`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'SpaceGroup',
            info: 'SpaceGroup',
          },
        },
        codeText: `
  import React from 'react';
  import { Space } from '@baifendian/adhere';

  <div>
    <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
      <Space.Group direction="horizontal" >
        <a>编辑</a>
        <a>查看</a>
        <a>删除</a>
      </Space.Group>
    </div>

    <Space.Group direction="vertical">
      <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
      <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
    </Space.Group>
  </div>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
              <Space.Group direction="horizontal">
                <a>编辑</a>
                <a>查看</a>
                <a>删除</a>
              </Space.Group>
            </div>

            <Space.Group direction="vertical">
              <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
              <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
            </Space.Group>
          </div>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Space">
        <p>无侵入性的上下留白和左右留白</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'Space',
            data: [
              {
                params: 'direction',
                desc: '方向',
                type: "string - ['vertical' | 'horizontal']",
                defaultVal: 'vertical',
              },
              {
                params: 'size',
                desc: '宽度或这高度',
                type: 'string | number',
                defaultVal: '20',
              },
              {
                params: 'className',
                desc: '附加的样式',
                type: 'string',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'Space.Group',
            data: [
              {
                params: 'direction',
                desc: '方向',
                type: "string - ['vertical' | 'horizontal']",
                defaultVal: 'vertical',
              },
              {
                params: 'size',
                desc: '宽度或这高度',
                type: 'string | number',
                defaultVal: '20',
              },
              {
                params: 'className',
                desc: '附加的样式',
                type: 'string',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
