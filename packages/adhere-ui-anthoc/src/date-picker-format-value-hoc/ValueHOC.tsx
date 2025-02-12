import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import React, { useMemo } from 'react';
import type { FC } from 'react';

import DatePicker from '../date-picker';
import type { DatePickerFormatValueHOCProps } from '../types';

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
const ValueHOC: FC<DatePickerFormatValueHOCProps> = ({
  defaultValue,
  value,
  onChange,
  ...props
}) => {
  function originValueToDateJSObject(_value) {
    if (_value === null || _value === undefined) return _value;

    return dayjs(_value);
  }

  const targetValue = useMemo(() => originValueToDateJSObject(value), [value]);

  const targetDefaultValue = useMemo(() => originValueToDateJSObject(defaultValue), [defaultValue]);

  function _onChange(_value, dateString) {
    onChange?.(_value.format(props.format ?? 'L LTS'), dateString, _value, {
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
  }

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
