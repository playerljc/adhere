import React from 'react';

import ContourBlock from '../src/index';

import '../src/index.less';
import './index.less';

/**
 * Ratio - 根据宽度计算高度
 */
export default () => {
  return (
    <div className="ContourBlockE2E-ratio">
      <div className="ContourBlockE2E-ratio-item" style={{ width: 320 }}>
        <span>16:9 / origin=width</span>
        <ContourBlock.Ratio aspectRatio="16:9" style={{ width: '100%' }}>
          <div className="ContourBlockE2E-ratio-content">16:9</div>
        </ContourBlock.Ratio>
      </div>

      <div className="ContourBlockE2E-ratio-item" style={{ width: 240 }}>
        <span>4:3 / origin=width</span>
        <ContourBlock.Ratio aspectRatio="4:3" style={{ width: '100%' }}>
          <div className="ContourBlockE2E-ratio-content">4:3</div>
        </ContourBlock.Ratio>
      </div>

      <div className="ContourBlockE2E-ratio-item" style={{ width: 160 }}>
        <span>1:1 / origin=width</span>
        <ContourBlock.Ratio aspectRatio={1} style={{ width: '100%' }}>
          <div className="ContourBlockE2E-ratio-content">1:1</div>
        </ContourBlock.Ratio>
      </div>
    </div>
  );
};
