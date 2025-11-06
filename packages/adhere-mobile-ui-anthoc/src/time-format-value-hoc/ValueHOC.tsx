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
    if (_date) {
      onChange?.(dayjs(_date).format(props.format ?? 'LTS'));
      return;
    }

    onChange?.(_date);
  }

  return useMemo(() => {
    if (!React.isValidElement(children)) return children as any;
    const el = children as React.ReactElement<any>;
    return cloneElement(
      el,
      {
        ...(props as any),
        defaultValue: targetDefaultValue,
        value: targetValue,
        onChange: _onChange,
      } as any,
      (el.props as any)?.children,
    );
  }, [props, targetDefaultValue, targetValue, children, _onChange]);
};

export default ValueHOC;
