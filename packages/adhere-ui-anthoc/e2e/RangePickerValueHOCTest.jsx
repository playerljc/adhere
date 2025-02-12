// import dayjs from 'dayjs';
import React, { useState } from 'react';

// import RangePickerValueHOCTest from '../src/range-picker-format-value-hoc';
import RangePickerValueHOCTest from '../src/range-picker-timestamp-value-hoc';

export default () => {
  const [value, setValue] = useState([]);

  // 年     2023
  // 季度   2023 q1
  // 月
  // 周
  // 日
  // 小时/分/秒

  return (
    <RangePickerValueHOCTest
      // defaultValue={1703030400000}
      // showTime
      // picker="week"
      // format="YYYY-MM-DD"
      type={['seconds', 'milliseconds']}
      value={value}
      onChange={(val, dateString, datejs, extra) => {
        setValue(val);
      }}
    />
  );
};
