import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
/**
 * 主题配置接口
 */
interface ThemeConfig {
    [prop: string]: string | number;
}
/**
 * 初始化函数接口
 */
export interface Init {
    /**
     * 初始化CSS变量系统
     * @param theme - 主题配置对象
     * @param wrapperEL - 包装元素，默认为document.documentElement
     * @param media - 媒体配置
     */
    (theme: ThemeConfig, wrapperEL?: HTMLElement, media?: ConfigProviderProps['media']): void;
}
/**
 * 初始化CSS变量系统
 * @param theme - 主题配置对象
 * @param wrapperEL - 包装元素，默认为document.documentElement
 * @param media - 媒体配置
 */
declare const init: Init;
export default init;
