import React from 'react';

import { Split } from '@baifendian/adhere';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

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
  import { Split } from '@baifendian/adhere';

  <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
    <a>编辑</a>
    <Split direction="horizontal" />
    <a>查看</a>
    <Split direction="horizontal" />
    <a>删除</a>
  </div>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
            <a>编辑</a>
            <Split direction="horizontal" />
            <a>查看</a>
            <Split direction="horizontal" />
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
  import { Split } from '@baifendian/adhere';

  <div>
    <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
    <Split direction="vertical" />
    <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
  </div>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div>
            <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
            <Split direction="vertical" />
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
  import { Split } from '@baifendian/adhere';

  <div>
    <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
      <a>编辑</a>
      <Split direction="horizontal" size={10} />
      <a>查看</a>
      <Split direction="horizontal" size={10} />
      <a>删除</a>
    </div>

    <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
    <Split direction="vertical" size={10} />
    <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
  </div>
      `,
        type: 'PlayGround',

        renderChildren: () => (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
              <a>编辑</a>
              <Split direction="horizontal" size={10} />
              <a>查看</a>
              <Split direction="horizontal" size={10} />
              <a>删除</a>
            </div>

            <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
            <Split direction="vertical" size={10} />
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
  import { Split } from '@baifendian/adhere';

  <div>
    <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
      <Split.Group direction="horizontal" >
        <a>编辑</a>
        <a>查看</a>
        <a>删除</a>
      </Split.Group>
    </div>

    <Split.Group direction="vertical">
      <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
      <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
    </Split.Group>
  </div>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
              <Split.Group direction="horizontal">
                <a>编辑</a>
                <a>查看</a>
                <a>删除</a>
              </Split.Group>
            </div>

            <Split.Group direction="vertical">
              <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
              <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
            </Split.Group>
          </div>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Split">
        <p>无侵入性的竖线和横线分割</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'Split',
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
            title: 'Split.Group',
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
