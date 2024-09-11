import { Dialog } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import Intl from '@baifendian/adhere-util-intl';

import PopoverTrigger from '../PopoverTrigger';
import type { DialogTriggerProps, DisplayNameInternal } from '../types';
import { ValueHOCHandle } from '../types';
import { ValueHOC } from '../util';
import Context from './Context';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-dialog-trigger';

/**
 * InternalDialogTrigger
 */
const InternalDialogTrigger = memo<DialogTriggerProps<any>>(
  ({
    showCloseButton = true,
    closeActionText,
    closeActionKey,
    value,
    disabled = false,
    onChange,
    actions,
    children,
    popoverTriggerProps,
    ...dialogProps
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

    const targetActions = useMemo(() => {
      const result = (actions ?? []).map((_action) => ({
        ..._action,
        onClick: () => onConfirm(_action.onClick),
      }));

      if (showCloseButton) {
        result.push({
          key: closeActionKey ?? 'close',
          text: closeActionText ?? Intl.v('关闭'),
          onClick: () => {},
        });
      }

      return result;
    }, [actions, showCloseButton]);

    const targetDialogProps = useMemo(() => {
      return {
        visible,
        destroyOnClose: true,
        closeOnMaskClick: true,
        closeOnAction: showCloseButton,
        ...dialogProps,
        actions: targetActions,
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
          dialogProps?.afterClose?.();
        },
        onClose: () => {
          close();
          dialogProps?.onClose?.();
        },
      };
    }, [dialogProps, targetActions, children, value, onChange, visible]);

    /**
     * renderPopover
     */
    const renderPopover = useCallback(() => {
      setVisible(true);
    }, [targetDialogProps]);

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
          <Dialog
            {...targetDialogProps}
            bodyClassName={classNames(
              `${selectorPrefix}-modal-body`,
              targetDialogProps.bodyClassName,
            )}
          />,
          // @ts-ignore
          targetDialogProps?.getContainer?.() ?? document.body,
        )}

        <PopoverTrigger
          className={classNames(selectorPrefix, popoverTriggerProps?.className ?? '')}
          value={value}
          renderPopover={renderPopover}
          disabled={disabled ?? false}
          {...(popoverTriggerProps ?? {})}
        />
      </Context.Provider>
    );
  },
);

const DialogTrigger = InternalDialogTrigger as DisplayNameInternal<typeof InternalDialogTrigger>;

DialogTrigger.displayName = 'DialogTrigger';

export default DialogTrigger;
