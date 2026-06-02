/**
 * 当前处于全屏模式的节点（含浏览器前缀字段）。
 */
export declare function getFullscreenElement(): Element | null;
/**
 * 判断指定元素是否为当前全屏元素。
 */
export declare function isElementInFullscreen(el: Element | null | undefined): boolean;
/**
 * 对指定元素请求浏览器原生全屏。
 */
export declare function requestElementFullscreen(el: Element): Promise<void>;
/**
 * 退出文档全屏。
 */
export declare function exitDocumentFullscreen(): Promise<void>;
