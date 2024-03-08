import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import React, { cloneElement, useMemo } from 'react';
import type { FC } from 'react';

import type { TimeFormatValueHOCProps } from '../types';

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
const ValueHOC: FC<TimeFormatValueHOCProps> = ({
  defaultValue,
  value,
  onChange,
  children,
  ...props
}) => {
  function originValueToDateObject(_value) {
    if (_value === null || _value === undefined) return _value;

    const ymd = dayjs().format('L');
    return dayjs(`${ymd} ${_value}`).toDate();
  }

  const targetValue = useMemo(() => originValueToDateObject(value), [value]);

  const targetDefaultValue = useMemo(() => originValueToDateObject(defaultValue), [defaultValue]);

  function _onChange(_date) {
    onChange?.(dayjs(_date).format(props.format ?? 'LTS'));
  }

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
