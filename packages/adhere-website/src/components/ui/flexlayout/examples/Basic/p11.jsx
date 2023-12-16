import { Slider } from 'antd';
import React, { useState } from 'react';

import { FlexLayout, Space } from '@baifendian/adhere';

import style from '../../index.less';

const { Fixed } = FlexLayout;

export default () => {
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
              <div className={style.inner}>{`col-${24 / vColCounts[vColCountKey]}`}</div>
            </Fixed>
          ))}
        </FlexLayout>
      </div>
    </Space.Group>
  );
};
