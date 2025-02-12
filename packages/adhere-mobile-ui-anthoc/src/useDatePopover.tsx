import { DatePickerViewProps } from 'antd-mobile';
import { useConfig } from 'antd-mobile/es/components/config-provider/config-provider';
import classNames from 'classnames';
import React, { useMemo } from 'react';

import DatePickerView from './date-picker-view';
import type { UseDatePopover } from './types';
import useDateTimePopover from './useDateTimePopover';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-date-popover';

function useDatePopover({
  popoverTriggerClassName,
  popoverTriggerStyle,
  placeholder,
  value,
  okLabel,
  cancelLabel,
  renderDisplay,
  locale,
  ...datePickerViewProps
}: UseDatePopover<typeof value>) {
  const config = useConfig();

  const formatValue = useMemo(() => {
    if (!value) return '';

    const targetLocale = locale ?? config.locale.locale ?? 'zh';

    if (renderDisplay) {
      return renderDisplay(value, targetLocale);
    }

    const ymd = value.toLocaleDateString(targetLocale).split(/[-/]/gim);

    let result = '';

    switch (datePickerViewProps.precision) {
      case 'year':
        result = `${value.getFullYear()}`;
        break;
      case 'month':
        result = [ymd[0], ymd[1]].join('/');
        break;
      case 'minute':
        `${value.toLocaleDateString(targetLocale)} ${[value.getHours(), value.getMinutes()].join(
          ':',
        )}`;
        break;
      case 'second':
        result = `${value.toLocaleDateString(targetLocale)} ${value.toLocaleTimeString(
          targetLocale,
        )}`;
        break;
      case 'hour':
        result = `${value.toLocaleDateString(targetLocale)} ${value.getHours()}`;
        break;
      case 'day':
      case 'week':
      case 'week-day':
        result = value.toLocaleDateString(targetLocale);
        break;
      default:
        result = value.toLocaleDateString(targetLocale);
    }

    return result;
  }, [value]);

  const { key, actions, popoverTriggerProps, setInternalValue } =
    useDateTimePopover<DatePickerViewProps>({
      popoverTriggerClassName: classNames(popoverTriggerClassName ?? '', selectorPrefix),
      popoverTriggerStyle,
      placeholder,
      value,
      okLabel,
      cancelLabel,
      defaultValue: datePickerViewProps?.defaultValue,
      formatValue,
    });

  return {
    actions,
    popoverTriggerProps,
    children: (
      <DatePickerView
        key={key}
        {...datePickerViewProps}
        defaultValue={value ?? datePickerViewProps?.defaultValue ?? new Date()}
        onChange={(_value) => {
          setInternalValue(_value);
        }}
      />
    ),
  };
}

export default useDatePopover;
