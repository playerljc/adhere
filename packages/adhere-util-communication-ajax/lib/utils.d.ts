/** 是否在浏览器环境（CSR） */
export declare function isBrowser(): boolean;
/** 获取 loading 默认挂载元素，SSR 环境下返回 undefined */
export declare function getDefaultLoadingEl(): HTMLElement | undefined;
interface NormalizedHeaders {
    [key: string]: string;
}
interface GenerateCacheKeyParams {
    url: string;
    method: string;
    body?: FormData | object | string | number | boolean | null | undefined;
    headers?: Record<string, string | number | boolean> | null | undefined;
}
type CacheKeyHeaders = Record<string, string | number | boolean> | null | undefined;
/**
 * 规范化请求头，将所有键转换为小写，值转换为小写字符串
 * @param headers 原始请求头对象
 * @returns 规范化后的请求头对象
 */
export declare function normalizeHeaders(headers?: CacheKeyHeaders): NormalizedHeaders;
/**
 * 生成缓存键
 * @param params 包含 URL、方法、请求体和请求头的参数对象
 * @returns 生成的缓存键字符串
 */
export declare function generateCacheKey({ url, method, body, headers, }: GenerateCacheKeyParams): Promise<string>;
/**
 * 处理baseUrl和url的拼接
 * @param baseUrl - 基础URL
 * @param path - 请求URL
 * @returns 处理后的完整URL
 */
export declare function combineUrls(baseUrl?: string, path?: string): string;
export {};
