import type { ModalProps } from 'antd/lib/modal/interface';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import { forwardRef } from 'react';
import React, { useEffect, useImperativeHandle, useMemo, useRef } from 'react';

import MessageDialog from './MessageDialog';
import { selectorPrefix } from './Modal';
import SubmitButton from './SubmitButton';
import type { TriggerHandle, TriggerProps } from './types';

/**
 * Trigger组件
 * 用于触发模态对话框的触发器组件
 * 
 * @param props - 组件属性
 * @param props.className - 自定义类名
 * @param props.style - 自定义样式
 * @param props.value - 输入值
 * @param props.onChange - 值变化回调函数
 * @param props.children - 弹出的UI内容，默认有value属性
 * @param props.renderTrigger - 渲染触发器的函数
 * @param props.modalConfig - MessageDialog的配置
 * @param props.disabled - 是否禁用
 * @param props.actions - 操作按钮配置数组
 * @param props.maximized - 是否最大化显示
 * @param props.defaultCloseBtn - 是否显示默认关闭按钮
 * @param props.beforeTrigger - 触发前的回调函数
 * @param ref - 组件引用
 * @returns 触发器组件
 */
const Trigger = forwardRef<TriggerHandle, TriggerProps>(
  (
    {
      className,
      style,
      value,
      disabled = false,
      onChange,
      children,
      renderTrigger,
      modalConfig,
      actions,
      maximized = true,
      defaultCloseBtn = true,
      beforeTrigger,
    },
    ref,
  ) => {
    const dialog = useRef<
      ReturnType<typeof MessageDialog.MaximizeModal> | ReturnType<typeof MessageDialog.Modal> | null
    >(null);

    const bodyChildren = useMemo(() => {
      // 确保children是有效的ReactElement
      if (!children || typeof children === 'string' || typeof children === 'number' || typeof children === 'boolean') {
        return children;
      }

      // 检查是否为ReactElement
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
     * 确认操作处理函数
     * @param onClick - 点击回调函数
     * @param close - 关闭对话框函数
     * @returns Promise<void>
     */
    function onConfirm(onClick?: () => Promise<any>, close?: () => void): Promise<void> {
      return new Promise((resolve, reject) => {
        if (!onClick) {
          resolve();
          return;
        }

        onClick()
          .then((result) => {
            onChange?.(result);

            setTimeout(() => {
              resolve();
              close?.();
            }, 300);
          })
          .catch((error) => {
            console.error('Trigger onConfirm error:', error);
            reject(error);
          });
      });
    }

    /**
     * 触发对话框显示
     */
    function onTrigger(): void {
      if (disabled) return;

      function execute(): void {
        const _modalConfig: ModalProps = modalConfig?.config ?? {};

        _modalConfig.footer =
          (actions ?? []).map?.((_actionConfig) => (
            <SubmitButton
              {...(_actionConfig ?? {})}
              onClick={() => onConfirm(_actionConfig.onClick, (dialog.current as any)?.close)}
            />
          )) ?? [];

        const modalMap = new Map([
          [true, MessageDialog.MaximizeModal],
          [false, MessageDialog.Modal],
        ]);

        const ModalComponent = modalMap.get(maximized as boolean);
        if (ModalComponent) {
          dialog.current = ModalComponent({
            config: _modalConfig,
            defaultCloseBtn,
            children: bodyChildren,
          });
        }
      }

      if (!beforeTrigger) {
        execute();
      } else {
        beforeTrigger()
          .then(() => {
            execute();
          })
          .catch((error) => {
            console.error('Trigger beforeTrigger error:', error);
          });
      }
    }

    useEffect(() => {
      try {
        const _modalConfig: ModalProps = modalConfig?.config ?? {};
        if (dialog.current?.setConfig) {
          dialog.current.setConfig((draft) => {
            Object.keys(_modalConfig).forEach((_key) => {
              draft[_key] = _modalConfig[_key];
            });
          }, bodyChildren);
        }
      } catch (err) {
        console.error('Trigger setConfig error:', err);
      }
    });

    useImperativeHandle(ref, () => ({
      close: () => {
        if (dialog.current?.close) {
          (dialog.current as any).close();
        }
      },
    }));

    return (
      <div
        className={classNames(`${selectorPrefix}-trigger`, className ?? '')}
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
