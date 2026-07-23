import { Radio } from 'antd';
import React, { useState } from 'react';

import { MAP_TYPE_ADMINISTRATIVE, MAP_TYPE_SATELLITE, OLMap } from '../src/index';

import '../src/index.less';
import './index.less';

/**
 * MapTypeSwitch
 * @description type：administrative / satellite
 */
export default () => {
  const [type, setType] = useState(MAP_TYPE_ADMINISTRATIVE);

  return (
    <div className="Wrap">
      <div className="Toolbar">
        <Radio.Group
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <Radio.Button value={MAP_TYPE_ADMINISTRATIVE}>行政图</Radio.Button>
          <Radio.Button value={MAP_TYPE_SATELLITE}>卫星图</Radio.Button>
        </Radio.Group>
      </div>
      <OLMap key={type} type={type} style={{ height: '100%' }} />
    </div>
  );
};
