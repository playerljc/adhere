import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import React, { cloneElement, useMemo } from 'react';
import type { FC } from 'react';

import type { CalendarTimestampValueHOCProps } from '../types';

dayjs.extend(weekOfYear);
dayjs.extend(quarterOfYear);

const DEFAULT_TYPE = ['milliseconds', 'milliseconds'];

/**
 * ValueHOC
 * @param defaultValue
 * @param value
 * @param onChange
 * @param type
 * @param children
 * @param props
 * @constructor
 */
const ValueHOC: FC<CalendarTimestampValueHOCProps> = ({
  defaultValue,
  value,
  onChange,
  type = DEFAULT_TYPE,
  children,
  ...props
}) => {
  function originValueToDateObject(_value) {
    if (_value === null || _value === undefined) return _value;

    const isRangeMode = Array.isArray(_value);

    if (isRangeMode) {
      if (!Array.isArray(_value)) return null;

      if (!_value.length) return [];

      let targetType = (
        Array.isArray(type ?? DEFAULT_TYPE) ? (type ?? DEFAULT_TYPE).slice(0, 2) : DEFAULT_TYPE
      ) as string[];

      for (let i = 0; i < 2; i++) {
        if (!['seconds', 'milliseconds'].includes(targetType[i])) {
          targetType[i] = 'milliseconds';
        }
      }

      let result: any[];

      if (targetType.join() === ['seconds', 'seconds'].join()) {
        result = [dayjs.unix(_value[0]), dayjs.unix(_value[1])];
      } else if (targetType.join() === ['seconds', 'seconds'].join()) {
        result = [dayjs.unix(_value[0]), dayjs.unix(_value[1])];
      } else if (targetType.join() === ['seconds', 'milliseconds'].join()) {
        result = [dayjs.unix(_value[0]), dayjs(_value[1])];
      } else if (targetType.join() === ['milliseconds', 'seconds'].join()) {
        result = [dayjs(_value[0]), dayjs.unix(_value[1])];
      } else {
        result = [dayjs(_value[0]), dayjs(_value[1])];
      }

      return result.map((item) => item.toDate());
    }

    if (type === 'seconds') {
      return dayjs.unix(_value).toDate();
    }

    return dayjs(_value).toDate();
  }

  function millisecondsToSeconds(milliseconds) {
    return Math.round(milliseconds / 1000);
  }

  function changeValueMillisecondsToTargetValue(milliseconds) {
    const isRangeMode = Array.isArray(milliseconds);

    if (isRangeMode) {
      if (!type || !Array.isArray(type) || type.length < 2) {
        return milliseconds;
      } else if (type[0] === 'milliseconds' && type[1] === 'seconds') {
        return [milliseconds[0], millisecondsToSeconds(milliseconds[1])];
      } else if (type[0] === 'seconds' && type[1] === 'milliseconds') {
        return [millisecondsToSeconds(milliseconds[0]), milliseconds[1]];
      } else if (type[0] === 'seconds' && type[1] === 'seconds') {
        return [millisecondsToSeconds(milliseconds[0]), millisecondsToSeconds(milliseconds[1])];
      }
    }

    if (type === 'seconds') {
      return millisecondsToSeconds(milliseconds);
    }

    return milliseconds;
  }

  const targetValue = useMemo(() => originValueToDateObject(value), [value]);

  const targetDefaultValue = useMemo(() => originValueToDateObject(defaultValue), [defaultValue]);

  const _onChange = (_date) => {
    if (_date) {
      let params: any;

      if (Array.isArray(_date)) {
        params = changeValueMillisecondsToTargetValue([_date[0].getTime(), _date[1].getTime()]);
      } else {
        params = changeValueMillisecondsToTargetValue(_date.getTime());
      }

      onChange?.(params);

      return;
    }

    onChange?.(_date);
  };

  return useMemo(
    () =>
      cloneElement(
        children,
        {
          ...props,
          defaultValue: targetDefaultValue,
          value: targetValue,
          onChange: _onChange,
        },
        children.props.children,
      ),
    [props, targetDefaultValue, targetValue, children],
  );
};

export default ValueHOC;
