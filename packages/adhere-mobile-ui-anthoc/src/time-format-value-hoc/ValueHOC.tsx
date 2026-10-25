import dayjs from 'dayjs';
import React, { cloneElement, useMemo } from 'react';
import type { FC } from 'react';

import type { TimeFormatValueHOCProps } from '../types';
import { DEFAULT_TIME_FORMAT, dayjsToDate, formatDayjs, parseDayjs } from '../value-hoc/dateValue';

/**
 * ValueHOC
 * @param defaultValue
 * @param value
 * @param onChange
 * @param format
 * @param children
 * @param props
 * @constructor
 */
const ValueHOC: FC<TimeFormatValueHOCProps> = ({
  defaultValue,
  value,
  onChange,
  format,
  children,
  ...props
}) => {
  const targetValue = useMemo(
    () => dayjsToDate(parseDayjs(value, format, DEFAULT_TIME_FORMAT)),
    [value, format],
  );

  const targetDefaultValue = useMemo(
    () => dayjsToDate(parseDayjs(defaultValue, format, DEFAULT_TIME_FORMAT)) ?? undefined,
    [defaultValue, format],
  );

  const _onChange = (_date) => {
    if (_date == null) {
      onChange?.(null);
      return;
    }

    const current = dayjs(_date);
    onChange?.(current.isValid() ? formatDayjs(current, format, DEFAULT_TIME_FORMAT) : null);
  };

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
