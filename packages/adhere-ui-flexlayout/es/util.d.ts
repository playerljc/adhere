import { getGridStyleParams } from './types';
/**
 * getGridStyle
 * @description 获取栅格系统的样式
 * @param {number | number[]} gutter gird的间隙
 * @param {'vertical' | 'horizontal'} direction 方向
 * @param {number} span 栅格的值
 * @param {React.ReactNode[]} children 孩子
 * @return {React.CSSProperties}
 */
export declare const getGridStyle: ({ gutter, span, children, direction, }: getGridStyleParams) => any;
