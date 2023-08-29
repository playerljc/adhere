/**
 * Emitter
 */
declare const _default: {
    /**
     * on
     * @param {string} type
     * @param {Function} handler
     */
    on(type: any, handler: any): void;
    /**
     * remove
     * @param {type} type
     * @param {Function} handler
     */
    remove(type: any, handler: any): void;
    /**
     * trigger
     * @param {string} type
     * @param {Object} params
     */
    trigger(type: any, ...params: any[]): any;
};
export default _default;
