import dayjs from 'dayjs';
import React, { useState } from 'react';

import QuickRangeDate from '../src/index';

import '../src/index.less';

export default () => {
  const [value, setValue] = useState({
    type: 'a-d',
    value: 7,
  });

  return (
    <div style={{ padding: 16 }}>
      <QuickRangeDate
        value={value}
        radioGroupProps={{
          size: 'small',
          buttonStyle: 'outline',
        }}
        rangePickerProps={{
          showTime: true,
          format: 'YYYY-MM-DD HH:mm',
        }}
        config={[
          { type: 'a-d', value: 7, label: '近7天' },
          { type: 'a-w', value: 2, label: '近2周' },
          { type: 'a-M', value: 1, label: '近1月' },
          {
            type: 'custom',
            label: '自定义区间',
          },
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
