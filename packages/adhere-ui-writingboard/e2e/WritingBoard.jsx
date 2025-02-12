import { Button, Card, Radio, Select, Space } from 'antd';
import React, { useRef, useState } from 'react';
import { SketchPicker } from 'react-color';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import WritingBoard from '../src/index';

import '@baifendian/adhere-ui-flexlayout/es/index.less';

import '../src/index.less';
import './index.less';

const { Option } = Select;

export default () => {
  const ref = useRef();
  const [mode, setMode] = useState('line');
  const [color, setColor] = useState('#000');
  const [width, setWidth] = useState(2);

  return (
    <FlexLayout direction="horizontal" className="Wrap">
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
                  const base64 = ref.current.toDataURL('#fff', 'image/png', 1.0);

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
