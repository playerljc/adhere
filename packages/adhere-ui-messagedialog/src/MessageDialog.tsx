import { Button } from 'antd';
import { produce } from 'immer';
import React, { ReactNode, createRef } from 'react';
import { Root, createRoot } from 'react-dom/client';

import Intl from '@baifendian/adhere-util-intl';

import {
  DEFAULT_WIDTH,
  DEFAULT_ZINDEX,
  /*PROMPT_LAYOUT*/
} from './Constant';
import MaximizeModalDialog from './MaximizeModal';
import ModalDialog, { selectorPrefix } from './Modal';
import PromptForm from './PromptForm';
import Trigger from './Trigger';
import TriggerPrompt from './TriggerPrompt';
import type {
  AlertArgv,
  ConfirmArgv,
  DialogHandle,
  ModalArgv,
  PromptArgv,
  PromptFormRefHandle,
} from './types';

/** 关闭动画后再卸载 root 的等待时间 */
const UNMOUNT_DELAY = 300;

/**
 * 渲染带图标的组件
 * @param icon - 图标元素
 * @param text - 文本内容
 * @returns 渲染的React元素
 */
function renderByIcon(icon: ReactNode, text: ReactNode): React.ReactElement {
  return (
    <div className={`${selectorPrefix}-render-icon`}>
      <div className={`${selectorPrefix}-render-icon-fixed`}>{icon}</div>
      <div className={`${selectorPrefix}-render-icon-auto`}>{text}</div>
    </div>
  );
}

/**
 * 是否允许多实例共存(弹层之后再弹层)，默认允许
 */
let allowMultipleInstances = true;

/**
 * 锁定状态，防止重复创建弹窗
 */
let lock = false;

/**
 * 自定义渲染包装器函数
 */
let renderToWrapper: ((children: () => ReactNode) => ReactNode) | undefined;

/**
 * 存储MessageDialog实例的WeakMap
 */
const MessageDialogHandlers = new WeakMap<HTMLElement, Root>();

type PortalDialogOptions = {
  config?: ModalArgv['config'];
  children?: ReactNode;
  defaultCloseBtn?: boolean;
  closeBtnText?: ModalArgv['closeBtnText'];
  renderDialog: (params: {
    open: boolean;
    close: () => void;
    config: Record<string, any>;
    closeBtn: boolean;
    closeBtnText?: ModalArgv['closeBtnText'];
    children: ReactNode;
  }) => React.ReactElement;
};

/**
 * 创建独立 React root 的弹层，并保证关闭后不再 render（避免 unmounted root 报错）
 */
function createPortalDialog({
  config = {},
  children = null,
  defaultCloseBtn = true,
  closeBtnText,
  renderDialog,
}: PortalDialogOptions): DialogHandle | void {
  if (!allowMultipleInstances && lock) {
    console.warn('Modal dialog is locked, cannot create new instance');
    return;
  }

  lock = true;

  let open = true;
  let disposed = false;
  let modalConfig: Record<string, any> = {
    maskClosable: false,
    ...config,
    afterClose: () => {
      lock = false;
      config?.afterClose?.();
    },
  };

  const el = document.createElement('div');
  const root = createRoot(el);

  function render(_children?: ReactNode): void {
    // 已卸载或正在关闭后的非法更新直接忽略
    if (disposed) return;

    const element = renderDialog({
      open,
      close,
      config: modalConfig,
      closeBtn: defaultCloseBtn,
      closeBtnText,
      children: _children ?? children,
    });

    root.render(renderToWrapper?.(() => element) ?? element);
  }

  function close(): void {
    if (disposed || !open) return;

    open = false;
    render();

    setTimeout(() => {
      if (disposed) return;

      disposed = true;
      try {
        root.unmount();
      } catch {
        // root 可能已卸载，忽略
      }

      MessageDialogHandlers.delete(el);
      el.parentElement?.removeChild(el);
      lock = false;
    }, UNMOUNT_DELAY);
  }

  render();
  MessageDialogHandlers.set(el, root);
  document.body.appendChild(el);

  return {
    el,
    close,
    setConfig: (callback: (draft: any) => void, _children?: ReactNode): void => {
      // 关闭中或已卸载时禁止更新，避免 Cannot update an unmounted root
      if (disposed || !open) return;

      modalConfig = produce(modalConfig, callback);
      render(_children);
    },
    update: (_children?: ReactNode): void => {
      if (disposed || !open) return;
      render(_children);
    },
  };
}

