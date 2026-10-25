import dayjs from 'dayjs';
import type { FC } from 'react';
import React, { cloneElement, useMemo } from 'react';

import type { DateTimestampValueHOCProps } from '../types';
import {
  dayjsToDate,
  formatTimestamp,
  normalizeTimestampType,
  parseTimestamp,
} from '../value-hoc/dateValue';

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
  const unit = normalizeTimestampType(type);

  const targetValue = useMemo(() => dayjsToDate(parseTimestamp(value, unit)), [value, unit]);

  const targetDefaultValue = useMemo(
    () => dayjsToDate(parseTimestamp(defaultValue, unit)) ?? undefined,
    [defaultValue, unit],
  );

  const _onChange = (_date) => {
    if (_date == null) {
      onChange?.(null);
      return;
    }

    const current = dayjs(_date);
    onChange?.(current.isValid() ? formatTimestamp(current, unit) : null);
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
