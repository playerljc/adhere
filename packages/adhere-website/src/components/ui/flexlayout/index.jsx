import React from 'react';
import { FlexLayout, Space } from '@baifendian/adhere';

import PlayGroundPage, {
  Section,
  PropsSection,
  CodeBoxSection,
} from '@/lib/PlaygroundPage';

const { Fixed, Auto } = FlexLayout;

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
        ]}
      />
    </PlayGroundPage>
  );
};
