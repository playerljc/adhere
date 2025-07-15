/**
 * URL 工具类
 * @description 提供 URL 解析、拼接、路由相关的工具函数
 */
import { IUrlConfig } from './types';
export declare const defaultConfig: IUrlConfig;
declare const UrlUtil: {
    /**
     * 解析 URL 查询参数为对象
     * @description 将 URL 查询字符串解析为对象
     * @param path - 可选，URL 字符串，默认为当前 window.location.search
     * @param config - 解析配置项
     * @returns 解析后的对象，或 null（非浏览器环境）
     * @example
     * ```typescript
     * parse('?a=1&b=2') // { a: '1', b: '2' }
     * ```
     */
    parse(path?: string, config?: IUrlConfig): Record<string, string> | null;
    /**
     * 对象转 URL 查询参数
     * @description 将对象转换为 URL 查询字符串
     * @param record - 要转换的对象
     * @param config - 配置项
     * @returns 查询字符串
     * @example
     * ```typescript
     * stringify({ a: 1, b: 2 }) // '?a=1&b=2'
     * ```
     */
    stringify(record: Record<string, any>, config?: IUrlConfig): string;
    /**
     * 获取路由 pathname
     * @description 获取当前路由的 pathname，支持 hash/browser 两种模式
     * @param publicPath - 公共路径，默认为 '/'
     * @param router - 路由模式，'hash' 或 'browser'
     * @returns 路径名
     * @example
     * ```typescript
     * getPathName('/app', 'hash')
     * ```
     */
    getPathName(publicPath?: string, router?: "hash" | "browser"): string;
    /**
     * 获取路由 search
     * @description 获取当前路由的 search 查询参数，支持 hash/browser 两种模式
     * @param router - 路由模式，'hash' 或 'browser'
     * @returns 查询参数字符串
     * @example
     * ```typescript
     * getSearch('hash')
     * ```
     */
    getSearch(router?: "hash" | "browser"): string;
    /**
     * 获取完整路由路径
     * @description 获取当前完整路由路径（pathname + search）
     * @returns 完整路径
     * @example
     * ```typescript
     * getFullPath()
     * ```
     */
    getFullPath(): string;
};
export default UrlUtil;
