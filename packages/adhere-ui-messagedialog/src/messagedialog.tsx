import { Button, ConfigProvider, Form } from 'antd';
import type { FormInstance } from 'antd/lib/form';
import React from 'react';
import ReactDOM from 'react-dom';

import FormItemCreator from '@baifendian/adhere-ui-formitemcreator';
import Intl from '@baifendian/adhere-util-intl';
import Resource from '@baifendian/adhere-util-resource';

import ModalDialog, { selectorPrefix } from './modal';
import type { AlertArgv, ConfirmArgv, ModalArgv, PromptArgv } from './types';

const DEFAULT_LOCAL = 'zh_CN';

const LOCAL = Resource.Dict.value.LocalsAntd.value;

const PromptLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

/**
 * renderByIcon
 * @param icon
 * @param text
 * @return React.ReactElement
 */
function renderByIcon(icon, text) {
  return (
    <div className={`${selectorPrefix}-renderByIcon`}>
      <div className={`${selectorPrefix}-renderByIcon-fixed`}>{icon}</div>
      <div className={`${selectorPrefix}-renderByIcon-auto`}>{text}</div>
    </div>
  );
}

const MessageDialogFactory = {
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
    width = 300,
    zIndex = 1000,
    local,
    icon = null,
    onSuccess,
  }: ConfirmArgv) {
    const { close } = this.Modal({
      config: {
        title,
        centered: true,
        width: width || 300,
        closable: false,
        zIndex,
        footer: [
          <Button
            key="submit"
            type="primary"
            title={Intl.v('确定')}
            onClick={() => {
              if (onSuccess) {
                onSuccess().then(() => close());
              } else {
                close();
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
  Alert({ title, text = null, width = 300, zIndex = 1000, local, icon }: AlertArgv) {
    this.Modal({
      config: {
        title,
        centered: true,
        width: width || 300,
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
    layout = PromptLayout,
    width = 300,
    zIndex = 1000,
    local,
    onSuccess,
  }: PromptArgv) {
    const ref = React.createRef<FormInstance>();

    const { close } = this.Modal({
      config: {
        title,
        centered: true,
        width: width || 300,
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
                  onSuccess(values?.value).then(() => close());
                });
              } else {
                close();
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
            layout={layout || PromptLayout}
          />
        </Form>
      ),
    });
  },
  InputPrompt({ config, ...params }: PromptArgv) {
    MessageDialogFactory.Prompt({
      ...params,
      config: {
        ...config,
        type: FormItemCreator.INPUT,
      },
    });
  },
  TextAreaPrompt({ config, ...params }) {
    MessageDialogFactory.Prompt({
      ...params,
      config: {
        ...config,
        type: FormItemCreator.TEXTAREA,
      },
    });
  },
  PassWordPrompt({ config, ...params }) {
    MessageDialogFactory.Prompt({
      ...params,
      config: {
        ...config,
        type: FormItemCreator.PASSWORD,
      },
    });
  },
  NumberPrompt({ config, ...params }) {
    MessageDialogFactory.Prompt({
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
  }: ModalArgv) {
    const modalConfig = Object.assign(
      {
        maskClosable: false,
      },
      config,
    );

    const el = document.createElement('div');

    function close() {
      const flag = ReactDOM.unmountComponentAtNode(el);
      if (flag) {
        el?.parentElement?.removeChild?.(el);
      }
    }

    ReactDOM.render(
      <ConfigProvider locale={LOCAL[local || DEFAULT_LOCAL]}>
        <ModalDialog close={close} config={modalConfig} closeBtn={defaultCloseBtn}>
          {children}
        </ModalDialog>
      </ConfigProvider>,
      el,
    );

    document.body.appendChild(el);

    return {
      el,
      close,
    };
  },
  /**
   * close
   * @param el
   */
  close(el: HTMLElement) {
    const flag = ReactDOM.unmountComponentAtNode(el);
    if (flag) {
      el?.parentElement?.removeChild?.(el);
    }
  },
};

export default MessageDialogFactory;
