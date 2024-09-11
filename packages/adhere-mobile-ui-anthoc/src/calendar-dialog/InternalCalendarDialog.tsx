import classNames from 'classnames';
import React, { memo } from 'react';

import Dialog from '../dialog';
import type { CalendarDialogProps } from '../types';
import useCalendarPopover from '../useCalendarPopover';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-calendar-dialog';

const InternalCalendarDialog = memo<CalendarDialogProps>(
  ({ value, onChange, dialogTriggerProps, ...useDatePopoverProps }) => {
    const { actions, popoverTriggerProps, children } = useCalendarPopover({
      popoverTriggerClassName: classNames(
        selectorPrefix,
        dialogTriggerProps?.popoverTriggerProps?.className ?? '',
      ),
      popoverTriggerStyle: dialogTriggerProps?.popoverTriggerProps?.style ?? {},
      value,
      ...useDatePopoverProps,
    });

    return (
      <Dialog.Trigger
        {...dialogTriggerProps}
        title={dialogTriggerProps?.title ?? <span>&nbsp;</span>}
        value={value}
        onChange={onChange}
        actions={actions}
        showCloseButton={false}
        popoverTriggerProps={{
          ...popoverTriggerProps,
          ...(dialogTriggerProps?.popoverTriggerProps ?? {}),
        }}
      >
        {children}
      </Dialog.Trigger>
    );
  },
);

export default InternalCalendarDialog;
