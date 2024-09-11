// import dayjs from 'dayjs';
import React, { useState } from 'react';

// import TimePickerTimestampValueHOC from '../src/time-picker-timestamp-value-hoc';
import TimePickerTimestampValueHOC from '../src/time-picker-format-value-hoc';

export default () => {
  const [value, setValue] = useState(/*1703030400000*/);

  // 年     2023
  // 季度   2023 q1
  // 月
  // 周
  // 日
  // 小时/分/秒

  debugger;

  return (
    <TimePickerTimestampValueHOC
      // defaultValue={1703030400000}
      // showTime
      // picker="year"
      // format="YYYY-MM-DD HH:mm:ss"
      value={value}
      // type="seconds"
      onChange={(val, dateString, datejs, extra) => {
        debugger;
        setValue(val);
      }}
    />
  );
};
