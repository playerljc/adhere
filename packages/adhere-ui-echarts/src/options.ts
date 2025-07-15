import {
  BarSeriesOption,
  BoxplotSeriesOption,
  CandlestickSeriesOption,
  FunnelSeriesOption,
  GaugeSeriesOption,
  HeatmapSeriesOption,
  LineSeriesOption,
  PieSeriesOption,
  RadarSeriesOption,
  SankeySeriesOption,
  ScatterSeriesOption,
  SunburstSeriesOption,
} from 'echarts/charts';

import merge from './merge';
import type { AreaStyle, Radius, RoseType, BaseChartOption } from './types';

/**
 * ECharts 配置选项集合
 * @description 提供各种图表类型的配置选项生成函数
 */
const Options = {
  /**
   * 基础配置选项
   * @description 所有图表的基础网格配置
   * @returns 基础配置对象
   */
  baseOption: (): BaseChartOption => ({
    grid: {
      left: '1%',
      right: '1%',
      top: '10%',
      bottom: '10%',
      containLabel: true,
    },
  }),

  /**
   * 值在Y轴上的配置
   * @description 适用于柱状图、折线图等以X轴为类别的图表
   * @returns 坐标轴配置对象
   */
  valueToYOption: (): BaseChartOption => ({
    xAxis: {
      type: 'category',
    },
    yAxis: {
      type: 'value',
    },
  }),

  /**
   * 值在X轴上的配置
   * @description 适用于横向柱状图等以Y轴为类别的图表
   * @returns 坐标轴配置对象
   */
  valueToXOption: (): BaseChartOption => ({
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
    },
  }),

  // ---------------------------------------------------------------
  // 柱状图相关配置
  // ---------------------------------------------------------------

  /**
   * 柱状图基础配置
   * @returns 柱状图系列配置
   */
  barOption: (): BarSeriesOption => ({
    type: 'bar',
  }),

  /**
   * 堆叠柱状图配置
   * @param stack - 堆叠分组名称
   * @returns 堆叠柱状图系列配置
   */
  barToStackOption: (stack: string): BarSeriesOption =>
    merge(Options.barOption(), {
      stack,
    }),

  /**
   * 动态排序柱状图配置
   * @returns 动态排序柱状图系列配置
   */
  barToRealtimeSortOption: (): BarSeriesOption =>
    merge(Options.barOption(), {
      realtimeSort: true,
    }),

  // ---------------------------------------------------------------
  // 折线图相关配置
  // ---------------------------------------------------------------

  /**
   * 折线图基础配置
   * @returns 折线图系列配置
   */
  lineOption: (): LineSeriesOption => ({
    type: 'line',
  }),

  /**
   * 堆叠折线图配置
   * @param stack - 堆叠分组名称
   * @returns 堆叠折线图系列配置
   */
  lineToStackOption: (stack: string): LineSeriesOption =>
    merge(Options.lineOption(), {
      stack,
    }),

  /**
   * 区域面积图配置
   * @param areaStyle - 区域样式配置
   * @returns 区域面积图系列配置
   */
  lineToAreaOption: (areaStyle: AreaStyle): LineSeriesOption =>
    merge(Options.lineOption(), {
      areaStyle,
    }),

  /**
   * 平滑曲线图配置
   * @returns 平滑曲线图系列配置
   */
  lineToSmoothOption: (): LineSeriesOption =>
    merge(Options.lineOption(), {
      smooth: true,
    }),

  /**
   * 阶梯线图配置
   * @param step - 阶梯类型
   * @returns 阶梯线图系列配置
   */
  lineToStepOption: (step: string): LineSeriesOption =>
    merge(Options.lineOption(), {
      step,
    }),

  // ---------------------------------------------------------------
  // 饼图相关配置
  // ---------------------------------------------------------------

  /**
   * 饼图基础配置
   * @returns 饼图系列配置
   */
  pieOption: (): PieSeriesOption => ({
    type: 'pie',
  }),

  /**
   * 圆环图配置
   * @param radius - 半径配置
   * @returns 圆环图系列配置
   */
  pieToRadiusOption: (radius: Radius): PieSeriesOption =>
    merge(Options.pieOption(), {
      radius,
    }),

  /**
   * 南丁格尔玫瑰图配置
   * @param roseType - 玫瑰图类型
   * @returns 玫瑰图系列配置
   */
  pieToRoseOption: (roseType: RoseType): PieSeriesOption =>
    merge(Options.pieOption(), {
      roseType,
    }),

  // ---------------------------------------------------------------
  // 散点图相关配置
  // ---------------------------------------------------------------

  /**
   * 散点图基础配置
   * @returns 散点图系列配置
   */
  scatterOption: (): ScatterSeriesOption => ({
    type: 'scatter',
  }),

  // ---------------------------------------------------------------
  // 其他图表类型配置
  // ---------------------------------------------------------------

  /**
   * 雷达图基础配置
   * @returns 雷达图系列配置
   */
  radarOption: (): RadarSeriesOption => ({
    type: 'radar',
  }),

  /**
   * 旭日图基础配置
   * @returns 旭日图系列配置
   */
  sunburstOption: (): SunburstSeriesOption => ({
    type: 'sunburst',
  }),

  /**
   * 箱形图基础配置
   * @returns 箱形图系列配置
   */
  boxplotOption: (): BoxplotSeriesOption => ({
    type: 'boxplot',
  }),

  /**
   * K线图基础配置
   * @returns K线图系列配置
   */
  candlestickOption: (): CandlestickSeriesOption => ({
    type: 'candlestick',
  }),

  /**
   * 热力图基础配置
   * @returns 热力图系列配置
   */
  heatmapOption: (): HeatmapSeriesOption => ({
    type: 'heatmap',
  }),

  /**
   * 桑基图基础配置
   * @returns 桑基图系列配置
   */
  sankeyOption: (): SankeySeriesOption => ({
    type: 'sankey',
  }),

  /**
   * 漏斗图基础配置
   * @returns 漏斗图系列配置
   */
  funnelOption: (): FunnelSeriesOption => ({
    type: 'funnel',
  }),

  /**
   * 仪表盘基础配置
   * @returns 仪表盘系列配置
   */
  gaugeOption: (): GaugeSeriesOption => ({
    type: 'gauge',
    radius: '100%',
  }),

  // ---------------------------------------------------------------
  // 完整图表配置生成函数
  // ---------------------------------------------------------------

  /**
   * 生成柱状图完整配置
   * @param series - 系列配置数组
   * @returns 完整的柱状图配置
   */
  barChart: (series?: BarSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        ...Options.valueToYOption(),
        series: [Options.barOption()],
      });
    }

    return merge(Options.baseOption(), {
      ...Options.valueToYOption(),
      series: series.map((s) => merge(Options.barOption(), s)),
    });
  },

  /**
   * 生成堆叠柱状图完整配置
   * @param stack - 堆叠分组名称或名称数组
   * @param series - 系列配置数组
   * @returns 完整的堆叠柱状图配置
   */
  barChartToStack: (stack: string | string[], series?: BarSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        ...Options.valueToYOption(),
        series: [Options.barToStackOption(stack as string)],
      });
    }

    return merge(Options.baseOption(), {
      ...Options.valueToYOption(),
      series: series.map((s, _index) =>
        merge(Options.barToStackOption((stack as string[])[_index]), s),
      ),
    });
  },

  /**
   * 生成动态排序柱状图完整配置
   * @param series - 系列配置数组
   * @returns 完整的动态排序柱状图配置
   */
  barChartToRealtimeSort: (series?: BarSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        ...Options.valueToYOption(),
        series: [Options.barToRealtimeSortOption()],
      });
    }

    return merge(Options.baseOption(), {
      ...Options.valueToYOption(),
      series: series.map((s) => merge(Options.barToRealtimeSortOption(), s)),
    });
  },

  /**
   * 生成横向柱状图完整配置
   * @param series - 系列配置数组
   * @returns 完整的横向柱状图配置
   */
  barChartValueToX: (series?: BarSeriesOption[]): BaseChartOption => {
    if (!series || !series.length) {
      return merge(Options.baseOption(), {
        ...Options.valueToXOption(),
        series: [Options.barOption()],
      });
    }

    return merge(Options.baseOption(), {
      ...Options.valueToXOption(),
      series: series.map((s) => merge(Options.barOption(), s)),
    });
  },

  /**
   * 生成横向堆叠柱状图完整配置
   * @param stack - 堆叠分组名称或名称数组
   * @param series - 系列配置数组
   * @returns 完整的横向堆叠柱状图配置
   */
  barChartToStackValueToX: (stack: string | string[], series?: BarSeriesOption[]): BaseChartOption => {
    if (!series || !series.length) {
      return merge(Options.baseOption(), {
        ...Options.valueToXOption(),
        series: [Options.barToStackOption(stack as string)],
      });
    }

    return merge(Options.baseOption(), {
      ...Options.valueToXOption(),
      series: series.map((s, _index) =>
        merge(Options.barToStackOption((stack as string[])[_index]), s),
      ),
    });
  },

  /**
   * 生成横向动态排序柱状图完整配置
   * @param series - 系列配置数组
   * @returns 完整的横向动态排序柱状图配置
   */
  barChartToRealtimeSortValueToX: (series?: BarSeriesOption[]): BaseChartOption => {
    if (!series || !series.length) {
      return merge(Options.baseOption(), {
        ...Options.valueToXOption(),
        series: [Options.barToRealtimeSortOption()],
      });
    }

    return merge(Options.baseOption(), {
      ...Options.valueToXOption(),
      series: series.map((s) => merge(Options.barToRealtimeSortOption(), s)),
    });
  },

  // ---------------------------------------------------------------
  // 折线图完整配置生成函数
  // ---------------------------------------------------------------

  /**
   * 生成折线图完整配置
   * @param series - 系列配置数组
   * @returns 完整的折线图配置
   */
  lineChart: (series?: LineSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        ...Options.valueToYOption(),
        series: [Options.lineOption()],
      });
    }

    return merge(Options.baseOption(), {
      ...Options.valueToYOption(),
      series: series.map((s) => merge(Options.lineOption(), s)),
    });
  },

  /**
   * 生成堆叠折线图完整配置
   * @param stack - 堆叠分组名称或名称数组
   * @param series - 系列配置数组
   * @returns 完整的堆叠折线图配置
   */
  lineChartToStack: (stack: string | string[], series?: LineSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        ...Options.valueToYOption(),
        series: [Options.lineToStackOption(stack as string)],
      });
    }

    return merge(Options.baseOption(), {
      ...Options.valueToYOption(),
      series: series.map((s, _index) =>
        merge(Options.lineToStackOption((stack as string[])[_index]), s),
      ),
    });
  },

  /**
   * 生成区域面积图完整配置
   * @param areaStyle - 区域样式配置或配置数组
   * @param series - 系列配置数组
   * @returns 完整的区域面积图配置
   */
  lineChartToArea: (areaStyle: AreaStyle | AreaStyle[], series?: LineSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        ...Options.valueToYOption(),
        series: [Options.lineToAreaOption(areaStyle as AreaStyle)],
      });
    }

    return merge(Options.baseOption(), {
      ...Options.valueToYOption(),
      series: series.map((s, _index) =>
        merge(Options.lineToAreaOption((areaStyle as AreaStyle[])[_index]), s),
      ),
    });
  },

  /**
   * 生成平滑曲线图完整配置
   * @param series - 系列配置数组
   * @returns 完整的平滑曲线图配置
   */
  lineChartToSmooth: (series?: LineSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        ...Options.valueToYOption(),
        series: [Options.lineToSmoothOption()],
      });
    }

    return merge(Options.baseOption(), {
      ...Options.valueToYOption(),
      series: series.map((s) => merge(Options.lineToSmoothOption(), s)),
    });
  },

  /**
   * 生成阶梯线图完整配置
   * @param step - 阶梯类型或类型数组
   * @param series - 系列配置数组
   * @returns 完整的阶梯线图配置
   */
  lineChartToStep: (step: string | string[], series?: LineSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        ...Options.valueToYOption(),
        series: [Options.lineToStepOption(step as string)],
      });
    }

    return merge(Options.baseOption(), {
      ...Options.valueToYOption(),
      series: series.map((s, _index) =>
        merge(Options.lineToStepOption((step as string)[_index]), s),
      ),
    });
  },

  /**
   * 生成横向折线图完整配置
   * @param series - 系列配置数组
   * @returns 完整的横向折线图配置
   */
  lineChartValueToX: (series?: LineSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        ...Options.valueToXOption(),
        series: [Options.lineOption()],
      });
    }

    return merge(Options.baseOption(), {
      ...Options.valueToXOption(),
      series: series.map((s) => merge(Options.lineOption(), s)),
    });
  },

  /**
   * 生成横向堆叠折线图完整配置
   * @param stack - 堆叠分组名称或名称数组
   * @param series - 系列配置数组
   * @returns 完整的横向堆叠折线图配置
   */
  lineChartToStackValueToX: (stack: string | string[], series?: LineSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        ...Options.valueToXOption(),
        series: [Options.lineToStackOption(stack as string)],
      });
    }

    return merge(Options.baseOption(), {
      ...Options.valueToXOption(),
      series: series.map((s, _index) =>
        merge(Options.lineToStackOption((stack as string[])[_index]), s),
      ),
    });
  },

  /**
   * 生成横向区域面积图完整配置
   * @param areaStyle - 区域样式配置或配置数组
   * @param series - 系列配置数组
   * @returns 完整的横向区域面积图配置
   */
  lineChartToAreaValueToX: (areaStyle: AreaStyle | AreaStyle[], series?: LineSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        ...Options.valueToXOption(),
        series: [Options.lineToAreaOption(areaStyle as AreaStyle)],
      });
    }

    return merge(Options.baseOption(), {
      ...Options.valueToXOption(),
      series: series.map((s, _index) =>
        merge(Options.lineToAreaOption((areaStyle as AreaStyle[])[_index]), s),
      ),
    });
  },

  /**
   * 生成横向平滑曲线图完整配置
   * @param series - 系列配置数组
   * @returns 完整的横向平滑曲线图配置
   */
  lineChartToSmoothValueToX: (series?: LineSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        ...Options.valueToXOption(),
        series: [Options.lineToSmoothOption()],
      });
    }

    return merge(Options.baseOption(), {
      ...Options.valueToXOption(),
      series: series.map((s) => merge(Options.lineToSmoothOption(), s)),
    });
  },

  /**
   * 生成横向阶梯线图完整配置
   * @param step - 阶梯类型或类型数组
   * @param series - 系列配置数组
   * @returns 完整的横向阶梯线图配置
   */
  lineChartToStepValueToX: (step: string | string[], series?: LineSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        ...Options.valueToXOption(),
        series: [Options.lineToStepOption(step as string)],
      });
    }

    return merge(Options.baseOption(), {
      ...Options.valueToXOption(),
      series: series.map((s, _index) =>
        merge(Options.lineToStepOption((step as string[])[_index]), s),
      ),
    });
  },

  // ---------------------------------------------------------------
  // 饼图完整配置生成函数
  // ---------------------------------------------------------------

  /**
   * 生成饼图完整配置
   * @param series - 系列配置数组
   * @returns 完整的饼图配置
   */
  pieChart: (series?: PieSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.pieOption()],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s) => merge(Options.pieOption(), s)),
    });
  },

  /**
   * 生成圆环图完整配置
   * @param radius - 半径配置或配置数组
   * @param series - 系列配置数组
   * @returns 完整的圆环图配置
   */
  pieChartToRadius: (radius: Radius | Radius[], series?: PieSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.pieToRadiusOption(radius as Radius)],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s, _index) =>
        merge(Options.pieToRadiusOption((radius as Radius[])[_index]), s),
      ),
    });
  },

  /**
   * 生成玫瑰图完整配置
   * @param roseType - 玫瑰图类型或类型数组
   * @param series - 系列配置数组
   * @returns 完整的玫瑰图配置
   */
  pieChartToRose: (roseType: RoseType | RoseType[], series?: PieSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.pieToRoseOption(roseType as RoseType)],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s, _index) =>
        merge(Options.pieToRoseOption((roseType as RoseType[])[_index]), s),
      ),
    });
  },

  // ---------------------------------------------------------------
  // 散点图完整配置生成函数
  // ---------------------------------------------------------------

  /**
   * 生成散点图完整配置
   * @param series - 系列配置数组
   * @returns 完整的散点图配置
   */
  scatterChart: (series?: ScatterSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        ...Options.valueToYOption(),
        series: [Options.scatterOption()],
      });
    }

    return merge(Options.baseOption(), {
      ...Options.valueToYOption(),
      series: series.map((s) => merge(Options.scatterOption(), s)),
    });
  },

  /**
   * 生成横向散点图完整配置
   * @param series - 系列配置数组
   * @returns 完整的横向散点图配置
   */
  scatterChartValueToX: (series?: ScatterSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        ...Options.valueToXOption(),
        series: [Options.scatterOption()],
      });
    }

    return merge(Options.baseOption(), {
      ...Options.valueToXOption(),
      series: series.map((s) => merge(Options.scatterOption(), s)),
    });
  },

  // ---------------------------------------------------------------
  // 其他图表类型完整配置生成函数
  // ---------------------------------------------------------------

  /**
   * 生成雷达图完整配置
   * @param series - 系列配置数组
   * @returns 完整的雷达图配置
   */
  radarChart: (series?: RadarSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.radarOption()],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s) => merge(Options.radarOption(), s)),
    });
  },

  /**
   * 生成旭日图完整配置
   * @param series - 系列配置数组
   * @returns 完整的旭日图配置
   */
  sunburstChart: (series?: SunburstSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.sunburstOption()],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s) => merge(Options.sunburstOption(), s)),
    });
  },

  /**
   * 生成箱形图完整配置
   * @param series - 系列配置数组
   * @returns 完整的箱形图配置
   */
  boxplotChart: (series?: BoxplotSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.boxplotOption()],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s) => merge(Options.boxplotOption(), s)),
    });
  },

  /**
   * 生成K线图完整配置
   * @param series - 系列配置数组
   * @returns 完整的K线图配置
   */
  candlestickChart: (series?: CandlestickSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.candlestickOption()],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s) => merge(Options.candlestickOption(), s)),
    });
  },

  /**
   * 生成热力图完整配置
   * @param series - 系列配置数组
   * @returns 完整的热力图配置
   */
  heatmapChart: (series?: HeatmapSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.heatmapOption()],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s) => merge(Options.heatmapOption(), s)),
    });
  },

  /**
   * 生成桑基图完整配置
   * @param series - 系列配置数组
   * @returns 完整的桑基图配置
   */
  sankeyChart: (series?: SankeySeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.sankeyOption()],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s) => merge(Options.sankeyOption(), s)),
    });
  },

  /**
   * 生成漏斗图完整配置
   * @param series - 系列配置数组
   * @returns 完整的漏斗图配置
   */
  funnelChart: (series?: FunnelSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.funnelOption()],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s) => merge(Options.funnelOption(), s)),
    });
  },

  /**
   * 生成仪表盘完整配置
   * @param series - 系列配置数组
   * @returns 完整的仪表盘配置
   */
  gaugeChart: (series?: GaugeSeriesOption[]): BaseChartOption => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.gaugeOption()],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s) => merge(Options.gaugeOption(), s)),
    });
  },
} as const;

export default Options;
