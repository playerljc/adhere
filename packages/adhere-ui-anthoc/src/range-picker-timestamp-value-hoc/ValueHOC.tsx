import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import React, { useMemo } from 'react';
import type { FC } from 'react';

import RangePicker from '../range-picker';
import type { RangePickerTimestampValueHOCProps } from '../types';

dayjs.extend(weekOfYear);
dayjs.extend(quarterOfYear);

const DEFAULT_TYPE = ['milliseconds', 'milliseconds'];

/**
 * ValueHOC
 * @param defaultValue
 * @param value
 * @param onChange
 * @param type
 * @param props
 * @constructor
 */
const ValueHOC: FC<RangePickerTimestampValueHOCProps> = ({
  defaultValue,
  value,
  onChange,
  type = DEFAULT_TYPE,
  ...props
}) => {
  function originValueToDateJSObject(_value) {
    if (_value === null || _value === undefined) return _value;

    if (!Array.isArray(_value)) return null;

    if (!_value.length) return [];

    let targetType = Array.isArray(type ?? DEFAULT_TYPE)
      ? (type ?? DEFAULT_TYPE).slice(0, 2)
      : DEFAULT_TYPE;

    for (let i = 0; i < 2; i++) {
      if (!['seconds', 'milliseconds'].includes(targetType[i])) {
        targetType[i] = 'milliseconds';
      }
    }

    if (targetType.join() === ['seconds', 'seconds'].join()) {
      return [dayjs.unix(_value[0]), dayjs.unix(_value[1])];
    } else if (targetType.join() === ['seconds', 'seconds'].join()) {
      return [dayjs.unix(_value[0]), dayjs.unix(_value[1])];
    } else if (targetType.join() === ['seconds', 'milliseconds'].join()) {
      return [dayjs.unix(_value[0]), dayjs(_value[1])];
    } else if (targetType.join() === ['milliseconds', 'seconds'].join()) {
      return [dayjs(_value[0]), dayjs.unix(_value[1])];
    }

    return [dayjs(_value[0]), dayjs(_value[1])];
  }

  function millisecondsToSeconds(milliseconds) {
    return Math.round(milliseconds / 1000);
  }

  function changeValueMillisecondsToTargetValue(milliseconds) {
    if (!type || !Array.isArray(type) || type.length < 2) {
      return milliseconds;
    } else if (type[0] === 'milliseconds' && type[1] === 'seconds') {
      return [milliseconds[0], millisecondsToSeconds(milliseconds[1])];
    } else if (type[0] === 'seconds' && type[1] === 'milliseconds') {
      return [millisecondsToSeconds(milliseconds[0]), milliseconds[1]];
    } else if (type[0] === 'seconds' && type[1] === 'seconds') {
      return [millisecondsToSeconds(milliseconds[0]), millisecondsToSeconds(milliseconds[1])];
    }

    return milliseconds;
  }

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

  const targetValue = useMemo(() => originValueToDateJSObject(value), [value]);

  const targetDefaultValue = useMemo(() => originValueToDateJSObject(defaultValue), [defaultValue]);

  const _onChange = (_value, dateString) => {
    onChange?.(
      _value && !!_value.length
        ? changeValueMillisecondsToTargetValue([_value[0].valueOf(), _value[1].valueOf()])
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
