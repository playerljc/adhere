import React, { useState } from 'react';

import { FontSizeSetting, Space } from '@baifendian/adhere';

export default () => {
  const [fontSize, setFontSize] = useState(12);

  return (
    <>
      <FontSizeSetting
        min={12}
        max={40}
        step={1}
        onChange={(size) => {
          setFontSize(size);
        }}
      />

      <Space direction="vertical" />

      <p style={{ fontSize }}>我是一个粉刷匠</p>
    </>
  );
};
