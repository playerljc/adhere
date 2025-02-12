import React, { useRef, useState } from 'react';

import WritingBoard from '../src/index';

import '@baifendian/adhere-ui-flexlayout/es/index.less';

import '../src/index.less';
import './index.less';

export default () => {
  const [value, setValue] = useState('');

  const ref = useRef();

  return (
    <div>
      <p
        onClick={() => {
          console.log(ref.current.isEmpty());
        }}
      >
        签名
      </p>
      <div style={{ width: 200, height: 300, border: '1px solid #ccc' }}>
        <WritingBoard.MobileSignature ref={ref} value={value} onChange={(v) => setValue(v)} />
      </div>
    </div>
  );
};
