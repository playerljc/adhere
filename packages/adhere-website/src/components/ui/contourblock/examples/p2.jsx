import React from 'react';

import { ContourBlock } from '@baifendian/adhere';

export default () => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {Array.from({ length: 30 }).map((t, index) => (
      <ContourBlock key={index} style={{ width: '25%' }}>
        <img src="https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF" alt="" />
      </ContourBlock>
    ))}
  </div>
);
