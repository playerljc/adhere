import { useUpdateEffect } from 'ahooks';
import { useConfig } from 'antd-mobile/es/components/config-provider/config-provider';
import React, { useMemo, useRef } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import DatePickerView from './date-picker-view';
import type { UseDatePopover } from './types';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-date-popover';

const useDatePopover: UseDatePopover<any> = ({
  popoverTriggerClassName,
  popoverTriggerStyle,
  placeholder,
  value,
  okLabel,
  cancelLabel,
  renderDisplay,
  locale,
  ...datePickerViewProps
}) => {
  const targetValue = useRef<typeof value>(value ?? datePickerViewProps.defaultValue ?? new Date());

  const config = useConfig();

  const formatValue = useMemo(() => {
    if (!value) return '';

    const targetLocale = locale ?? config.locale.locale ?? 'zh';

    if (renderDisplay) {
      return renderDisplay(value, targetLocale);
    }

    const { precision = 'day' } = datePickerViewProps;

    const ymd = value.toLocaleDateString(targetLocale).split(/[-/]/gim);

    let result = '';

    switch (precision) {
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
        result = '';
    }

    return result;
  }, [value]);

  const actions = useMemo(
    () => [
      {
        key: 'submit',
        text: okLabel ?? Intl.v('确定'),
        primary: true,
        onClick: () => Promise.resolve(targetValue.current),
      },
      {
        key: 'close',
        text: cancelLabel ?? Intl.v('关闭'),
        onClick: () => Promise.resolve(value),
      },
    ],
    [okLabel, cancelLabel, targetValue.current],
  );

  useUpdateEffect(() => {
    targetValue.current = value;
  }, [value]);

  return {
    actions,
    popoverTriggerProps: {
      className: popoverTriggerClassName ?? '',
      style: popoverTriggerStyle ?? {},
      renderTrigger: () => (
        <div className={`${selectorPrefix}-trigger`}>
          {!!value && formatValue}
          {!value && (
            <div className={`${selectorPrefix}-placeholder`}>{placeholder ?? Intl.v('请选择')}</div>
          )}
        </div>
      ),
    },
    children: (
      <DatePickerView
        defaultValue={new Date()}
        {...datePickerViewProps}
        onChange={(_value) => {
          targetValue.current = _value;
        }}
      />
    ),
  };
};

export default useDatePopover;
