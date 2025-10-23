import type { BasicShape, CalculateClipParams, CalculateElementsParams, ComputeClipData, ComputeElementsInfoData, LengthValue } from './types';
/**
 * 计算新的元素信息
 * @param params - 计算参数
 * @returns 新的元素信息数组
 */
export declare function calculateNewElementsInfo(params: CalculateElementsParams): ComputeElementsInfoData;
/**
 * 缩放长度值
 * @param value - 原始长度值
 * @param scale - 缩放比例
 * @returns 缩放后的长度值
 */
export declare function scaleLengthValue(value: LengthValue, scale: number): LengthValue;
/**
 * 缩放SVG路径数据
 * @param pathData - SVG路径字符串
 * @param scaleX - X轴缩放比例
 * @param scaleY - Y轴缩放比例
 * @returns 缩放后的SVG路径字符串
 */
export declare function scaleSvgPath(pathData: string, scaleX: number, scaleY: number): string;
/**
 * 缩放基础形状
 * @param shape - 原始形状
 * @param scaleX - X轴缩放比例
 * @param scaleY - Y轴缩放比例
 * @returns 缩放后的形状
 */
export declare function scaleBasicShape(shape: BasicShape, scaleX: number, scaleY: number): BasicShape;
/**
 * 计算新的裁剪路径信息
 * @param params - 计算参数
 * @returns 新的裁剪路径配置
 */
export declare function calculateNewClip(params: CalculateClipParams): ComputeClipData;
