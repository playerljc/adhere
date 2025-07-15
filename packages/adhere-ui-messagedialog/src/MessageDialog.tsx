import { Button, Form } from 'antd';
import type { FormInstance } from 'antd/es/form';
import { produce } from 'immer';
import React, { ReactNode, createRef } from 'react';
import ReactDOM, { Root } from 'react-dom/client';

import FormItemCreator from '@baifendian/adhere-ui-formitemcreator';
import Intl from '@baifendian/adhere-util-intl';

import { DEFAULT_WIDTH, DEFAULT_ZINDEX, PROMPT_LAYOUT } from './Constant';
import MaximizeModalDialog from './MaximizeModal';
import ModalDialog, { selectorPrefix } from './Modal';
import Trigger from './Trigger';
import TriggerPrompt from './TriggerPrompt';
import type { AlertArgv, ConfirmArgv, DialogHandle, ModalArgv, PromptArgv } from './types';

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
            title={Intl.get('confirm')}
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
            {Intl.get('confirm')}
          </Button>,
        ],
      },
      local,
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
    });
  },

  /**
   * 创建输入提示对话框
   * @param params - 输入提示对话框参数
   * @param params.title - 对话框标题
   * @param params.config - 表单配置
   * @param params.layout - 表单布局
   * @param params.width - 对话框宽度
   * @param params.zIndex - 对话框层级
   * @param params.local - 国际化语言
   * @param params.onSuccess - 确认回调函数
   * @returns 对话框句柄
   */
  Prompt({
    title,
    config,
    layout = PROMPT_LAYOUT,
    width = DEFAULT_WIDTH,
    zIndex = DEFAULT_ZINDEX,
    local,
    onSuccess,
  }: PromptArgv): DialogHandle | void {
    const ref = createRef<FormInstance>();

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
            title={Intl.get('confirm')}
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
            {Intl.get('confirm')}
          </Button>,
        ],
      },
      local,
      children: (
        <Form name="Prompt" ref={ref} style={{ width: '100%' }}>
          <FormItemCreator
            columns={[
              {
                ...(config || {
                  label: 'normal',
                  type: FormItemCreator.TEXT,
                  initialValue: '',
                }),
                name: 'value',
              },
            ]}
            layout={layout || PROMPT_LAYOUT}
          />
        </Form>
      ),
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
        ...config,
        type: FormItemCreator.INPUT,
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
        ...config,
        type: FormItemCreator.TEXTAREA,
      },
    });
  },

  /**
   * 创建密码输入提示对话框
   * @param config
   * @param params - 密码输入提示对话框参数
   * @returns 对话框句柄
   */
  PassWordPrompt({ config, ...params }: PromptArgv): DialogHandle | void {
    return MessageDialogFactory.Prompt({
      ...params,
      config: {
        ...config,
        type: FormItemCreator.PASSWORD,
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
        ...config,
        type: FormItemCreator.NUMBER,
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
  Modal({ config = {}, children = null, defaultCloseBtn = true }: ModalArgv): DialogHandle | void {
    // 如果不允许多实例且已锁定，则返回
    if (!allowMultipleInstances && lock) {
      console.warn('Modal dialog is locked, cannot create new instance');
      return;
    }

    lock = true;

    let open = true;
    let modalConfig = {
      maskClosable: false,
      ...config,
      afterClose: () => {
        lock = false;
        config?.afterClose?.();
      },
    };

    const el = document.createElement('div');
    const root = ReactDOM.createRoot(el);

    /**
     * 渲染对话框内容
     * @param _children - 可选的子元素
     */
    function render(_children?: ReactNode): void {
      const element = (
        <ModalDialog open={open} close={close} config={modalConfig} closeBtn={defaultCloseBtn}>
          {_children ?? children}
        </ModalDialog>
      );

      root.render(renderToWrapper?.(() => element) ?? element);
    }

    /**
     * 关闭对话框
     */
    function close(): void {
      open = false;
      render();

      setTimeout(() => {
        root.unmount();
        lock = false;
      }, 300);
    }

    render();
    MessageDialogHandlers.set(el, root);
    document.body.appendChild(el);

    return {
      el,
      close,
      setConfig: (callback: (draft: any) => void, _children?: ReactNode): void => {
        modalConfig = produce(modalConfig, callback);
        render(_children);
      },
      update: (_children?: ReactNode): void => {
        render(_children);
      },
    };
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
  }: ModalArgv): DialogHandle | void {
    if (!allowMultipleInstances && lock) {
      console.warn('Maximize modal dialog is locked, cannot create new instance');
      return;
    }

    lock = true;

    let open = true;
    let modalConfig = {
      maskClosable: false,
      ...config,
      afterClose: () => {
        lock = false;
        config?.afterClose?.();
      },
    };

    const el = document.createElement('div');
    const root = ReactDOM.createRoot(el);

    /**
     * 渲染对话框内容
     * @param _children - 可选的子元素
     */
    function render(_children?: ReactNode): void {
      const element = (
        <MaximizeModalDialog
          open={open}
          close={close}
          config={modalConfig}
          closeBtn={defaultCloseBtn}
        >
          {_children ?? children}
        </MaximizeModalDialog>
      );

      root.render(renderToWrapper?.(() => element) ?? element);
    }

    /**
     * 关闭对话框
     */
    function close(): void {
      open = false;
      render();

      setTimeout(() => {
        root.unmount();
        lock = false;
      }, 300);
    }

    render();
    MessageDialogHandlers.set(el, root);
    document.body.appendChild(el);

    return {
      el,
      close,
      setConfig: (callback: (draft: any) => void, _children?: ReactNode): void => {
        modalConfig = produce(modalConfig, callback);
        render(_children);
      },
      update: (_children?: ReactNode): void => {
        render(_children);
      },
    };
  },

  /**
   * 关闭指定的对话框
   * @param el - 对话框DOM元素
   */
  close(el: HTMLElement): void {
    const root = MessageDialogHandlers.get(el);
    if (root) {
      root.unmount();
      MessageDialogHandlers.delete(el);
    }
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
