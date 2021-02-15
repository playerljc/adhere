/**
 * Events
 * @class Events
 * @classdesc Events
 */
declare class Events {
    private events;
    /**
     * @constructor
     */
    constructor();
    /**
     * remove
     * @param {type} type
     * @param {Function} handler
     */
    remove(type: string, handler: Function): void;
    /**
     * hasType
     * @param {string} type
     * @return {boolean}
     */
    hasType(type: string): boolean;
    /**
     * clear 清除一个type下的所有handler
     * @param {string} type
     */
    clear(type: string): void;
    /**
     * 清除所有
     */
    clearAll(): void;
    /**
     * on
     * @param {string} type
     * @param {Function} handler
     */
    on(type: string, handler: Function): void;
    /**
     * trigger
     * @param {string} type
     * @param {Object} params
     */
    trigger(type: string, ...params: object): any;
    /**
     * document自定义事件的触发
     * @param el
     * @param type
     * @param params
     */
    dispatchEvent(el: HTMLElement | Document | undefined, type: string, params: CustomEventInit): void;
}
/**
 * 消息通知
 */
export default Events;
