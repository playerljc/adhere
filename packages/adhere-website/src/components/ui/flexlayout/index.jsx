import { Button, Card, Select, Slider } from 'antd';
import React, { useState } from 'react';

import { FlexLayout, Space } from '@baifendian/adhere';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import TRBLCIcon from './TRBLC.png';

import style from './index.less';

const {
  Fixed,
  Auto,
  HorizontalFlexLayout,
  VerticalFlexLayout,
  ToolBarLayout,
  BackLayout,
  ScrollLayout,
  useScrollLayout,
} = FlexLayout;

const { Option } = Select;

function FormItemWrap() {
  const { getEl } = useScrollLayout();

  const data = Array.from({ length: 10 }).fill(1);

  return (
    <Select style={{ width: 200 }} getPopupContainer={() => getEl()}>
      {data.map((t, _index) => (
        <Option key={`${_index + 1}`} value={_index + 1}>
          {_index + 1}
        </Option>
      ))}
    </Select>
  );
}

export default (props) => {
  const [hGutterKey, setHGutterKey] = useState(1);
  const [hVgutterKey, setHVgutterKey] = useState(1);
  const [hColCountKey, setHColCountKey] = useState(2);

  const hGutters = {};
  const hVgutters = {};
  const hColCounts = {};

  [8, 16, 24, 32, 40, 48].forEach((value, i) => {
    hGutters[i] = value;
  });
  [8, 16, 24, 32, 40, 48].forEach((value, i) => {
    hVgutters[i] = value;
  });
  [2, 3, 4, 6, 8, 12].forEach((value, i) => {
    hColCounts[i] = value;
  });

  // --------------------------------------------------------------------------------------------

  const [vGutterKey, setVGutterKey] = useState(1);
  const [vVgutterKey, setVVgutterKey] = useState(1);
  const [vColCountKey, setVColCountKey] = useState(2);

  const vGutters = {};
  const vVgutters = {};
  const vColCounts = {};

  [8, 16, 24, 32, 40, 48].forEach((value, i) => {
    vGutters[i] = value;
  });
  [8, 16, 24, 32, 40, 48].forEach((value, i) => {
    vVgutters[i] = value;
  });
  [2, 3, 4, 6, 8, 12].forEach((value, i) => {
    vColCounts[i] = value;
  });

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

  <Space direction="vertical" />

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

  <Space direction="vertical" />

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

            <Space direction="vertical" />

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

            <Space direction="vertical" />

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

  <Space direction="vertical" />

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

            <Space direction="vertical" />

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

  <Space direction="vertical" />

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

            <Space direction="vertical" />

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
        codeText: `
  import React from 'react';
  import { FlexLayout } from '@baifendian/adhere';

  const {
    HorizontalFlexLayout,
  } = FlexLayout;

  export default () => (
    <HorizontalFlexLayout
      style={{ width: '100%', height: 300, border: '1px solid #ccc' }}
      leftStyle={{ borderRight: '1px solid #ccc', width: 100 }}
      rightStyle={{ borderLeft: '1px solid #ccc', width: 100 }}
      renderLeft={<div>Left</div>}
      renderMain={<div>Main</div>}
      renderRight={<div>Right</div>}
    />
  )
        `,
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
        codeText: `
  import React from 'react';
  import { FlexLayout } from '@baifendian/adhere';

  const {
    VerticalFlexLayout,
  } = FlexLayout;

  export default () => (
    <VerticalFlexLayout
      style={{ width: '100%', height: 300, border: '1px solid #ccc' }}
      topStyle={{ borderBottom: '1px solid #ccc', height: 80 }}
      bottomStyle={{ borderTop: '1px solid #ccc', height: 80 }}
      renderTop={<div>Top</div>}
      renderMain={<div>Main</div>}
      renderBottom={<div>Bottom</div>}
    />
  )
        `,
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
        codeText: `
  import React from 'react';
  import { FlexLayout } from '@baifendian/adhere';

  const {
    VerticalFlexLayout,
    HorizontalFlexLayout
  } = FlexLayout;

  export default () => (
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
  )
        `,
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
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  const {
    ToolBarLayout
  } = FlexLayout;

  export default () => (
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
  )
        `,
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
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  const {
    BackLayout
  } = FlexLayout;

  export default () => (
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
  )
        `,
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
      {
        id: 'p9',
        name: `ScrollLayout`,
        mode: 'code',
        scope: { React },
        type: 'PlayGround',
        cardProps: {
          description: {
            title: '可以滚动的布局',
            info: '一般用在路由组件的外层，作为带有getPopupContainer的FormItem的parent',
          },
        },
        codeText: `
  import React from 'react';
  import { Select } from 'antd';
  import { FlexLayout, Space } from '@baifendian/adhere';

  const {
    ScrollLayout,
    useScrollLayout,
  } = FlexLayout;

  const { Option } = Select;

  export default () => {
    function FormItemWrap() {
      const { getEl } = useScrollLayout();

      const data = Array.from({ length: 10 }).fill(1);

      return (
        <Select style={{ width: 200 }} getPopupContainer={() => getEl()}>
          {data.map((t, _index) => (
            <Option key={\`\${_index + 1}\`} value={_index + 1}>
              {_index + 1}
            </Option>
          ))}
        </Select>
      );
    }

    return (
      <div style={{ height: 500 }}>
        <ScrollLayout scrollY>
          <Space.Group direction="vertical">
            {Array.from({ length: 20 })
              .fill(1)
              .map((t, _index) => (
                <FormItemWrap key={\`\${_index + 1}\`} />
              ))}
          </Space.Group>
        </ScrollLayout>
      </div>
    )
  }        `,
        renderChildren: () => (
          <div style={{ height: 500 }}>
            <ScrollLayout scrollY>
              <Space.Group direction="vertical">
                {Array.from({ length: 20 })
                  .fill(1)
                  .map((t, _index) => (
                    <FormItemWrap key={`${_index + 1}`} />
                  ))}
              </Space.Group>
            </ScrollLayout>
          </div>
        ),
      },
      {
        id: 'p10',
        name: `栅格`,
        mode: 'code',
        scope: { React },
        type: 'PlayGround',
        codeText: `
  import React from 'react';
  import { FlexLayout } from '@baifendian/adhere';

  const {
    Fixed
  } = FlexLayout;

  export default () => (
    <FlexLayout direction="horizontal" gutter={[20, 0]}>
      <Fixed span={24} className={style.col}>
        col
      </Fixed>

      <Fixed span={12} className={style.col}>
        col-12
      </Fixed>
      <Fixed span={12} className={style.col}>
        col-12
      </Fixed>

      <Fixed span={8} className={style.col}>
        col-8
      </Fixed>
      <Fixed span={8} className={style.col}>
        col-8
      </Fixed>
      <Fixed span={8} className={style.col}>
        col-8
      </Fixed>

      <Fixed span={6} className={style.col}>
        col-6
      </Fixed>
      <Fixed span={6} className={style.col}>
        col-6
      </Fixed>
      <Fixed span={6} className={style.col}>
        col-6
      </Fixed>
      <Fixed span={6} className={style.col}>
        col-6
      </Fixed>
    </FlexLayout>
  )
        `,
        cardProps: {
          description: {
            title: '栅格',
            info: '栅格',
          },
        },
        renderChildren: () => (
          <FlexLayout direction="horizontal" gutter={[20, 0]}>
            <Fixed span={24} className={style.col}>
              <div className={style.inner}>col</div>
            </Fixed>

            <Fixed span={12} className={style.col}>
              <div className={style.inner}>col-12</div>
            </Fixed>
            <Fixed span={12} className={style.col}>
              <div className={style.inner}>col-12</div>
            </Fixed>

            <Fixed span={8} className={style.col}>
              <div className={style.inner}>col-8</div>
            </Fixed>
            <Fixed span={8} className={style.col}>
              <div className={style.inner}>col-8</div>
            </Fixed>
            <Fixed span={8} className={style.col}>
              <div className={style.inner}>col-8</div>
            </Fixed>

            <Fixed span={6} className={style.col}>
              <div className={style.inner}>col-6</div>
            </Fixed>
            <Fixed span={6} className={style.col}>
              <div className={style.inner}>col-6</div>
            </Fixed>
            <Fixed span={6} className={style.col}>
              <div className={style.inner}>col-6</div>
            </Fixed>
            <Fixed span={6} className={style.col}>
              <div className={style.inner}>col-6</div>
            </Fixed>
          </FlexLayout>
        ),
      },
      {
        id: 'p11',
        name: `纵向栅格`,
        mode: 'code',
        scope: { React },
        type: 'PlayGround',
        codeText: `
 import { Slider } from 'antd';
 import React, { useState } from 'react';

 import { FlexLayout, Space } from '@baifendian/adhere';

 const {
  Fixed,
 } = FlexLayout;

 export default () => {
  const [vGutterKey, setVGutterKey] = useState(1);
  const [vVgutterKey, setVVgutterKey] = useState(1);
  const [vColCountKey, setVColCountKey] = useState(2);

  const vGutters = {};
  const vVgutters = {};
  const vColCounts = {};

  [8, 16, 24, 32, 40, 48].forEach((value, i) => {
    vGutters[i] = value;
  });
  [8, 16, 24, 32, 40, 48].forEach((value, i) => {
    vVgutters[i] = value;
  });
  [2, 3, 4, 6, 8, 12].forEach((value, i) => {
    vColCounts[i] = value;
  });

  return (
    <Space.Group direction="vertical" size={20}>
      <p>Horizontal Gutter (px):</p>
      <div>
        <Slider
          min={0}
          max={Object.keys(vGutters).length - 1}
          value={vGutterKey}
          onChange={setVGutterKey}
          marks={vGutters}
          step={null}
          tooltip={{ formatter: (value) => vGutters[value] }}
        />
      </div>

      <p>Vertical Gutter (px):</p>
      <div>
        <Slider
          min={0}
          max={Object.keys(vVgutters).length - 1}
          value={vVgutterKey}
          onChange={setVVgutterKey}
          marks={vVgutters}
          step={null}
          tooltip={{ formatter: (value) => vVgutters[value] }}
        />
      </div>

      <p>Column Count:</p>
      <div>
        <Slider
          min={0}
          max={Object.keys(vColCounts).length - 1}
          value={vColCountKey}
          onChange={setVColCountKey}
          marks={vColCounts}
          step={null}
          tooltip={{ formatter: (value) => vColCounts[value] }}
        />
      </div>

      <div style={{ height: 600 }}>
        <FlexLayout
          style={{ height: '100%' }}
          gutter={[vVgutters[vVgutterKey], vGutters[vGutterKey]]}
          direction="vertical"
        >
          {Array.from({ length: vColCounts[vColCountKey] }).map(() => (
            <Fixed className={style.vcol} span={24 / vColCounts[vColCountKey]}>
              <div className={style.inner}>{\`col-${24 / vColCounts[vColCountKey]}\`}</div>
            </Fixed>
          ))}
        </FlexLayout>
      </div>
    </Space.Group>
  )
 }
        `,
        cardProps: {
          description: {
            title: '',
            info: '纵向栅格',
          },
        },
        renderChildren: () => (
          <Space.Group direction="vertical" size={20}>
            <p>Horizontal Gutter (px):</p>
            <div>
              <Slider
                min={0}
                max={Object.keys(vGutters).length - 1}
                value={vGutterKey}
                onChange={setVGutterKey}
                marks={vGutters}
                step={null}
                tooltip={{ formatter: (value) => vGutters[value] }}
              />
            </div>

            <p>Vertical Gutter (px):</p>
            <div>
              <Slider
                min={0}
                max={Object.keys(vVgutters).length - 1}
                value={vVgutterKey}
                onChange={setVVgutterKey}
                marks={vVgutters}
                step={null}
                tooltip={{ formatter: (value) => vVgutters[value] }}
              />
            </div>

            <p>Column Count:</p>
            <div>
              <Slider
                min={0}
                max={Object.keys(vColCounts).length - 1}
                value={vColCountKey}
                onChange={setVColCountKey}
                marks={vColCounts}
                step={null}
                tooltip={{ formatter: (value) => vColCounts[value] }}
              />
            </div>

            <div style={{ height: 600 }}>
              <FlexLayout
                style={{ height: '100%' }}
                gutter={[vVgutters[vVgutterKey], vGutters[vGutterKey]]}
                direction="vertical"
              >
                {Array.from({ length: vColCounts[vColCountKey] }).map(() => (
                  <Fixed className={style.vcol} span={24 / vColCounts[vColCountKey]}>
                    <div className={style.inner}>{`col-${24 / vColCounts[vColCountKey]}`}</div>
                  </Fixed>
                ))}
              </FlexLayout>
            </div>
          </Space.Group>
        ),
      },
      {
        id: 'p12',
        name: `栅格配置器`,
        mode: 'code',
        scope: { React },
        type: 'PlayGround',
        codeText: `
  import { Button, Select, Slider } from 'antd';
  import React, { useState } from 'react';

  import { FlexLayout, Space } from '@baifendian/adhere';

  const {
    Fixed
  } = FlexLayout;

  export default () => {
    const [gutterKey, setGutterKey] = useState(1);
    const [vgutterKey, setVgutterKey] = useState(1);
    const [colCountKey, setColCountKey] = useState(2);

    const gutters = {};
    const vgutters = {};
    const colCounts = {};

    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      gutters[i] = value;
    });
    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      vgutters[i] = value;
    });
    [2, 3, 4, 6, 8, 12].forEach((value, i) => {
      colCounts[i] = value;
    });

    return (
      <Space.Group direction="vertical" size={20}>
        <p>Horizontal Gutter (px):</p>
        <div>
          <Slider
            min={0}
            max={Object.keys(gutters).length - 1}
            value={gutterKey}
            onChange={setGutterKey}
            marks={gutters}
            step={null}
            tooltip={{ formatter: (value) => gutters[value] }}
          />
        </div>

        <p>Vertical Gutter (px):</p>
        <div>
          <Slider
            min={0}
            max={Object.keys(vgutters).length - 1}
            value={vgutterKey}
            onChange={setVgutterKey}
            marks={vgutters}
            step={null}
            tooltip={{ formatter: (value) => vgutters[value] }}
          />
        </div>

        <p>Column Count:</p>
        <div>
          <Slider
            min={0}
            max={Object.keys(colCounts).length - 1}
            value={colCountKey}
            onChange={setColCountKey}
            marks={colCounts}
            step={null}
            tooltip={{ formatter: (value) => colCounts[value] }}
          />
        </div>

        <div>
          <FlexLayout
            gutter={[vgutters[vgutterKey], gutters[gutterKey]]}
            direction="horizontal"
          >
            {Array.from({ length: 3 }).map(() => {
              return Array.from({ length: colCounts[colCountKey] }).map(() => (
                <Fixed span={24 / colCounts[colCountKey]} className={style.col}>
                  <div className={style.inner}>{\`col-${24 / hColCounts[hColCountKey]}\`}</div>
                </Fixed>
              ));
            })}
          </FlexLayout>
        </div>
      </Space.Group>
    )
  }
        `,
        cardProps: {
          description: {
            title: '栅格配置器',
            info: '栅格配置器',
          },
        },
        renderChildren: () => (
          <Space.Group direction="vertical" size={20}>
            <p>Horizontal Gutter (px):</p>
            <div>
              <Slider
                min={0}
                max={Object.keys(hGutters).length - 1}
                value={hGutterKey}
                onChange={setHGutterKey}
                marks={hGutters}
                step={null}
                tooltip={{ formatter: (value) => hGutters[value] }}
              />
            </div>

            <p>Vertical Gutter (px):</p>
            <div>
              <Slider
                min={0}
                max={Object.keys(hVgutters).length - 1}
                value={hVgutterKey}
                onChange={setHVgutterKey}
                marks={hVgutters}
                step={null}
                tooltip={{ formatter: (value) => hVgutters[value] }}
              />
            </div>

            <p>Column Count:</p>
            <div>
              <Slider
                min={0}
                max={Object.keys(hColCounts).length - 1}
                value={hColCountKey}
                onChange={setHColCountKey}
                marks={hColCounts}
                step={null}
                tooltip={{ formatter: (value) => hColCounts[value] }}
              />
            </div>

            <div>
              <FlexLayout
                gutter={[hVgutters[hVgutterKey], hGutters[hGutterKey]]}
                direction="horizontal"
              >
                {Array.from({ length: 3 }).map(() => {
                  return Array.from({ length: hColCounts[hColCountKey] }).map(() => (
                    <Fixed span={24 / hColCounts[hColCountKey]} className={style.col}>
                      <div className={style.inner}>{`col-${24 / hColCounts[hColCountKey]}`}</div>
                    </Fixed>
                  ));
                })}
              </FlexLayout>
            </div>
          </Space.Group>
        ),
      },
    ];
  }

  function TRBLCBoxPanelConfig() {
    return [
      {
        id: `TC`,
        name: `TC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TC',
            info: 'TC',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.TCLayout
        style={{ height: '100%' }}
        gutter={20}
        tProps={{
          children: <Card>top</Card>,
        }}
        cProps={{
          children: <Card>center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <FlexLayout.TRBLC.TCLayout
              style={{ height: '100%' }}
              gutter={20}
              tProps={{
                children: <Card>top</Card>,
              }}
              cProps={{
                children: <Card>center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `CB`,
        name: `CB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'CB',
            info: 'CB',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.CBLayout
        style={{ height: '100%' }}
        gutter={20}
        bProps={{
          span: 12,
          fit: true,
          children: <Card>bottom</Card>,
        }}
        cProps={{
          children: <Card>center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <FlexLayout.TRBLC.CBLayout
              style={{ height: '100%' }}
              gutter={20}
              bProps={{
                span: 12,
                fit: true,
                children: <Card>bottom</Card>,
              }}
              cProps={{
                children: <Card>center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `TLC`,
        name: `TLC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TLC',
            info: 'TLC',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.TLCLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 8,
          children: <Card>Top</Card>,
        }}
        lProps={{
          fit: true,
          span: 8,
          children: <Card>Left</Card>,
        }}
        cProps={{
          children: <Card>center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <FlexLayout.TRBLC.TLCLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              tProps={{
                fit: true,
                span: 8,
                children: <Card>Top</Card>,
              }}
              lProps={{
                fit: true,
                span: 8,
                children: <Card>Left</Card>,
              }}
              cProps={{
                children: <Card>center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `TRC`,
        name: `TRC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TRC',
            info: 'TRC',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.TRCLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 8,
          children: <Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 8,
          children: <Card>Right</Card>,
        }}
        cProps={{
          children: <Card>center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <FlexLayout.TRBLC.TRCLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              tProps={{
                fit: true,
                span: 8,
                children: <Card>Top</Card>,
              }}
              rProps={{
                fit: true,
                span: 8,
                children: <Card>Right</Card>,
              }}
              cProps={{
                children: <Card>center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `TLRC`,
        name: `TLRC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TLRC',
            info: 'TLRC',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.TLRCLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          children: <Card>Top</Card>,
        }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        cProps={{
          children: <Card>center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <FlexLayout.TRBLC.TLRCLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              tProps={{
                fit: true,
                span: 3,
                children: <Card>Top</Card>,
              }}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              cProps={{
                children: <Card>center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `LCB`,
        name: `LCB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LCB',
            info: 'LCB',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.LCBLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <FlexLayout.TRBLC.LCBLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `CRB`,
        name: `CRB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'CRB',
            info: 'CRB',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.CRBLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <FlexLayout.TRBLC.CRBLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `LCRB`,
        name: `LCRB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LCRB',
            info: 'LCRB',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.LCRBLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <FlexLayout.TRBLC.LCRBLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `LC`,
        name: `LC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LC',
            info: 'LC',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.LCLayout
        style={{ height: '100%' }}
        gutter={20}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <FlexLayout.TRBLC.LCLayout
              style={{ height: '100%' }}
              gutter={20}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `CR`,
        name: `CR`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'CR',
            info: 'CR',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.CRLayout
        style={{ height: '100%' }}
        gutter={20}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <FlexLayout.TRBLC.CRLayout
              style={{ height: '100%' }}
              gutter={20}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `LTC`,
        name: `LTC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LTC',
            info: 'LTC',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.LTCLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        tProps={{
          fit: true,
          span: 3,
          children: <Card>Top</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <FlexLayout.TRBLC.LTCLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              tProps={{
                fit: true,
                span: 3,
                children: <Card>Top</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `LBC`,
        name: `LBC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LBC',
            info: 'LBC',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.LBCLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <FlexLayout.TRBLC.LBCLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `LTCB`,
        name: `LTCB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LTCB',
            info: 'LTCB',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.LTCBLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        tProps={{
          fit: true,
          span: 3,
          children: <Card>Top</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <FlexLayout.TRBLC.LTCBLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              tProps={{
                fit: true,
                span: 3,
                children: <Card>Top</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `TCR`,
        name: `TCR`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TCR',
            info: 'TCR',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.TCRLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          children: <Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <FlexLayout.TRBLC.TCRLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              tProps={{
                fit: true,
                span: 3,
                children: <Card>Top</Card>,
              }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `CBR`,
        name: `CBR`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'CBR',
            info: 'CBR',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.CBRLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <FlexLayout.TRBLC.CBRLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `TCBR`,
        name: `TCBR`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TCBR',
            info: 'TCBR',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.TCBRLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          children: <Card>Top</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <FlexLayout.TRBLC.TCBRLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              tProps={{
                fit: true,
                span: 3,
                children: <Card>Top</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `TBLCR`,
        name: `TBLCR`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TBLCR',
            info: 'TBLCR',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.TBLCRLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          children: <Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <FlexLayout.TRBLC.TBLCRLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              tProps={{
                fit: true,
                span: 3,
                children: <Card>Top</Card>,
              }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `LRTCB`,
        name: `LRTCB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LRTCB',
            info: 'LRTCB',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.LRTCBLayout
        style={{ height: '100%' }}
        gutter={50}
        autoInnerProps={{ gutter: [0, 30] }}
        tProps={{
          fit: true,
          span: 4,
          children: <Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
        lProps={{
          fit: true,
          style: { width: '50%' },
          children: <Card>Left</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <FlexLayout.TRBLC.LRTCBLayout
              style={{ height: '100%' }}
              gutter={50}
              autoInnerProps={{ gutter: [0, 30] }}
              tProps={{
                fit: true,
                span: 4,
                children: <Card>Top</Card>,
              }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
              lProps={{
                fit: true,
                style: { width: '50%' },
                children: <Card>Left</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },

      {
        id: `TBLCRScroll`,
        name: `TBLCR可滚动`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TBLCR可滚动',
            info: 'TBLCR可滚动',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, background: '#ccc', padding: 20 }}>
      <FlexLayout.TRBLC.TBLCRLayout
        gutter={20}
        autoWrapProps={{ autoFixed: false }}
        autoInnerProps={{ autoFixed: true, gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          children: <Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        cProps={{
          autoFixed: false,
          children: (
            <Card>
              {Array.from({ length: 100 }).map((t) => (
                <p>
                  111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                </p>
              ))}
            </Card>
          ),
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, background: '#ccc', padding: 20 }}>
            <FlexLayout.TRBLC.TBLCRLayout
              gutter={20}
              autoWrapProps={{ autoFixed: false }}
              autoInnerProps={{ autoFixed: true, gutter: [0, 20] }}
              tProps={{
                fit: true,
                span: 3,
                children: <Card>Top</Card>,
              }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              cProps={{
                autoFixed: false,
                children: (
                  <Card>
                    {Array.from({ length: 100 }).map((t) => (
                      <p>
                        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                      </p>
                    ))}
                  </Card>
                ),
              }}
            />
          </div>
        ),
      },
      {
        id: `LRTCBScroll`,
        name: `LRTCB可滚动`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LRTCB可滚动',
            info: 'LRTCB可滚动',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { FlexLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, background: '#ccc', padding: 20 }}>
      <FlexLayout.TRBLC.LRTCBLayout
        gutter={20}
        autoWrapProps={{ autoFixed: false }}
        autoInnerProps={{ autoFixed: true, gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          children: <Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        cProps={{
          autoFixed: false,
          children: (
            <Card>
              {Array.from({ length: 100 }).map((t) => (
                <p>
                  111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                </p>
              ))}
            </Card>
          ),
        }}
      />
          </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, background: '#ccc', padding: 20 }}>
            <FlexLayout.TRBLC.LRTCBLayout
              gutter={20}
              autoWrapProps={{ autoFixed: false }}
              autoInnerProps={{ autoFixed: true, gutter: [0, 20] }}
              tProps={{
                fit: true,
                span: 3,
                children: <Card>Top</Card>,
              }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              cProps={{
                autoFixed: false,
                children: (
                  <Card>
                    {Array.from({ length: 100 }).map((t) => (
                      <p>
                        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                      </p>
                    ))}
                  </Card>
                ),
              }}
            />
          </div>
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

      <p>TRBLC布局</p>
      <div>
        <img src={TRBLCIcon} style={{ width: '100%' }} alt="TRBLC布局" />
      </div>

      <CodeBoxSection title="TRBLC布局-代码演示" columnCount={1} config={TRBLCBoxPanelConfig()} />

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
          {
            border: true,
            title: 'FlexLayout.ScrollLayout',
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
                params: 'scrollY',
                desc: '是否可以滚动',
                type: 'boolean',
                defaultVal: 'true',
              },
            ],
          },
          {
            border: true,
            title: 'FlexLayout.useScrollLayout',
            data: [
              {
                params: 'getEl',
                desc: '获取Scroll的el元素',
                type: 'HTMLElement',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'FlexLayout.ScrollLayoutContext',
            data: [
              {
                params: 'getEl',
                desc: '获取Scroll的el元素',
                type: 'HTMLElement',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
