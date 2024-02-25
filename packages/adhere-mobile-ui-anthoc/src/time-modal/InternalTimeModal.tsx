import classNames from 'classnames';
import React, { memo } from 'react';

import { TimePickerViewProps } from '@baifendian/adhere-mobile-ui-time-picker-view/es/types';

import Modal from '../modal';
import type { TimeModalProps } from '../types';
import useTimePopover from '../useTimePopover';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-time-modal';

const InternalTimeModal = memo<TimeModalProps>(
  ({
    placeholder,
    okLabel,
    cancelLabel,
    locale,
    renderDisplay,
    value,
    onChange,
    modalTriggerProps,
    ...timePickerViewProps
  }) => {
    const { actions, popoverTriggerProps, children } = useTimePopover({
      popoverTriggerClassName: classNames(
        selectorPrefix,
        modalTriggerProps?.popoverTriggerProps?.className ?? '',
      ),
      popoverTriggerStyle: modalTriggerProps?.popoverTriggerProps?.style ?? {},
      placeholder,
      value,
      okLabel,
      cancelLabel,
      renderDisplay,
      locale,
      ...timePickerViewProps,
    });

    return (
      <Modal.Trigger
        {...modalTriggerProps}
        title={modalTriggerProps?.title ?? <span>&nbsp;</span>}
        value={value}
        onChange={onChange}
        actions={actions}
        popoverTriggerProps={{
          ...popoverTriggerProps,
          ...(modalTriggerProps?.popoverTriggerProps ?? {}),
        }}
      >
        {children}
      </Modal.Trigger>
    );
  },
);

export default InternalTimeModal;
