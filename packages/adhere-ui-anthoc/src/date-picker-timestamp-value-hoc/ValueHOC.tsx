import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import React, { useMemo } from 'react';
import type { FC } from 'react';

import DatePicker from '../date-picker';
import type { DatePickerTimestampValueHOCProps } from '../types';

dayjs.extend(weekOfYear);
dayjs.extend(quarterOfYear);

/**
 * ValueHOC
 * @param defaultValue
 * @param value
 * @param onChange
 * @param type
 * @param props
 * @constructor
 */
const ValueHOC: FC<DatePickerTimestampValueHOCProps> = ({
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
      year: _value.year(),
      quarter: _value.quarter(),
      month: _value.month(),
      week: _value.week(),
      day: _value.day(),
      date: _value.date(),
      hour: _value.hour(),
      minute: _value.minute(),
      second: _value.second(),
    });
  };

  return (
    <DatePicker
      {...props}
      defaultValue={targetDefaultValue}
      value={targetValue}
      onChange={_onChange}
    />
  );
};

export default ValueHOC;
