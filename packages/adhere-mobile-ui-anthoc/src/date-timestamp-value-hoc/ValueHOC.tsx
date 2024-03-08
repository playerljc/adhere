import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import type { FC } from 'react';
import React, { cloneElement, useMemo } from 'react';

import type { DateTimestampValueHOCProps } from '../types';

dayjs.extend(weekOfYear);
dayjs.extend(quarterOfYear);

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
const ValueHOC: FC<DateTimestampValueHOCProps> = ({
  defaultValue,
  value,
  onChange,
  type = 'milliseconds',
  children,
  ...props
}) => {
  function originValueToDateObject(_value) {
    if (_value === null || _value === undefined) return _value;

    if (type === 'seconds') {
      return dayjs.unix(_value).toDate();
    }

    return dayjs(_value).toDate();
  }

  function changeValueMillisecondsToTargetValue(milliseconds) {
    if (type === 'seconds') {
      return Math.round(milliseconds / 1000);
    }

    return milliseconds;
  }

  const targetValue = useMemo(() => originValueToDateObject(value), [value]);

  const targetDefaultValue = useMemo(() => originValueToDateObject(defaultValue), [defaultValue]);

  const _onChange = (date) => {
    onChange?.(changeValueMillisecondsToTargetValue((date as Date).getTime()));
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
