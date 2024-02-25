import { useConfig } from 'antd-mobile/es/components/config-provider/config-provider';
import classNames from 'classnames';
import dayjs from 'dayjs';
import React, { useMemo } from 'react';

import TimePickerView from '@baifendian/adhere-mobile-ui-time-picker-view';
import { TimePickerViewProps } from '@baifendian/adhere-mobile-ui-time-picker-view/es/types';

import type { UseTimePopover } from './types';
import useDateTimePopover from './useDateTimePopover';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-time-popover';

function useTimePopover({
  popoverTriggerClassName,
  popoverTriggerStyle,
  placeholder,
  value,
  okLabel,
  cancelLabel,
  renderDisplay,
  locale,
  ...timePickerViewProps
}: UseTimePopover<typeof value>) {
  const config = useConfig();

  const formatValue = useMemo(() => {
    if (!value) return '';

    const targetLocale = locale ?? config.locale.locale ?? 'zh';

    if (renderDisplay) {
      return renderDisplay(value, targetLocale);
    }

    if (timePickerViewProps.format) {
      return dayjs(value.getTime()).format(timePickerViewProps.format);
    }

    return value.toLocaleTimeString(targetLocale);
  }, [value]);

  const { actions, popoverTriggerProps, setTargetValue } = useDateTimePopover<TimePickerViewProps>({
    popoverTriggerClassName: classNames(popoverTriggerClassName ?? '', selectorPrefix),
    popoverTriggerStyle,
    placeholder,
    value,
    okLabel,
    cancelLabel,
    defaultValue: timePickerViewProps?.defaultValue,
    formatValue,
  });

  return {
    actions,
    popoverTriggerProps,
    children: (
      <TimePickerView
        defaultValue={new Date()}
        {...timePickerViewProps}
        className={classNames(
          timePickerViewProps?.className ?? '',
          `${selectorPrefix}-time-picker-view`,
        )}
        onChange={(_value) => {
          setTargetValue(_value);
        }}
      />
    ),
  };
}

export default useTimePopover;
