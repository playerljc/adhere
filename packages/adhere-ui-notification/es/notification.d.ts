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
    constructor(container: any, config: Config);
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
    close(id: any): void;
}
/**
 * NotificationFactory
 */
declare const _default: {
    /**
     * build
     * @param container
     * @param config
     * @return Notification
     */
    build(container: HTMLElement, config: Config): Notification;
};
export default _default;
