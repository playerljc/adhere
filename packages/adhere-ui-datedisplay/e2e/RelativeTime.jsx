import React from 'react';

import DateDisplay from '../src/index';

const past = Date.now() - 3 * 24 * 60 * 60 * 1000;
const future = Date.now() + 5 * 24 * 60 * 60 * 1000;

export default () => {
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div>
        FromNow（3 天前）：
        <DateDisplay.DateDisplayFromNow value={past} />
      </div>
      <div>
        FromNow en：
        <DateDisplay.DateDisplayFromNow value={past} locale="en" />
      </div>
      <div>
        ToNow（5 天后）：
        <DateDisplay.DateDisplayToNow value={future} />
      </div>
      <div>
        ToNow en：
        <DateDisplay.DateDisplayToNow value={future} locale="en" />
      </div>
      <div>
        FromNow now=true：
        <DateDisplay.DateDisplayFromNow value={past} now />
      </div>
    </div>
  );
};
