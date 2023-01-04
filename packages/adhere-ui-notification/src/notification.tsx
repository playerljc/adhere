import React from 'react';
import ReactDOM from 'react-dom/client';
import { v1 } from 'uuid';

import type { Config, ShowConfig, ShowStandardConfig } from './types';

const selectorPrefix = 'adhere-ui-notification';

/**
 * Notification
 * @class Notification
 * @classdesc Notification
 */
class Notification {
  private readonly config: Config = {
    style: 'material',
    type: 'top',
  };

  // 通知产生的容器元素
  private container: HTMLElement;

  // 通知的inner元素
  private innerContainer: HTMLElement | undefined;

  // 通知的ul元素
  private notificationContainer: HTMLElement | undefined;

  // 存放所有的notification
  private notifications = {};
  private key: boolean = false;

  constructor(container, config: Config) {
    this.container = container;

    this.config = Object.assign(this.config, config);

    this.createInnerContainer();

    this.init();

    this.initEvents();
  }

  /**
   * createInnerContainer
   * @private
   */
  private createInnerContainer(): void {
    const innerContainer = this.container.querySelector(`.${selectorPrefix}`);
    if (innerContainer) {
      innerContainer?.parentElement?.removeChild(innerContainer);
    }

    this.innerContainer = document.createElement('div');
    this.innerContainer.className = selectorPrefix;

    this.notificationContainer = document.createElement('ul');
    this.innerContainer.appendChild(this.notificationContainer);

    this.container.appendChild(this.innerContainer);
  }

  /**
   * init
   * @private
   */
  private init(): void {
    const { config } = this;

    this.innerContainer?.classList.remove(
      [selectorPrefix].concat([config.type === 'top' ? 'bottom' : 'top', config.style]).join('-'),
    );

    this.innerContainer?.classList.add(
      [selectorPrefix].concat([config.type, config.style]).join('-'),
    );
  }

  /**
   * initEvents
   * @private
   */
  private initEvents(): void {
    const self = this;

    this.notificationContainer?.addEventListener('click', (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains('closeBtn')) {
        self.closeNotification.call(
          self,
          ((e.target as HTMLElement).parentNode as HTMLElement).dataset.id as string,
        );
      }
    });
  }

  /**
   * closeNotification - 点击删除通知
   * closeNotification
   * @param {string} id
   * @access private
   */
  private closeNotification(id: string): void {
    const self = this;

    if (self.key) return;

    self.key = true;

    const n = self.notifications[id];

    function transitionendAction() {
      n.removeEventListener('transitionend', transitionendAction);

      self?.notificationContainer?.removeChild(n);

      self.key = false;

      // closeAfter
      self.trigger('onCloseAfter', n);
    }

    // closeBefore
    self.trigger('onCloseBefore', n);

    n.addEventListener('transitionend', transitionendAction);

    n.style.overflow = 'hidden';

    n.querySelector('.info').style.opacity = '0';

    n.style.height = '0';
  }

  /**
   * buildCustom
   * @param config
   * @return string
   * @private
   */
  private buildCustom(config: ShowConfig): string {
    const { closed, children } = config;

    // console.log('IShowConfig', config);

    const id = v1();
    const n = document.createElement('li');
    n.dataset.id = id;

    const Component = () => (
      <>
        <div className="info">{children}</div>
        {closed ? <span className="closeBtn" /> : null}
      </>
    );

    ReactDOM.createRoot(n).render(<Component />);

    return this.build(id, n);
  }

  /**
   * buildStandard
   * @param config
   * @return string
   * @private
   */
  private buildStandard(config: ShowStandardConfig): string {
    const {
      headerLabel = '',
      headerIcon = '',
      title = '',
      text = '',
      icon = '',
      closed = true,
      datetime = '',
    } = config;

    // console.log('IShowStandardConfig', config);

    const id = v1();
    const n = document.createElement('li');
    n.dataset.id = id;

    const Component = () => (
      <>
        <div className="info">
          <div className={`${selectorPrefix}-standard-header`}>
            <div className={`${selectorPrefix}-standard-header-icon`}>
              {headerIcon ? <img src={headerIcon} alt="" /> : null}
            </div>
            <div className={`${selectorPrefix}-standard-header-label`}>{headerLabel || ''}</div>
          </div>
          <div className={`${selectorPrefix}-standard-content`}>
            <div className={`${selectorPrefix}-standard-content-media-l`}>
              {icon ? <img src={icon} alt="" /> : null}
            </div>
            <div className={`${selectorPrefix}-standard-content-row`}>
              <div className={`${selectorPrefix}-standard-content-row-title`}>{title || ''}</div>
              <div className={`${selectorPrefix}-standard-content-row-text`}>{text || ''}</div>
            </div>
            <div className={`${selectorPrefix}-standard-content-media-r`}>{datetime || ''}</div>
          </div>
        </div>
        {closed ? <span className="closeBtn" /> : null}
      </>
    );

    ReactDOM.createRoot(n).render(<Component />);

    return this.build(id, n);
  }

  /**
   * build
   * @param id
   * @param n
   * @return string
   * @private
   */
  private build(id: string, n): string {
    const self = this;

    this.notifications[id] = n;

    // @ts-ignore
    this.notificationContainer.appendChild(n);

    setTimeout(() => {
      // onCreate
      self.trigger('onCreate', n);

      n.style.height = 'auto';

      let targetHeight = n.clientHeight;

      // 会有最小高度的限制
      if (self.config.style === 'material') {
        if (targetHeight < 40) {
          targetHeight = 40;
        }
      } else if (self.config.style === 'ios') {
        if (targetHeight < 70) {
          targetHeight = 70;
        }
      }

      n.style.height = '0';

      setTimeout(() => {
        n.style.height = `${targetHeight}px`;

        n.querySelector('.info').style.opacity = '1';

        self.trigger('onShow', n);
      }, 100);
    }, 100);

    return id;
  }

  /**
   * trigger
   * @param action
   * @param params
   * @private
   */
  private trigger(action, params?: any): void {
    if (this.config[action]) {
      this.config[action](params);
    }
  }

  /**
   * show
   * @param {Object} config
   * @return {string} id
   */
  show(config: ShowConfig): string {
    return this.buildCustom(config);
  }

  /**
   * showStandard
   * @param {Object} config
   * @return {string} id
   */
  showStandard(config: ShowStandardConfig): string {
    return this.buildStandard(config);
  }

  /**
   * close
   * @param {string} id
   */
  close(id): void {
    this.closeNotification(id);
  }
}

/**
 * NotificationFactory
 */
export default {
  /**
   * build
   * @param container
   * @param config
   * @return Notification
   */
  build(container: HTMLElement, config: Config): Notification {
    return new Notification(container, config);
  },
};
