import React from 'react';

import { OLMap } from '../src/index';

import '../src/index.less';
import './index.less';

/**
 * BasicOLMap
 * @description 基础行政地图展示（由原 test.jsx 重命名）
 */
export default () => {
  return (
    <div style={{ height: '100%' }}>
      <OLMap
        style={{ height: '100%' }}
        // fitZoom={13}
        // minZoom={3}
        // maxZoom={20}
        // extent={[
        //   [-180, -90],
        //   [180, 90],
        // ]}
      />
    </div>
  );
};
