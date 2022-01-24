import React from 'react';
import { FlexLayout, SplitLayout, Space } from '@baifendian/adhere';

import PlayGroundPage, { Section, PropsSection, CodeBoxSection } from '@/lib/PlaygroundPage';

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
  import { FlexLayout, SplitLayout, Space } from '@baifendian/adhere';

  <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ width: 30 }} />
    <SplitLayout />
    <Auto />
  </FlexLayout>

  <Space size={30} />

  <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
    <Auto />
    <SplitLayout />
    <Fixed style={{ width: 30 }} />
  </FlexLayout>

  <Space size={30} />

  <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ height: 30 }} />
    <SplitLayout style={{ width: 'auto' }} />
    <Auto />
  </FlexLayout>

  <Space size={30} />

  <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
    <Auto />
    <SplitLayout style={{ width: 'auto' }} />
    <Fixed style={{ height: 30 }} />
  </FlexLayout>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
              <Fixed style={{ width: 30 }} />
              <SplitLayout />
              <Auto />
            </FlexLayout>

            <Space size={30} />

            <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
              <Auto />
              <SplitLayout />
              <Fixed style={{ width: 30 }} />
            </FlexLayout>

            <Space size={30} />

            <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
              <Fixed style={{ height: 30 }} />
              <SplitLayout style={{ width: 'auto' }} />
              <Auto />
            </FlexLayout>

            <Space size={30} />

            <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
              <Auto />
              <SplitLayout style={{ width: 'auto' }} />
              <Fixed style={{ height: 30 }} />
            </FlexLayout>
          </>
        ),
      },
      {
        id: `p2`,
        name: `多个分割点`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '多个分割点',
            info: '多个分割点',
          },
        },
        codeText: `
  import { FlexLayout, SplitLayout, Space } from '@baifendian/adhere';

  <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ width: 30 }} />
    <SplitLayout />
    <Auto />
    <SplitLayout />
    <Fixed style={{ width: 30 }} />
  </FlexLayout>

  <Space size={30} />

  <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ height: 30 }} />
    <SplitLayout style={{ width: 'auto' }} />
    <Auto />
    <SplitLayout style={{ width: 'auto' }} />
    <Fixed style={{ height: 30 }} />
  </FlexLayout>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
              <Fixed style={{ width: 30 }} />
              <SplitLayout />
              <Auto />
              <SplitLayout />
              <Fixed style={{ width: 30 }} />
            </FlexLayout>

            <Space size={30} />

            <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
              <Fixed style={{ height: 30 }} />
              <SplitLayout style={{ width: 'auto' }} />
              <Auto />
              <SplitLayout style={{ width: 'auto' }} />
              <Fixed style={{ height: 30 }} />
            </FlexLayout>
          </>
        ),
      },
      {
        id: `p3`,
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
  import { FlexLayout, SplitLayout, Space } from '@baifendian/adhere';

  <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ width: 30 }} />
    <SplitLayout />
    <Auto>
      <FlexLayout>
        <Fixed style={{ height: 30 }} />
        <SplitLayout style={{ width: 'auto' }} />
        <Auto />
        <SplitLayout style={{ width: 'auto' }} />
        <Fixed style={{ height: 30 }} />
      </FlexLayout>
    </Auto>
    <SplitLayout />
    <Fixed style={{ width: 30 }} />
  </FlexLayout>

  <Space size={30} />

  <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ height: 30 }} />
    <SplitLayout style={{ width: 'auto' }} />
    <Auto>
      <FlexLayout direction="horizontal">
        <Fixed style={{ width: 30 }} />
        <SplitLayout />
        <Auto />
        <SplitLayout />
        <Fixed style={{ width: 30 }} />
      </FlexLayout>
    </Auto>
    <SplitLayout style={{ width: 'auto' }} />
    <Fixed style={{ height: 30 }} />
  </FlexLayout>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
              <Fixed style={{ width: 30 }} />
              <SplitLayout />
              <Auto>
                <FlexLayout>
                  <Fixed style={{ height: 30 }} />
                  <SplitLayout style={{ width: 'auto' }} />
                  <Auto />
                  <SplitLayout style={{ width: 'auto' }} />
                  <Fixed style={{ height: 30 }} />
                </FlexLayout>
              </Auto>
              <SplitLayout />
              <Fixed style={{ width: 30 }} />
            </FlexLayout>

            <Space size={30} />

            <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
              <Fixed style={{ height: 30 }} />
              <SplitLayout style={{ width: 'auto' }} />
              <Auto>
                <FlexLayout direction="horizontal">
                  <Fixed style={{ width: 30 }} />
                  <SplitLayout />
                  <Auto />
                  <SplitLayout />
                  <Fixed style={{ width: 30 }} />
                </FlexLayout>
              </Auto>
              <SplitLayout style={{ width: 'auto' }} />
              <Fixed style={{ height: 30 }} />
            </FlexLayout>
          </>
        ),
      },
      {
        id: `p4`,
        name: `使用minSize和maxSize控制拖放范围`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '使用minSize和maxSize控制拖放范围',
            info: '使用minSize和maxSize控制拖放范围',
          },
        },
        codeText: `
  import { FlexLayout, SplitLayout, Space } from '@baifendian/adhere';

  <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ width: 30 }} />
    <SplitLayout minSize="20%" maxSize="50%" />
    <Auto />
  </FlexLayout>

  <Space size={30} />

  <FlexLayout style={{ height: 400, border: '1px solid #ccc' }}>
    <Fixed style={{ height: 30 }} />
    <SplitLayout minSize="20%" maxSize="50%" style={{ width: 'auto' }} />
    <Auto />
  </FlexLayout>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
              <Fixed style={{ width: 30 }} />
              <SplitLayout minSize="20%" maxSize="50%" />
              <Auto />
            </FlexLayout>

            <Space size={30} />

            <FlexLayout style={{ height: 400, border: '1px solid #ccc' }}>
              <Fixed style={{ height: 30 }} />
              <SplitLayout minSize="20%" maxSize="50%" style={{ width: 'auto' }} />
              <Auto />
            </FlexLayout>
          </>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="SplitLayout">
        <p>实现分割窗体的布局，可以拉动调整大小</p>
        <p>需要配合FlexLayout一起使用</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'SplitLayout',
            data: [
              {
                params: 'maxSize',
                desc: '最大距离，可以使数值或是字符串的百分比',
                type: 'string | number',
                defaultVal: '100%',
              },
              {
                params: 'minSize',
                desc: '最小距离，可以使数值或是字符串的百分比',
                type: 'string | number',
                defaultVal: '10',
              },
              {
                params: 'onCanDrag',
                desc: '是否可以拖动',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onDragStarted',
                desc: '多动开始',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onDragFinished',
                desc: '拖动结束',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onOut',
                desc: '移出拖动范围',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '拖动变化',
                type: 'Function',
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
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
