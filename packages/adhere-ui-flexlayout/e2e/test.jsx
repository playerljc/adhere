import { Card, Slider } from 'antd';
import React, { useState } from 'react';

import { Space } from '@baifendian/adhere';

import FlexLayout from '../src/index';

import 'antd/dist/reset.css';

import '../src/index.less';
import './index.less';

const { Fixed } = FlexLayout;

export default () => {
  const [gutterKey, setGutterKey] = useState(1);
  const [vgutterKey, setVgutterKey] = useState(1);
  const [colCountKey, setColCountKey] = useState(1);

  const gutters = {};
  const vgutters = {};
  const colCounts = {};

  [8, 16, 24, 32, 40, 48].forEach((value, i) => {
    gutters[i] = value;
  });
  [8, 16, 24, 32, 40, 48].forEach((value, i) => {
    vgutters[i] = value;
  });
  [1, 2, 3, 4, 6, 8, 12].forEach((value, i) => {
    colCounts[i] = value;
  });

  /*return (
    <FlexLayout style={{ height: '100%' }} gutter={0} direction="vertical">
      <Fixed span={6}>Fixed</Fixed>
      <Fixed span={6}>Fixed</Fixed>
      <Fixed span={6}>Fixed</Fixed>
      <Auto>Auto</Auto>
    </FlexLayout>
  );*/

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

      <div style={{ height: 500 }}>
        <FlexLayout
          gutter={[vgutters[vgutterKey], gutters[gutterKey]]}
          direction="horizontal"
          style={{ height: '100%' }}
        >
          {Array.from({ length: colCounts[colCountKey] }).map(() => (
            <Fixed span={24 / colCounts[colCountKey]} className="col">
              {/*<div className="inner">{`col-${24 / colCounts[colCountKey]}`}</div>*/}
              <Card>{`col-${24 / colCounts[colCountKey]}`}</Card>
            </Fixed>
          ))}
        </FlexLayout>
      </div>
    </Space.Group>
  );
};
