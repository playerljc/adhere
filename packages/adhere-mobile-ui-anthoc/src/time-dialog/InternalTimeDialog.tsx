import classNames from 'classnames';
import React, { memo } from 'react';

import { TimePickerViewProps } from '@baifendian/adhere-mobile-ui-time-picker-view/es/types';

import Dialog from '../dialog';
import type { TimeDialogProps } from '../types';
import useTimePopover from '../useTimePopover';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-time-dialog';

const InternalTimeDialog = memo<TimeDialogProps>(
  ({
    placeholder,
    okLabel,
    cancelLabel,
    locale,
    renderDisplay,
    value,
    onChange,
    dialogTriggerProps,
    ...timePickerViewProps
  }) => {
    const { actions, popoverTriggerProps, children } = useTimePopover({
      popoverTriggerClassName: classNames(
        selectorPrefix,
        dialogTriggerProps?.popoverTriggerProps?.className ?? '',
      ),
      popoverTriggerStyle: dialogTriggerProps?.popoverTriggerProps?.style ?? {},
      placeholder,
      value,
      okLabel,
      cancelLabel,
      renderDisplay,
      locale,
      ...timePickerViewProps,
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
