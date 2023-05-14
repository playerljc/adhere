import React, { useRef, useState } from 'react';

import * as PolygonSelection from '../src/index';

import '@baifendian/adhere-ui-flexlayout/es/index.less';

import '../src/index.less';
import './index.less';

export default () => {
  const [value, setValue] = useState('');

  const ref = useRef();

  return (
    <div>
      <p onClick={() => {}}>图像裁剪</p>
      <div style={{ width: 200, height: 300, border: '1px solid #ccc' }}>
        <PolygonSelection.default.PolygonSelection.Cropping
          ref={ref}
          value={value}
          onChange={(v) => setValue(v)}
        />
      </div>
    </div>
  );
};
