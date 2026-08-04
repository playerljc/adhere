import type { ModalProps } from 'antd/lib/modal/interface';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react';

import MessageDialog from './MessageDialog';
import { selectorPrefix } from './Modal';
import SubmitButton from './SubmitButton';
import type { DialogHandle, TriggerHandle, TriggerProps } from './types';

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
    const dialog = useRef<DialogHandle | null>(null);

    const bodyChildren = useMemo(() => {
      // 确保children是有效的ReactElement
      if (
        !children ||
        typeof children === 'string' ||
        typeof children === 'number' ||
        typeof children === 'boolean'
      ) {
        return children;
      }

      // 检查是否为ReactElement
      if (React.isValidElement(children)) {
        const element = children as React.ReactElement<any>;
        return React.cloneElement(element, { value } as any);
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
        const _modalConfig: ModalProps = {
          ...(modalConfig?.config ?? {}),
        };

        _modalConfig.footer =
          (actions ?? []).map?.((_actionConfig) => (
            <SubmitButton
              {...(_actionConfig ?? {})}
              // 与原先一致：在点击时捕获 close 引用，避免 300ms 后 ref 已被清空导致关不掉
              onClick={() => onConfirm(_actionConfig.onClick, dialog.current?.close)}
            />
          )) ?? [];

        const userAfterClose = _modalConfig.afterClose;
        _modalConfig.afterClose = (...args: any[]) => {
          dialog.current = null;
          userAfterClose?.(...(args as []));
        };

        const ModalComponent = maximized ? MessageDialog.MaximizeModal : MessageDialog.Modal;
        dialog.current =
          ModalComponent({
            config: _modalConfig,
            defaultCloseBtn,
            children: bodyChildren,
          }) ?? null;
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

    // 仅在弹层打开且配置/内容变化时同步，避免关闭后对已卸载 root 调用 setConfig
    useEffect(() => {
      if (!dialog.current?.setConfig) return;

      const _modalConfig: ModalProps = modalConfig?.config ?? {};

      try {
        dialog.current.setConfig((draft) => {
          Object.keys(_modalConfig).forEach((_key) => {
            // 保留打开时注入的 afterClose（用于清理 dialog ref）
            if (_key === 'afterClose') return;
            draft[_key] = _modalConfig[_key as keyof ModalProps];
          });
        }, bodyChildren);
      } catch (err) {
        console.error('Trigger setConfig error:', err);
        dialog.current = null;
      }
    }, [modalConfig, bodyChildren]);

    useImperativeHandle(ref, () => ({
      close: () => {
        dialog.current?.close?.();
        dialog.current = null;
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
