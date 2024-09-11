import classNames from 'classnames';
import React, { memo } from 'react';

import Dialog from '../dialog';
import type { TimeDialogProps } from '../types';
import useTimePopover from '../useTimePopover';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-time-dialog';

const InternalTimeDialog = memo<TimeDialogProps>(
  ({ value, onChange, dialogTriggerProps, ...useDatePopoverProps }) => {
    const { actions, popoverTriggerProps, children } = useTimePopover({
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

export default InternalTimeDialog;
