import { BarSeriesOption, BoxplotSeriesOption, CandlestickSeriesOption, FunnelSeriesOption, GaugeSeriesOption, HeatmapSeriesOption, LineSeriesOption, PieSeriesOption, RadarSeriesOption, SankeySeriesOption, ScatterSeriesOption, SunburstSeriesOption } from 'echarts/charts';
import type { AreaStyle, Radius, RoseType } from './types';
/**
 * Echarts配置的分类
 *
 * @example
 * ```js
 * ```
 */
declare const Options: {
    readonly baseOption: () => {
        grid: {
            left: string;
            right: string;
            top: string;
            bottom: string;
            containLabel: boolean;
        };
    };
    readonly valueToYOption: () => {
        xAxis: {
            type: string;
        };
        yAxis: {
            type: string;
        };
    };
    readonly valueToXOption: () => {
        xAxis: {
            type: string;
        };
        yAxis: {
            type: string;
        };
    };
    readonly barOption: () => {
        type: string;
    };
    readonly barToStackOption: (stack: string) => any;
    readonly barToRealtimeSortOption: () => any;
    readonly lineOption: () => {
        type: string;
    };
    readonly lineToStackOption: (stack: string) => any;
    readonly lineToAreaOption: (areaStyle: AreaStyle) => any;
    readonly lineToSmoothOption: () => any;
    readonly lineToStepOption: (step: string) => any;
    readonly pieOption: () => {
        type: string;
    };
    readonly pieToRadiusOption: (radius: Radius) => any;
    readonly pieToRoseOption: (roseType: RoseType) => any;
    readonly scatterOption: () => {
        type: string;
    };
    readonly radarOption: () => {
        type: string;
    };
    readonly sunburstOption: () => {
        type: string;
    };
    readonly boxplotOption: () => {
        type: string;
    };
    readonly candlestickOption: () => {
        type: string;
    };
    readonly heatmapOption: () => {
        type: string;
    };
    readonly sankeyOption: () => {
        type: string;
    };
    readonly funnelOption: () => {
        type: string;
    };
    readonly gaugeOption: () => {
        type: string;
    };
    readonly barChart: (series?: BarSeriesOption[]) => any;
    readonly barChartToStack: (stack: string | string[], series?: BarSeriesOption[]) => any;
    readonly barChartToRealtimeSort: (series?: BarSeriesOption[]) => any;
    readonly barChartValueToX: (series?: BarSeriesOption[]) => any;
    readonly barChartToStackValueToX: (stack: string | string[], series?: BarSeriesOption[]) => any;
    readonly barChartToRealtimeSortValueToX: (series?: BarSeriesOption[]) => any;
    readonly lineChart: (series?: LineSeriesOption[]) => any;
    readonly lineChartToStack: (stack: string | string[], series?: LineSeriesOption[]) => any;
    readonly lineChartToArea: (areaStyle: AreaStyle | AreaStyle[], series?: LineSeriesOption[]) => any;
    readonly lineChartToSmooth: (series?: LineSeriesOption[]) => any;
    readonly lineChartToStep: (step: string | string[], series?: LineSeriesOption[]) => any;
    readonly lineChartValueToX: (series?: LineSeriesOption[]) => any;
    readonly lineChartToStackValueToX: (stack: string | string[], series?: LineSeriesOption[]) => any;
    readonly lineChartToAreaValueToX: (areaStyle: AreaStyle | AreaStyle[], series?: LineSeriesOption[]) => any;
    readonly lineChartToSmoothValueToX: (series?: LineSeriesOption[]) => any;
    readonly lineChartToStepValueToX: (step: string | string[], series?: LineSeriesOption[]) => any;
    readonly pieChart: (series?: PieSeriesOption[]) => any;
    readonly pieChartToRadius: (radius: Radius | Radius[], series?: PieSeriesOption[]) => any;
    readonly pieChartToRose: (roseType: RoseType | RoseType[], series?: PieSeriesOption[]) => any;
    readonly scatterChart: (series?: ScatterSeriesOption[]) => any;
    readonly scatterChartValueToX: (series?: ScatterSeriesOption[]) => any;
    readonly radarChart: (series?: RadarSeriesOption[]) => any;
    readonly sunburstChart: (series?: SunburstSeriesOption[]) => any;
    readonly boxplotChart: (series?: BoxplotSeriesOption[]) => any;
    readonly candlestickChart: (series?: CandlestickSeriesOption[]) => any;
    readonly heatmapChart: (series?: HeatmapSeriesOption[]) => any;
    readonly sankeyChart: (series?: SankeySeriesOption[]) => any;
    readonly funnelChart: (series?: FunnelSeriesOption[]) => any;
    readonly gaugeChart: (series?: GaugeSeriesOption[]) => any;
};
export default Options;
