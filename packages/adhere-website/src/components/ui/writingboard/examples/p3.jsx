import React, { useState } from 'react';

import { WritingBoard } from '@baifendian/adhere';

export default () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <p>签名</p>
      <div style={{ width: 200, height: 300, border: '1px solid #ccc' }}>
        <WritingBoard.Signature value={value} onChange={(v) => setValue(v)} />
      </div>
    </div>
  );
};
