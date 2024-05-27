import React, { ReactNode, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { v1 } from 'uuid';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import Util from '@baifendian/adhere-util';

import type { Config, ShowConfig, ShowStandardConfig } from './types';

const selectorPrefix = 'adhere-ui-notification';

let renderToWrapper: (children: () => ReactNode) => ReactNode;

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

  constructor(container: HTMLElement, config: Config) {
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
      if ((e.target as HTMLElement).classList.contains('close-btn')) {
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

    const id = v1();
    const n = document.createElement('li');
    n.dataset.id = id;

    const Component = () => {
      const { media } = useContext(ConfigProvider.Context);

      useEffect(() => {
        this.build(id, n, media);
      }, []);

      return (
        <>
          <div className="info">{children}</div>
          {closed ? <span className="close-btn" /> : null}
        </>
      );
    };

    ReactDOM.createRoot(n).render(renderToWrapper?.(() => <Component />) ?? <Component />);

    return id;
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

    const id = v1();
    const n = document.createElement('li');
    n.dataset.id = id;

    const Component = () => {
      const { media } = useContext(ConfigProvider.Context);

      useEffect(() => {
        this.build(id, n, media);
      }, []);

      return (
        <>
          <div className="info">
            <div className={`${selectorPrefix}-standard-header`}>
              <div className={`${selectorPrefix}-standard-header-icon`}>
                {headerIcon ? <img src={headerIcon} alt="" /> : null}
              </div>
              <div className={`${selectorPrefix}-standard-header-label`}>{headerLabel ?? ''}</div>
            </div>
            <div className={`${selectorPrefix}-standard-content`}>
              <div className={`${selectorPrefix}-standard-content-media-l`}>
                {icon ? <img src={icon} alt="" /> : null}
              </div>
              <div className={`${selectorPrefix}-standard-content-row`}>
                <div className={`${selectorPrefix}-standard-content-row-title`}>{title ?? ''}</div>
                <div className={`${selectorPrefix}-standard-content-row-text`}>{text ?? ''}</div>
              </div>
              <div className={`${selectorPrefix}-standard-content-media-r`}>{datetime ?? ''}</div>
            </div>
          </div>
          {closed ? <span className="close-btn" /> : null}
        </>
      );
    };

    ReactDOM.createRoot(n).render(renderToWrapper?.(() => <Component />) ?? <Component />);

    this.build(id, n);

    return id;
  }

  /**
   * build
   * @param id
   * @param n
   * @param media
   * @return string
   * @private
   */
  private build(
    id: string,
    n: HTMLLIElement,
    media: ConfigProviderProps['media'] = { isUseMedia: false, designWidth: 192 },
  ): string {
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
        let targetHeightValue = `${targetHeight}px`;
        if (media?.isUseMedia) {
          targetHeightValue = `${Util.pxToRem(targetHeight, media?.designWidth as number)}`;
        }
        n.style.height = `${targetHeightValue}`;

        (n.querySelector('.info') as HTMLElement).style.opacity = '1';

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
  private trigger(action: string, params?: any): void {
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
  close(id: string): void {
    this.closeNotification(id);
  }
}

const NotificationFactory = {
  /**
   * setRenderToWrapper
   * @description 设置renderToWrapper方法
   * @param _renderToWrapper
   */
  setRenderToWrapper(_renderToWrapper) {
    renderToWrapper = _renderToWrapper;
  },
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

/**
 * NotificationFactory
 */
export default NotificationFactory;
