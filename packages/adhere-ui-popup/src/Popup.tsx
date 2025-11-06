import React, { ReactNode } from 'react';
import { Root, createRoot } from 'react-dom/client';
import { v1 } from 'uuid';

import Util from '@baifendian/adhere-util';

import Trigger from './Trigger';
import TriggerPrompt from './TriggerPrompt';
import type { IConfig } from './types';

const selectorPrefix = 'adhere-ui-popup';

/** 前一个弹窗实例 */
let prePopup: Popup | null = null;
/** 所有弹窗实例数组 */
let popups: Popup[] = [];
/** 遮罩层元素 */
let maskEl: HTMLElement | null = null;
/** 容器元素 */
let el: HTMLElement | null = null;

/** 渲染包装器函数 */
let renderToWrapper: ((children: () => ReactNode) => ReactNode) | null = null;

/**
 * Popup弹窗类
 * @class Popup
 * @description 管理弹窗的显示、隐藏、销毁等生命周期
 */
export class Popup {
  /** 弹窗唯一标识 */
  private readonly id: string;
  /** 弹窗配置 */
  private readonly config: IConfig;
  /** 是否显示状态 */
  private isShow: boolean = false;
  /** 容器元素 */
  private el: HTMLElement;
  /** 弹窗元素 */
  private popupEl: HTMLDivElement | null = null;
  /** React根节点 */
  private root: Root | null = null;
  /** 弹窗处理器映射 */
  private popupHandlers = new WeakMap<HTMLElement, Root>();

  /**
   * 构造函数
   * @param config - 弹窗配置
   */
  constructor(config: IConfig) {
    this.id = v1();
    this.config = config;
    this.el = PopupFactory.getEl();

    this.onInnerElTransitionend = this.onInnerElTransitionend.bind(this);
    this.render();
  }

  /**
   * 创建遮罩层
   * @private
   */
  private createMask(): void {
    const { zIndex } = this.config;

    maskEl = document.createElement('div');
    maskEl.className = `${selectorPrefix}-mask`;
    maskEl.style.zIndex = String((zIndex || 11000) - 1500);

    this.el.appendChild(maskEl);
  }

  /**
   * 渲染弹窗内容
   * @private
   */
  private render(): void {
    const { children, zIndex } = this.config;

    this.popupEl = document.createElement('div');
    this.popupEl.addEventListener('transitionend', this.onInnerElTransitionend);
    this.popupEl.className = selectorPrefix;
    this.popupEl.style.zIndex = String(zIndex || 11000);

    this.root = createRoot(this.popupEl);

    const element = React.cloneElement(children as React.ReactElement, {
      ref: () => {
        this.el.appendChild(this.popupEl!);

        const configProviderEL = Util.getTopDom(this.popupEl!, 'adhere-ui-config-provider');

        if (configProviderEL) {
          this.popupEl!.style.cssText = configProviderEL.style.cssText;
        }

        this.trigger('onCreate');
      },
    });

    this.root.render(renderToWrapper?.(() => element) ?? element);
    this.popupHandlers.set(this.popupEl, this.root);
  }

  /**
   * 触发回调函数
   * @param hookName - 回调名称
   * @private
   */
  private trigger(hookName: keyof IConfig): void {
    const callback = this.config[hookName];
    if (typeof callback === 'function') {
      callback();
    }
  }

  /**
   * 更新弹窗内容
   * @param newChildren - 新的子元素
   */
  update(newChildren?: ReactNode): void {
    const { children } = this.config;
    const elementToRender = newChildren ?? children;

    const element = React.cloneElement(elementToRender as React.ReactElement, {
      ref: () => {
        this.el.appendChild(this.popupEl!);

        const configProviderEL = Util.getTopDom(this.popupEl!, 'adhere-ui-config-provider');

        if (configProviderEL) {
          this.popupEl!.style.cssText = configProviderEL.style.cssText;
        }

        this.trigger('onUpdate');
      },
    });

    this.root?.render(renderToWrapper?.(() => element) ?? element);
  }

  /**
   * 显示弹窗
   * @returns 是否成功显示
   */
  show(): boolean {
    if (!maskEl) {
      this.createMask();
    }

    maskEl!.style.display = 'block';
    this.popupEl!.style.display = 'block';
    this.isShow = true;

    this.trigger('onBeforeShow');

    setTimeout(() => {
      if (maskEl) {
        maskEl.classList.add('modal-in');
      }
      if (this.popupEl) {
        this.popupEl.classList.add('modal-in');
      }
    }, 100);

    return true;
  }

