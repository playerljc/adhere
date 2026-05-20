import type { GlobalIndicator, GlobalIndicatorOptions } from './type';
/**
 * 全局指示器组件实现
 * 基于 antd-mobile 的 Toast 组件，提供全局加载指示器功能
 */
declare const GlobalIndicatorComponent: GlobalIndicator;
/**
 * 创建全局指示器的工厂函数
 * @param options - 全局指示器配置选项
 * @returns GlobalIndicator - 全局指示器实例
 */
export declare function createGlobalIndicator(options?: GlobalIndicatorOptions): GlobalIndicator;
export default GlobalIndicatorComponent;
