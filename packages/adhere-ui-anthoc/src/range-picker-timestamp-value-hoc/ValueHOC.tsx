import React, { useMemo } from 'react';
import type { FC } from 'react';

import RangePicker from '../range-picker';
import type { RangePickerTimestampValueHOCProps } from '../types';
import {
  formatTimestampPair,
  normalizeRangeTypes,
  parseTimestampPair,
  toDateParts,
} from '../value-hoc/dateValue';

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
  type,
  ...props
}) => {
  const typeKey = Array.isArray(type) ? `${type[0] ?? ''}|${type[1] ?? ''}` : '';
  const units = useMemo(() => normalizeRangeTypes(type), [typeKey]);

  const targetValue = useMemo(() => parseTimestampPair(value, units), [value, units]);

  const targetDefaultValue = useMemo(
    () => parseTimestampPair(defaultValue, units),
    [defaultValue, units],
  );

  const _onChange = (_value, dateString) => {
    if (_value == null) {
      onChange?.(null, dateString, _value, null);
      return;
    }

    const data = formatTimestampPair(_value, units);
    const isFilled = data != null && data[0] != null && data[1] != null;

    onChange?.(
      data,
      dateString,
      _value,
      isFilled ? [toDateParts(_value[0]), toDateParts(_value[1])] : null,
    );
  };

  return (
    <RangePicker
      {...props}
      defaultValue={targetDefaultValue ?? undefined}
      value={targetValue}
      onChange={_onChange}
    />
  );
};

export default ValueHOC;
