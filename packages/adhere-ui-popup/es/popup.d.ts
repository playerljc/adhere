import { IConfig } from './types';
/**
 * Popup
 * @class Popup
 * @classdesc Popup
 */
declare class Popup {
    private readonly id;
    private readonly config;
    private isShow;
    private el;
    private popupEl;
    private popupHandlers;
    /**
     * constructor
     * @param config {Object} - config
     */
    constructor(config: IConfig);
    /**
     * createMask
     */
    private createMask;
    /**
     * render
     */
    private render;
    /**
     * trigger
     * @param hookName
     */
    private trigger;
    /**
     * show - 显示一个popup
     * @return boolean
     */
    show(): boolean;
    /**
     * show - 显示一个popup
     * @return boolean
     */
    showClosePrePopup(): boolean;
    /**
     * close - 关闭一个popup
     * @return boolean
     */
    close(): boolean;
    /**
     * destroy - 销毁一个popup
     */
    destroy(): boolean;
    /**
     * isDestroy - 是否已经销毁
     * @return {boolean}
     */
    isDestroy(): boolean;
    /**
     * getId
     * @return {string} - id
     */
    getId(): string;
    /**
     * onInnerElTransitionend
     */
    onInnerElTransitionend(): void;
}
/**
 * PopupFactory
 */
declare const PopupFactory: {
    /**
     * create
     * @param config
     * @return Popup
     */
    create(config: IConfig): Popup;
    /**
     * show - 显示一个popup
     * @param popup
     * @return boolean
     */
    show(popup: Popup): boolean;
    /**
     * showClosePrePopup
     * @description 关闭之前的显示
     * @param popup
     * @return boolean
     */
    showClosePrePopup(popup: Popup): boolean;
    /**
     * close - 关闭一个popup
     * @param {Popup} popup
     * @return boolean
     */
    close(popup: Popup): boolean;
    /**
     * closeAll - 关闭所有
     * @return boolean
     */
    closeAll(): boolean;
    /**
     * destroy - 销毁一个popup
     * @param {Popup} popup
     * @return bool
     */
    destroy(popup: any): any;
    /**
     * getEl
     * @return {HTMLElement}
     */
    getEl(): HTMLElement;
    /**
     * setEl
     * @param tel
     */
    setEl(tel: any): void;
};
export default PopupFactory;
