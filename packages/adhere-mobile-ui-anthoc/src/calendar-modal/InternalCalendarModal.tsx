import { CalendarPickerViewProps } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import Modal from '../modal';
import type { CalendarModalProps } from '../types';
import useCalendarPopover from '../useCalendarPopover';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-calendar-modal';

const InternalCalendarModal = memo<CalendarModalProps>(
  ({
    placeholder,
    okLabel,
    cancelLabel,
    locale,
    renderDisplay,
    value,
    onChange,
    modalTriggerProps,
    ...calendarPickerViewProps
  }) => {
    const { actions, popoverTriggerProps, children } = useCalendarPopover({
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
      ...calendarPickerViewProps,
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

export default InternalCalendarModal;
