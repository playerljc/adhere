import classNames from 'classnames';
import React, { memo } from 'react';

import Modal from '../modal';
import type { DateModalProps } from '../types';
import useDatePopover from '../useDatePopover';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-date-modal';

const InternalDateModal = memo<DateModalProps>(
  ({
    placeholder,
    okLabel,
    cancelLabel,
    locale,
    renderDisplay,
    value,
    onChange,
    modalTriggerProps,
    ...datePickerViewProps
  }) => {
    const { actions, popoverTriggerProps, children } = useDatePopover({
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
      // @ts-ignore
      datePickerViewProps,
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

export default InternalDateModal;
