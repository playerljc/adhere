import React, { useMemo } from 'react';
import type { FC } from 'react';

import RangePicker from '../range-picker';
import { RangePickerFormatValueHOCProps } from '../types';
import {
  DEFAULT_DATE_FORMAT,
  formatDayjsPair,
  parseDayjsPair,
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
const ValueHOC: FC<RangePickerFormatValueHOCProps> = ({
  defaultValue,
  value,
  onChange,
  format,
  ...props
}) => {
  const targetValue = useMemo(
    () => parseDayjsPair(value, format, DEFAULT_DATE_FORMAT),
    [value, format],
  );

  const targetDefaultValue = useMemo(
    () => parseDayjsPair(defaultValue, format, DEFAULT_DATE_FORMAT),
    [defaultValue, format],
  );

  const _onChange = (_value, dateString) => {
    if (_value == null) {
      onChange?.(null, dateString, _value, null);
      return;
    }

    const data = formatDayjsPair(_value, format, DEFAULT_DATE_FORMAT);
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
      format={format}
      defaultValue={targetDefaultValue ?? undefined}
      value={targetValue}
      onChange={_onChange}
    />
  );
};

export default ValueHOC;
