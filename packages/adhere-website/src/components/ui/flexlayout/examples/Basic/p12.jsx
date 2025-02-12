import { Slider } from 'antd';
import React, { useState } from 'react';

import { FlexLayout, Space } from '@baifendian/adhere';

import style from '../../index.less';

const { Fixed } = FlexLayout;

export default () => {
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
        <FlexLayout gutter={[hVgutters[hVgutterKey], hGutters[hGutterKey]]} direction="horizontal">
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
  );
};
