import { ModalProps } from 'antd/lib/modal/interface';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import type { FC } from 'react';
import React, { useMemo } from 'react';

import MessageDialog from './MessageDialog';
import { selectorPrefix } from './Modal';
import SubmitButton from './SubmitButton';
import type { TriggerProps } from './types';

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
const Trigger: FC<TriggerProps> = ({
  className,
  style,
  value,
  onChange,
  children,
  renderTrigger,
  modalConfig,
  actions,
}) => {
  const onConfirm = (onClick, close) =>
    new Promise((resolve, reject) => {
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
    let dialog;

    const _modalConfig: ModalProps = modalConfig?.config ?? {};
    _modalConfig.footer =
      (actions ?? []).map?.((_actionConfig) => (
        <SubmitButton
          {...(_actionConfig ?? {})}
          onClick={() => onConfirm(_actionConfig.onClick, dialog?.close)}
        />
      )) ?? [];

    dialog = MessageDialog.Modal({
      config: _modalConfig,
      defaultCloseBtn: true,
      children: Children,
    });
  };

  return (
    <div
      className={classNames(`${selectorPrefix}-trigger`, className ?? '')}
      style={style ?? {}}
      onClick={debounce(onTrigger, 200)}
    >
      {renderTrigger?.()}
    </div>
  );
};

export default Trigger;
