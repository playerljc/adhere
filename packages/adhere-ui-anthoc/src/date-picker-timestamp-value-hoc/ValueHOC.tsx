import React, { useMemo } from 'react';
import type { FC } from 'react';

import DatePicker from '../date-picker';
import type { DatePickerTimestampValueHOCProps } from '../types';
import {
  formatTimestamp,
  normalizeTimestampType,
  parseTimestamp,
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
const ValueHOC: FC<DatePickerTimestampValueHOCProps> = ({
  defaultValue,
  value,
  onChange,
  type = 'milliseconds',
  ...props
}) => {
  const unit = normalizeTimestampType(type);

  const targetValue = useMemo(() => parseTimestamp(value, unit), [value, unit]);

  const targetDefaultValue = useMemo(
    () => parseTimestamp(defaultValue, unit),
    [defaultValue, unit],
  );

  const _onChange = (_value, dateString) => {
    if (_value == null) {
      onChange?.(null, dateString, _value, null);
      return;
    }

    onChange?.(formatTimestamp(_value, unit), dateString, _value, toDateParts(_value));
  };

  return (
    <DatePicker
      {...props}
      defaultValue={targetDefaultValue}
      value={targetValue}
      onChange={_onChange}
    />
  );
};

export default ValueHOC;
