import React, { useMemo } from 'react';
import type { FC } from 'react';

import TimePicker from '../time-picker';
import type { TimePickerFormatValueHOCProps } from '../types';
import {
  DEFAULT_TIME_FORMAT,
  formatDayjs,
  parseDayjs,
  toTimeParts,
} from '../value-hoc/dateValue';

/**
 * ValueHOC
 * @param defaultValue
 * @param value
 * @param onChange
 * @param format
 * @param props
 * @constructor
 */
const ValueHOC: FC<TimePickerFormatValueHOCProps> = ({
  defaultValue,
  value,
  onChange,
  format,
  ...props
}) => {
  const targetValue = useMemo(
    () => parseDayjs(value, format, DEFAULT_TIME_FORMAT),
    [value, format],
  );

  const targetDefaultValue = useMemo(
    () => parseDayjs(defaultValue, format, DEFAULT_TIME_FORMAT),
    [defaultValue, format],
  );

  function _onChange(_value, dateString) {
    if (_value == null) {
      onChange?.(null, dateString, _value, null);
      return;
    }

    onChange?.(formatDayjs(_value, format, DEFAULT_TIME_FORMAT), dateString, _value, toTimeParts(_value));
  }

  return (
    <TimePicker
      {...props}
      format={format}
      defaultValue={targetDefaultValue}
      value={targetValue}
      onChange={_onChange}
    />
  );
};

export default ValueHOC;
