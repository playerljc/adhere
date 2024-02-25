import classNames from 'classnames';
import React, { memo } from 'react';

import { TimePickerViewProps } from '@baifendian/adhere-mobile-ui-time-picker-view/es/types';

import Popup from '../popup';
import type { TimePopupProps } from '../types';
import useTimePopover from '../useTimePopover';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-time-popup';

const InternalTimePopup = memo<TimePopupProps>(
  ({
    placeholder,
    okLabel,
    cancelLabel,
    locale,
    renderDisplay,
    value,
    onChange,
    popupTriggerProps,
    ...timePickerViewProps
  }) => {
    const { actions, popoverTriggerProps, children } = useTimePopover({
      popoverTriggerClassName: classNames(
        selectorPrefix,
        popupTriggerProps?.popoverTriggerProps?.className ?? '',
      ),
      popoverTriggerStyle: popupTriggerProps?.popoverTriggerProps?.style ?? {},
      placeholder,
      value,
      okLabel,
      cancelLabel,
      renderDisplay,
      locale,
      ...timePickerViewProps,
    });

    return (
      <Popup.Trigger
        {...popupTriggerProps}
        title={popupTriggerProps?.title}
        value={value}
        onChange={onChange}
        actions={actions}
        showCloseButton={false}
        popoverTriggerProps={{
          ...popoverTriggerProps,
          ...(popupTriggerProps?.popoverTriggerProps ?? {}),
        }}
      >
        {children}
      </Popup.Trigger>
    );
  },
);

export default InternalTimePopup;