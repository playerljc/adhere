import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import React, { cloneElement, useMemo } from 'react';
import type { FC } from 'react';

import type { CalendarFormatValueHOCProps } from '../types';

dayjs.extend(weekOfYear);
dayjs.extend(quarterOfYear);

/**
 * ValueHOC
 * @param defaultValue
 * @param value
 * @param onChange
 * @param children
 * @param props
 * @constructor
 */
const ValueHOC: FC<CalendarFormatValueHOCProps> = ({
  defaultValue,
  value,
  onChange,
  children,
  ...props
}) => {
  function originValueToDateObject(_value) {
    if (_value === null || _value === undefined) return _value;

    const isRangeMode = Array.isArray(_value);

    if (isRangeMode) {
      if (!Array.isArray(_value)) return null;

      if (!_value.length) return [];

      return [dayjs(_value[0]), dayjs(_value[1])].map((item) => item.toDate());
    }

    return dayjs(_value).toDate();
  }

  const targetValue = useMemo(() => originValueToDateObject(value), [value]);

  const targetDefaultValue = useMemo(() => originValueToDateObject(defaultValue), [defaultValue]);

  const _onChange = (_date) => {
    if (_date) {
      let params: any;

      if (Array.isArray(_date)) {
        params = [
          dayjs(_date[0]).format(props.format ?? 'L LTS'),
          dayjs(_date[1]).format(props.format ?? 'L LTS'),
        ];
      } else {
        params = dayjs(_date).format(props.format ?? 'L LTS');
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
