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
      <FlexLayout.Fixed>
        <Space direction="vertical">
          <Card title="绘制模式">
            <Radio.Group
              defaultValue="line"
              value={mode}
              onChange={(v) => setMode(v)}
              buttonStyle="solid"
            >
              <Space direction="horizontal">
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
            <SketchPicker color={color} onChangeComplete={(c) => setColor(c.hex)} />
          </Card>

          <Card title="线条宽度">
            <Select value={width} onChange={(v) => setWidth(v)}>
              <Option value={2}>2</Option>
              <Option value={3}>3</Option>
              <Option value={4}>4</Option>
              <Option value={5}>5</Option>
              <Option value={6}>6</Option>
            </Select>
          </Card>

          <Card title="操作">
            <Space direction="horizontal">
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

      <FlexLayout.Auto fit>
        <WritingBoard ref={ref} />
      </FlexLayout.Auto>
    </FlexLayout>
  );
};
