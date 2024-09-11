import React, { useState } from 'react';

import { WritingBoard } from '@baifendian/adhere';

import styles from './examples.less';

export default () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <p>签名</p>
      <div className={styles.Wrapper} style={{ border: '1px solid #ccc' }}>
        <WritingBoard.Signature value={value} onChange={(v) => setValue(v)} />
      </div>
    </div>
  );
};
