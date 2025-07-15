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
declare const adhereECharts: {
    /** 对象合并工具 */
    readonly merge: <T, U>(target: T, source: U) => T & U;
    /** 图表配置选项 */
    readonly options: {
        readonly baseOption: () => import("./types").BaseChartOption;
        readonly valueToYOption: () => import("./types").BaseChartOption;
        readonly valueToXOption: () => import("./types").BaseChartOption;
        readonly barOption: () => import("echarts/charts").BarSeriesOption;
        readonly barToStackOption: (stack: string) => import("echarts/charts").BarSeriesOption;
        readonly barToRealtimeSortOption: () => import("echarts/charts").BarSeriesOption;
        readonly lineOption: () => import("echarts/charts").LineSeriesOption;
        readonly lineToStackOption: (stack: string) => import("echarts/charts").LineSeriesOption;
        readonly lineToAreaOption: (areaStyle: import("./types").AreaStyle) => import("echarts/charts").LineSeriesOption;
        readonly lineToSmoothOption: () => import("echarts/charts").LineSeriesOption;
        readonly lineToStepOption: (step: string) => import("echarts/charts").LineSeriesOption;
        readonly pieOption: () => import("echarts/charts").PieSeriesOption;
        readonly pieToRadiusOption: (radius: import("./types").Radius) => import("echarts/charts").PieSeriesOption;
        readonly pieToRoseOption: (roseType: import("./types").RoseType) => import("echarts/charts").PieSeriesOption;
        readonly scatterOption: () => import("echarts/charts").ScatterSeriesOption;
        readonly radarOption: () => import("echarts/charts").RadarSeriesOption;
        readonly sunburstOption: () => import("echarts/charts").SunburstSeriesOption;
        readonly boxplotOption: () => import("echarts/charts").BoxplotSeriesOption;
        readonly candlestickOption: () => import("echarts/charts").CandlestickSeriesOption;
        readonly heatmapOption: () => import("echarts/charts").HeatmapSeriesOption;
        readonly sankeyOption: () => import("echarts/charts").SankeySeriesOption;
        readonly funnelOption: () => import("echarts/charts").FunnelSeriesOption;
        readonly gaugeOption: () => import("echarts/charts").GaugeSeriesOption;
        readonly barChart: (series?: import("echarts/charts").BarSeriesOption[]) => import("./types").BaseChartOption;
        readonly barChartToStack: (stack: string | string[], series?: import("echarts/charts").BarSeriesOption[]) => import("./types").BaseChartOption;
        readonly barChartToRealtimeSort: (series?: import("echarts/charts").BarSeriesOption[]) => import("./types").BaseChartOption;
        readonly barChartValueToX: (series?: import("echarts/charts").BarSeriesOption[]) => import("./types").BaseChartOption;
        readonly barChartToStackValueToX: (stack: string | string[], series?: import("echarts/charts").BarSeriesOption[]) => import("./types").BaseChartOption;
        readonly barChartToRealtimeSortValueToX: (series?: import("echarts/charts").BarSeriesOption[]) => import("./types").BaseChartOption;
        readonly lineChart: (series?: import("echarts/charts").LineSeriesOption[]) => import("./types").BaseChartOption;
        readonly lineChartToStack: (stack: string | string[], series?: import("echarts/charts").LineSeriesOption[]) => import("./types").BaseChartOption;
        readonly lineChartToArea: (areaStyle: import("./types").AreaStyle | import("./types").AreaStyle[], series?: import("echarts/charts").LineSeriesOption[]) => import("./types").BaseChartOption;
        readonly lineChartToSmooth: (series?: import("echarts/charts").LineSeriesOption[]) => import("./types").BaseChartOption;
        readonly lineChartToStep: (step: string | string[], series?: import("echarts/charts").LineSeriesOption[]) => import("./types").BaseChartOption;
        readonly lineChartValueToX: (series?: import("echarts/charts").LineSeriesOption[]) => import("./types").BaseChartOption;
        readonly lineChartToStackValueToX: (stack: string | string[], series?: import("echarts/charts").LineSeriesOption[]) => import("./types").BaseChartOption;
        readonly lineChartToAreaValueToX: (areaStyle: import("./types").AreaStyle | import("./types").AreaStyle[], series?: import("echarts/charts").LineSeriesOption[]) => import("./types").BaseChartOption;
        readonly lineChartToSmoothValueToX: (series?: import("echarts/charts").LineSeriesOption[]) => import("./types").BaseChartOption;
        readonly lineChartToStepValueToX: (step: string | string[], series?: import("echarts/charts").LineSeriesOption[]) => import("./types").BaseChartOption;
        readonly pieChart: (series?: import("echarts/charts").PieSeriesOption[]) => import("./types").BaseChartOption;
        readonly pieChartToRadius: (radius: import("./types").Radius | import("./types").Radius[], series?: import("echarts/charts").PieSeriesOption[]) => import("./types").BaseChartOption;
        readonly pieChartToRose: (roseType: import("./types").RoseType | import("./types").RoseType[], series?: import("echarts/charts").PieSeriesOption[]) => import("./types").BaseChartOption;
        readonly scatterChart: (series?: import("echarts/charts").ScatterSeriesOption[]) => import("./types").BaseChartOption;
        readonly scatterChartValueToX: (series?: import("echarts/charts").ScatterSeriesOption[]) => import("./types").BaseChartOption;
        readonly radarChart: (series?: import("echarts/charts").RadarSeriesOption[]) => import("./types").BaseChartOption;
        readonly sunburstChart: (series?: import("echarts/charts").SunburstSeriesOption[]) => import("./types").BaseChartOption;
        readonly boxplotChart: (series?: import("echarts/charts").BoxplotSeriesOption[]) => import("./types").BaseChartOption;
        readonly candlestickChart: (series?: import("echarts/charts").CandlestickSeriesOption[]) => import("./types").BaseChartOption;
        readonly heatmapChart: (series?: import("echarts/charts").HeatmapSeriesOption[]) => import("./types").BaseChartOption;
        readonly sankeyChart: (series?: import("echarts/charts").SankeySeriesOption[]) => import("./types").BaseChartOption;
        readonly funnelChart: (series?: import("echarts/charts").FunnelSeriesOption[]) => import("./types").BaseChartOption;
        readonly gaugeChart: (series?: import("echarts/charts").GaugeSeriesOption[]) => import("./types").BaseChartOption;
    };
    /** 预设颜色配置 */
    readonly colors: import("./types").ColorConfig;
};
export default adhereECharts;
export type { AreaStyle, Radius, RoseType, GradientColorConfig, SolidColorConfig, ColorConfig, BaseChartOption, SeriesOption, } from './types';
export { default as colors } from './colors';
export { default as merge } from './merge';
export { default as options } from './options';
