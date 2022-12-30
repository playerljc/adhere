import React from 'react';
import ReactDOM from 'react-dom';
import { v1 } from 'uuid';

import { IConfig } from './types';

const selectorPrefix = 'adhere-ui-popup';

let prePopup: Popup | null = null;
let popups: Popup[] = [];
let maskEl;
let el = null;

/**
 * Popup
 * @class Popup
 * @classdesc Popup
 */
class Popup {
  private readonly id: string = '';
  private readonly config: IConfig | null = null;

  private isShow: boolean = false;
  private el: HTMLElement | null = null;
  private popupEl: HTMLDivElement | null = null;

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

    ReactDOM.render(children, this.popupEl, () => {
      (this.el as HTMLElement).appendChild(this.popupEl as HTMLElement);
      this.trigger('onCreate');
    });
  }

  /**
   * trigger
   * @param hookName
   */
  private trigger(hookName: string): void {
    if (this.config?.[hookName]) {
      return this.config[hookName]();
    }
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

    maskEl.style.display = 'block';

    (this.popupEl as HTMLElement).style.display = 'block';

    this.isShow = true;

    this.trigger('onBeforeShow');

    setTimeout(() => {
      maskEl.classList.add('modal-in');
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

    maskEl.style.display = 'block';

    (this.popupEl as HTMLElement).style.display = 'block';

    this.isShow = true;

    this.trigger('onBeforeShow');

    setTimeout(() => {
      maskEl.classList.add('modal-in');
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
        (this.popupEl as HTMLElement).classList.remove('modal-in');

        maskEl.classList.remove('modal-in');
      });
    } else {
      (this.popupEl as HTMLElement).classList.remove('modal-in');

      maskEl.classList.remove('modal-in');
    }

    return true;
  }

  /**
   * destroy - 销毁一个popup
   */
  destroy(): boolean {
    if (ReactDOM.unmountComponentAtNode(this.popupEl!)) {
      (this.popupEl as HTMLElement).parentNode?.removeChild(this.popupEl!);
      this.popupEl = null;
    }

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
      maskEl.style.display = 'none';

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
    if (!popup) return false;

    if (popup.isDestroy()) return false;

    return popup.close();
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
};

export default PopupFactory;
