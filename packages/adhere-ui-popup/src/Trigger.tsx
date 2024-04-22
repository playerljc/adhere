import { LeftOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import type { FC } from 'react';
import React, { useEffect, useMemo, useRef } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import Popup, { Popup as PopupInner } from './Popup';
import SubmitButton from './SubmitButton';
import type { TriggerProps } from './types';

const selectorPrefix = 'adhere-ui-popup';
const triggerSelectorPrefix = `${selectorPrefix}-trigger`;
const triggerSelectorInnerPrefix = `${triggerSelectorPrefix}-inner`;

/**
 * Trigger
 * @param className
 * @param style
 * @param renderTrigger
 * @param popupConfig
 * @param title
 * @param closeIcon
 * @param extra
 * @param actions
 * @param children
 * @param value
 * @param disabled
 * @param onChange
 * @constructor
 */
const Trigger: FC<TriggerProps> = ({
  className,
  style,
  renderTrigger,
  popupConfig,
  title,
  closeIcon = true,
  extra,
  actions,
  children,
  value,
  disabled = false,
  onChange,
}) => {
  const popup = useRef<PopupInner | null>();

  const onConfirm = (onClick, close) =>
    new Promise<void>((resolve, reject) => {
      onClick?.()
        ?.then((result) => {
          onChange?.(result);

          setTimeout(() => {
            resolve(result);
            close?.();
          }, 400);
        })
        .catch((error) => reject(error));
    });

  const bodyChildren = useMemo(
    () =>
      children
        ? React.cloneElement(
            children,
            {
              ...children.props,
              value,
            },
            children.props.children,
          )
        : null,
    [children, value],
  );

  const popupChildren = useMemo(
    () => (
      <div className={classNames(triggerSelectorInnerPrefix)}>
        <div className={classNames(`${triggerSelectorInnerPrefix}-header`)}>
          <div
            className={`${triggerSelectorInnerPrefix}-close`}
            onClick={() => {
              popup.current?.close();
            }}
          >
            {closeIcon && (
              <span className={`${triggerSelectorInnerPrefix}-close-inner`}>{<LeftOutline />}</span>
            )}
          </div>

          {title && <div className={`${triggerSelectorInnerPrefix}-title`}>{title}</div>}

          {extra && <div className={`${triggerSelectorInnerPrefix}-extra`}>{extra}</div>}
        </div>

        <div className={classNames(`${triggerSelectorInnerPrefix}-body`)}>{bodyChildren}</div>

        <div className={classNames(`${triggerSelectorInnerPrefix}-actions`)}>
          {[
            <div key="close" className={classNames(`${triggerSelectorInnerPrefix}-action`)}>
              <SubmitButton
                key="close"
                onClick={() =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      popup.current?.close();
                    }, 100);

                    resolve();
                  })
                }
              >
                {Intl.v('关闭')}
              </SubmitButton>
            </div>,
            ...((actions ?? []).map?.((_actionConfig) => (
              <div
                key={_actionConfig.key}
                className={classNames(`${triggerSelectorInnerPrefix}-action`)}
              >
                <SubmitButton
                  {...(_actionConfig ?? {})}
                  onClick={() => onConfirm(_actionConfig.onClick, () => popup?.current?.close())}
                />
              </div>
            )) ?? []),
          ]}
        </div>
      </div>
    ),
    [bodyChildren, title, actions, extra, closeIcon],
  );

  const onTrigger = () => {
    if (disabled) return;

    popup.current = Popup.create({
      ...(popupConfig ?? {}),
      onBeforeClose: () => (popupConfig ?? {})?.onBeforeClose?.() ?? Promise.resolve(),
      onAfterClose: () => (popupConfig ?? {})?.onAfterClose?.() ?? Popup.destroy(popup.current),
      children: popupChildren,
    });

    popup.current?.show();
  };

  useEffect(() => {
    popup.current?.update(popupChildren);
  });

  return (
    <div
      className={classNames(triggerSelectorPrefix, className ?? '')}
      style={style ?? {}}
      onClick={debounce(onTrigger, 200)}
    >
      {renderTrigger?.()}
    </div>
  );
};

Trigger.displayName = 'Trigger';

export default Trigger;
