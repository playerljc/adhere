import React from 'react';

import CurrencySymbol from '../src';

import '../src/index.less';

export default () => {
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        默认 CNY：
        <CurrencySymbol amount={19999} />
      </div>
      <div>
        USD：
        <CurrencySymbol amount={19999} code={CurrencySymbol.currencies.USD} />
      </div>
      <div>
        EUR：
        <CurrencySymbol amount={19999} code={CurrencySymbol.currencies.EUR} />
      </div>
    </div>
  );
};
