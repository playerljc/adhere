import classNames from 'classnames';
import React, { memo } from 'react';

import Dialog from '../dialog';
import type { DateDialogProps } from '../types';
import useDatePopover from '../useDatePopover';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-date-dialog';

const InternalDateDialog = memo<DateDialogProps>(
  ({ value, onChange, dialogTriggerProps, ...useDatePopoverProps }) => {
    const { actions, popoverTriggerProps, children } = useDatePopover({
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
        title={dialogTriggerProps?.title}
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

export default InternalDateDialog;
