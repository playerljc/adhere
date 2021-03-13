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
    remove(type: string | symbol, handler: Function): void;
    /**
     * hasType
     * @param {string} type
     * @return {boolean}
     */
    hasType(type: string | symbol): boolean;
    /**
     * clear 清除一个type下的所有handler
     * @param {string} type
     */
    clear(type: string | symbol): void;
    /**
     * 清除所有
     */
    clearAll(): void;
    /**
     * on
     * @param {string} type
     * @param {Function} handler
     * @param {number} makStackSize
     */
    on(type: string | symbol, handler: Function, makStackSize?: number): void;
    /**
     * once
     * @param type
     * @param handler
     */
    once(type: string | symbol, handler: Function): void;
    /**
     * all
     * @param types
     * @param handler
     */
    all(types: Array<string>, handler: Function): () => void;
    /**
     * race
     * @param types
     * @param handler
     */
    race(types: Array<string>, handler: Function): () => void;
    /**
     * count
     * @param type
     * @param count
     * @param handler
     */
    count(type: any, count: any, handler: any): () => void;
    /**
     * trigger
     * @param {string} type
     * @param {Object} params
     */
    trigger(type: string | symbol, ...params: Array): any;
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
