import { useUpdateEffect } from 'ahooks';
import { Modal } from 'antd-mobile';
import type { ModalShowHandler } from 'antd-mobile/es/components/modal';
import classNames from 'classnames';
import React, { cloneElement, memo, useCallback, useMemo, useRef } from 'react';

import PopoverTrigger from '../PopoverTrigger';
import type { DisplayNameInternal, ModalTriggerProps } from '../types';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-modal-trigger';

/**
 * InternalModalTrigger
 */
const InternalModalTrigger = memo<ModalTriggerProps<any>>(
  ({ value, onChange, actions, children, popoverTriggerProps, ...modalProps }) => {
    const handler = useRef<ModalShowHandler | null>(null);

    /**
     * onConfirm
     * @param onClick
     * @param close
     */
    function onConfirm(onClick, close) {
      onClick?.()?.then((result) => {
        onChange?.(result);

        setTimeout(() => {
          close();
        }, 300);
      });
    }

    const targetModalProps = useMemo(
      () => ({
        closeOnMaskClick: true,
        showCloseButton: true,
        ...modalProps,
        actions: (actions ?? []).map((_action) => ({
          ..._action,
          onClick: () => onConfirm(_action.onClick, handler.current?.close),
        })),
        content:
          children &&
          cloneElement(
            children,
            {
              ...children.props,
              value,
            },
            children.props.children,
          ),
        afterClose: () => {
          handler.current = null;
          modalProps?.afterClose?.();
        },
      }),
      [modalProps, actions, children, value],
    );

    /**
     * renderPopover
     */
    const renderPopover = useCallback(() => {
      handler.current = Modal.show(targetModalProps);
    }, [targetModalProps]);

    useUpdateEffect(() => {
      if (handler.current) {
        // @ts-ignore
        handler.current.replace(<Modal {...targetModalProps} />);
      }
    }, [modalProps]);

    return (
      <PopoverTrigger
        className={classNames(selectorPrefix, popoverTriggerProps?.className ?? '')}
        renderPopover={renderPopover}
        {...(popoverTriggerProps ?? {})}
      />
    );
  },
);

const ModalTrigger = InternalModalTrigger as DisplayNameInternal<typeof InternalModalTrigger>;

ModalTrigger.displayName = 'ModalTrigger';

export default ModalTrigger;
