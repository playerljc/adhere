/**
 * 客户端检测工具类
 * @description 提供客户端环境检测相关的工具函数
 */
declare const _default: {
    /**----------------------------客户端检测---------------------------**/
    /**
     * 检测是否支持触摸事件
     * @description 判断当前设备是否支持触摸事件（移动端）
     * @returns 如果支持触摸事件返回 true，否则返回 false
     * @example
     * ```typescript
     * isTouch() // 在移动设备上返回 true，在桌面设备上返回 false
     * ```
     */
    isTouch(): boolean;
};
export default _default;
