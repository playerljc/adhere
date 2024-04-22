import { Button, ConfigProvider, Form } from 'antd';
import type { ConfigProviderProps } from 'antd/lib/config-provider';
import type { FormInstance } from 'antd/lib/form';
import { produce } from 'immer';
import React from 'react';
import ReactDOM, { Root } from 'react-dom/client';

import FormItemCreator from '@baifendian/adhere-ui-formitemcreator';
import Intl from '@baifendian/adhere-util-intl';

import { DEFAULT_LOCAL, DEFAULT_WIDTH, DEFAULT_ZINDEX, LOCAL, PROMPT_LAYOUT } from './Constent';
import MaximizeModalDialog from './MaximizeModal';
import ModalDialog, { selectorPrefix } from './Modal';
import Trigger from './Trigger';
import TriggerPrompt from './TriggerPrompt';
import type { AlertArgv, ConfirmArgv, ModalArgv, PromptArgv } from './types';

/**
 * renderByIcon
 * @param icon
 * @param text
 * @return React.ReactElement
 */
function renderByIcon(icon, text) {
  return (
    <div className={`${selectorPrefix}-render-icon`}>
      <div className={`${selectorPrefix}-render-icon-fixed`}>{icon}</div>
      <div className={`${selectorPrefix}-render-icon-auto`}>{text}</div>
    </div>
  );
}

let lock;

let antdConfigProviderProps: ConfigProviderProps = {};

const MessageDialogHandlers = new WeakMap<HTMLElement, Root>();

