import React, { ReactNode } from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import { v1 } from 'uuid';

import Util from '@baifendian/adhere-util';

import Trigger from './Trigger';
import TriggerPrompt from './TriggerPrompt';
import type { IConfig } from './types';

const selectorPrefix = 'adhere-ui-popup';

let prePopup: Popup | null = null;
let popups: Popup[] = [];
let maskEl: HTMLElement | null;
let el = null;

let renderToWrapper: (children: () => ReactNode) => ReactNode;

/**
 * Popup
 * @class Popup
 * @classdesc Popup
 */
export class Popup {
  private readonly id: string = '';
  private readonly config: IConfig | null = null;

  private isShow: boolean = false;
  private el: HTMLElement | null = null;
  private popupEl: HTMLDivElement | null = null;

  private root: Root | null = null;

  private popupHandlers = new WeakMap<HTMLElement, Root>();

  /**
   * constructor
   * @param config {Object} - config
   */
  constructor(config: IConfig) {
    this.isShow = false;
    this.el = PopupFactory.getEl();
    this.id = v1();
    this.config = config;

    this.onInnerElTransitionend = this.onInnerElTransitionend.bind(this);

    this.render();
  }

  /**
   * createMask
   */
  private createMask(): void {
    const { zIndex } = this.config!;

    maskEl = document.createElement('div');

    maskEl.className = `${selectorPrefix}-mask`;

    maskEl.style.zIndex = String((zIndex || 11000) - 1500);

    (this.el as HTMLElement).appendChild(maskEl);
  }

  /**
   * render
   */
  private render(): void {
    const { children, zIndex } = this.config!;

    this.popupEl = document.createElement('div');

    this.popupEl.addEventListener('transitionend', this.onInnerElTransitionend);

    this.popupEl.className = selectorPrefix;

    this.popupEl.style.zIndex = String(zIndex || 11000);

    this.root = ReactDOM.createRoot(this.popupEl);

    const element = React.cloneElement(children, {
      ref: () => {
        (this.el as HTMLElement).appendChild(this.popupEl as HTMLElement);

        const configProviderEL = Util.getTopDom(
          this.popupEl as HTMLElement,
          'adhere-ui-config-provider',
        );

        if (configProviderEL) {
          (this.popupEl as HTMLDivElement).style.cssText = configProviderEL?.style?.cssText;
        }

        this.trigger('onCreate');
      },
    });
    this.root.render(renderToWrapper?.(() => element) ?? element);

    this.popupHandlers.set(this.popupEl, this.root);
  }

  /**
   * trigger
   * @param hookName
   */
  private trigger(hookName: string): void {
    if (this.config?.[hookName]) {
      return this?.config?.[hookName]?.();
    }
  }

  update(_children) {
    const { children } = this.config!;

    const element = React.cloneElement(_children ?? children, {
      ref: () => {
        (this.el as HTMLElement).appendChild(this.popupEl as HTMLElement);

        const configProviderEL = Util.getTopDom(
          this.popupEl as HTMLElement,
          'adhere-ui-config-provider',
        );

        if (configProviderEL) {
          (this.popupEl as HTMLDivElement).style.cssText = configProviderEL?.style?.cssText;
        }

        this.trigger('onUpdate');
      },
    });
    this.root?.render(renderToWrapper?.(() => element) ?? element);
  }

  /**
   * show - 显示一个popup
   * @return boolean
   */
  show(): boolean {
    if (!maskEl) {
      this.createMask();
    }

    // if (prePopup) {
    //   prePopup.close();
    // }

    (maskEl as HTMLElement).style.display = 'block';

    (this.popupEl as HTMLElement).style.display = 'block';

    this.isShow = true;

    this.trigger('onBeforeShow');

    setTimeout(() => {
      (maskEl as HTMLElement).classList.add('modal-in');
      (this.popupEl as HTMLElement).classList.add('modal-in');
    }, 100);

    return true;
  }

  /**
   * show - 显示一个popup
   * @return boolean
   */
  showClosePrePopup(): boolean {
    if (!maskEl) {
      this.createMask();
    }

    if (prePopup) {
      prePopup.close();
    }

    (maskEl as HTMLElement).style.display = 'block';

    (this.popupEl as HTMLElement).style.display = 'block';

    this.isShow = true;

    this.trigger('onBeforeShow');

    setTimeout(() => {
      (maskEl as HTMLElement).classList.add('modal-in');
      (this.popupEl as HTMLElement).classList.add('modal-in');
    }, 100);

    return true;
  }

