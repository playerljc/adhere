import React from 'react';

import DateDisplay from '../src/index';

const value = Date.now();

export default () => {
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div>
        YYYY-MM-DD：
        <DateDisplay.DateDisplay value={value} format="YYYY-MM-DD" />
      </div>
      <div>
        YYYY-MM-DD HH:mm:ss：
        <DateDisplay.DateDisplay value={value} format="YYYY-MM-DD HH:mm:ss" />
      </div>
      <div>
        L LTS：
        <DateDisplay.DateDisplay value={value} format="L LTS" />
      </div>
    </div>
  );
};
