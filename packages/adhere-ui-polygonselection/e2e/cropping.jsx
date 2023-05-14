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
      <div style={{ width: 100, height: 100, border: '1px solid #ccc', borderRadius: '50%' }}>
        <PolygonSelection.default.PolygonSelection.Cropping
          ref={ref}
          value={value}
          onChange={(v) => setValue(v)}
        />
      </div>
    </div>
  );
};
