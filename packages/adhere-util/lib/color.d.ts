/**
 * 颜色工具类
 * @description 提供颜色相关的工具函数
 */
declare const _default: {
    /**--------------------------color-start----------------------**/
    /**
     * 生成随机 RGB 颜色
     * @description 生成随机的 RGB 颜色值
     * @returns RGB 颜色字符串，格式为 "(r,g,b)"
     * @example
     * ```typescript
     * rgbRandom() // 返回类似 "(123,45,67)" 的字符串
     * ```
     */
    rgbRandom(): string;
    /**
     * 生成随机十六进制颜色
     * @description 生成随机的十六进制颜色值
     * @returns 十六进制颜色字符串，格式为 "#rrggbb"
     * @example
     * ```typescript
     * color16Random() // 返回类似 "#7B2D43" 的字符串
     * ```
     */
    color16Random(): string;
    /**
     * 将十六进制颜色转换为 RGB 数组
     * @description 将十六进制颜色字符串转换为 RGB 数值数组
     * @param color - 十六进制颜色字符串，支持 # 开头或纯数字
     * @returns RGB 数值数组 [r, g, b]，每个值范围 0-255
     * @example
     * ```typescript
     * colorToRgb('#FF0000') // [255, 0, 0]
     * colorToRgb('FF0000') // [255, 0, 0]
     * colorToRgb('#F00') // [255, 0, 0]
     * ```
     */
    colorToRgb(color: string): number[];
    /**
     * 将 RGB 值转换为十六进制颜色
     * @description 将 RGB 数值转换为十六进制颜色字符串
     * @param r - 红色值 (0-255)
     * @param g - 绿色值 (0-255)
     * @param b - 蓝色值 (0-255)
     * @returns 十六进制颜色字符串，不包含 # 前缀
     * @example
     * ```typescript
     * rgbToColor(255, 0, 0) // "ff0000"
     * rgbToColor(0, 255, 0) // "00ff00"
     * ```
     */
    rgbToColor(r: number | string, g: number | string, b: number | string): string;
};
export default _default;
