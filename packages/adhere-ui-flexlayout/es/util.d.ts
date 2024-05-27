import type { CSSProperties } from 'react';
import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import type { getGridStyleParams } from './types';
/**
 * getGridStyle
 * @description 获取栅格系统的样式
 * @param {number | number[]} gutter gird的间隙
 * @param {'vertical' | 'horizontal'} direction 方向
 * @param {number} span 栅格的值
 * @param {React.ReactNode[]} children 孩子
 * @param media
 * @return {React.CSSProperties}
 */
export declare const getGridStyle: ({ gutter, span, children, direction, media, }: getGridStyleParams) => CSSProperties;
export declare function getValueWithUnit(pixel: number | string, media: ConfigProviderProps['media']): string | number;
export declare function getValue(pixel: number, media?: ConfigProviderProps['media']): number;
