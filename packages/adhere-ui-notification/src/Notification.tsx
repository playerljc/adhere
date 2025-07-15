import React, { ReactNode, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { v1 } from 'uuid';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import Util from '@baifendian/adhere-util';

import type { Config, ShowConfig, ShowStandardConfig, NotificationInstance, NotificationFactory } from './types';

const selectorPrefix = 'adhere-ui-notification';

/** Type for render wrapper function */
type RenderToWrapperFunction = (children: () => ReactNode) => ReactNode;

/** Global render wrapper function */
let renderToWrapper: RenderToWrapperFunction | undefined;

/**
 * Notification class for managing notification instances
 * @class Notification
 * @implements {NotificationInstance}
 */
class Notification implements NotificationInstance {
  /** Default configuration */
  private readonly defaultConfig: Config = {
    style: 'material',
    type: 'top',
  };

  /** Current configuration */
  private readonly config: Config;

  /** Container element for notifications */
  private readonly container: HTMLElement;

  /** Inner container element */
  private innerContainer: HTMLElement | null = null;

  /** Notification list container */
  private notificationContainer: HTMLElement | null = null;

  /** Map of all active notifications */
  private readonly notifications: Record<string, HTMLLIElement> = {};

  /** Flag to prevent multiple close operations */
  private isClosing: boolean = false;

  /**
   * Constructor
   * @param container - Container element for notifications
   * @param config - Configuration object
   */
  constructor(container: HTMLElement, config: Config) {
    this.container = container;
    this.config = { ...this.defaultConfig, ...config };

    this.createInnerContainer();
    this.init();
    this.initEvents();
  }

  /**
   * Create inner container for notifications
   * @private
   */
  private createInnerContainer(): void {
    // Remove existing container if present
    const existingContainer = this.container.querySelector(`.${selectorPrefix}`);
    if (existingContainer) {
      existingContainer.parentElement?.removeChild(existingContainer);
    }

    // Create new inner container
    this.innerContainer = document.createElement('div');
    this.innerContainer.className = selectorPrefix;

    // Create notification list container
    this.notificationContainer = document.createElement('ul');
    this.innerContainer.appendChild(this.notificationContainer);

    this.container.appendChild(this.innerContainer);
  }

  /**
   * Initialize notification container styles
   * @private
   */
  private init(): void {
    if (!this.innerContainer) return;

    const { config } = this;

    // Remove existing classes
    this.innerContainer.classList.remove(
      `${selectorPrefix}-${config.type === 'top' ? 'bottom' : 'top'}-${config.style}`,
    );

    // Add new classes
    this.innerContainer.classList.add(`${selectorPrefix}-${config.type}-${config.style}`);
  }

  /**
   * Initialize event listeners
   * @private
   */
  private initEvents(): void {
    if (!this.notificationContainer) return;

    this.notificationContainer.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('close-btn')) {
        const notificationElement = target.parentNode as HTMLElement;
        const id = notificationElement.dataset.id;
        if (id) {
          this.closeNotification(id);
        }
      }
    });
  }

  /**
   * Close notification by ID
   * @param id - Notification ID
   * @private
   */
  private closeNotification(id: string): void {
    if (this.isClosing) return;

    this.isClosing = true;

    const notificationElement = this.notifications[id];
    if (!notificationElement) {
      this.isClosing = false;
      return;
    }

    const handleTransitionEnd = (): void => {
      notificationElement.removeEventListener('transitionend', handleTransitionEnd);

      this.notificationContainer?.removeChild(notificationElement);
      delete this.notifications[id];

      this.isClosing = false;

      // Trigger onCloseAfter callback
      this.trigger('onCloseAfter', notificationElement);
    };

    // Trigger onCloseBefore callback
    this.trigger('onCloseBefore', notificationElement);

    notificationElement.addEventListener('transitionend', handleTransitionEnd);

    // Start close animation
    notificationElement.style.overflow = 'hidden';
    const infoElement = notificationElement.querySelector('.info') as HTMLElement;
    if (infoElement) {
      infoElement.style.opacity = '0';
    }
    notificationElement.style.height = '0';
  }

  /**
   * Build custom notification
   * @param config - Custom notification configuration
   * @returns Notification ID
   * @private
   */
  private buildCustom(config: ShowConfig): string {
    const { closed, children } = config;

    const id = v1();
    const notificationElement = document.createElement('li');
    notificationElement.dataset.id = id;

    const CustomComponent: React.FC = () => {
      const { media } = useContext(ConfigProvider.Context);

      useEffect(() => {
        this.build(id, notificationElement, media);
      }, []);

      return (
        <>
          <div className="info">{children}</div>
          {closed && <span className="close-btn" />}
        </>
      );
    };

    const root = ReactDOM.createRoot(notificationElement);
    const component = renderToWrapper ? renderToWrapper(() => <CustomComponent />) : <CustomComponent />;
    root.render(component);

    return id;
  }

  /**
   * Build standard notification
   * @param config - Standard notification configuration
   * @returns Notification ID
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
    const notificationElement = document.createElement('li');
    notificationElement.dataset.id = id;

    const StandardComponent: React.FC = () => {
      const { media } = useContext(ConfigProvider.Context);

      useEffect(() => {
        this.build(id, notificationElement, media);
      }, []);

      return (
        <>
          <div className="info">
            <div className={`${selectorPrefix}-standard-header`}>
              <div className={`${selectorPrefix}-standard-header-icon`}>
                {headerIcon && <img src={headerIcon} alt="" />}
              </div>
              <div className={`${selectorPrefix}-standard-header-label`}>{headerLabel}</div>
            </div>
            <div className={`${selectorPrefix}-standard-content`}>
              <div className={`${selectorPrefix}-standard-content-media-l`}>
                {icon && <img src={icon} alt="" />}
              </div>
              <div className={`${selectorPrefix}-standard-content-row`}>
                <div className={`${selectorPrefix}-standard-content-row-title`}>{title}</div>
                <div className={`${selectorPrefix}-standard-content-row-text`}>{text}</div>
              </div>
              <div className={`${selectorPrefix}-standard-content-media-r`}>{datetime}</div>
            </div>
          </div>
          {closed && <span className="close-btn" />}
        </>
      );
    };

    const root = ReactDOM.createRoot(notificationElement);
    const component = renderToWrapper ? renderToWrapper(() => <StandardComponent />) : <StandardComponent />;
    root.render(component);

    return id;
  }

  /**
   * Build notification element and add to container
   * @param id - Notification ID
   * @param notificationElement - Notification element
   * @param media - Media configuration
   * @returns Notification ID
   * @private
   */
  private build(
    id: string,
    notificationElement: HTMLLIElement,
    media: ConfigProviderProps['media'] = { isUseMedia: false, designWidth: 192 },
  ): string {
    this.notifications[id] = notificationElement;

    if (!this.notificationContainer) {
      throw new Error('Notification container not initialized');
    }

    this.notificationContainer.appendChild(notificationElement);

    // Trigger onCreate callback
    this.trigger('onCreate', notificationElement);

    // Animate notification appearance
    setTimeout(() => {
      notificationElement.style.height = 'auto';

      let targetHeight = notificationElement.clientHeight;

      // Apply minimum height constraints
      if (this.config.style === 'material' && targetHeight < 40) {
        targetHeight = 40;
      } else if (this.config.style === 'ios' && targetHeight < 70) {
        targetHeight = 70;
      }

      notificationElement.style.height = '0';

      setTimeout(() => {
        let targetHeightValue = `${targetHeight}px`;
        if (media?.isUseMedia && media?.designWidth) {
          targetHeightValue = `${Util.pxToRem(targetHeight, media.designWidth)}`;
        }
        
        notificationElement.style.height = targetHeightValue;

        const infoElement = notificationElement.querySelector('.info') as HTMLElement;
        if (infoElement) {
          infoElement.style.opacity = '1';
        }

        // Trigger onShow callback
        this.trigger('onShow', notificationElement);
      }, 100);
    }, 100);

    return id;
  }

  /**
   * Trigger callback function if defined
   * @param action - Callback action name
   * @param element - Notification element
   * @private
   */
  private trigger(action: keyof Config, element?: HTMLElement): void {
    const callback = this.config[action];
    if (typeof callback === 'function') {
      callback(element);
    }
  }

  /**
   * Show custom notification
   * @param config - Custom notification configuration
   * @returns Notification ID
   */
  show(config: ShowConfig): string {
    return this.buildCustom(config);
  }

  /**
   * Show standard notification
   * @param config - Standard notification configuration
   * @returns Notification ID
   */
  showStandard(config: ShowStandardConfig): string {
    return this.buildStandard(config);
  }

  /**
   * Close notification by ID
   * @param id - Notification ID
   */
  close(id: string): void {
    this.closeNotification(id);
  }
}

/**
 * Notification factory for creating notification instances
 */
const NotificationFactory: NotificationFactory = {
  /**
   * Set render wrapper function for custom rendering
   * @param _renderToWrapper - Render wrapper function
   */
  setRenderToWrapper(_renderToWrapper: RenderToWrapperFunction): void {
    renderToWrapper = _renderToWrapper;
  },

  /**
   * Build notification instance
   * @param container - Container element for notifications
   * @param config - Configuration object
   * @returns Notification instance
   */
  build(container: HTMLElement, config: Config): NotificationInstance {
    return new Notification(container, config);
  },
};

export default NotificationFactory;
