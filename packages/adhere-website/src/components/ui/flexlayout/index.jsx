import { Button, Select, Slider } from 'antd';
import React, { useState } from 'react';

import { FlexLayout, Space } from '@baifendian/adhere';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

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

  console.log('colCounts[colCountKey]', colCounts[colCountKey]);

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
        name: `栅格配置器`,
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
                      <div className={style.inner}>{`col-${24 / colCounts[colCountKey]}`}</div>
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
