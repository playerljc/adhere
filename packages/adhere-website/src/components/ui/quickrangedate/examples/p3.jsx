import { DatePicker, Select } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react';

import { QuickRangeDate } from '@baifendian/adhere';

export default () => {
  const [value, setValue] = useState({
    type: 'custom',
    value: [],
    start: dayjs().subtract(2, 'day').valueOf(),
    end: dayjs().subtract(1, 'day').valueOf(),
  });

  const config = [
    {
      type: 'a-d',
      value: 1,
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
  ];

  return (
    <QuickRangeDate
      value={value}
      config={config}
      onChange={(value) => {
        console.log(value);
        setValue(value);
      }}
    >
      {({ defaultElement, value, onChange }) => {
        return (
          <div>
            <Select
              value={QuickRangeDate.stringValue(value)}
              options={config.map((t) => ({
                label: QuickRangeDate.getLabel(t),
                value: QuickRangeDate.stringValue(t),
              }))}
              onChange={(_value) => {
                const { type, value } = QuickRangeDate.getValueEntityByStringValue(_value);

                onChange({
                  type,
                  value,
                });
              }}
            />

            {value?.type === 'custom' && (
              <DatePicker.RangePicker
                value={QuickRangeDate.numberToDayjs([value?.start, value?.end])}
                onChange={(days) => {
                  const numbers = QuickRangeDate.datesToNumbers(days);

                  onChange({
                    type: 'custom',
                    value: undefined,
                    start: numbers[0],
                    end: numbers[1],
                  });
                }}
              />
            )}
          </div>
        );
      }}
    </QuickRangeDate>
  );
};
