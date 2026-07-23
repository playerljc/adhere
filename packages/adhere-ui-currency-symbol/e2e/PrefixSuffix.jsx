import React from 'react';

import CurrencySymbol from '../src';

import '../src/index.less';

export default () => {
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        prefix / suffix：
        <CurrencySymbol amount={19999} prefix={<span>合计 </span>} suffix={<span> 元</span>} />
      </div>
    </div>
  );
};
