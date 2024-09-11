import React from 'react';

import { SliderScale, Space } from '@baifendian/adhere';

export default () => {
  return (
    <>
      <SliderScale min={0} max={10} step={1} interval={5} />
      <Space direction="vertical" />
      <SliderScale min={0} max={60} step={1} interval={5} />
    </>
  );
};
