import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import type { FC } from 'react';

import TimePicker from '../time-picker';
import type { TimePickerTimestampValueHOCProps } from '../types';

/**
 * ValueHOC
 * @param defaultValue
 * @param value
 * @param onChange
 * @param type
 * @param props
 * @constructor
 */
const ValueHOC: FC<TimePickerTimestampValueHOCProps> = ({
  defaultValue,
  value,
  onChange,
  type = 'milliseconds',
  ...props
}) => {
  function originValueToDateJSObject(_value) {
    if (_value === null || _value === undefined) return _value;

    if (type === 'seconds') {
      return dayjs.unix(_value);
    }

    return dayjs(_value);
  }

  function changeValueMillisecondsToTargetValue(milliseconds) {
    if (type === 'seconds') {
      return Math.round(milliseconds / 1000);
    }

    return milliseconds;
  }

  const targetValue = useMemo(() => originValueToDateJSObject(value), [value]);

  const targetDefaultValue = useMemo(() => originValueToDateJSObject(defaultValue), [defaultValue]);

  const _onChange = (_value, dateString) => {
    onChange?.(changeValueMillisecondsToTargetValue(_value.valueOf()), dateString, _value, {
      hour: _value.hour(),
      minute: _value.minute(),
      second: _value.second(),
    });
  };

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
