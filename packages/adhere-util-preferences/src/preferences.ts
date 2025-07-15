/**
 * 存储类型枚举
 */
export enum StorageType {
  LOCAL = 'localStorage',
  SESSION = 'sessionStorage',
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
export class Preferences {
  /**
   * 检查是否在浏览器环境中
   * @returns {boolean} 是否在浏览器环境中
   */
  private static isBrowser(): boolean {
    return typeof window !== 'undefined' && window !== null;
  }

  /**
   * 获取存储对象
   * @param type - 存储类型
   * @returns {StorageInterface | null} 存储对象或null
   */
  private static getStorage(type: StorageType): StorageInterface | null {
    if (!Preferences.isBrowser()) {
      return null;
    }

    try {
      return type === StorageType.LOCAL ? window.localStorage : window.sessionStorage;
    } catch (error) {
      console.warn(`无法访问${type}:`, error);
      return null;
    }
  }

  /**
   * 存储字符串值
   * @param key - 存储键名
   * @param value - 要存储的字符串值
   * @param storage - 存储对象
   * @throws {Error} 当存储失败时抛出错误
   */
  private static putString(key: string, value: string, storage: StorageInterface): void {
    try {
      storage.setItem(key, value);
    } catch (error) {
      throw new Error(`存储字符串失败: ${error instanceof Error ? error.message : '未知错误'}`);
    }
  }

  /**
   * 获取字符串值
   * @param key - 存储键名
   * @param storage - 存储对象
   * @returns {string | null} 存储的字符串值或null
   */
  private static getString(key: string, storage: StorageInterface): string | null {
    try {
      return storage.getItem(key);
    } catch (error) {
      console.warn(`获取字符串失败: ${error instanceof Error ? error.message : '未知错误'}`);
      return null;
    }
  }

  /**
   * 存储对象值
   * @param key - 存储键名
   * @param object - 要存储的对象
   * @param storage - 存储对象
   * @throws {Error} 当对象序列化或存储失败时抛出错误
   */
  private static putObject<T extends Record<string, any>>(key: string, object: T, storage: StorageInterface): void {
    try {
      const serializedValue = JSON.stringify(object);
      Preferences.putString(key, serializedValue, storage);
    } catch (error) {
      throw new Error(`存储对象失败: ${error instanceof Error ? error.message : '未知错误'}`);
    }
  }

  /**
   * 获取对象值
   * @param key - 存储键名
   * @param storage - 存储对象
   * @returns {T | null} 存储的对象值或null
   * @template T - 对象类型
   */
  private static getObject<T extends Record<string, any>>(key: string, storage: StorageInterface): T | null {
    try {
      const value = Preferences.getString(key, storage);
      if (value === null) {
        return null;
      }
      return JSON.parse(value) as T;
    } catch (error) {
      console.warn(`获取对象失败: ${error instanceof Error ? error.message : '未知错误'}`);
      return null;
    }
  }

  /**
   * 删除存储项
   * @param key - 存储键名
   * @param storage - 存储对象
   * @throws {Error} 当删除失败时抛出错误
   */
  private static remove(key: string, storage: StorageInterface): void {
    try {
      storage.removeItem(key);
    } catch (error) {
      throw new Error(`删除存储项失败: ${error instanceof Error ? error.message : '未知错误'}`);
    }
  }

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
  static putStringByLocal(key: string, value: string): boolean {
    const storage = Preferences.getStorage(StorageType.LOCAL);
    if (!storage) {
      return false;
    }

    try {
      Preferences.putString(key, value, storage);
      return true;
    } catch (error) {
      console.error('本地存储字符串失败:', error);
      return false;
    }
  }

  /**
   * 从本地存储获取字符串值
   * @param key - 存储键名
   * @returns {string | null} 存储的字符串值或null
   * @example
   * ```typescript
   * const userName = Preferences.getStringByLocal('userName');
   * ```
   */
  static getStringByLocal(key: string): string | null {
    const storage = Preferences.getStorage(StorageType.LOCAL);
    if (!storage) {
      return null;
    }

    return Preferences.getString(key, storage);
  }

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
  static putObjectByLocal<T extends Record<string, any>>(key: string, object: T): boolean {
    const storage = Preferences.getStorage(StorageType.LOCAL);
    if (!storage) {
      return false;
    }

    try {
      Preferences.putObject(key, object, storage);
      return true;
    } catch (error) {
      console.error('本地存储对象失败:', error);
      return false;
    }
  }

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
  static getObjectByLocal<T extends Record<string, any>>(key: string): T | null {
    const storage = Preferences.getStorage(StorageType.LOCAL);
    if (!storage) {
      return null;
    }

    return Preferences.getObject<T>(key, storage);
  }

  /**
   * 从本地存储删除指定键
   * @param key - 存储键名
   * @returns {boolean} 是否删除成功
   * @example
   * ```typescript
   * Preferences.removeByLocal('userName');
   * ```
   */
  static removeByLocal(key: string): boolean {
    const storage = Preferences.getStorage(StorageType.LOCAL);
    if (!storage) {
      return false;
    }

    try {
      Preferences.remove(key, storage);
      return true;
    } catch (error) {
      console.error('本地删除存储项失败:', error);
      return false;
    }
  }

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
  static putStringBySession(key: string, value: string): boolean {
    const storage = Preferences.getStorage(StorageType.SESSION);
    if (!storage) {
      return false;
    }

    try {
      Preferences.putString(key, value, storage);
      return true;
    } catch (error) {
      console.error('会话存储字符串失败:', error);
      return false;
    }
  }

