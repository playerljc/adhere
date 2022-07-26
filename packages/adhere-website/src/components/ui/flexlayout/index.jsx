import React from 'react';
import { FlexLayout, Space } from '@baifendian/adhere';
import { Button } from 'antd';

import PlayGroundPage, { Section, PropsSection, CodeBoxSection } from '@/lib/PlaygroundPage';

const { Fixed, Auto, HorizontalFlexLayout, VerticalFlexLayout, ToolBarLayout, BackLayout } =
  FlexLayout;

export default (props) => {
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
        codeText: `
  import { FlexLayout, Space } from '@baifendian/adhere';

  <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed>
      <div
        style={{
          padding: '15px 20px',
          borderBottom: '1px solid #ccc',
          textAlign: 'center',
        }}
      >
        Top
      </div>
    </Fixed>
    <Auto style={{ justifyContent: 'center', alignItems: 'center' }}>Center</Auto>
    <Fixed>
      <div
        style={{
          padding: '15px 20px',
          borderTop: '1px solid #ccc',
          textAlign: 'center',
        }}
      >
        Bottom
      </div>
    </Fixed>
  </FlexLayout>

  <Space />

  <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed>
      <div
        style={{
          padding: '15px 20px',
          borderBottom: '1px solid #ccc',
          textAlign: 'center',
        }}
      >
        Top
      </div>
    </Fixed>
    <Auto>
      <FlexLayout direction="horizontal">
        <Fixed
          style={{
            padding: '0 20px',
            borderRight: '1px solid #ccc',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Left
        </Fixed>
        <Auto
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Center
        </Auto>
        <Fixed
          style={{
            padding: '0 20px',
            borderLeft: '1px solid #ccc',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Right
        </Fixed>
      </FlexLayout>
    </Auto>
    <Fixed>
      <div
        style={{
          padding: '15px 20px',
          borderTop: '1px solid #ccc',
          textAlign: 'center',
        }}
      >
        Bottom
      </div>
    </Fixed>
  </FlexLayout>

  <Space />

  <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed
      style={{
        borderRight: '1px solid #ccc',
        padding: '0 15px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Left
    </Fixed>
    <Auto>
      <FlexLayout>
        <Fixed
          style={{
            padding: '15px 0',
            borderBottom: '1px solid #ccc',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Top
        </Fixed>
        <Auto style={{ justifyContent: 'center', alignItems: 'center' }}>Center</Auto>
        <Fixed
          style={{
            padding: '15px 0',
            borderTop: '1px solid #ccc',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Bottom
        </Fixed>
      </FlexLayout>
    </Auto>
    <Fixed
      style={{
        borderLeft: '1px solid #ccc',
        padding: '0 15px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Right
    </Fixed>
  </FlexLayout>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
              <Fixed>
                <div
                  style={{
                    padding: '15px 20px',
                    borderBottom: '1px solid #ccc',
                    textAlign: 'center',
                  }}
                >
                  Top
                </div>
              </Fixed>
              <Auto style={{ justifyContent: 'center', alignItems: 'center' }}>Center</Auto>
              <Fixed>
                <div
                  style={{
                    padding: '15px 20px',
                    borderTop: '1px solid #ccc',
                    textAlign: 'center',
                  }}
                >
                  Bottom
                </div>
              </Fixed>
            </FlexLayout>

            <Space />

            <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
              <Fixed>
                <div
                  style={{
                    padding: '15px 20px',
                    borderBottom: '1px solid #ccc',
                    textAlign: 'center',
                  }}
                >
                  Top
                </div>
              </Fixed>
              <Auto>
                <FlexLayout direction="horizontal">
                  <Fixed
                    style={{
                      padding: '0 20px',
                      borderRight: '1px solid #ccc',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    Left
                  </Fixed>
                  <Auto
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    Center
                  </Auto>
                  <Fixed
                    style={{
                      padding: '0 20px',
                      borderLeft: '1px solid #ccc',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    Right
                  </Fixed>
                </FlexLayout>
              </Auto>
              <Fixed>
                <div
                  style={{
                    padding: '15px 20px',
                    borderTop: '1px solid #ccc',
                    textAlign: 'center',
                  }}
                >
                  Bottom
                </div>
              </Fixed>
            </FlexLayout>

            <Space />

            <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
              <Fixed
                style={{
                  borderRight: '1px solid #ccc',
                  padding: '0 15px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Left
              </Fixed>
              <Auto>
                <FlexLayout>
                  <Fixed
                    style={{
                      padding: '15px 0',
                      borderBottom: '1px solid #ccc',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    Top
                  </Fixed>
                  <Auto style={{ justifyContent: 'center', alignItems: 'center' }}>Center</Auto>
                  <Fixed
                    style={{
                      padding: '15px 0',
                      borderTop: '1px solid #ccc',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    Bottom
                  </Fixed>
                </FlexLayout>
              </Auto>
              <Fixed
                style={{
                  borderLeft: '1px solid #ccc',
                  padding: '0 15px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Right
              </Fixed>
            </FlexLayout>
          </>
        ),
      },
      {
        id: `p2`,
        name: `嵌套`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '嵌套',
            info: '嵌套',
          },
        },
        codeText: `
  import { FlexLayout, Space } from '@baifendian/adhere';

  <FlexLayout style={{ height: 500, border: '1px solid #ccc' }}>
    <Fixed>fixed1</Fixed>
    <Fixed>fixed2</Fixed>
    <Auto>auto1</Auto>
    <Fixed>fixed3</Fixed>
    <Auto>auto2</Auto>
    <Fixed>fixed4</Fixed>
  </FlexLayout>

  <Space />

  <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed>fixed1</Fixed>
    <Fixed>fixed2</Fixed>
    <Auto>auto1</Auto>
    <Fixed>fixed3</Fixed>
    <Auto>auto2</Auto>
    <Fixed>fixed4</Fixed>
  </FlexLayout>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <FlexLayout style={{ height: 500, border: '1px solid #ccc' }}>
              <Fixed>fixed1</Fixed>
              <Fixed>fixed2</Fixed>
              <Auto>auto1</Auto>
              <Fixed>fixed3</Fixed>
              <Auto>auto2</Auto>
              <Fixed>fixed4</Fixed>
            </FlexLayout>

            <Space />

            <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
              <Fixed>fixed1</Fixed>
              <Fixed>fixed2</Fixed>
              <Auto>auto1</Auto>
              <Fixed>fixed3</Fixed>
              <Auto>auto2</Auto>
              <Fixed>fixed4</Fixed>
            </FlexLayout>
          </>
        ),
      },
      {
        id: `p3`,
        name: `auto内容超出高度或宽度`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'auto内容超出高度或宽度',
            info: 'auto内容超出高度或宽度',
          },
        },
        codeText: `
  import { FlexLayout, Space } from '@baifendian/adhere';

  <FlexLayout style={{ height: 100, border: '1px solid #ccc' }}>
    <Fixed>Top</Fixed>
    <Auto fit={false} autoFixed={false} style={{ overflowY: 'auto' }}>
      <p>今天是个好日子</p>
      <p>今天是个好日子</p>
      <p>今天是个好日子</p>
      <p>今天是个好日子</p>
      <p>今天是个好日子</p>
      <p>今天是个好日子</p>
      <p>今天是个好日子</p>
      <p>今天是个好日子</p>
      <p>今天是个好日子</p>
      <p>今天是个好日子</p>
    </Auto>
  </FlexLayout>

  <Space />

  <FlexLayout
    direction="horizontal"
    style={{ overflow: 'auto', height: 100, border: '1px solid #ccc' }}
  >
    <Fixed>Left</Fixed>
    <Auto fit={false} autoFixed={false}>
      111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    </Auto>
  </FlexLayout>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <FlexLayout style={{ height: 100, border: '1px solid #ccc' }}>
              <Fixed>Top</Fixed>
              <Auto fit={false} autoFixed={false} style={{ overflowY: 'auto' }}>
                <p>今天是个好日子</p>
                <p>今天是个好日子</p>
                <p>今天是个好日子</p>
                <p>今天是个好日子</p>
                <p>今天是个好日子</p>
                <p>今天是个好日子</p>
                <p>今天是个好日子</p>
                <p>今天是个好日子</p>
                <p>今天是个好日子</p>
                <p>今天是个好日子</p>
              </Auto>
            </FlexLayout>

            <Space />

            <FlexLayout
              direction="horizontal"
              style={{ overflow: 'auto', height: 100, border: '1px solid #ccc' }}
            >
              <Fixed>Left</Fixed>
              <Auto fit={false} autoFixed={false}>
                111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
              </Auto>
            </FlexLayout>
          </>
        ),
      },
      {
        id: 'p4',
        name: `横向的快捷布局(HorizontalFlexLayout)`,
        mode: 'code',
        scope: { React },
        type: 'PlayGround',
        cardProps: {
          description: {
            title: 'HorizontalFlexLayout',
            info: '分为Left、Main和Right',
          },
        },
        renderChildren: () => (
          <HorizontalFlexLayout
            style={{ width: '100%', height: 300, border: '1px solid #ccc' }}
            leftStyle={{ borderRight: '1px solid #ccc', width: 100 }}
            rightStyle={{ borderLeft: '1px solid #ccc', width: 100 }}
            renderLeft={<div>Left</div>}
            renderMain={<div>Main</div>}
            renderRight={<div>Right</div>}
          />
        ),
      },
      {
        id: 'p5',
        name: `纵向的快捷布局(VerticalFlexLayout)`,
        mode: 'code',
        scope: { React },
        type: 'PlayGround',
        cardProps: {
          description: {
            title: 'HorizontalFlexLayout',
            info: '分为Top、Main和Bottom',
          },
        },
        renderChildren: () => (
          <VerticalFlexLayout
            style={{ width: '100%', height: 300, border: '1px solid #ccc' }}
            topStyle={{ borderBottom: '1px solid #ccc', height: 80 }}
            bottomStyle={{ borderTop: '1px solid #ccc', height: 80 }}
            renderTop={<div>Top</div>}
            renderMain={<div>Main</div>}
            renderBottom={<div>Bottom</div>}
          />
        ),
      },
      {
        id: 'p6',
        name: `嵌套(HorizontalFlexLayout,VerticalFlexLayout)`,
        mode: 'code',
        scope: { React },
        type: 'PlayGround',
        cardProps: {
          description: {
            title: 'HorizontalFlexLayout，HorizontalFlexLayout',
            info: '组合嵌套',
          },
        },
        renderChildren: () => (
          <HorizontalFlexLayout
            style={{ width: '100%', border: '1px solid #ccc' }}
            leftStyle={{ borderRight: '1px solid #ccc', width: 100 }}
            rightStyle={{ borderLeft: '1px solid #ccc', width: 100 }}
            renderLeft={<div>Left</div>}
            renderMain={
              <VerticalFlexLayout
                style={{ width: '100%', height: 300 }}
                topStyle={{ borderBottom: '1px solid #ccc', height: 80 }}
                bottomStyle={{ borderTop: '1px solid #ccc', height: 80 }}
                renderTop={<div>Top</div>}
                renderMain={<div>Main</div>}
                renderBottom={<div>Bottom</div>}
              />
            }
            renderRight={<div>Right</div>}
          />
        ),
      },
      {
        id: 'p7',
        name: `ToolBarLayout`,
        mode: 'code',
        scope: { React },
        type: 'PlayGround',
        cardProps: {
          description: {
            title: 'ToolBarLayout',
            info: '包含上下的工具栏',
          },
        },
        renderChildren: () => (
          <ToolBarLayout
            topToolBarItems={[
              <Button type="primary" key="add">
                添加
              </Button>,
              <Button type="primary" key="remove">
                删除
              </Button>,
              <Button type="primary" key="update">
                修改
              </Button>,
            ]}
            bottomToolBarItems={[
              <Button type="primary" key="add">
                添加
              </Button>,
              <Button type="primary" key="remove">
                删除
              </Button>,
              <Button type="primary" key="update">
                修改
              </Button>,
            ]}
          >
            Main
          </ToolBarLayout>
        ),
      },
      {
        id: 'p8',
        name: `BackLayout`,
        mode: 'code',
        scope: { React },
        type: 'PlayGround',
        cardProps: {
          description: {
            title: 'BackLayout',
            info: '带有返回操作的布局',
          },
        },
        renderChildren: () => (
          <BackLayout
            topToolBarItems={[<Button key="add">新增</Button>]}
            bottomToolBarItems={[
              <Button type="primary" key="add">
                添加
              </Button>,
              <Button type="primary" key="remove">
                删除
              </Button>,
              <Button type="primary" key="update">
                修改
              </Button>,
            ]}
            history={props.history}
            backTitle="返回"
          >
            Main
          </BackLayout>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="FlexLayout">
        <p>实现flex布局的组件</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'FlexLayout',
            data: [
              {
                params: 'direction',
                desc: '方向',
                type: "string - ['vertical' | 'horizontal']",
                defaultVal: 'vertical',
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
            title: 'FlexLayout.Fixed',
            data: [
              {
                params: 'fit',
                desc: '子组件是否充满容器',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'className',
                desc: '附加的样式',
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
            title: 'FlexLayout.Auto',
            data: [
              {
                params: 'autoFixed',
                desc: '是否固定高度或宽度',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'fit',
                desc: '子组件是否充满容器',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'className',
                desc: '附加的样式',
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
            title: 'FlexLayout.HorizontalFlexLayout',
            data: [
              {
                params: 'className',
                desc: '最外层className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '最外层style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'leftClassName',
                desc: 'left的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'leftStyle',
                desc: 'left的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'rightClassName',
                desc: 'right的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'rightStyle',
                desc: 'right的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainClassName',
                desc: 'main的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainStyle',
                desc: 'main的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainAutoWrapClassName',
                desc: 'mainAuto的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainAutoStyle',
                desc: 'mainAuto的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainWrapClassName',
                desc: 'mainWrap的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainWrapStyle',
                desc: 'mainWrap的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'renderLeft',
                desc: 'left的渲染',
                type: 'JSX.Element',
                defaultVal: '',
              },
              {
                params: 'renderMain',
                desc: 'main的渲染',
                type: 'JSX.Element',
                defaultVal: '',
              },
              {
                params: 'renderRight',
                desc: 'right的渲染',
                type: 'JSX.Element',
                defaultVal: '',
              },
              {
                params: 'leftProps',
                desc: 'left的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'rightProps',
                desc: 'right的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'mainProps',
                desc: 'main的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'mainAutoWrapProps',
                desc: 'mainAutoWrap的props',
                type: 'object',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'FlexLayout.VerticalFlexLayout',
            data: [
              {
                params: 'className',
                desc: '最外层className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '最外层style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'topClassName',
                desc: 'top的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'topStyle',
                desc: 'top的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'bottomClassName',
                desc: 'bottom的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'bottomStyle',
                desc: 'bottom的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainClassName',
                desc: 'main的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainStyle',
                desc: 'main的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainAutoWrapClassName',
                desc: 'mainAuto的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainAutoStyle',
                desc: 'mainAuto的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainWrapClassName',
                desc: 'mainWrap的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainWrapStyle',
                desc: 'mainWrap的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'renderLeft',
                desc: 'top的渲染',
                type: 'JSX.Element',
                defaultVal: '',
              },
              {
                params: 'renderMain',
                desc: 'main的渲染',
                type: 'JSX.Element',
                defaultVal: '',
              },
              {
                params: 'renderRight',
                desc: 'bottom的渲染',
                type: 'JSX.Element',
                defaultVal: '',
              },
              {
                params: 'topProps',
                desc: 'top的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'bottomProps',
                desc: 'bottom的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'mainProps',
                desc: 'main的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'mainAutoWrapProps',
                desc: 'mainAutoWrap的props',
                type: 'object',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'FlexLayout.ToolBarLayout',
            data: [
              {
                params: 'className',
                desc: '最外层className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '最外层style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'topClassName',
                desc: 'top的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'topStyle',
                desc: 'top的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'bottomClassName',
                desc: 'bottom的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'bottomStyle',
                desc: 'bottom的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainClassName',
                desc: 'main的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainStyle',
                desc: 'main的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainAutoWrapClassName',
                desc: 'mainAuto的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainAutoStyle',
                desc: 'mainAuto的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainWrapClassName',
                desc: 'mainWrap的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainWrapStyle',
                desc: 'mainWrap的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'renderMain',
                desc: 'main的渲染',
                type: 'JSX.Element',
                defaultVal: '',
              },
              {
                params: 'topProps',
                desc: 'top的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'bottomProps',
                desc: 'bottom的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'mainProps',
                desc: 'main的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'mainAutoWrapProps',
                desc: 'mainAutoWrap的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'topToolBarItems',
                desc: '上方工具栏',
                type: 'JSX.Element[]',
                defaultVal: '[]',
              },
              {
                params: 'bottomToolBarItems',
                desc: '下方工具栏',
                type: 'JSX.Element[]',
                defaultVal: '[]',
              },
            ],
          },
          {
            border: true,
            title: 'FlexLayout.BackLayout',
            data: [
              {
                params: 'className',
                desc: '最外层className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '最外层style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'topClassName',
                desc: 'top的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'topStyle',
                desc: 'top的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'bottomClassName',
                desc: 'bottom的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'bottomStyle',
                desc: 'bottom的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainClassName',
                desc: 'main的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainStyle',
                desc: 'main的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainAutoWrapClassName',
                desc: 'mainAuto的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainAutoStyle',
                desc: 'mainAuto的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainWrapClassName',
                desc: 'mainWrap的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainWrapStyle',
                desc: 'mainWrap的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'renderMain',
                desc: 'main的渲染',
                type: 'JSX.Element',
                defaultVal: '',
              },
              {
                params: 'topProps',
                desc: 'top的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'bottomProps',
                desc: 'bottom的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'mainProps',
                desc: 'main的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'mainAutoWrapProps',
                desc: 'mainAutoWrap的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'topToolBarItems',
                desc: '上方工具栏',
                type: 'JSX.Element[]',
                defaultVal: '[]',
              },
              {
                params: 'bottomToolBarItems',
                desc: '下方工具栏',
                type: 'JSX.Element[]',
                defaultVal: '[]',
              },

              {
                params: 'backPath',
                desc: '没有历史的时候回退的路由地址',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'enforceBackPath',
                desc: '强制执行的路由地址',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'isShowBack',
                desc: '是否显示返回按钮',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'history',
                desc: '路由对象',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'backTitle',
                desc: '返回按钮的文本',
                type: 'string | JSX.Element',
                defaultVal: '返回',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
