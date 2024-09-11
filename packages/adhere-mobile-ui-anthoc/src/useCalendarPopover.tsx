import { CalendarPickerView } from 'antd-mobile';
import type { CalendarPickerViewProps } from 'antd-mobile';
import { useConfig } from 'antd-mobile/es/components/config-provider/config-provider';
import classNames from 'classnames';
import React, { useMemo } from 'react';

import type { UseCalendarPopover } from './types';
import useDateTimePopover from './useDateTimePopover';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-calendar-popover';

function useCalendarPopover({
  popoverTriggerClassName,
  popoverTriggerStyle,
  placeholder,
  value,
  okLabel,
  cancelLabel,
  renderDisplay,
  locale,
  ...calendarPickerViewProps
}: UseCalendarPopover<typeof value>) {
  const config = useConfig();

  const formatValue = useMemo(() => {
    if (!value || (Array.isArray(value) && value.length <= 1)) return '';

    const targetLocale = locale ?? config.locale.locale ?? 'zh';

    if (renderDisplay) {
      return renderDisplay(value, targetLocale);
    }

    if (
      calendarPickerViewProps?.selectionMode === 'single' ||
      !calendarPickerViewProps?.selectionMode
    ) {
      return (value as Date).toLocaleDateString(targetLocale);
    } else if (calendarPickerViewProps?.selectionMode === 'range') {
      if (!value || !Array.isArray(value) || (Array.isArray(value) && value.length <= 1)) {
        return '';
      }

      return [
        (value as Date[])[0].toLocaleDateString(targetLocale),
        (value as Date[])[1].toLocaleDateString(targetLocale),
      ].join('~');
    }

    return '';
  }, [value]);

  const isRangeMode = calendarPickerViewProps.selectionMode === 'range';

  const { key, actions, popoverTriggerProps, setInternalValue } =
    useDateTimePopover<CalendarPickerViewProps>({
      popoverTriggerClassName: classNames(popoverTriggerClassName ?? '', selectorPrefix),
      popoverTriggerStyle,
      placeholder,
      value,
      okLabel,
      cancelLabel,
      defaultValue: calendarPickerViewProps?.defaultValue,
      formatValue,
    });

  return {
    actions,
    popoverTriggerProps,
    children: (
      // @ts-ignore
      <CalendarPickerView
        key={key}
        {...calendarPickerViewProps}
        defaultValue={
          value ?? calendarPickerViewProps?.defaultValue ?? (isRangeMode ? undefined : new Date())
        }
        onChange={(_value) => {
          setInternalValue(_value);
        }}
      />
    ),
  };
}

export default useCalendarPopover;
