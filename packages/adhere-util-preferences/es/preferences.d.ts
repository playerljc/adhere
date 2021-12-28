declare const _default: {
    /**
     * putStringByLocal - 本地持久化一对键值(值为String)
     * @param key - {string}
     * @param value - {string}
     */
    putStringByLocal(key: string, value: string): void;
    /**
     * getStringByLocal - 本地取出值(值为String)
     * @param key - {string}
     * @return {string}
     */
    getStringByLocal(key: string): string | null;
    /**
     * putObjectByLocal - 本地持久化一对键值(值为对象)
     * @param key - {string}
     * @param object - {Object}
     */
    putObjectByLocal(key: string, object: Object): void;
    /**
     * getObjectByLocal - 本地取出值(值为对象)
     * @param key - {string}
     * @return {Object | null}
     */
    getObjectByLocal(key: string): Object | null;
    /**
     * removeByLocal - 本地删除一个键值
     * @param key - {string}
     */
    removeByLocal(key: string): void;
    /**
     * putStringBySession - 会话持久化一对键值(值为String)
     * @param key - {string}
     * @param value - {string}
     */
    putStringBySession(key: string, value: string): void;
    /**
     * getStringBySession - 会话取出值(值为String)
     * @param key - {string}
     * @return {string | null}
     */
    getStringBySession(key: string): string | null;
    /**
     * putObjectBySession - 会话持久化一对键值(值为对象)
     * @param key - {string}
     * @param object - {Object}
     */
    putObjectBySession(key: string, object: Object): void;
    /**
     * getObjectBySession - 会话取出值(值为对象)
     * @param key - {string}
     * @return {Object | null}
     */
    getObjectBySession(key: string): Object | null;
    /**
     * removeBySession - 会话删除一个键值
     * @param key - {string}
     */
    removeBySession(key: string): void;
};
export default _default;
