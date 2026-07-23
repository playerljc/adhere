import React from 'react';

import CurrencySymbol from '../src';

import '../src/index.less';

const codes = [
  CurrencySymbol.currencies.CNY,
  CurrencySymbol.currencies.USD,
  CurrencySymbol.currencies.EUR,
  CurrencySymbol.currencies.GBP,
  CurrencySymbol.currencies.JPY,
  CurrencySymbol.currencies.HKD,
  CurrencySymbol.currencies.KRW,
  CurrencySymbol.currencies.AOA,
];

export default () => {
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {codes.map((code) => (
        <div key={code}>
          {code}：
          <CurrencySymbol amount={12345.67} code={code} />
        </div>
      ))}
    </div>
  );
};
