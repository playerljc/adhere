import type { Config, ShowConfig, ShowStandardConfig } from './types';
/**
 * Notification
 * @class Notification
 * @classdesc Notification
 */
declare class Notification {
    private readonly config;
    private container;
    private innerContainer;
    private notificationContainer;
    private notifications;
    private key;
    constructor(container: HTMLElement, config: Config);
    /**
     * createInnerContainer
     * @private
     */
    private createInnerContainer;
    /**
     * init
     * @private
     */
    private init;
    /**
     * initEvents
     * @private
     */
    private initEvents;
    /**
     * closeNotification - 点击删除通知
     * closeNotification
     * @param {string} id
     * @access private
     */
    private closeNotification;
    /**
     * buildCustom
     * @param config
     * @return string
     * @private
     */
    private buildCustom;
    /**
     * buildStandard
     * @param config
     * @return string
     * @private
     */
    private buildStandard;
    /**
     * build
     * @param id
     * @param n
     * @param media
     * @return string
     * @private
     */
    private build;
    /**
     * trigger
     * @param action
     * @param params
     * @private
     */
    private trigger;
    /**
     * show
     * @param {Object} config
     * @return {string} id
     */
    show(config: ShowConfig): string;
    /**
     * showStandard
     * @param {Object} config
     * @return {string} id
     */
    showStandard(config: ShowStandardConfig): string;
    /**
     * close
     * @param {string} id
     */
    close(id: string): void;
}
declare const NotificationFactory: {
    /**
     * setRenderToWrapper
     * @description 设置renderToWrapper方法
     * @param _renderToWrapper
     */
    setRenderToWrapper(_renderToWrapper: any): void;
    /**
     * build
     * @param container
     * @param config
     * @return Notification
     */
    build(container: HTMLElement, config: Config): Notification;
};
/**
 * NotificationFactory
 */
export default NotificationFactory;
