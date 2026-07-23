import React from 'react';

import CurrencySymbol from '../src';

import '../src/index.less';

export default () => {
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        top：
        <CurrencySymbol amount={19999} symbolSize="large" align="top" />
      </div>
      <div>
        center：
        <CurrencySymbol amount={19999} symbolSize="large" align="center" />
      </div>
      <div>
        bottom：
        <CurrencySymbol amount={19999} symbolSize="large" align="bottom" />
      </div>
    </div>
  );
};
