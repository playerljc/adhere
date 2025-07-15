import colors from './colors';
import merge from './merge';
import options from './options';

/**
 * Adhere ECharts 工具库
 * @description 提供 ECharts 图表配置的便捷工具和预设颜色
 * 
 * @example
 * ```typescript
 * import { options, colors, merge } from '@adhere/ui-echarts';
 * 
 * // 创建柱状图配置
 * const barConfig = options.barChart([
 *   {
 *     name: '销量',
 *     data: [120, 200, 150, 80, 70, 110, 130]
 *   }
 * ]);
 * 
 * // 使用预设颜色
 * const color = colors.color1; // '#404CE4'
 * 
 * // 合并配置
 * const mergedConfig = merge(baseConfig, customConfig);
 * ```
 */
const adhereECharts = {
  /** 对象合并工具 */
  merge,
  /** 图表配置选项 */
  options,
  /** 预设颜色配置 */
  colors,
} as const;

export default adhereECharts;

// 导出类型
export type {
  AreaStyle,
  Radius,
  RoseType,
  GradientColorConfig,
  SolidColorConfig,
  ColorConfig,
  BaseChartOption,
  SeriesOption,
} from './types';

// 导出具体模块
export { default as colors } from './colors';
export { default as merge } from './merge';
export { default as options } from './options';
