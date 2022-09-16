import React from 'react';

import { FlexLayout, Space } from '@baifendian/adhere';

import Playground from '@/lib/Playground';
import Props from '@/lib/Props';

const { Fixed, Auto } = FlexLayout;

export default () => (
  <div className="Page">
    <h1>FlexLayout</h1>
    <p>实现flex布局的组件</p>

    <h2>属性</h2>
    <Props
      border
      title="FlexLayout"
      data={[
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
      ]}
    />

    <Space />

    <Props
      border
      title="FlexLayout.Fixed"
      data={[
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
      ]}
    />

    <Space />

    <Props
      border
      title="FlexLayout.Auto"
      data={[
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
      ]}
    />

    <h2>基本使用</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
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
      `}
    >
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
    </Playground>

    <h2>嵌套</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
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
      `}
    >
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
    </Playground>

    <h2>auto内容超出高度或宽度</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
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
      `}
    >
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
    </Playground>
  </div>
);
