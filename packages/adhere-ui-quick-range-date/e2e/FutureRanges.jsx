import dayjs from 'dayjs';
import React, { useState } from 'react';

import QuickRangeDate from '../src/index';

import '../src/index.less';

export default () => {
  const [value, setValue] = useState({
    type: 'b-d',
    value: 7,
  });

  return (
    <div style={{ padding: 16 }}>
      <QuickRangeDate
        value={value}
        config={[
          { type: 'b-d', value: 7 },
          { type: 'b-w', value: 1 },
          { type: 'b-M', value: 3 },
          { type: 'b-Q', value: 1 },
          { type: 'b-y', value: 1 },
          { type: 'b-h', value: 24 },
          { type: 'b-m', value: 60 },
          { type: 'b-s', value: 60 },
          { type: 'b-ms', value: 1000 },
          { type: 'custom' },
        ]}
        onChange={(next) => {
          console.log(next);
          setValue(next);
        }}
      />
      <pre style={{ marginTop: 16, padding: 12, background: '#f5f5f5' }}>
        {JSON.stringify(
          {
            ...value,
            startText: value.start ? dayjs(value.start).format('YYYY-MM-DD HH:mm:ss') : undefined,
            endText: value.end ? dayjs(value.end).format('YYYY-MM-DD HH:mm:ss') : undefined,
          },
          null,
          2,
        )}
      </pre>
    </div>
  );
};
