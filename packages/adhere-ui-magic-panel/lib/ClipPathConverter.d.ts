import type { Clip } from './types';
/**
 * 裁剪路径转换器主类
 */
export declare class ClipPathConverter {
    /**
     * 将 Clip 对象转换为 CSS clip-path 字符串
     * @param clip - 裁剪路径配置
     * @returns CSS clip-path 值
     */
    static toCSS(clip: Clip): string;
    /**
     * 转换基础形状为 CSS 字符串
     * @param shape - 基础形状对象
     * @returns CSS 形状字符串
     */
    private static convertBasicShape;
}
