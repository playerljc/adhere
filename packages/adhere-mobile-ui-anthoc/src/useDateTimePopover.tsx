import { useUpdateEffect } from 'ahooks';
import React, { useMemo, useRef } from 'react';

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
  defaultValue,
  formatValue,
}: Parameters<UseDateTimerPopover<T, typeof value>>[0]) {
  const targetValue = useRef<typeof value>(value ?? defaultValue ?? new Date());

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
    setTargetValue: (_value) => {
      targetValue.current = _value;
    },
  };
}

export default useDateTimePopover;
