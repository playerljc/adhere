import React, { useMemo } from 'react';
import type { FC } from 'react';

import DatePicker from '../date-picker';
import type { DatePickerFormatValueHOCProps } from '../types';
import {
  DEFAULT_DATE_FORMAT,
  formatDayjs,
  parseDayjs,
  toDateParts,
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
const ValueHOC: FC<DatePickerFormatValueHOCProps> = ({
  defaultValue,
  value,
  onChange,
  format,
  ...props
}) => {
  const targetValue = useMemo(
    () => parseDayjs(value, format, DEFAULT_DATE_FORMAT),
    [value, format],
  );

  const targetDefaultValue = useMemo(
    () => parseDayjs(defaultValue, format, DEFAULT_DATE_FORMAT),
    [defaultValue, format],
  );

  function _onChange(_value, dateString) {
    if (_value == null) {
      onChange?.(null, dateString, _value, null);
      return;
    }

    onChange?.(formatDayjs(_value, format, DEFAULT_DATE_FORMAT), dateString, _value, toDateParts(_value));
  }

  return (
    <DatePicker
      {...props}
      format={format}
      defaultValue={targetDefaultValue}
      value={targetValue}
      onChange={_onChange}
    />
  );
};

export default ValueHOC;
