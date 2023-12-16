import { Slider } from 'antd';
import React, { useState } from 'react';

import { SliderScale, Space } from '@baifendian/adhere';

export default () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Slider
        min={0}
        max={60}
        value={value}
        onChange={(v) => {
          setValue(v);
        }}
      />

      <Space direction="vertical" />

      <SliderScale
        min={0}
        max={60}
        step={1}
        interval={20}
        value={value}
        onChange={(v) => {
          setValue(v);
        }}
      />
    </>
  );
};
