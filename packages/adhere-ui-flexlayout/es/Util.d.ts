import type { CSSProperties } from 'react';
import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import type { GetGridStyleParams } from './types';
/**
 * 获取栅格系统的样式
 * @description 根据布局方向、栅格间隙、跨度等参数计算样式
 * @param {GetGridStyleParams} params - 栅格样式参数
 * @returns {CSSProperties} 栅格样式
 */
export declare const getGridStyle: ({ gutter, span, children, direction, media, }: GetGridStyleParams) => CSSProperties;
/**
 * 获取带单位的数值
 * @param {number | string} pixel - 像素值或字符串
 * @param {ConfigProviderProps['media']} media - 媒体配置
 * @returns {string} 带单位的数值字符串
 */
export declare function getValueWithUnit(pixel: number | string, media: ConfigProviderProps['media']): string;
/**
 * 获取数值
 * @param {number} pixel - 像素值
 * @param {ConfigProviderProps['media']} media - 媒体配置，默认为不使用媒体查询
 * @returns {number} 转换后的数值
 */
export declare function getValue(pixel: number, media?: ConfigProviderProps['media']): number;
