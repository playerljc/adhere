import { LeftOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import { forwardRef, useImperativeHandle } from 'react';
import React, { useEffect, useMemo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Intl from '@baifendian/adhere-util-intl';

import Popup, { Popup as PopupInner } from './Popup';
import SubmitButton from './SubmitButton';
import type { ActionConfig, TriggerHandle, TriggerProps } from './types';

const selectorPrefix = 'adhere-ui-popup';
const triggerSelectorPrefix = `${selectorPrefix}-trigger`;
const triggerSelectorInnerPrefix = `${triggerSelectorPrefix}-inner`;

const { useTheme } = ConfigProvider;

/**
 * Trigger组件
 * @description 弹窗触发器组件，用于触发弹窗显示
 * @param props - 组件属性
 * @param ref - 组件引用
 * @constructor
 */
const Trigger = forwardRef<TriggerHandle, TriggerProps>(
  (
    {
      className,
      style,
      renderTrigger,
      popupConfig,
      title,
      closeIcon = true,
      extra,
      actions,
      isShowCloseAction = true,
      closeActionPosition = 'start',
      children,
      value,
      disabled = false,
      onChange,
      beforeTrigger,
    },
    ref,
  ) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const popup = useRef<PopupInner | null>(null);

    useTheme<HTMLElement>({
      elRef: wrapperRef as React.RefObject<HTMLElement>,
      group: 'normal',
      displayName: 'Popup',
    });

    /**
     * 确认操作处理
     * @param onClick - 点击回调
     * @param close - 关闭函数
     * @returns Promise
     */
    const onConfirm = (
      onClick: (() => Promise<any>) | undefined,
      close: () => void,
    ): Promise<void> => {
      return new Promise<void>((resolve, reject) => {
        if (!onClick) {
          resolve();
          return;
        }

        onClick()
          .then((result) => {
            onChange?.(result);
            setTimeout(() => {
              resolve(result);
              close();
            }, 400);
          })
          .catch((error) => reject(error));
      });
    };

    /**
     * 弹窗内容
     */
    const bodyChildren = useMemo(() => {
      if (
        !children ||
        typeof children === 'string' ||
        typeof children === 'number' ||
        typeof children === 'boolean'
      ) {
        return children;
      }

      // 确保children是ReactElement类型
      if (React.isValidElement(children)) {
        return React.cloneElement(
          children,
          {
            ...children.props,
            value,
          },
          children.props.children,
        );
      }

      return children;
    }, [children, value]);

    /**
     * 操作按钮元素
     */
    const actionElements = useMemo(() => {
      const elements: React.ReactNode[] = (actions ?? []).map((actionConfig: ActionConfig) => (
        <div key={actionConfig.key} className={classNames(`${triggerSelectorInnerPrefix}-action`)}>
          <SubmitButton
            {...actionConfig}
            onClick={() => onConfirm(actionConfig.onClick, () => popup.current?.close())}
          />
        </div>
      ));

      const closeActionElement = isShowCloseAction && (
        <div key="close" className={classNames(`${triggerSelectorInnerPrefix}-action`)}>
          <SubmitButton
            onClick={() =>
              new Promise<void>((resolve) => {
                setTimeout(() => {
                  popup.current?.close();
                }, 100);
                resolve();
              })
            }
          >
            {Intl.get('close')}
          </SubmitButton>
        </div>
      );

      if (closeActionElement && ['start', 'end'].includes(closeActionPosition)) {
        if (closeActionPosition === 'start') {
          elements.unshift(closeActionElement);
        } else {
          elements.push(closeActionElement);
        }
      }

      return elements;
    }, [actions, isShowCloseAction, closeActionPosition]);

    /**
     * 弹窗子元素
     */
    const popupChildren = useMemo(() => {
      return (
        <div ref={wrapperRef} className={classNames(triggerSelectorInnerPrefix)}>
          <div className={classNames(`${triggerSelectorInnerPrefix}-header`)}>
            <div
              className={`${triggerSelectorInnerPrefix}-close`}
              onClick={() => {
                popup.current?.close();
              }}
            >
              {closeIcon && (
                <span className={`${triggerSelectorInnerPrefix}-close-inner`}>
                  <LeftOutline />
                </span>
              )}
            </div>

            {title && <div className={`${triggerSelectorInnerPrefix}-title`}>{title}</div>}

            {extra && <div className={`${triggerSelectorInnerPrefix}-extra`}>{extra}</div>}
          </div>

          <div className={classNames(`${triggerSelectorInnerPrefix}-body`)}>{bodyChildren}</div>

          {actionElements.length > 0 && (
            <div className={classNames(`${triggerSelectorInnerPrefix}-actions`)}>
              {actionElements}
            </div>
          )}
        </div>
      );
    }, [bodyChildren, title, extra, closeIcon, actionElements]);

    /**
     * 触发弹窗显示
     */
    const onTrigger = () => {
      if (disabled) return;

      const execute = () => {
        popup.current = Popup.create({
          ...(popupConfig ?? {}),
          onBeforeClose: () => (popupConfig ?? {})?.onBeforeClose?.() ?? Promise.resolve(),
          onAfterClose: () => {
            (popupConfig ?? {})?.onAfterClose?.();
            if (popup.current) {
              Popup.destroy(popup.current);
            }
          },
          children: popupChildren,
        });

        popup.current?.show();
      };

      if (!beforeTrigger) {
        execute();
      } else {
        beforeTrigger().then(() => {
          execute();
        });
      }
    };

    // 更新弹窗内容
    useEffect(() => {
      try {
        popup.current?.update(popupChildren);
      } catch (err) {
        console.error('Failed to update popup:', err);
      }
    });

    // 暴露方法给父组件
    useImperativeHandle(ref, () => ({
      close: () => {
        popup.current?.close();
      },
    }));

    return (
      <div
        className={classNames(triggerSelectorPrefix, className ?? '')}
        style={style ?? {}}
        onClick={debounce(onTrigger, 200)}
      >
        {renderTrigger?.()}
      </div>
    );
  },
);

Trigger.displayName = 'Trigger';

export default Trigger;
