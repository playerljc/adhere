import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider, Button } from 'antd';

import intl from '@baifendian/adhere-util-intl';

// @ts-ignore
import Resource from '@baifendian/adhere-util-resource';

import { IAlertArgv, IConfirmArgv } from './types';

import Actions from './actions';
import Emitter from './emitter';
import ModalDialog from './modal';

import { selectorPrefix } from './modal';

const DEFAULT_LOCAL = 'zh_CN';

const LOCAL = Resource.Dict.value.LocalsAntd;

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

// @ts-ignore
// @ts-ignore
export default {
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
  }: IConfirmArgv) {
    const el = this.Modal({
      config: {
        title,
        centered: true,
        width: width || 300,
        closable: false,
        zIndex,
        // icon,
        footer: [
          <Button
            key="submit"
            type="primary"
            title={intl.v('确定')}
            onClick={() => {
              if (onSuccess) {
                onSuccess().then(() => {
                  Emitter.trigger(Actions.close, el);
                });
              } else {
                Emitter.trigger(Actions.close, el);
              }
            }}
          >
            {intl.v('确定')}
          </Button>,
        ],
      },
      local,
      // @ts-ignore
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
  Alert({ title, text = null, width = 300, zIndex = 1000, local, icon }: IAlertArgv) {
    this.Modal({
      config: {
        title,
        centered: true,
        width: width || 300,
        closable: false,
        zIndex,
        // icon,
      },
      local,
      // @ts-ignore
      children: icon ? renderByIcon(icon, text) : text,
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
   *  @param defaultCloneBtn
   */
  Modal({ config = {}, children = null, defaultCloneBtn = true, local = DEFAULT_LOCAL }) {
    const modalConfig = Object.assign(
      {
        maskClosable: false,
      },
      config,
    );

    const el = document.createElement('div');

    // @ts-ignore
    ReactDOM.render(
      <ConfigProvider locale={LOCAL[local || DEFAULT_LOCAL]}>
        <ModalDialog parent={el} config={modalConfig} cloneBtn={defaultCloneBtn}>
          {children}
        </ModalDialog>
      </ConfigProvider>,
      el,
    );

    document.body.appendChild(el);

    return el;
  },
  /**
   * close
   * @param el
   */
  close(el: HTMLElement) {
    Emitter.trigger(Actions.close, el);
  },
};