  /**
   * 显示弹窗并关闭前一个弹窗
   * @returns 是否成功显示
   */
  showClosePrePopup(): boolean {
    if (!maskEl) {
      this.createMask();
    }

    if (prePopup) {
      prePopup.close();
    }

    maskEl!.style.display = 'block';
    this.popupEl!.style.display = 'block';
    this.isShow = true;

    this.trigger('onBeforeShow');

    setTimeout(() => {
      if (maskEl) {
        maskEl.classList.add('modal-in');
      }
      if (this.popupEl) {
        this.popupEl.classList.add('modal-in');
      }
    }, 100);

    return true;
  }

  /**
   * 关闭弹窗
   * @returns 是否成功关闭
   */
  close(): boolean {
    if (!maskEl) {
      this.createMask();
    }

    this.isShow = false;

    const promise = this.config.onBeforeClose?.();

    if (promise && typeof promise.then === 'function') {
      promise
        .then(() => {
          this.removeModalClasses();
        })
        .catch((error) => {
          console.error('Error in onBeforeClose:', error);
          this.removeModalClasses();
        });
    } else {
      this.removeModalClasses();
    }

    return true;
  }

  /**
   * 移除模态框类名
   * @private
   */
  private removeModalClasses(): void {
    if (this.popupEl) {
      this.popupEl.classList.remove('modal-in');
    }
    if (maskEl) {
      maskEl.classList.remove('modal-in');
    }
  }

  /**
   * 销毁弹窗
   * @returns 是否成功销毁
   */
  destroy(): boolean {
    if (this.popupEl) {
      const root = this.popupHandlers.get(this.popupEl);
      if (root) {
        root.unmount();
      }
      this.popupEl = null;
    }

    this.trigger('onDestroy');
    return true;
  }

  /**
   * 检查是否已销毁
   * @returns 是否已销毁
   */
  isDestroy(): boolean {
    return !this.popupEl;
  }

  /**
   * 获取弹窗ID
   * @returns 弹窗ID
   */
  getId(): string {
    return this.id;
  }

  /**
   * 过渡动画结束回调
   * @private
   */
  private onInnerElTransitionend(): void {
    if (!this.isShow) {
      prePopup = null;
      this.popupEl!.style.display = 'none';
      maskEl!.style.display = 'none';
      this.trigger('onAfterClose');
    } else {
      prePopup = this;
      this.trigger('onAfterShow');
    }
  }
}

/**
 * Popup工厂类
 * @description 提供弹窗的创建、显示、关闭等静态方法
 */
const PopupFactory = {
  /**
   * 设置渲染包装器
   * @param _renderToWrapper - 渲染包装器函数
   */
  setRenderToWrapper(_renderToWrapper: (children: () => ReactNode) => ReactNode): void {
    renderToWrapper = _renderToWrapper;
  },

  /**
   * 创建弹窗实例
   * @param config - 弹窗配置
   * @returns 弹窗实例
   */
  create(config: IConfig): Popup {
    const instance = new Popup(config);
    popups.push(instance);
    return instance;
  },

  /**
   * 显示弹窗
   * @param popup - 弹窗实例
   * @returns 是否成功显示
   */
  show(popup: Popup): boolean {
    if (!popup || popup.isDestroy()) return false;
    if (popup === prePopup) return false;
    if (prePopup && popup.getId() === prePopup.getId()) return false;

    return popup.show();
  },

  /**
   * 显示弹窗并关闭前一个
   * @param popup - 弹窗实例
   * @returns 是否成功显示
   */
  showClosePrePopup(popup: Popup): boolean {
    if (!popup || popup.isDestroy()) return false;
    if (popup === prePopup) return false;
    if (prePopup && popup.getId() === prePopup.getId()) return false;

    if (prePopup) {
      prePopup.close();
    }

    return popup.show();
  },

  /**
   * 关闭弹窗
   * @param popup - 弹窗实例
   * @returns 是否成功关闭
   */
  close(popup: Popup): boolean {
    if (!popup || popup.isDestroy()) return false;
    return popup.close();
  },

  /**
   * 关闭所有弹窗
   * @returns 是否全部成功关闭
   */
  closeAll(): boolean {
    const results = popups.map((popup) => this.close(popup));
    return results.every((result) => result);
  },

  /**
   * 销毁弹窗
   * @param popup - 弹窗实例
   * @returns 是否成功销毁
   */
  destroy(popup: Popup): boolean {
    if (!popup || popup.isDestroy()) return false;

    const success = popup.destroy();
    if (success) {
      const index = popups.findIndex((p) => p === popup);
      if (index !== -1) {
        popups.splice(index, 1);
      }
    }

    return success;
  },

  /**
   * 获取容器元素
   * @returns 容器元素
   */
  getEl(): HTMLElement {
    return el || document.body;
  },

  /**
   * 设置容器元素
   * @param containerEl - 容器元素
   */
  setEl(containerEl: HTMLElement): void {
    el = containerEl;
  },

  /** Trigger组件 */
  Trigger,
  /** TriggerPrompt组件 */
  TriggerPrompt,
};

export default PopupFactory;
