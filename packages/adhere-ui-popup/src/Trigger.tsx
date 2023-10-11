import { LeftOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import type { FC } from 'react';
import React, { useMemo } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import Popup from './popup';
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
  onChange,
}) => {
  const onConfirm = (onClick, close) =>
    new Promise<void>((resolve, reject) => {
      onClick?.()
        ?.then((result) => {
          onChange?.(result);

          setTimeout(() => {
            resolve(result);
            close?.();
          }, 300);
        })
        .catch((error) => reject(error));
    });

  const Children = useMemo(
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
    [children],
  );

  const onTrigger = () => {
    const popup = Popup.create({
      ...(popupConfig ?? {}),
      onBeforeClose: () => (popupConfig ?? {})?.onBeforeClose?.() ?? Promise.resolve(),
      onAfterClose: () => (popupConfig ?? {})?.onAfterClose?.() ?? Popup.destroy(popup),
      children: (
        <div className={classNames(triggerSelectorInnerPrefix)}>
          <div className={classNames(`${triggerSelectorInnerPrefix}-header`)}>
            <div className={`${triggerSelectorInnerPrefix}-close`} onClick={() => popup.close()}>
              {closeIcon && (
                <span className={`${triggerSelectorInnerPrefix}-close-inner`}>
                  {<LeftOutline />}
                </span>
              )}
            </div>

            {title && <div className={`${triggerSelectorInnerPrefix}-title`}>{title}</div>}

            {extra && <div className={`${triggerSelectorInnerPrefix}-extra`}>{extra}</div>}
          </div>

          <div className={classNames(`${triggerSelectorInnerPrefix}-body`)}>{Children}</div>

          <div className={classNames(`${triggerSelectorInnerPrefix}-actions`)}>
            {[
              <div key="close" className={classNames(`${triggerSelectorInnerPrefix}-action`)}>
                <SubmitButton
                  key="close"
                  onClick={() =>
                    new Promise((resolve) => {
                      popup?.close();
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
                    onClick={() => onConfirm(_actionConfig.onClick, () => popup?.close())}
                  />
                </div>
              )) ?? []),
            ]}
          </div>
        </div>
      ),
    });

    popup.show();
  };

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

export default Trigger;
