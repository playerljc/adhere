import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import React, { useMemo } from 'react';
import type { FC } from 'react';

import TimePicker from '../time-picker';
import type { TimePickerFormatValueHOCProps } from '../types';

dayjs.extend(weekOfYear);
dayjs.extend(quarterOfYear);

/**
 * ValueHOC
 * @param defaultValue
 * @param value
 * @param onChange
 * @param props
 * @constructor
 */
const ValueHOC: FC<TimePickerFormatValueHOCProps> = ({
  defaultValue,
  value,
  onChange,
  ...props
}) => {
  function originValueToDateJSObject(_value) {
    if (_value === null || _value === undefined) return _value;

    const ymd = dayjs().format('YYYY-MM-DD');
    return dayjs(`${ymd} ${_value}`);
  }

  const targetValue = useMemo(() => originValueToDateJSObject(value), [value]);

  const targetDefaultValue = useMemo(() => originValueToDateJSObject(defaultValue), [defaultValue]);

  function _onChange(_value, dateString) {
    onChange?.(_value.format(props.format ?? 'HH:mm:ss'), dateString, _value, {
      hour: _value.hour(),
      minute: _value.minute(),
      second: _value.second(),
    });
  }

  return (
    <TimePicker
      {...props}
      defaultValue={targetDefaultValue}
      value={targetValue}
      onChange={_onChange}
    />
  );
};

export default ValueHOC;
