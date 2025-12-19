import { BarSeriesOption, BoxplotSeriesOption, CandlestickSeriesOption, FunnelSeriesOption, GaugeSeriesOption, HeatmapSeriesOption, LineSeriesOption, PieSeriesOption, RadarSeriesOption, SankeySeriesOption, ScatterSeriesOption, SunburstSeriesOption } from 'echarts/charts';
import type { AreaStyle, BaseChartOption, Radius } from './types';
/**
 * ECharts 配置选项集合
 * @description 提供各种图表类型的配置选项生成函数
 */
declare const Options: {
    /**
     * 基础配置选项
     * @description 所有图表的基础网格配置
     * @returns 基础配置对象
     */
    readonly baseOption: () => BaseChartOption;
    /**
     * 值在Y轴上的配置
     * @description 适用于柱状图、折线图等以X轴为类别的图表
     * @returns 坐标轴配置对象
     */
    readonly valueToYOption: () => BaseChartOption;
    /**
     * 值在X轴上的配置
     * @description 适用于横向柱状图等以Y轴为类别的图表
     * @returns 坐标轴配置对象
     */
    readonly valueToXOption: () => BaseChartOption;
    /**
     * 柱状图基础配置
     * @returns 柱状图系列配置
     */
    readonly barOption: () => BarSeriesOption;
    /**
     * 堆叠柱状图配置
     * @param stack - 堆叠分组名称
     * @returns 堆叠柱状图系列配置
     */
    readonly barToStackOption: (stack: string) => BarSeriesOption;
    /**
     * 动态排序柱状图配置
     * @returns 动态排序柱状图系列配置
     */
    readonly barToRealtimeSortOption: () => BarSeriesOption;
    /**
     * 折线图基础配置
     * @returns 折线图系列配置
     */
    readonly lineOption: () => LineSeriesOption;
    /**
     * 堆叠折线图配置
     * @param stack - 堆叠分组名称
     * @returns 堆叠折线图系列配置
     */
    readonly lineToStackOption: (stack: string) => LineSeriesOption;
    /**
     * 区域面积图配置
     * @param areaStyle - 区域样式配置
     * @returns 区域面积图系列配置
     */
    readonly lineToAreaOption: (areaStyle: AreaStyle) => LineSeriesOption;
    /**
     * 平滑曲线图配置
     * @returns 平滑曲线图系列配置
     */
    readonly lineToSmoothOption: () => LineSeriesOption;
    /**
     * 阶梯线图配置
     * @param step - 阶梯类型
     * @returns 阶梯线图系列配置
     */
    readonly lineToStepOption: (step: LineSeriesOption["step"]) => LineSeriesOption;
    /**
     * 饼图基础配置
     * @returns 饼图系列配置
     */
    readonly pieOption: () => PieSeriesOption;
    /**
     * 圆环图配置
     * @param radius - 半径配置
     * @returns 圆环图系列配置
     */
    readonly pieToRadiusOption: (radius: Radius) => PieSeriesOption;
    /**
     * 南丁格尔玫瑰图配置
     * @param roseType - 玫瑰图类型
     * @returns 玫瑰图系列配置
     */
    readonly pieToRoseOption: (roseType: PieSeriesOption["roseType"]) => PieSeriesOption;
    /**
     * 散点图基础配置
     * @returns 散点图系列配置
     */
    readonly scatterOption: () => ScatterSeriesOption;
    /**
     * 雷达图基础配置
     * @returns 雷达图系列配置
     */
    readonly radarOption: () => RadarSeriesOption;
    /**
     * 旭日图基础配置
     * @returns 旭日图系列配置
     */
    readonly sunburstOption: () => SunburstSeriesOption;
    /**
     * 箱形图基础配置
     * @returns 箱形图系列配置
     */
    readonly boxplotOption: () => BoxplotSeriesOption;
    /**
     * K线图基础配置
     * @returns K线图系列配置
     */
    readonly candlestickOption: () => CandlestickSeriesOption;
    /**
     * 热力图基础配置
     * @returns 热力图系列配置
     */
    readonly heatmapOption: () => HeatmapSeriesOption;
    /**
     * 桑基图基础配置
     * @returns 桑基图系列配置
     */
    readonly sankeyOption: () => SankeySeriesOption;
    /**
     * 漏斗图基础配置
     * @returns 漏斗图系列配置
     */
    readonly funnelOption: () => FunnelSeriesOption;
    /**
     * 仪表盘基础配置
     * @returns 仪表盘系列配置
     */
    readonly gaugeOption: () => GaugeSeriesOption;
    /**
     * 生成柱状图完整配置
     * @param series - 系列配置数组
     * @returns 完整的柱状图配置
     */
    readonly barChart: (series?: BarSeriesOption[]) => BaseChartOption;
    /**
     * 生成堆叠柱状图完整配置
     * @param stack - 堆叠分组名称或名称数组
     * @param series - 系列配置数组
     * @returns 完整的堆叠柱状图配置
     */
    readonly barChartToStack: (stack: string | string[], series?: BarSeriesOption[]) => BaseChartOption;
    /**
     * 生成动态排序柱状图完整配置
     * @param series - 系列配置数组
     * @returns 完整的动态排序柱状图配置
     */
    readonly barChartToRealtimeSort: (series?: BarSeriesOption[]) => BaseChartOption;
    /**
     * 生成横向柱状图完整配置
     * @param series - 系列配置数组
     * @returns 完整的横向柱状图配置
     */
    readonly barChartValueToX: (series?: BarSeriesOption[]) => BaseChartOption;
    /**
     * 生成横向堆叠柱状图完整配置
     * @param stack - 堆叠分组名称或名称数组
     * @param series - 系列配置数组
     * @returns 完整的横向堆叠柱状图配置
     */
    readonly barChartToStackValueToX: (stack: string | string[], series?: BarSeriesOption[]) => BaseChartOption;
    /**
     * 生成横向动态排序柱状图完整配置
     * @param series - 系列配置数组
     * @returns 完整的横向动态排序柱状图配置
     */
    readonly barChartToRealtimeSortValueToX: (series?: BarSeriesOption[]) => BaseChartOption;
    /**
     * 生成折线图完整配置
     * @param series - 系列配置数组
     * @returns 完整的折线图配置
     */
    readonly lineChart: (series?: LineSeriesOption[]) => BaseChartOption;
    /**
     * 生成堆叠折线图完整配置
     * @param stack - 堆叠分组名称或名称数组
     * @param series - 系列配置数组
     * @returns 完整的堆叠折线图配置
     */
    readonly lineChartToStack: (stack: string | string[], series?: LineSeriesOption[]) => BaseChartOption;
    /**
     * 生成区域面积图完整配置
     * @param areaStyle - 区域样式配置或配置数组
     * @param series - 系列配置数组
     * @returns 完整的区域面积图配置
     */
    readonly lineChartToArea: (areaStyle: AreaStyle | AreaStyle[], series?: LineSeriesOption[]) => BaseChartOption;
    /**
     * 生成平滑曲线图完整配置
     * @param series - 系列配置数组
     * @returns 完整的平滑曲线图配置
     */
    readonly lineChartToSmooth: (series?: LineSeriesOption[]) => BaseChartOption;
    /**
     * 生成阶梯线图完整配置
     * @param step - 阶梯类型或类型数组
     * @param series - 系列配置数组
     * @returns 完整的阶梯线图配置
     */
    readonly lineChartToStep: (step: LineSeriesOption["step"] | LineSeriesOption["step"][], series?: LineSeriesOption[]) => BaseChartOption;
    /**
     * 生成横向折线图完整配置
     * @param series - 系列配置数组
     * @returns 完整的横向折线图配置
     */
    readonly lineChartValueToX: (series?: LineSeriesOption[]) => BaseChartOption;
    /**
     * 生成横向堆叠折线图完整配置
     * @param stack - 堆叠分组名称或名称数组
     * @param series - 系列配置数组
     * @returns 完整的横向堆叠折线图配置
     */
    readonly lineChartToStackValueToX: (stack: string | string[], series?: LineSeriesOption[]) => BaseChartOption;
    /**
     * 生成横向区域面积图完整配置
     * @param areaStyle - 区域样式配置或配置数组
     * @param series - 系列配置数组
     * @returns 完整的横向区域面积图配置
     */
    readonly lineChartToAreaValueToX: (areaStyle: AreaStyle | AreaStyle[], series?: LineSeriesOption[]) => BaseChartOption;
    /**
     * 生成横向平滑曲线图完整配置
     * @param series - 系列配置数组
     * @returns 完整的横向平滑曲线图配置
     */
    readonly lineChartToSmoothValueToX: (series?: LineSeriesOption[]) => BaseChartOption;
    /**
     * 生成横向阶梯线图完整配置
     * @param step - 阶梯类型或类型数组
     * @param series - 系列配置数组
     * @returns 完整的横向阶梯线图配置
     */
    readonly lineChartToStepValueToX: (step: LineSeriesOption["step"] | LineSeriesOption["step"][], series?: LineSeriesOption[]) => BaseChartOption;
    /**
     * 生成饼图完整配置
     * @param series - 系列配置数组
     * @returns 完整的饼图配置
     */
    readonly pieChart: (series?: PieSeriesOption[]) => BaseChartOption;
    /**
     * 生成圆环图完整配置
     * @param radius - 半径配置或配置数组
     * @param series - 系列配置数组
     * @returns 完整的圆环图配置
     */
    readonly pieChartToRadius: (radius: Radius | Radius[], series?: PieSeriesOption[]) => BaseChartOption;
    /**
     * 生成玫瑰图完整配置
     * @param roseType - 玫瑰图类型或类型数组
     * @param series - 系列配置数组
     * @returns 完整的玫瑰图配置
     */
    readonly pieChartToRose: (roseType: PieSeriesOption["roseType"] | PieSeriesOption["roseType"][], series?: PieSeriesOption[]) => BaseChartOption;
    /**
     * 生成散点图完整配置
     * @param series - 系列配置数组
     * @returns 完整的散点图配置
     */
    readonly scatterChart: (series?: ScatterSeriesOption[]) => BaseChartOption;
    /**
     * 生成横向散点图完整配置
     * @param series - 系列配置数组
     * @returns 完整的横向散点图配置
     */
    readonly scatterChartValueToX: (series?: ScatterSeriesOption[]) => BaseChartOption;
    /**
     * 生成雷达图完整配置
     * @param series - 系列配置数组
     * @returns 完整的雷达图配置
     */
    readonly radarChart: (series?: RadarSeriesOption[]) => BaseChartOption;
    /**
     * 生成旭日图完整配置
     * @param series - 系列配置数组
     * @returns 完整的旭日图配置
     */
    readonly sunburstChart: (series?: SunburstSeriesOption[]) => BaseChartOption;
    /**
     * 生成箱形图完整配置
     * @param series - 系列配置数组
     * @returns 完整的箱形图配置
     */
    readonly boxplotChart: (series?: BoxplotSeriesOption[]) => BaseChartOption;
    /**
     * 生成K线图完整配置
     * @param series - 系列配置数组
     * @returns 完整的K线图配置
     */
    readonly candlestickChart: (series?: CandlestickSeriesOption[]) => BaseChartOption;
    /**
     * 生成热力图完整配置
     * @param series - 系列配置数组
     * @returns 完整的热力图配置
     */
    readonly heatmapChart: (series?: HeatmapSeriesOption[]) => BaseChartOption;
    /**
     * 生成桑基图完整配置
     * @param series - 系列配置数组
     * @returns 完整的桑基图配置
     */
    readonly sankeyChart: (series?: SankeySeriesOption[]) => BaseChartOption;
    /**
     * 生成漏斗图完整配置
     * @param series - 系列配置数组
     * @returns 完整的漏斗图配置
     */
    readonly funnelChart: (series?: FunnelSeriesOption[]) => BaseChartOption;
    /**
     * 生成仪表盘完整配置
     * @param series - 系列配置数组
     * @returns 完整的仪表盘配置
     */
    readonly gaugeChart: (series?: GaugeSeriesOption[]) => BaseChartOption;
};
export default Options;
