import { Modal } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import PopoverTrigger from '../PopoverTrigger';
import type { DisplayNameInternal, ModalTriggerProps, ValueHOCHandle } from '../types';
import { ValueHOC } from '../util';
import Context from './Context';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-modal-trigger';

/**
 * InternalModalTrigger
 */
const InternalModalTrigger = memo<ModalTriggerProps<any>>(
  ({
    value,
    onChange,
    actions,
    children,
    popoverTriggerProps,
    disabled = false,
    ...modalProps
  }) => {
    const [visible, setVisible] = useState(false);

    const valueHOCRef = useRef<ValueHOCHandle>();

    /**
     * onConfirm
     * @param onClick
     */
    function onConfirm(onClick) {
      onClick?.()?.then((result) => {
        close();
        onChange?.(
          result !== undefined
            ? result === null
              ? undefined
              : result
            : valueHOCRef.current?.getValue(),
        );
      });
    }

    const targetModalProps = useMemo(() => {
      return {
        visible,
        destroyOnClose: true,
        closeOnMaskClick: true,
        showCloseButton: true,
        ...modalProps,
        actions: (actions ?? []).map((_action) => ({
          ..._action,
          onClick: () => onConfirm(_action.onClick),
        })),
        content: children && (
          <ValueHOC
            className={`${selectorPrefix}-value-hoc`}
            // @ts-ignore
            ref={valueHOCRef}
            defaultFormItemValue={value}
          >
            {children}
          </ValueHOC>
        ),
        afterClose: () => {
          modalProps?.afterClose?.();
        },
        onClose: () => {
          close();
          modalProps?.onClose?.();
        },
      };
    }, [modalProps, actions, children, value, onChange, visible]);

    /**
     * renderPopover
     * @description 调用此函数弹出弹层
     */
    const renderPopover = useCallback(() => {
      setVisible(true);
    }, [targetModalProps]);

    function close() {
      setVisible(false);
    }

    return (
      <Context.Provider
        value={{
          close,
        }}
      >
        {createPortal(
          <Modal
            {...targetModalProps}
            bodyClassName={classNames(
              `${selectorPrefix}-modal-body`,
              targetModalProps.bodyClassName,
            )}
          />,
          // @ts-ignore
          targetModalProps?.getContainer?.() ?? document.body,
        )}

        <PopoverTrigger
          className={classNames(selectorPrefix, popoverTriggerProps?.className ?? '')}
          value={value}
          disabled={disabled ?? false}
          renderPopover={renderPopover}
          {...(popoverTriggerProps ?? {})}
        />
      </Context.Provider>
    );
  },
);

const ModalTrigger = InternalModalTrigger as DisplayNameInternal<typeof InternalModalTrigger>;

ModalTrigger.displayName = 'ModalTrigger';

export default ModalTrigger;
