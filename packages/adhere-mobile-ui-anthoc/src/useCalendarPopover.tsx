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
      return [
        (value as Date[])[0].toLocaleDateString(targetLocale),
        (value as Date[])[1].toLocaleDateString(targetLocale),
      ].join('~');
    }

    return '';
  }, [value]);

  const { actions, popoverTriggerProps, setTargetValue } =
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
        {...calendarPickerViewProps}
        onChange={(_value) => {
          setTargetValue(_value);
        }}
      />
    ),
  };
}

export default useCalendarPopover;
