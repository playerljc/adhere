import React, { useState } from 'react';

import { WritingBoard } from '@baifendian/adhere';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import Simple from './simple';

export default () => {
  const ref1 = React.createRef();

  const [value, setValue] = useState('');

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
                title: '简易写字板',
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
          {
            id: `p3`,
            name: `签名`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '签名',
                info: '签名',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { WritingBoard } from '@baifendian/adhere';

  export default () => {
    const [value, setValue] = useState('');

    return (
      <div>
        <p>签名</p>
        <div style={{ width: 200, height: 300, border: '1px solid #ccc' }}>
          <WritingBoard.Signature value={value} onChange={(v) => setValue(v)} />
        </div>
      </div>
    )
  };
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <div>
                <p>签名</p>
                <div style={{ width: 200, height: 300, border: '1px solid #ccc' }}>
                  <WritingBoard.Signature value={value} onChange={(v) => setValue(v)} />
                </div>
              </div>
            ),
          },
        ]}
      />

      <PropsSection
        title="WritingBoard"
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
                params: 'defaultMode',
                desc: '绘制模式',
                type: `
                  {
                    // 直线
                    LINE = 'line',
                    // 矩形
                    RECTANGLE = 'rectangle',
                    // 圆形
                    CIRCLE = 'circle',
                    // 三角形
                    TRIANGLE = 'triangle',
                    // 自由绘制
                    FREE = 'free',
                    // 橡皮
                    RUBBER = 'rubber',
                  }
                `,
                defaultVal: 'line',
              },
              {
                params: 'defaultStrokeStyle',
                desc: '线条颜色',
                type: 'string',
                defaultVal: '#000',
              },
              {
                params: 'defaultLineWidth',
                desc: '线条宽度',
                type: 'number',
                defaultVal: '1',
              },
              {
                params: 'resizeTime',
                desc: '防抖的事件',
                type: 'number',
                defaultVal: '300',
              },
            ],
          },
        ]}
      />

      <PropsSection
        title="Signature"
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
                params: 'modalProps',
                desc: '弹出窗口设置',
                type: `ModalProps`,
                defaultVal: '',
              },
              {
                params: 'coreProps',
                desc: 'SignatureCore设置',
                type: 'SignatureCoreProps',
                defaultVal: '',
              },
              {
                params: 'value',
                desc: 'base64',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '获取base64',
                type: '(base64?: string) => void',
                defaultVal: '',
              },
            ],
          },
        ]}
      />

      <PropsSection
        title="SignatureCore"
        config={[
          {
            border: true,
            title: '属性',
            data: [
              {
                params: 'defaultWidth',
                desc: '线条默认宽度',
                type: 'number',
                defaultVal: '2',
              },
              {
                params: 'defaultColor',
                desc: '默认颜色',
                type: 'string',
                defaultVal: '#000',
              },
              {
                params: 'wrapProps',
                desc: '最外层配置',
                type: `SignatureCoreWrapProps`,
                defaultVal: '',
              },
              {
                params: 'toolProps',
                desc: '工具栏设置',
                type: 'SignatureCoreToolProps',
                defaultVal: '',
              },
              {
                params: 'areaProps',
                desc: '编辑区设置',
                type: 'SignatureCoreAreaProps',
                defaultVal: '',
              },
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="WritingBoard"
        config={[
          {
            border: true,
            title: 'WritingBoard',
            data: [
              {
                name: 'setMode',
                desc: '设置模式',
                modifier: 'public',
                params: [
                  {
                    name: 'mode',
                    desc: '模式',
                    type: `
                      {
                        // 直线
                        LINE = 'line',
                        // 矩形
                        RECTANGLE = 'rectangle',
                        // 圆形
                        CIRCLE = 'circle',
                        // 三角形
                        TRIANGLE = 'triangle',
                        // 自由绘制
                        FREE = 'free',
                        // 橡皮
                        RUBBER = 'rubber',
                      }
                    `,
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'setStrokeStyle',
                desc: '设置描边样式',
                modifier: 'public',
                params: [
                  {
                    name: 'style',
                    desc: '样式',
                    type: `style`,
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'setLineWidth',
                desc: '设置线条样式',
                modifier: 'public',
                params: [
                  {
                    name: 'width',
                    desc: '样式',
                    type: `number`,
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'clear',
                desc: '清空画布',
                modifier: 'public',
                params: [],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'toDataURL',
                desc: '获取画布数据',
                modifier: 'public',
                params: [
                  {
                    name: 'backgroundColor',
                    desc: '背景颜色',
                    type: `string`,
                    defaultVal: '#fff',
                    required: '',
                  },
                  {
                    name: 'type',
                    desc: 'mimeType',
                    type: `string`,
                    defaultVal: 'image/png',
                    required: '',
                  },
                  {
                    name: 'quality',
                    desc: '图片质量',
                    type: `number`,
                    defaultVal: '1.0',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="SignatureCore"
        config={[
          {
            border: true,
            title: 'SignatureCore',
            data: [
              {
                name: 'save',
                desc: '保存',
                modifier: 'public',
                params: [
                  {
                    name: 'backgroundColor',
                    desc: '背景颜色',
                    type: `string`,
                    defaultVal: '#fff',
                    required: '',
                  },
                  {
                    name: 'type',
                    desc: 'mimeType',
                    type: `string`,
                    defaultVal: 'image/png',
                    required: '',
                  },
                  {
                    name: 'quality',
                    desc: '图片质量',
                    type: `number`,
                    defaultVal: '1.0',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="Signature"
        config={[
          {
            border: true,
            title: 'Signature',
            data: [
              {
                name: 'isEmpty',
                desc: '判断是否为空',
                modifier: 'public',
                params: [
                  {
                    name: 'value',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
