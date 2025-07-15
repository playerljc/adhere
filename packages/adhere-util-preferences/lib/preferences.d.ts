/**
 * 存储类型枚举
 */
export declare enum StorageType {
    LOCAL = "localStorage",
    SESSION = "sessionStorage"
}
/**
 * 存储接口定义
 */
export interface StorageInterface {
    setItem(key: string, value: string): void;
    getItem(key: string): string | null;
    removeItem(key: string): void;
    clear(): void;
    length: number;
}
/**
 * 偏好设置工具类
 * 提供本地存储和会话存储的便捷操作方法
 */
export declare class Preferences {
    /**
     * 检查是否在浏览器环境中
     * @returns {boolean} 是否在浏览器环境中
     */
    private static isBrowser;
    /**
     * 获取存储对象
     * @param type - 存储类型
     * @returns {StorageInterface | null} 存储对象或null
     */
    private static getStorage;
    /**
     * 存储字符串值
     * @param key - 存储键名
     * @param value - 要存储的字符串值
     * @param storage - 存储对象
     * @throws {Error} 当存储失败时抛出错误
     */
    private static putString;
    /**
     * 获取字符串值
     * @param key - 存储键名
     * @param storage - 存储对象
     * @returns {string | null} 存储的字符串值或null
     */
    private static getString;
    /**
     * 存储对象值
     * @param key - 存储键名
     * @param object - 要存储的对象
     * @param storage - 存储对象
     * @throws {Error} 当对象序列化或存储失败时抛出错误
     */
    private static putObject;
    /**
     * 获取对象值
     * @param key - 存储键名
     * @param storage - 存储对象
     * @returns {T | null} 存储的对象值或null
     * @template T - 对象类型
     */
    private static getObject;
    /**
     * 删除存储项
     * @param key - 存储键名
     * @param storage - 存储对象
     * @throws {Error} 当删除失败时抛出错误
     */
    private static remove;
    /**
     * 本地存储字符串值
     * @param key - 存储键名
     * @param value - 要存储的字符串值
     * @returns {boolean} 是否存储成功
     * @example
     * ```typescript
     * Preferences.putStringByLocal('userName', 'John Doe');
     * ```
     */
    static putStringByLocal(key: string, value: string): boolean;
    /**
     * 从本地存储获取字符串值
     * @param key - 存储键名
     * @returns {string | null} 存储的字符串值或null
     * @example
     * ```typescript
     * const userName = Preferences.getStringByLocal('userName');
     * ```
     */
    static getStringByLocal(key: string): string | null;
    /**
     * 本地存储对象值
     * @param key - 存储键名
     * @param object - 要存储的对象
     * @returns {boolean} 是否存储成功
     * @template T - 对象类型
     * @example
     * ```typescript
     * const userData = { id: 1, name: 'John', age: 30 };
     * Preferences.putObjectByLocal('userData', userData);
     * ```
     */
    static putObjectByLocal<T extends Record<string, any>>(key: string, object: T): boolean;
    /**
     * 从本地存储获取对象值
     * @param key - 存储键名
     * @returns {T | null} 存储的对象值或null
     * @template T - 对象类型
     * @example
     * ```typescript
     * const userData = Preferences.getObjectByLocal<UserData>('userData');
     * ```
     */
    static getObjectByLocal<T extends Record<string, any>>(key: string): T | null;
    /**
     * 从本地存储删除指定键
     * @param key - 存储键名
     * @returns {boolean} 是否删除成功
     * @example
     * ```typescript
     * Preferences.removeByLocal('userName');
     * ```
     */
    static removeByLocal(key: string): boolean;
    /**
     * 会话存储字符串值
     * @param key - 存储键名
     * @param value - 要存储的字符串值
     * @returns {boolean} 是否存储成功
     * @example
     * ```typescript
     * Preferences.putStringBySession('tempToken', 'abc123');
     * ```
     */
    static putStringBySession(key: string, value: string): boolean;
    /**
     * 从会话存储获取字符串值
     * @param key - 存储键名
     * @returns {string | null} 存储的字符串值或null
     * @example
     * ```typescript
     * const tempToken = Preferences.getStringBySession('tempToken');
     * ```
     */
    static getStringBySession(key: string): string | null;
    /**
     * 会话存储对象值
     * @param key - 存储键名
     * @param object - 要存储的对象
     * @returns {boolean} 是否存储成功
     * @template T - 对象类型
     * @example
     * ```typescript
     * const sessionData = { theme: 'dark', language: 'zh-CN' };
     * Preferences.putObjectBySession('sessionData', sessionData);
     * ```
     */
    static putObjectBySession<T extends Record<string, any>>(key: string, object: T): boolean;
    /**
     * 从会话存储获取对象值
     * @param key - 存储键名
     * @returns {T | null} 存储的对象值或null
     * @template T - 对象类型
     * @example
     * ```typescript
     * const sessionData = Preferences.getObjectBySession<SessionData>('sessionData');
     * ```
     */
    static getObjectBySession<T extends Record<string, any>>(key: string): T | null;
    /**
     * 从会话存储删除指定键
     * @param key - 存储键名
     * @returns {boolean} 是否删除成功
     * @example
     * ```typescript
     * Preferences.removeBySession('tempToken');
     * ```
     */
    static removeBySession(key: string): boolean;
    /**
     * 清空本地存储
     * @returns {boolean} 是否清空成功
     * @example
     * ```typescript
     * Preferences.clearLocal();
     * ```
     */
    static clearLocal(): boolean;
    /**
     * 清空会话存储
     * @returns {boolean} 是否清空成功
     * @example
     * ```typescript
     * Preferences.clearSession();
     * ```
     */
    static clearSession(): boolean;
    /**
     * 获取本地存储的键数量
     * @returns {number} 键的数量，如果无法访问则返回0
     * @example
     * ```typescript
     * const count = Preferences.getLocalLength();
     * ```
     */
    static getLocalLength(): number;
    /**
     * 获取会话存储的键数量
     * @returns {number} 键的数量，如果无法访问则返回0
     * @example
     * ```typescript
     * const count = Preferences.getSessionLength();
     * ```
     */
    static getSessionLength(): number;
    /**
     * 检查本地存储中是否存在指定键
     * @param key - 存储键名
     * @returns {boolean} 是否存在
     * @example
     * ```typescript
     * const exists = Preferences.hasLocalKey('userName');
     * ```
     */
    static hasLocalKey(key: string): boolean;
    /**
     * 检查会话存储中是否存在指定键
     * @param key - 存储键名
     * @returns {boolean} 是否存在
     * @example
     * ```typescript
     * const exists = Preferences.hasSessionKey('tempToken');
     * ```
     */
    static hasSessionKey(key: string): boolean;
}
declare const preferences: {
    putStringByLocal: typeof Preferences.putStringByLocal;
    getStringByLocal: typeof Preferences.getStringByLocal;
    putObjectByLocal: typeof Preferences.putObjectByLocal;
    getObjectByLocal: typeof Preferences.getObjectByLocal;
    removeByLocal: typeof Preferences.removeByLocal;
    putStringBySession: typeof Preferences.putStringBySession;
    getStringBySession: typeof Preferences.getStringBySession;
    putObjectBySession: typeof Preferences.putObjectBySession;
    getObjectBySession: typeof Preferences.getObjectBySession;
    removeBySession: typeof Preferences.removeBySession;
    clearLocal: typeof Preferences.clearLocal;
    clearSession: typeof Preferences.clearSession;
    getLocalLength: typeof Preferences.getLocalLength;
    getSessionLength: typeof Preferences.getSessionLength;
    hasLocalKey: typeof Preferences.hasLocalKey;
    hasSessionKey: typeof Preferences.hasSessionKey;
};
export default preferences;
