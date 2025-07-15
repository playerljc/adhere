/**
 * 用户数据接口
 */
export interface UserData {
    id: number;
    name: string;
    email?: string;
    avatar?: string;
    [key: string]: any;
}
/**
 * 会话数据接口
 */
export interface SessionData {
    theme?: 'light' | 'dark';
    language?: string;
    token?: string;
    [key: string]: any;
}
/**
 * 应用配置接口
 */
export interface AppConfig {
    version: string;
    environment: 'development' | 'production' | 'test';
    apiBaseUrl?: string;
    [key: string]: any;
}
/**
 * 存储键名常量
 */
export declare const STORAGE_KEYS: {
    readonly USER_DATA: "userData";
    readonly SESSION_DATA: "sessionData";
    readonly APP_CONFIG: "appConfig";
    readonly AUTH_TOKEN: "authToken";
    readonly THEME: "theme";
    readonly LANGUAGE: "language";
    readonly LAST_VISIT: "lastVisit";
};
/**
 * 存储键名类型
 */
export type StorageKey = typeof STORAGE_KEYS[keyof typeof STORAGE_KEYS];
/**
 * 存储操作结果接口
 */
export interface StorageResult<T = any> {
    success: boolean;
    data?: T;
    error?: string;
}
/**
 * 存储统计信息接口
 */
export interface StorageStats {
    localLength: number;
    sessionLength: number;
    totalLength: number;
}
