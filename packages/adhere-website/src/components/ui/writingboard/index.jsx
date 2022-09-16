import React from 'react';

import { WritingBoard } from '@baifendian/adhere';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import Simple from './simple';

export default () => {
  const ref1 = React.createRef();

  return (
    <PlayGroundPage>
      <Section title="WritingBoard">
        <p>写字板</p>
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
                info: '基本使用',
              },
            },
            codeText: `
  import React from 'react';
  import { WritingBoard } from '@baifendian/adhere';

  export default () => (
    <div
      style={{
        position: 'relative',
        height: 300,
        overflowY: 'hidden',
        border: '1px solid #ccc',
      }}
    >
      <div style={{ height: '100%' }} ref={ref1}>
        <WritingBoard />
      </div>
    </div>
  )
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <div
                style={{
                  position: 'relative',
                  height: 300,
                  overflowY: 'hidden',
                  border: '1px solid #ccc',
                }}
              >
                <div style={{ height: '100%' }} ref={ref1}>
                  <WritingBoard />
                </div>
              </div>
            ),
          },
          {
            id: `p2`,
            name: `简易写字板`,
            cardProps: {
              description: {
                title: '建议写字板',
                info: '切换类型、颜色和粗细',
              },
            },
            type: 'PlayGroundMulit',
            config: [
              {
                title: 'index.jsx',
                mode: 'code',
                scope: { React },
                codeText: `
  import React from 'react';
  import Simple from './simple';

  export default () => <Simple />
                `,
              },
              {
                title: 'simple.jsx',
                mode: 'code',
                scope: { React },
                codeText: `
  import React, { useState, useRef } from 'react';
  import { Button, Card, Radio, Select, Space } from 'antd';
  import { SketchPicker } from 'react-color';
  import { FlexLayout, WritingBoard } from '@baifendian/adhere';

  import styles from './index.less';

  const { Option } = Select;

  export default () => {
    const ref = useRef();
    const [mode, setMode] = useState('line');
    const [color, setColor] = useState('#000');
    const [width, setWidth] = useState(2);

    return (
      <FlexLayout direction="horizontal" className={styles.Wrap}>
        <FlexLayout.Fixed style={{ width: 300 }}>
          <Space direction="vertical">
            <Card title="绘制模式">
              <Radio.Group
                defaultValue="line"
                value={mode}
                onChange={(e) => {
                  setMode(e.target.value);
                  ref.current.setMode(e.target.value);
                }}
                buttonStyle="solid"
              >
                <Space direction="horizontal" wrap>
                  <Radio.Button value="line">直线</Radio.Button>
                  <Radio.Button value="rectangle">矩形</Radio.Button>
                  <Radio.Button value="circle">圆形</Radio.Button>
                  <Radio.Button value="triangle">三角形</Radio.Button>
                  <Radio.Button value="free">自由绘制</Radio.Button>
                  <Radio.Button value="rubber">橡皮</Radio.Button>
                </Space>
              </Radio.Group>
            </Card>

            <Card title="线条颜色">
              <SketchPicker
                color={color}
                onChangeComplete={(c) => {
                  setColor(c.hex);
                  ref.current.setStrokeStyle(c.hex);
                }}
              />
            </Card>

            <Card title="线条宽度">
              <Select
                value={width}
                onChange={(v) => {
                  setWidth(v);
                  ref.current.setLineWidth(v);
                }}
              >
                <Option value={2}>2</Option>
                <Option value={3}>3</Option>
                <Option value={4}>4</Option>
                <Option value={5}>5</Option>
                <Option value={6}>6</Option>
              </Select>
            </Card>

            <Card title="操作">
              <Space direction="horizontal" wrap>
                <Button
                  type="primary"
                  onClick={() => {
                    ref.current.clear();
                  }}
                >
                  清空
                </Button>

                <Button
                  type="primary"
                  onClick={() => {
                    const base64 = ref.current.toDataURL();

                    debugger;

                    const save_link = document.createElement('a');
                    save_link.href = base64;
                    save_link.download = 'img';

                    const event = document.createEvent('MouseEvents');
                    event.initMouseEvent(
                      'click',
                      true,
                      false,
                      window,
                      0,
                      0,
                      0,
                      0,
                      0,
                      false,
                      false,
                      false,
                      false,
                      0,
                      null,
                    );
                    save_link.dispatchEvent(event);
                  }}
                >
                  保存图片
                </Button>
              </Space>
            </Card>
          </Space>
        </FlexLayout.Fixed>

        <FlexLayout.Auto fit style={{ border: '1px solid #ccc' }}>
          <WritingBoard
            ref={ref}
            defaultMode={mode}
            defaultLineWidth={width}
            defaultStrokeStyle={color}
          />
        </FlexLayout.Auto>
      </FlexLayout>
    );
  };
                `,
              },
            ],
            renderChildren: () => <Simple />,
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
                params: 'zIndex',
                desc: '层级',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'duration',
                desc: '动画持续的事件',
                type: 'number',
                defaultVal: '300',
              },
              {
                params: 'target',
                desc: '获取滚动的目标元素',
                type: '() => HtmlElement | Window',
                defaultVal: '',
              },
              {
                params: 'onTrigger',
                desc: '点击事件',
                type: '() => void',
                defaultVal: '',
              },
              {
                params: 'onScrollTop',
                desc: '滚动',
                type: '(value: number) => void',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