  /**
   * close - 关闭一个popup
   * @return boolean
   */
  close(): boolean {
    if (!maskEl) {
      this.createMask();
    }

    this.isShow = false;

    const promise = this.trigger('onBeforeClose') as any;

    if (promise && 'then' in promise && promise.then instanceof Function) {
      promise.then(() => {
        try {
          (this.popupEl as HTMLElement).classList.remove('modal-in');
        } catch (e) {
          throw e;
        }

        (maskEl as HTMLElement).classList.remove('modal-in');
      });
    } else {
      (this.popupEl as HTMLElement).classList.remove('modal-in');

      (maskEl as HTMLElement).classList.remove('modal-in');
    }

    return true;
  }

  /**
   * destroy - 销毁一个popup
   */
  destroy(): boolean {
    if (this.popupEl) {
      const root = this.popupHandlers.get(this.popupEl);
      if (root) {
        root.unmount();
      }
      this.popupEl = null;
    }

    // if (ReactDOM.unmountComponentAtNode(this.popupEl!)) {
    //   (this.popupEl as HTMLElement).parentNode?.removeChild(this.popupEl!);
    //   this.popupEl = null;
    // }

    this.trigger('onDestroy');

    return true;
  }

  /**
   * isDestroy - 是否已经销毁
   * @return {boolean}
   */
  isDestroy(): boolean {
    return !this.popupEl;
  }

  /**
   * getId
   * @return {string} - id
   */
  getId(): string {
    return this.id;
  }

  /**
   * onInnerElTransitionend
   */
  onInnerElTransitionend(): void {
    if (!this.isShow) {
      prePopup = null;

      (this.popupEl as HTMLElement).style.display = 'none';
      (maskEl as HTMLElement).style.display = 'none';

      this.trigger('onAfterClose');
    } else {
      prePopup = this;

      this.trigger('onAfterShow');
    }
  }
}

/**
 * PopupFactory
 */
const PopupFactory = {
  /**
   * setRenderToWrapper
   * @description 设置renderToWrapper方法
   * @param _renderToWrapper
   */
  setRenderToWrapper(_renderToWrapper) {
    renderToWrapper = _renderToWrapper;
  },
  /**
   * create
   * @param config
   * @return Popup
   */
  create(config: IConfig): Popup {
    const ins = new Popup(config);

    popups.push(ins);

    return ins;
  },
  /**
   * show - 显示一个popup
   * @param popup
   * @return boolean
   */
  show(popup: Popup) {
    if (!popup) return false;

    if (popup.isDestroy()) return false;

    if (popup === prePopup) return false;

    if (prePopup && popup.getId() === prePopup.getId()) return false;

    return popup.show();
  },
  /**
   * showClosePrePopup
   * @description 关闭之前的显示
   * @param popup
   * @return boolean
   */
  showClosePrePopup(popup: Popup) {
    if (!popup) return false;

    if (popup.isDestroy()) return false;

    if (popup === prePopup) return false;

    if (prePopup && popup.getId() === prePopup.getId()) return false;

    if (prePopup) {
      prePopup.close();
    }

    return popup.show();
  },
  /**
   * close - 关闭一个popup
   * @param {Popup} popup
   * @return boolean
   */
  close(popup: Popup) {
    try {
      if (!popup) return false;

      if (popup.isDestroy()) return false;

      return popup.close();
    } catch (e) {
      throw e;
    }
  },
  /**
   * closeAll - 关闭所有
   * @return boolean
   */
  closeAll() {
    const flags: boolean[] = [];

    popups.forEach((p) => {
      const flag = this.close(p);
      flags.push(flag);
    });

    return flags.every((flag) => flag);
  },
  /**
   * destroy - 销毁一个popup
   * @param {Popup} popup
   * @return bool
   */
  destroy(popup) {
    if (!popup) return false;

    if (popup.isDestroy()) return false;

    const res = popup.destroy();

    if (res) {
      const index = popups.findIndex((p) => p === popup);

      if (index !== -1) {
        popups.splice(index, 1);
      }
    }

    return res;
  },
  /**
   * getEl
   * @return {HTMLElement}
   */
  getEl() {
    return el || document.body;
  },
  /**
   * setEl
   * @param tel
   */
  setEl(tel) {
    el = tel;
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

export default PopupFactory;
