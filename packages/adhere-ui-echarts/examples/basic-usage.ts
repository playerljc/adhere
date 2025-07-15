/**
 * Adhere UI ECharts 基础使用示例
 * @description 展示如何使用优化后的图表配置工具
 */

import { options, colors, merge } from '../src/index';

// 示例数据
const salesData = [120, 200, 150, 80, 70, 110, 130];
const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月'];

// 1. 基础柱状图
const basicBarConfig = options.barChart([
  {
    name: '销量',
    data: salesData
  }
]);

// 2. 堆叠柱状图
const stackedBarConfig = options.barChartToStack('total', [
  {
    name: '线上销量',
    data: [120, 200, 150, 80, 70, 110, 130]
  },
  {
    name: '线下销量',
    data: [90, 150, 120, 60, 50, 80, 100]
  }
]);

// 3. 平滑折线图
const smoothLineConfig = options.lineChartToSmooth([
  {
    name: '趋势线',
    data: salesData
  }
]);

// 4. 区域面积图
const areaLineConfig = options.lineChartToArea(
  {
    color: colors.color1,
    opacity: 0.3,
    origin: 'auto',
    shadowBlur: 0,
    shadowColor: 'transparent',
    shadowOffsetX: 0,
    shadowOffsetY: 0
  },
  [
    {
      name: '面积图',
      data: salesData
    }
  ]
);

// 5. 饼图
const pieConfig = options.pieChart([
  {
    name: '市场份额',
    data: [
      { value: 335, name: '直接访问' },
      { value: 310, name: '邮件营销' },
      { value: 234, name: '联盟广告' },
      { value: 135, name: '视频广告' },
      { value: 1548, name: '搜索引擎' }
    ]
  }
]);

// 6. 圆环图
const donutConfig = options.pieChartToRadius('60%', [
  {
    name: '市场份额',
    data: [
      { value: 335, name: '直接访问' },
      { value: 310, name: '邮件营销' },
      { value: 234, name: '联盟广告' }
    ]
  }
]);

// 7. 使用渐变色
const gradientBarConfig = options.barChart([
  {
    name: '渐变柱状图',
    data: salesData,
    itemStyle: {
      color: colors.color33 // 使用预设渐变色
    }
  }
]);

// 8. 配置合并示例
const baseConfig = options.barChart([
  { name: '销量', data: salesData }
]);

const customConfig = {
  title: {
    text: '销售数据统计',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['销量'],
    top: '10%'
  },
  xAxis: {
    data: months,
    axisLabel: {
      rotate: 45
    }
  },
  yAxis: {
    name: '销量（件）'
  }
};

const finalConfig = merge(baseConfig, customConfig);

// 9. 散点图示例
const scatterConfig = options.scatterChart([
  {
    name: '散点数据',
    data: [
      [10, 20], [15, 25], [20, 30], [25, 35], [30, 40],
      [35, 45], [40, 50], [45, 55], [50, 60], [55, 65]
    ],
    symbolSize: 10,
    itemStyle: {
      color: colors.color15
    }
  }
]);

// 10. 雷达图示例
const radarConfig = options.radarChart([
  {
    name: '能力评估',
    data: [
      {
        value: [80, 90, 70, 85, 75],
        name: '张三'
      },
      {
        value: [70, 85, 80, 90, 65],
        name: '李四'
      }
    ]
  }
]);

// 导出所有配置供外部使用
export {
  basicBarConfig,
  stackedBarConfig,
  smoothLineConfig,
  areaLineConfig,
  pieConfig,
  donutConfig,
  gradientBarConfig,
  finalConfig,
  scatterConfig,
  radarConfig
};

// 使用示例
console.log('基础柱状图配置:', basicBarConfig);
console.log('堆叠柱状图配置:', stackedBarConfig);
console.log('平滑折线图配置:', smoothLineConfig);
console.log('区域面积图配置:', areaLineConfig);
console.log('饼图配置:', pieConfig);
console.log('圆环图配置:', donutConfig);
console.log('渐变柱状图配置:', gradientBarConfig);
console.log('最终合并配置:', finalConfig);
console.log('散点图配置:', scatterConfig);
console.log('雷达图配置:', radarConfig); 