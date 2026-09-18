import React from 'react';
import type { FC } from 'react';

import InternalDatePicker from './InternalDatePicker';
import type { DatePickerProps } from './types';
import { useDateFieldDependencyDatePicker } from './dependency';

export type { DatePickerProps } from './types';

const DatePicker: FC<DatePickerProps> = ({
  fieldKey,
  dependencies,
  disabledDate,
  value,
  onChange,
  ...restProps
}) => {
  const { mergedDisabledDate, handleChange } = useDateFieldDependencyDatePicker({
    fieldKey,
    dependencies,
    value,
    onChange,
    disabledDate,
  });

  return (
    <InternalDatePicker
      {...restProps}
      value={value}
      onChange={handleChange}
      disabledDate={mergedDisabledDate}
    />
  );
};

DatePicker.displayName = 'DatePicker';

export default DatePicker;
