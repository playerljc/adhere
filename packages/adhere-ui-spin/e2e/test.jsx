import React, { useState } from 'react';

import Spin from '../src';

import '../src/index.less';

export default () => {
  const [show, setShow] = useState(false);
  const [size, setSize] = useState('default');

  return (
    <div>
      <div style={{ position: 'relative', marginTop: 100, height: 200 }}>
        <Spin spinning={show} text="123" size={size} />
      </div>

      <div>
        <select
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        >
          <option>small</option>
          <option>default</option>
          <option>large</option>
        </select>

        <button
          onClick={() => {
            setShow(true);
          }}
        >
          打开
        </button>

        <button
          onClick={() => {
            setShow(false);
          }}
        >
          close
        </button>
      </div>
    </div>
  );
};
