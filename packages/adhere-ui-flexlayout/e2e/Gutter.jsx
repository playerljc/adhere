import { Card, Slider, Space } from 'antd';
import React, { useMemo, useState } from 'react';

import FlexLayout from '../src/index';

import '../src/index.less';
import './index.less';

const { Fixed } = FlexLayout;

const gutterMarks = { 0: 8, 1: 16, 2: 24, 3: 32, 4: 40, 5: 48 };
const colCountMarks = { 0: 2, 1: 3, 2: 4, 3: 6, 4: 8, 5: 12 };

export default () => {
  const [gutterKey, setGutterKey] = useState(1);
  const [vgutterKey, setVgutterKey] = useState(1);
  const [colCountKey, setColCountKey] = useState(2);

  const colCount = colCountMarks[colCountKey];
  const span = useMemo(() => 24 / colCount, [colCount]);

  return (
    <div style={{ padding: 16 }}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        <div>
          <p>Horizontal Gutter (px)</p>
          <Slider
            min={0}
            max={5}
            value={gutterKey}
            onChange={setGutterKey}
            marks={gutterMarks}
            step={null}
            tooltip={{ formatter: (value) => gutterMarks[value] }}
          />
        </div>

        <div>
          <p>Vertical Gutter (px)</p>
          <Slider
            min={0}
            max={5}
            value={vgutterKey}
            onChange={setVgutterKey}
            marks={gutterMarks}
            step={null}
            tooltip={{ formatter: (value) => gutterMarks[value] }}
          />
        </div>

        <div>
          <p>Column Count</p>
          <Slider
            min={0}
            max={5}
            value={colCountKey}
            onChange={setColCountKey}
            marks={colCountMarks}
            step={null}
            tooltip={{ formatter: (value) => colCountMarks[value] }}
          />
        </div>

        <div style={{ height: 280 }}>
          <FlexLayout
            gutter={[gutterMarks[vgutterKey], gutterMarks[gutterKey]]}
            direction="horizontal"
            style={{ height: '100%' }}
          >
            {Array.from({ length: colCount }).map((_, index) => (
              <Fixed key={index} span={span} className="col">
                <Card size="small">{`col-${span}`}</Card>
              </Fixed>
            ))}
          </FlexLayout>
        </div>
      </Space>
    </div>
  );
};
