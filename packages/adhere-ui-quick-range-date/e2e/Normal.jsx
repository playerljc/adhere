import dayjs from 'dayjs';
import React, { useState } from 'react';

import QuickRangeDate from '../src/index';

import '../src/index.less';

export default () => {
  const [value, setValue] = useState({
    type: 'custom',
    value: [],
    start: dayjs().subtract(2, 'day').valueOf(),
    end: dayjs().subtract(1, 'day').valueOf(),
  });

  return (
    <QuickRangeDate
      value={value}
      config={[
        {
          type: 'a-d',
          value: 1,
          render: () => (
            <div>
              <span>1</span>
              <span>2</span>
            </div>
          ),
        },
        {
          type: 'a-w',
          value: 1,
        },
        {
          type: 'a-M',
          value: 1,
        },
        {
          type: 'a-Q',
          value: 1,
        },
        {
          type: 'a-y',
          value: 1,
        },
        {
          type: 'a-h',
          value: 1,
        },
        {
          type: 'a-m',
          value: 1,
        },
        {
          type: 'a-s',
          value: 1,
        },
        {
          type: 'a-ms',
          value: 1,
        },
        {
          type: 'custom',
        },
      ]}
      onChange={(value) => {
        console.log(value);
        setValue(value);
      }}
    />
  );
};
