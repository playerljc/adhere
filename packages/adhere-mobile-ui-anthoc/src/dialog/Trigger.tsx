import { useUpdateEffect } from 'ahooks';
import { Dialog } from 'antd-mobile';
import type { DialogShowHandler } from 'antd-mobile/es/components/dialog';
import classNames from 'classnames';
import React, { cloneElement, memo, useCallback, useMemo, useRef } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import PopoverTrigger from '../PopoverTrigger';
import type { DialogTriggerProps, DisplayNameInternal } from '../types';

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
    onChange,
    actions,
    children,
    popoverTriggerProps,
    ...dialogProps
  }) => {
    const handler = useRef<DialogShowHandler | null>(null);

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

    const targetActions = useMemo(() => {
      const result = (actions ?? []).map((_action) => ({
        ..._action,
        onClick: () => onConfirm(_action.onClick, handler.current?.close),
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
        closeOnMaskClick: true,
        closeOnAction: showCloseButton,
        ...dialogProps,
        actions: targetActions,
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
          dialogProps?.afterClose?.();
        },
      };
    }, [dialogProps, targetActions, children, value]);

    /**
     * renderPopover
     */
    const renderPopover = useCallback(() => {
      handler.current = Dialog.show(targetDialogProps);
    }, [targetDialogProps]);

    useUpdateEffect(() => {
      if (handler.current) {
        // @ts-ignore
        handler.current.replace(<Dialog {...targetDialogProps} />);
      }
    }, [dialogProps]);

    return (
      <PopoverTrigger
        className={classNames(selectorPrefix, popoverTriggerProps?.className ?? '')}
        renderPopover={renderPopover}
        {...(popoverTriggerProps ?? {})}
      />
    );
  },
);

const DialogTrigger = InternalDialogTrigger as DisplayNameInternal<typeof InternalDialogTrigger>;

DialogTrigger.displayName = 'DialogTrigger';

export default DialogTrigger;
