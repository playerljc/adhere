import React from 'react';

import DateDisplay, { getGlobalLocale, getRelativeTime, isValidDate, safeFormatDate } from '../src/index';

const value = Date.now();
const past = Date.now() - 2 * 24 * 60 * 60 * 1000;

export default () => {
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'monospace' }}>
      <div>getGlobalLocale(): {getGlobalLocale()}</div>
      <div>isValidDate(value): {String(isValidDate(value))}</div>
      <div>isValidDate(null): {String(isValidDate(null))}</div>
      <div>safeFormatDate(value, 'YYYY-MM-DD'): {safeFormatDate(value, 'YYYY-MM-DD')}</div>
      <div>getRelativeTime(past): {getRelativeTime(past)}</div>
      <div>
        DateDisplay.toString：
        {DateDisplay.DateDisplay.toString({ value, format: 'YYYY-MM-DD HH:mm:ss' })}
      </div>
      <div>
        DateDisplayFromNow.toString：
        {DateDisplay.DateDisplayFromNow.toString({ value: past })}
      </div>
      <div>dayjs().format('L LTS'): {DateDisplay.dayjs(value).format('L LTS')}</div>
    </div>
  );
};
