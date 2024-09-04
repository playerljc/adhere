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
import type { AreaStyle, Radius, RoseType } from './types';

/**
 * Echarts配置的分类
 *
 * @example
 * ```js
 * ```
 */
const Options = {
  // 基础配置
  baseOption: () => ({
    grid: {
      left: '1%',
      right: '1%',
      top: '10%',
      bottom: '10%',
      containLabel: true,
    },
  }),
  // 值在Y轴上
  valueToYOption: () => ({
    xAxis: {
      type: 'category',
    },
    yAxis: {
      type: 'value',
    },
  }),
  // 值在X轴上
  valueToXOption: () => ({
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
    },
  }),
  // ---------------------------------------------------------------
  // 柱状图
  barOption: () => ({
    type: 'bar',
  }),
  // 堆叠柱状图
  barToStackOption: (stack: string) =>
    merge(Options.barOption(), {
      stack,
    }),
  // 动态排序柱状图
  barToRealtimeSortOption: () =>
    merge(Options.barOption(), {
      realtimeSort: true,
    }),
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // 折线图
  lineOption: () => ({
    type: 'line',
  }),
  // 堆叠折线图
  lineToStackOption: (stack: string) =>
    merge(Options.lineOption(), {
      stack,
    }),
  // 区域面积图(折线图)
  lineToAreaOption: (areaStyle: AreaStyle) =>
    merge(Options.lineOption(), {
      areaStyle,
    }),
  // 平滑曲线图(折线图)
  lineToSmoothOption: () =>
    merge(Options.lineOption(), {
      smooth: true,
    }),
  // 阶梯线图(折线图)
  lineToStepOption: (step: string) =>
    merge(Options.lineOption(), {
      step,
    }),
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // 饼图
  pieOption: () => ({
    type: 'pie',
  }),
  // 圆环图(饼图)
  pieToRadiusOption: (radius: Radius) =>
    merge(Options.pieOption(), {
      radius,
    }),
  //南丁格尔图（玫瑰图）(饼图)
  pieToRoseOption: (roseType: RoseType) =>
    merge(Options.pieOption(), {
      roseType,
    }),
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // 散点图
  scatterOption: () => ({
    type: 'scatter',
  }),
  // ---------------------------------------------------------------

  // --------------------------不常见的图表类型-----------------------
  // ---------------------------------------------------------------
  // 雷达图
  radarOption: () => ({
    type: 'radar',
  }),
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // 旭日图
  sunburstOption: () => ({
    type: 'sunburst',
  }),
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // 箱形图
  boxplotOption: () => ({
    type: 'boxplot',
  }),
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // K线图
  candlestickOption: () => ({
    type: 'candlestick',
  }),
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // 热力图
  heatmapOption: () => ({
    type: 'heatmap',
  }),
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // sankey
  sankeyOption: () => ({
    type: 'sankey',
  }),
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // 漏斗图
  funnelOption: () => ({
    type: 'funnel',
  }),
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // 仪表盘
  gaugeOption: () => ({
    type: 'gauge',
    radius: '100%',
  }),
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // 柱状图
  barChart: (series?: BarSeriesOption[]) => {
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
  barChartToStack: (stack: string | string[], series?: BarSeriesOption[]) => {
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
  barChartToRealtimeSort: (series?: BarSeriesOption[]) => {
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
  barChartValueToX: (series?: BarSeriesOption[]) => {
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
  barChartToStackValueToX: (stack: string | string[], series?: BarSeriesOption[]) => {
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
  barChartToRealtimeSortValueToX: (series?: BarSeriesOption[]) => {
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

  // ---------------------------------------------------------------
  // 折线图
  lineChart: (series?: LineSeriesOption[]) => {
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
  lineChartToStack: (stack: string | string[], series?: LineSeriesOption[]) => {
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
  lineChartToArea: (areaStyle: AreaStyle | AreaStyle[], series?: LineSeriesOption[]) => {
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
  lineChartToSmooth: (series?: LineSeriesOption[]) => {
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
  lineChartToStep: (step: string | string[], series?: LineSeriesOption[]) => {
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
  lineChartValueToX: (series?: LineSeriesOption[]) => {
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
  lineChartToStackValueToX: (stack: string | string[], series?: LineSeriesOption[]) => {
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
  lineChartToAreaValueToX: (areaStyle: AreaStyle | AreaStyle[], series?: LineSeriesOption[]) => {
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
  lineChartToSmoothValueToX: (series?: LineSeriesOption[]) => {
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
  lineChartToStepValueToX: (step: string | string[], series?: LineSeriesOption[]) => {
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

  // ---------------------------------------------------------------
  // 饼图
  pieChart: (series?: PieSeriesOption[]) => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.pieOption()],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s) => merge(Options.pieOption(), s)),
    });
  },
  pieChartToRadius: (radius: Radius | Radius[], series?: PieSeriesOption[]) => {
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
  pieChartToRose: (roseType: RoseType | RoseType[], series?: PieSeriesOption[]) => {
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

  // ---------------------------------------------------------------
  // 散点图
  scatterChart: (series?: ScatterSeriesOption[]) => {
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
  scatterChartValueToX: (series?: ScatterSeriesOption[]) => {
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

  // ---------------------------------------------------------------
  // 雷达图
  radarChart: (series?: RadarSeriesOption[]) => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.radarOption()],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s) => merge(Options.radarOption(), s)),
    });
  },
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // 旭日图
  sunburstChart: (series?: SunburstSeriesOption[]) => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.sunburstOption()],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s) => merge(Options.sunburstOption(), s)),
    });
  },
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // 箱形图
  boxplotChart: (series?: BoxplotSeriesOption[]) => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.boxplotOption()],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s) => merge(Options.boxplotOption(), s)),
    });
  },
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // K线图
  candlestickChart: (series?: CandlestickSeriesOption[]) => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.candlestickOption()],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s) => merge(Options.candlestickOption(), s)),
    });
  },
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // 热力图
  heatmapChart: (series?: HeatmapSeriesOption[]) => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.heatmapOption()],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s) => merge(Options.heatmapOption(), s)),
    });
  },
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // sankey
  sankeyChart: (series?: SankeySeriesOption[]) => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.sankeyOption()],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s) => merge(Options.sankeyOption(), s)),
    });
  },
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // 漏斗图
  funnelChart: (series?: FunnelSeriesOption[]) => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.funnelOption()],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s) => merge(Options.funnelOption(), s)),
    });
  },
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // 仪表盘
  gaugeChart: (series?: GaugeSeriesOption[]) => {
    if (!series || !series?.length) {
      return merge(Options.baseOption(), {
        series: [Options.gaugeOption()],
      });
    }

    return merge(Options.baseOption(), {
      series: series.map((s) => merge(Options.gaugeOption(), s)),
    });
  },
  // ---------------------------------------------------------------
} as const;

export default Options;
