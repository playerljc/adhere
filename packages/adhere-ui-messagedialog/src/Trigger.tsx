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
 * Trigger
 * @param className
 * @param style
 * @param {any} value 输入值
 * @param {(params?: any) => void} onChange 输出值
 * @param {ReactNode} children 弹出的UI 默认有value属性
 * @param {() => ReactNode} renderTrigger 触发的UI
 * @param {ModalArgv} modalConfig MessageDialog的配置
 * @param {() => Promise<any>} onSubmit 点击确定按钮，在里面处理实际业务最后resolve的值为value
 * @constructor
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
      return (
        children &&
        React.cloneElement(
          children,
          {
            ...children.props,
            value,
          },
          children.props.children,
        )
      );
    }, [children, value]);

    function onConfirm(onClick, close) {
      return new Promise((resolve, reject) => {
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
    }

    function onTrigger() {
      if (disabled) return;

      function execute() {
        const _modalConfig: ModalProps = modalConfig?.config ?? {};

        _modalConfig.footer =
          (actions ?? []).map?.((_actionConfig) => (
            <SubmitButton
              {...(_actionConfig ?? {})}
              onClick={() => onConfirm(_actionConfig.onClick, (dialog.current as any).close)}
            />
          )) ?? [];

        const modalMap = new Map([
          [true, MessageDialog.MaximizeModal],
          [false, MessageDialog.Modal],
        ]);

        dialog.current = modalMap.get(maximized as boolean)?.({
          config: _modalConfig,
          defaultCloseBtn,
          children: bodyChildren,
        });
      }

      if (!beforeTrigger) {
        execute();
      } else {
        beforeTrigger().then(() => {
          execute();
        });
      }
    }

    useEffect(() => {
      try {
        const _modalConfig: ModalProps = modalConfig?.config ?? {};
        dialog.current?.setConfig((draft) => {
          Object.keys(_modalConfig).forEach((_key) => {
            draft[_key] = _modalConfig[_key];
          });
        }, bodyChildren);
      } catch (err) {}
    });

    useImperativeHandle(ref, () => ({
      close: () => {
        (dialog.current as any).close();
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
