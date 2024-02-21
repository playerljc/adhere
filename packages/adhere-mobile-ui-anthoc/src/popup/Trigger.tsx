import { useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import React, { cloneElement, memo, useCallback, useMemo, useRef } from 'react';

import PopoverTrigger from '../PopoverTrigger';
import type { DisplayNameInternal, PopupShowHandler, PopupTriggerProps } from '../types';
import { show } from './show';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-modal-trigger';

/**
 * InternalPopupTrigger
 */
const InternalPopupTrigger = memo<PopupTriggerProps<any>>(
  ({ value, onChange, actions, children, popoverTriggerProps, className, ...popupProps }) => {
    const handler = useRef<PopupShowHandler | null>(null);

    /**
     * onConfirm
     * @param onClick
     */
    function onConfirm(onClick) {
      if (onClick) {
        return onClick?.()?.then((result) => {
          onChange?.(result);
        });
      }

      return Promise.resolve();
    }

    const targetPopupProps = useMemo(
      () => ({
        closeOnMaskClick: true,
        showCloseButton: true,
        closeOnAction: true,
        ...popupProps,
        className: classNames(`${selectorPrefix}-popup`, popupProps.popupClassName ?? ''),
        style: popupProps.style ?? {},
        actions: (actions ?? []).map((_action) => ({
          ..._action,
          onClick: () => onConfirm(_action.onClick),
        })),
        children:
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
          popupProps?.afterClose?.();
        },
      }),
      [popupProps, actions, children, value],
    );

    /**
     * renderPopover
     */
    const renderPopover = useCallback(() => {
      handler.current = show(targetPopupProps);
    }, [targetPopupProps]);

    useUpdateEffect(() => {
      if (handler.current) {
        handler.current?.setConfig((originProps) => ({
          ...originProps,
          ...popupProps,
        }));
      }
    }, [popupProps]);

    return (
      <PopoverTrigger
        className={classNames(selectorPrefix, className ?? '')}
        renderPopover={renderPopover}
        {...(popoverTriggerProps ?? {})}
      />
    );
  },
);

const PopupTrigger = InternalPopupTrigger as DisplayNameInternal<typeof InternalPopupTrigger>;

PopupTrigger.displayName = 'PopupTrigger';

export default PopupTrigger;