/**
 * MessageDialog工厂类
 * 提供各种类型的弹窗功能，包括确认框、警告框、输入框等
 */
const MessageDialogFactory = {
  /**
   * 设置自定义渲染包装器
   * @param _renderToWrapper - 渲染包装器函数
   */
  setRenderToWrapper(_renderToWrapper: (children: () => ReactNode) => ReactNode): void {
    renderToWrapper = _renderToWrapper;
  },

  /**
   * 创建确认对话框
   * @param params - 确认对话框参数
   * @param params.title - 对话框标题
   * @param params.text - 对话框内容文本
   * @param params.width - 对话框宽度
   * @param params.zIndex - 对话框层级
   * @param params.local - 国际化语言
   * @param params.icon - 图标元素
   * @param params.onSuccess - 确认回调函数
   * @returns 对话框句柄
   */
  Confirm({
    title,
    text = null,
    width = DEFAULT_WIDTH,
    zIndex = DEFAULT_ZINDEX,
    confirmText,
    closeBtnText,
    local,
    icon = null,
    onSuccess,
  }: ConfirmArgv): DialogHandle | void {
    const result = this.Modal({
      config: {
        title,
        centered: true,
        width: width || DEFAULT_WIDTH,
        closable: false,
        zIndex,
        footer: [
          <Button
            key="submit"
            type="primary"
            title={confirmText ?? Intl.get('confirm')}
            onClick={async () => {
              try {
                if (onSuccess) {
                  await onSuccess();
                }
                result?.close?.();
              } catch (error) {
                console.error('Confirm dialog onSuccess error:', error);
                result?.close?.();
              }
            }}
          >
            {confirmText ?? Intl.get('confirm')}
          </Button>,
        ],
      },
      local,
      closeBtnText,
      children: icon ? renderByIcon(icon, text) : text,
    });

    return result;
  },

  /**
   * 创建警告对话框
   * @param params - 警告对话框参数
   * @param params.title - 对话框标题
   * @param params.text - 对话框内容文本
   * @param params.width - 对话框宽度
   * @param params.zIndex - 对话框层级
   * @param params.local - 国际化语言
   * @param params.icon - 图标元素
   * @returns 对话框句柄
   */
  Alert({
    title,
    text = null,
    width = DEFAULT_WIDTH,
    zIndex = DEFAULT_ZINDEX,
    local,
    icon,
    closeBtnText,
  }: AlertArgv): DialogHandle | void {
    return this.Modal({
      config: {
        title,
        centered: true,
        width: width || DEFAULT_WIDTH,
        closable: false,
        zIndex,
      },
      local,
      children: icon ? renderByIcon(icon, text) : text,
      closeBtnText,
    });
  },

  /**
   * 创建输入提示对话框
   * @param params - 输入提示对话框参数
   * @param params.title - 对话框标题
   * @param params.config - 表单配置
   * @param params.width - 对话框宽度
   * @param params.zIndex - 对话框层级
   * @param params.local - 国际化语言
   * @param params.onSuccess - 确认回调函数
   * @returns 对话框句柄
   */
  Prompt({
    title,
    config,
    width = DEFAULT_WIDTH,
    zIndex = DEFAULT_ZINDEX,
    confirmText,
    closeBtnText,
    local,
    onSuccess,
  }: PromptArgv): DialogHandle | void {
    const ref = createRef<PromptFormRefHandle>();

    const result = this.Modal({
      config: {
        title,
        centered: true,
        width: width || DEFAULT_WIDTH,
        closable: false,
        zIndex,
        footer: [
          <Button
            key="submit"
            type="primary"
            title={confirmText ?? Intl.get('confirm')}
            onClick={async () => {
              try {
                if (onSuccess && ref.current) {
                  const values = await ref.current.validateFields();
                  await onSuccess(values?.value);
                }
                result?.close?.();
              } catch (error) {
                console.error('Prompt dialog validation error:', error);
                // 验证失败时不关闭对话框
              }
            }}
          >
            {confirmText ?? Intl.get('confirm')}
          </Button>,
        ],
      },
      local,
      closeBtnText,
      children: <PromptForm ref={ref} {...config} />,
    });

    return result;
  },

  /**
   * 创建输入框提示对话框
   * @param config
   * @param params - 输入框提示对话框参数
   * @returns 对话框句柄
   */
  InputPrompt({ config, ...params }: PromptArgv): DialogHandle | void {
    return MessageDialogFactory.Prompt({
      ...params,
      config: {
        ...(config ?? {}),
        schema: {
          type: 'object',
          properties: {
            ...(config?.schema?.properties ?? {}),
            value: {
              required: true,
              type: 'string',
              widget: 'input',
              props: {
                autoFocus: true,
                ...(config?.schema?.properties?.value?.props ?? {}),
              },
              ...(config?.schema?.properties?.value ?? {}),
            },
          },
        },
      },
    });
  },

  /**
   * 创建文本域提示对话框
   * @param config
   * @param params - 文本域提示对话框参数
   * @returns 对话框句柄
   */
  TextAreaPrompt({ config, ...params }: PromptArgv): DialogHandle | void {
    return MessageDialogFactory.Prompt({
      ...params,
      config: {
        ...(config ?? {}),
        schema: {
          type: 'object',
          properties: {
            ...(config?.schema?.properties ?? {}),
            value: {
              required: true,
              type: 'string',
              widget: 'textArea',
              props: {
                autoFocus: true,
                ...(config?.schema?.properties?.value?.props ?? {}),
              },
              ...(config?.schema?.properties?.value ?? {}),
            },
          },
        },
      },
    });
  },

  /**
   * 创建数字输入提示对话框
   * @param config
   * @param params - 数字输入提示对话框参数
   * @returns 对话框句柄
   */
  NumberPrompt({ config, ...params }: PromptArgv): DialogHandle | void {
    return MessageDialogFactory.Prompt({
      ...params,
      config: {
        ...(config ?? {}),
        schema: {
          type: 'object',
          properties: {
            ...(config?.schema?.properties ?? {}),
            value: {
              required: true,
              type: 'number',
              widget: 'inputNumber',
              props: {
                autoFocus: true,
                ...(config?.schema?.properties?.value?.props ?? {}),
              },
              ...(config?.schema?.properties?.value ?? {}),
            },
          },
        },
      },
    });
  },

  /**
   * 创建模态对话框
   * @param params - 模态对话框参数
   * @param params.config - 模态框配置
   * @param params.children - 子元素
   * @param params.defaultCloseBtn - 是否显示默认关闭按钮
   * @returns 对话框句柄
   */
  Modal({
    config = {},
    children = null,
    defaultCloseBtn = true,
    closeBtnText,
  }: ModalArgv): DialogHandle | void {
    return createPortalDialog({
      config,
      children,
      defaultCloseBtn,
      closeBtnText,
      renderDialog: ({ open, close, config: modalConfig, closeBtn, closeBtnText: btnText, children: dialogChildren }) => (
        <ModalDialog
          open={open}
          close={close}
          config={modalConfig}
          closeBtn={closeBtn}
          closeBtnText={btnText}
        >
          {dialogChildren}
        </ModalDialog>
      ),
    });
  },

  /**
   * 创建最大化模态对话框
   * @param params - 最大化模态对话框参数
   * @param params.config - 模态框配置
   * @param params.children - 子元素
   * @param params.defaultCloseBtn - 是否显示默认关闭按钮
   * @returns 对话框句柄
   */
  MaximizeModal({
    config = {},
    children = null,
    defaultCloseBtn = true,
    closeBtnText,
  }: ModalArgv): DialogHandle | void {
    return createPortalDialog({
      config,
      children,
      defaultCloseBtn,
      closeBtnText,
      renderDialog: ({ open, close, config: modalConfig, closeBtn, closeBtnText: btnText, children: dialogChildren }) => (
        <MaximizeModalDialog
          open={open}
          close={close}
          config={modalConfig}
          closeBtn={closeBtn}
          closeBtnText={btnText}
        >
          {dialogChildren}
        </MaximizeModalDialog>
      ),
    });
  },

  /**
   * 关闭指定的对话框
   * @param el - 对话框DOM元素
   */
  close(el: HTMLElement): void {
    const root = MessageDialogHandlers.get(el);
    if (root) {
      try {
        root.unmount();
      } catch {
        // ignore
      }
      MessageDialogHandlers.delete(el);
    }
    el.parentElement?.removeChild(el);
    lock = false;
  },

  /**
   * Trigger组件
   */
  Trigger,

  /**
   * TriggerPrompt组件
   */
  TriggerPrompt,

  /**
   * 设置是否允许多实例共存
   * @param allow - 是否允许
   */
  allowMultipleInstances: (allow: boolean): void => {
    allowMultipleInstances = allow;
  },
};

export default MessageDialogFactory;
