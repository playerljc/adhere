import React from 'react';

import ContourBlock from '../src/index';

import '../src/index.less';
import './index.less';

const IMAGE_URL = 'https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF';

/**
 * 画廊
 */
export default () => {
  return (
    <div className="ContourBlockE2E-gallery">
      {Array.from({ length: 30 }).map((_, index) => (
        <ContourBlock key={index} style={{ width: '25%' }}>
          <img src={IMAGE_URL} alt={`gallery-${index + 1}`} />
        </ContourBlock>
      ))}
    </div>
  );
};