  /**
   * 从会话存储获取字符串值
   * @param key - 存储键名
   * @returns {string | null} 存储的字符串值或null
   * @example
   * ```typescript
   * const tempToken = Preferences.getStringBySession('tempToken');
   * ```
   */
  static getStringBySession(key: string): string | null {
    const storage = Preferences.getStorage(StorageType.SESSION);
    if (!storage) {
      return null;
    }

    return Preferences.getString(key, storage);
  }

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
  static putObjectBySession<T extends Record<string, any>>(key: string, object: T): boolean {
    const storage = Preferences.getStorage(StorageType.SESSION);
    if (!storage) {
      return false;
    }

    try {
      Preferences.putObject(key, object, storage);
      return true;
    } catch (error) {
      console.error('会话存储对象失败:', error);
      return false;
    }
  }

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
  static getObjectBySession<T extends Record<string, any>>(key: string): T | null {
    const storage = Preferences.getStorage(StorageType.SESSION);
    if (!storage) {
      return null;
    }

    return Preferences.getObject<T>(key, storage);
  }

  /**
   * 从会话存储删除指定键
   * @param key - 存储键名
   * @returns {boolean} 是否删除成功
   * @example
   * ```typescript
   * Preferences.removeBySession('tempToken');
   * ```
   */
  static removeBySession(key: string): boolean {
    const storage = Preferences.getStorage(StorageType.SESSION);
    if (!storage) {
      return false;
    }

    try {
      Preferences.remove(key, storage);
      return true;
    } catch (error) {
      console.error('会话删除存储项失败:', error);
      return false;
    }
  }

  /**
   * 清空本地存储
   * @returns {boolean} 是否清空成功
   * @example
   * ```typescript
   * Preferences.clearLocal();
   * ```
   */
  static clearLocal(): boolean {
    const storage = Preferences.getStorage(StorageType.LOCAL);
    if (!storage) {
      return false;
    }

    try {
      storage.clear();
      return true;
    } catch (error) {
      console.error('清空本地存储失败:', error);
      return false;
    }
  }

  /**
   * 清空会话存储
   * @returns {boolean} 是否清空成功
   * @example
   * ```typescript
   * Preferences.clearSession();
   * ```
   */
  static clearSession(): boolean {
    const storage = Preferences.getStorage(StorageType.SESSION);
    if (!storage) {
      return false;
    }

    try {
      storage.clear();
      return true;
    } catch (error) {
      console.error('清空会话存储失败:', error);
      return false;
    }
  }

  /**
   * 获取本地存储的键数量
   * @returns {number} 键的数量，如果无法访问则返回0
   * @example
   * ```typescript
   * const count = Preferences.getLocalLength();
   * ```
   */
  static getLocalLength(): number {
    const storage = Preferences.getStorage(StorageType.LOCAL);
    if (!storage) {
      return 0;
    }

    try {
      return storage.length;
    } catch (error) {
      console.warn('获取本地存储长度失败:', error);
      return 0;
    }
  }

  /**
   * 获取会话存储的键数量
   * @returns {number} 键的数量，如果无法访问则返回0
   * @example
   * ```typescript
   * const count = Preferences.getSessionLength();
   * ```
   */
  static getSessionLength(): number {
    const storage = Preferences.getStorage(StorageType.SESSION);
    if (!storage) {
      return 0;
    }

    try {
      return storage.length;
    } catch (error) {
      console.warn('获取会话存储长度失败:', error);
      return 0;
    }
  }

  /**
   * 检查本地存储中是否存在指定键
   * @param key - 存储键名
   * @returns {boolean} 是否存在
   * @example
   * ```typescript
   * const exists = Preferences.hasLocalKey('userName');
   * ```
   */
  static hasLocalKey(key: string): boolean {
    const storage = Preferences.getStorage(StorageType.LOCAL);
    if (!storage) {
      return false;
    }

    try {
      return storage.getItem(key) !== null;
    } catch (error) {
      console.warn('检查本地存储键失败:', error);
      return false;
    }
  }

  /**
   * 检查会话存储中是否存在指定键
   * @param key - 存储键名
   * @returns {boolean} 是否存在
   * @example
   * ```typescript
   * const exists = Preferences.hasSessionKey('tempToken');
   * ```
   */
  static hasSessionKey(key: string): boolean {
    const storage = Preferences.getStorage(StorageType.SESSION);
    if (!storage) {
      return false;
    }

    try {
      return storage.getItem(key) !== null;
    } catch (error) {
      console.warn('检查会话存储键失败:', error);
      return false;
    }
  }
}

// 为了保持向后兼容性，导出默认对象
const preferences = {
  putStringByLocal: Preferences.putStringByLocal,
  getStringByLocal: Preferences.getStringByLocal,
  putObjectByLocal: Preferences.putObjectByLocal,
  getObjectByLocal: Preferences.getObjectByLocal,
  removeByLocal: Preferences.removeByLocal,
  putStringBySession: Preferences.putStringBySession,
  getStringBySession: Preferences.getStringBySession,
  putObjectBySession: Preferences.putObjectBySession,
  getObjectBySession: Preferences.getObjectBySession,
  removeBySession: Preferences.removeBySession,
  clearLocal: Preferences.clearLocal,
  clearSession: Preferences.clearSession,
  getLocalLength: Preferences.getLocalLength,
  getSessionLength: Preferences.getSessionLength,
  hasLocalKey: Preferences.hasLocalKey,
  hasSessionKey: Preferences.hasSessionKey,
};

export default preferences;
