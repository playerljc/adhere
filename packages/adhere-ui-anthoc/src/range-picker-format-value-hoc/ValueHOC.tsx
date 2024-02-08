import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import React, { useMemo } from 'react';
import type { FC } from 'react';

import RangePicker from '../range-picker';
import { RangePickerFormatValueHOCProps } from '../types';

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
const ValueHOC: FC<RangePickerFormatValueHOCProps> = ({
  defaultValue,
  value,
  onChange,
  ...props
}) => {
  function originValueToDateJSObject(_value) {
    if (_value === null || _value === undefined) return _value;

    if (!Array.isArray(_value)) return null;

    if (!_value.length) return [];

    return [dayjs(_value[0]), dayjs(_value[1])];
  }

  const targetValue = useMemo(() => originValueToDateJSObject(value), [value]);

  const targetDefaultValue = useMemo(() => originValueToDateJSObject(defaultValue), [defaultValue]);

  function dateJSObjectToExtra(_dateJSObject) {
    return {
      year: _dateJSObject.year(),
      quarter: _dateJSObject.quarter(),
      month: _dateJSObject.month(),
      week: _dateJSObject.week(),
      day: _dateJSObject.day(),
      date: _dateJSObject.date(),
      hour: _dateJSObject.hour(),
      minute: _dateJSObject.minute(),
      second: _dateJSObject.second(),
    };
  }

  const _onChange = (_value, dateString) => {
    onChange?.(
      _value && !!_value.length
        ? [_value[0].format(props.format ?? 'L LTS'), _value[1].format(props.format ?? 'L LTS')]
        : _value,
      dateString,
      _value,
      _value && !!_value.length
        ? [dateJSObjectToExtra(_value[0]), dateJSObjectToExtra(_value[1])]
        : null,
    );
  };

  return (
    <RangePicker
      {...props}
      defaultValue={targetDefaultValue}
      value={targetValue}
      onChange={_onChange}
    />
  );
};

export default ValueHOC;
