import classNames from 'classnames';
import React, { memo } from 'react';

import Popup from '../popup';
import type { CalendarPopupProps } from '../types';
import useCalendarPopover from '../useCalendarPopover';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-calendar-popup';

const InternalCalendarPopup = memo<CalendarPopupProps>(
  ({ value, onChange, popupTriggerProps, ...useDatePopoverProps }) => {
    const { actions, popoverTriggerProps, children } = useCalendarPopover({
      popoverTriggerClassName: classNames(
        selectorPrefix,
        popupTriggerProps?.popoverTriggerProps?.className ?? '',
      ),
      popoverTriggerStyle: popupTriggerProps?.popoverTriggerProps?.style ?? {},
      value,
      ...useDatePopoverProps,
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

export default InternalCalendarPopup;
