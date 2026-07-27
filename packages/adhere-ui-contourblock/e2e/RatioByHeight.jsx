import React from 'react';

import ContourBlock from '../src/index';

import '../src/index.less';
import './index.less';

/**
 * Ratio - 根据高度计算宽度
 */
export default () => {
  return (
    <div className="ContourBlockE2E-ratio">
      <div className="ContourBlockE2E-ratio-item">
        <span>16:9 / origin=height</span>
        <ContourBlock.Ratio
          aspectRatio="16:9"
          origin="height"
          style={{ height: 180, border: '1px solid #d9d9d9' }}
        >
          <div className="ContourBlockE2E-ratio-content">16:9</div>
        </ContourBlock.Ratio>
      </div>

      <div className="ContourBlockE2E-ratio-item">
        <span>4:3 / origin=height</span>
        <ContourBlock.Ratio
          aspectRatio="4:3"
          origin="height"
          style={{ height: 180, border: '1px solid #d9d9d9' }}
        >
          <div className="ContourBlockE2E-ratio-content">4:3</div>
        </ContourBlock.Ratio>
      </div>

      <div className="ContourBlockE2E-ratio-item">
        <span>1:1 / origin=height</span>
        <ContourBlock.Ratio
          aspectRatio="1:1"
          origin="height"
          style={{ height: 180, border: '1px solid #d9d9d9' }}
        >
          <div className="ContourBlockE2E-ratio-content">1:1</div>
        </ContourBlock.Ratio>
      </div>
    </div>
  );
};
