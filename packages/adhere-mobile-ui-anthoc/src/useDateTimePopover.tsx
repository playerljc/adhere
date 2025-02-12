import { useUpdateEffect } from 'ahooks';
import React, { useMemo, useRef, useState } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { DateTimeViewProps, UseDateTimerPopover } from './types';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-date-timer-popover';

function useDateTimePopover<T extends DateTimeViewProps>({
  popoverTriggerClassName,
  popoverTriggerStyle,
  placeholder,
  value,
  okLabel,
  cancelLabel,
  clearLabel,
  allowClearValue = true,
  // defaultValue,
  formatValue,
}: Parameters<UseDateTimerPopover<T, typeof value>>[0]) {
  const [key, setKey] = useState(`${Date.now()}`);

  const internalValue = useRef(value);

  function setInternalValue(_value) {
    internalValue.current = _value;
  }

  const placeholderElement = useMemo(() => {
    const defaultFormat = (
      <div className={`${selectorPrefix}-placeholder`}>{placeholder ?? Intl.v('请选择')}</div>
    );

    return (
      <>
        {!!value && (formatValue || defaultFormat)}
        {!value && defaultFormat}
      </>
    );
  }, [value, placeholder, formatValue]);

  const actions = useMemo(
    () =>
      [
        {
          key: 'submit',
          text: okLabel ?? Intl.v('确定'),
          primary: true,
          onClick: () => Promise.resolve(internalValue.current ?? new Date()),
        },
        allowClearValue && {
          key: 'clear',
          text: clearLabel ?? Intl.v('清除'),
          onClick: () => {
            setKey(`${Date.now()}`);
            return Promise.resolve(null);
          },
        },
        {
          key: 'close',
          text: cancelLabel ?? Intl.v('关闭'),
          onClick: () => {
            return Promise.resolve(value);
          },
        },
      ].filter((t) => !!t),
    [allowClearValue, clearLabel, okLabel, cancelLabel, value, internalValue.current],
  );

  useUpdateEffect(() => {
    setInternalValue(value);
  }, [value]);

  return {
    key,
    actions,
    popoverTriggerProps: {
      className: popoverTriggerClassName ?? '',
      style: popoverTriggerStyle ?? {},
      renderTrigger: () => <div className={`${selectorPrefix}-trigger`}>{placeholderElement}</div>,
    },
    setInternalValue,
  };
}

export default useDateTimePopover;
