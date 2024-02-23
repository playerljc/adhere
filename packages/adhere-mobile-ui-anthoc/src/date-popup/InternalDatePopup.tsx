import classNames from 'classnames';
import React, { memo } from 'react';

import Popup from '../popup';
import type { DatePopupProps } from '../types';
import useDatePopover from '../useDatePopover';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-date-popup';

const InternalDatePopup = memo<DatePopupProps>(
  ({
    placeholder,
    okLabel,
    cancelLabel,
    locale,
    renderDisplay,
    value,
    onChange,
    popupTriggerProps,
    ...datePickerViewProps
  }) => {
    const { actions, popoverTriggerProps, children } = useDatePopover({
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
      // @ts-ignore
      datePickerViewProps,
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

export default InternalDatePopup;
