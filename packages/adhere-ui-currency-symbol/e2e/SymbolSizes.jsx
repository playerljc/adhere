import React from 'react';

import CurrencySymbol from '../src';

import '../src/index.less';

export default () => {
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        small：
        <CurrencySymbol amount={19999} symbolSize="small" />
      </div>
      <div>
        middle：
        <CurrencySymbol amount={19999} symbolSize="middle" />
      </div>
      <div>
        large：
        <CurrencySymbol amount={19999} symbolSize="large" />
      </div>
    </div>
  );
};
