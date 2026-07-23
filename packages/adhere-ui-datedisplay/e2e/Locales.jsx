import React from 'react';

import DateDisplay from '../src/index';

const value = Date.now();
const locales = ['zh', 'en', 'ar', 'pt'];

export default () => {
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {locales.map((locale) => (
        <div key={locale}>
          locale={locale} / LL：
          <DateDisplay.DateDisplay value={value} locale={locale} format="LL" />
        </div>
      ))}
      {locales.map((locale) => (
        <div key={`${locale}-llll`}>
          locale={locale} / DateDisplayLLLL：
          <DateDisplay.DateDisplayLLLL value={value} locale={locale} />
        </div>
      ))}
    </div>
  );
};
