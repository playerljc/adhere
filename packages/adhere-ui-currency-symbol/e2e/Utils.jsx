import React from 'react';

import CurrencySymbol, {
  formatAmount,
  getAllCurrencyCodes,
  getCurrencyInfo,
  getCurrencyName,
  getCurrencySymbol,
  isValidCurrencyCode,
} from '../src';

import '../src/index.less';

export default () => {
  const info = getCurrencyInfo(CurrencySymbol.currencies.USD);

  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'monospace' }}>
      <div>isValidCurrencyCode('USD'): {String(isValidCurrencyCode('USD'))}</div>
      <div>isValidCurrencyCode('XXX'): {String(isValidCurrencyCode('XXX'))}</div>
      <div>getCurrencySymbol('EUR'): {getCurrencySymbol('EUR')}</div>
      <div>getCurrencyName('JPY'): {getCurrencyName('JPY')}</div>
      <div>getCurrencyInfo('USD'): {JSON.stringify(info)}</div>
      <div>formatAmount(12345.67, true): {formatAmount(12345.67, true)}</div>
      <div>formatAmount(12345.67, false): {formatAmount(12345.67, false)}</div>
      <div>getAllCurrencyCodes().length: {getAllCurrencyCodes().length}</div>
      <div>CurrencySymbol.currenciesMap.size: {CurrencySymbol.currenciesMap.size}</div>
    </div>
  );
};