const MessageDialogFactory = {
  /**
   * setAntdConfigProviderProps
   * @description 设置ConfigProvider的props
   * @param params
   */
  setAntdConfigProviderProps(params) {
    antdConfigProviderProps = params;
  },
  /**
   * Confirm
   * @param title {String | ReactNode}
   * @param text {String | ReactNode}
   * @param width {number}
   * @param zIndex {number}
   * @param icon {React.ReactElement}
   * @param {Function} - onSuccess
   */
  Confirm({
    title,
    text = null,
    width = DEFAULT_WIDTH,
    zIndex = DEFAULT_ZINDEX,
    local,
    icon = null,
    onSuccess,
  }: ConfirmArgv) {
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
            title={Intl.v('确定')}
            onClick={() => {
              if (onSuccess) {
                onSuccess().then(() => result?.close?.());
              } else {
                result?.close?.();
              }
            }}
          >
            {Intl.v('确定')}
          </Button>,
        ],
      },
      local,
      children: icon ? renderByIcon(icon, text) : text,
    });

    return result;
  },
  /**
   * Alert
   * @param title - {String | ReactNode}
   * @param text - {String | ReactNode}
   * @param width - {number}
   * @param local
   * @param zIndex
   * @param icon - {React.ReactElement | null}
   */
  Alert({
    title,
    text = null,
    width = DEFAULT_WIDTH,
    zIndex = DEFAULT_ZINDEX,
    local,
    icon,
  }: AlertArgv) {
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
   * Prompt
   * @param title
   * @param config
   * @param layout
   * @param width
   * @param zIndex
   * @param local
   * @param onSuccess
   * @constructor
   */
  Prompt({
    title,
    config,
    layout = PROMPT_LAYOUT,
    width = DEFAULT_WIDTH,
    zIndex = DEFAULT_ZINDEX,
    local,
    onSuccess,
  }: PromptArgv) {
    const ref = React.createRef<FormInstance>();

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
            title={Intl.v('确定')}
            onClick={() => {
              if (onSuccess) {
                ref.current!.validateFields().then((values) => {
                  onSuccess(values?.value).then(() => result?.close?.());
                });
              } else {
                result?.close?.();
              }
            }}
          >
            {Intl.v('确定')}
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
   * InputPrompt
   * @param config
   * @param params
   * @constructor
   */
  InputPrompt({ config, ...params }: PromptArgv) {
    return MessageDialogFactory.Prompt({
      ...params,
      config: {
        ...config,
        type: FormItemCreator.INPUT,
      },
    });
  },
  /**
   * TextAreaPrompt
   * @param config
   * @param params
   * @constructor
   */
  TextAreaPrompt({ config, ...params }) {
    return MessageDialogFactory.Prompt({
      ...params,
      config: {
        ...config,
        type: FormItemCreator.TEXTAREA,
      },
    });
  },
  /**
   * PassWordPrompt
   * @param config
   * @param params
   * @constructor
   */
  PassWordPrompt({ config, ...params }) {
    return MessageDialogFactory.Prompt({
      ...params,
      config: {
        ...config,
        type: FormItemCreator.PASSWORD,
      },
    });
  },
  /**
   * NumberPrompt
   * @param config
   * @param params
   * @constructor
   */
  NumberPrompt({ config, ...params }) {
    return MessageDialogFactory.Prompt({
      ...params,
      config: {
        ...config,
        type: FormItemCreator.NUMBER,
      },
    });
  },
  /**
   *  Modal
   *  @param {Object} - config
   *  @param {String | ReactElement} - title
   *  @param {Boolean} - maskClosable 是否点击遮罩关闭 默认是false
   *  @param {Number} - zIndex 层级大小
   *  @param {String} - className 容器类名
   *  @param {String} - wrapClassName 包裹容器类名
   *  @param {Boolean} - centered 垂直居中展示 Modal 默认false
   *  @param {String | Number} - width 宽度
   *  @param {Boolean} - closable 是否显示关闭 默认true
   *  @param {Array<ReactNode>} - footer
   *  @param {ReactNode} - children
   *  @param defaultCloseBtn
   */
  Modal({
    config = {},
    children = null,
    defaultCloseBtn = true,
    local = DEFAULT_LOCAL,
  }: ModalArgv): {
    el: HTMLElement;
    close: () => void;
    setConfig: (callback: any) => void;
    update: (children?: any) => void;
  } | void {
    if (lock) return;

    lock = true;

    function render(_children?: any) {
      root.render(
        <ConfigProvider locale={LOCAL[local || DEFAULT_LOCAL]} {...(antdConfigProviderProps ?? {})}>
          <ModalDialog open={open} close={close} config={modalConfig} closeBtn={defaultCloseBtn}>
            {_children ?? children}
          </ModalDialog>
        </ConfigProvider>,
      );
    }

    function close() {
      open = false;

      render();

      setTimeout(() => {
        root.unmount();
        lock = false;
      }, 300);
    }

    let open = true;

    let modalConfig = {
      maskClosable: false,
      ...config,
      afterClose: () => {
        lock = false;

        if (config?.afterClose) {
          config?.afterClose?.();
        }
      },
    };

    const el = document.createElement('div');

    const root = ReactDOM.createRoot(el);

    render();

    MessageDialogHandlers.set(el, root);

    document.body.appendChild(el);

    return {
      el,
      close,
      setConfig: (callback: any) => {
        modalConfig = produce(modalConfig, callback);
        render();
      },
      update: (_children) => {
        render(_children);
      },
    };
  },
  /**
   * MaximizeModal
   * @param config
   * @param children
   * @param defaultCloseBtn
   * @param local
   * @constructor
   */
  MaximizeModal({
    config = {},
    children = null,
    defaultCloseBtn = true,
    local = DEFAULT_LOCAL,
  }: ModalArgv): {
    el: HTMLElement;
    close: () => void;
    setConfig: (callback: any) => void;
    update: (children?: any) => void;
  } | void {
    if (lock) return;

    lock = true;

    function render(_children?: any) {
      root.render(
        <ConfigProvider locale={LOCAL[local || DEFAULT_LOCAL]} {...(antdConfigProviderProps ?? {})}>
          <MaximizeModalDialog
            close={close}
            open={open}
            config={modalConfig}
            closeBtn={defaultCloseBtn}
          >
            {_children ?? children}
          </MaximizeModalDialog>
        </ConfigProvider>,
      );
    }

    function close() {
      open = false;

      render();

      setTimeout(() => {
        root.unmount();
        lock = false;
      }, 300);
    }

    let open = true;

    let modalConfig = {
      maskClosable: false,
      ...config,
      afterClose: () => {
        lock = false;

        if (config?.afterClose) {
          config?.afterClose?.();
        }
      },
    };

    const el = document.createElement('div');

    const root = ReactDOM.createRoot(el);

    render();

    MessageDialogHandlers.set(el, root);

    document.body.appendChild(el);

    return {
      el,
      close,
      setConfig: (callback: any) => {
        modalConfig = produce(modalConfig, callback);
        render();
      },
      update: (_children) => {
        render(_children);
      },
    };
  },
  /**
   * close
   * @param el
   */
  close(el: HTMLElement) {
    const root = MessageDialogHandlers.get(el);

    if (root) {
      root.unmount();
    }

    lock = false;
    // const flag = ReactDOM.unmountComponentAtNode(el);
    // if (flag) {
    //   el?.parentElement?.removeChild?.(el);
    // }
  },
  /**
   * Trigger
   */
  Trigger,
  /**
   * TriggerPrompt
   */
  TriggerPrompt,
};

export default MessageDialogFactory;
