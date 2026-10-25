import React, { useMemo } from 'react';
import type { FC } from 'react';

import TimePicker from '../time-picker';
import type { TimePickerTimestampValueHOCProps } from '../types';
import {
  formatTimestamp,
  normalizeTimestampType,
  parseTimestamp,
  toTimeParts,
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
const ValueHOC: FC<TimePickerTimestampValueHOCProps> = ({
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

    onChange?.(formatTimestamp(_value, unit), dateString, _value, toTimeParts(_value));
  };

  return (
    <TimePicker
      {...props}
      defaultValue={targetDefaultValue}
      value={targetValue}
      onChange={_onChange}
    />
  );
};

export default ValueHOC;
