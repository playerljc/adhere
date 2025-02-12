import classNames from 'classnames';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import PopoverTrigger from '../PopoverTrigger';
import type { DisplayNameInternal, PopupTriggerProps } from '../types';
import { ValueHOCHandle } from '../types';
import { ValueHOC } from '../util';
import Context from './Context';
import { PopupWrapper } from './show';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-modal-trigger';

/**
 * InternalPopupTrigger
 */
const InternalPopupTrigger = memo<PopupTriggerProps<any>>(
  ({
    className,
    value,
    onChange,
    actions,
    popoverTriggerProps,
    disabled = false,
    children,
    ...popupProps
  }) => {
    const [visible, setVisible] = useState(false);

    const valueHOCRef = useRef<ValueHOCHandle>();

    /**
     * onConfirm
     * @param onClick
     */
    function onConfirm(onClick) {
      return onClick?.()?.then((result) => {
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

    const targetPopupProps = useMemo(
      () => ({
        visible,
        destroyOnClose: true,
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
        children: children && (
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
          popupProps?.afterClose?.();
        },
        onClose: () => {
          close();
          popupProps?.onClose?.();
        },
      }),
      [popupProps, actions, children, value, onChange, visible],
    );

    /**
     * renderPopover
     */
    const renderPopover = useCallback(() => {
      setVisible(true);
    }, [targetPopupProps]);

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
          <PopupWrapper
            {...targetPopupProps}
            bodyClassName={classNames(
              `${selectorPrefix}-modal-body`,
              targetPopupProps.bodyClassName,
            )}
          />,
          // @ts-ignore
          targetPopupProps?.getContainer?.() ?? document.body,
        )}

        <PopoverTrigger
          className={classNames(selectorPrefix, className ?? '')}
          value={value}
          renderPopover={renderPopover}
          disabled={disabled ?? false}
          {...(popoverTriggerProps ?? {})}
        />
      </Context.Provider>
    );
  },
);

const PopupTrigger = InternalPopupTrigger as DisplayNameInternal<typeof InternalPopupTrigger>;

PopupTrigger.displayName = 'PopupTrigger';

export default PopupTrigger;
